/* ==========================================================================
   JEJAK PERANG: DETEKTIF SUMBER WW2
   Logika Aplikasi Utama, Routing, Animasi Interaktif, Partikel, & Kuis
   IFB-303 Teknik Multimedia - 2026
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. STATE MANAGEMENT
  // ------------------------------------------------------------------------
  const AppState = {
    currentPage: 'page-intro',
    activePhase: 1,
    activeCaseId: 1,
    caseRatings: {}, // { caseId: { sourceId: rating } }
    completedCases: new Set(),
    caseNotes: {},
    quizCurrentIndex: 0,
    quizScore: 0,
    quizAnswers: [],
    mapInstance: null,
    mapMarkers: [],
    hasStarted: false,

    load() {
      try {
        const saved = localStorage.getItem('jejak_perang_state');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.completedCases) this.completedCases = new Set(parsed.completedCases);
          if (parsed.caseRatings) this.caseRatings = parsed.caseRatings;
          if (parsed.caseNotes) this.caseNotes = parsed.caseNotes;
          if (typeof parsed.quizScore === 'number') this.quizScore = parsed.quizScore;
          if (parsed.quizAnswers) this.quizAnswers = parsed.quizAnswers;
        }
      } catch (e) {
        console.warn('Gagal memuat state dari storage:', e);
      }
    },

    save() {
      try {
        const data = {
          completedCases: Array.from(this.completedCases),
          caseRatings: this.caseRatings,
          caseNotes: this.caseNotes,
          quizScore: this.quizScore,
          quizAnswers: this.quizAnswers
        };
        localStorage.setItem('jejak_perang_state', JSON.stringify(data));
      } catch (e) {
        console.warn('Gagal menyimpan state:', e);
      }
    },

    reset() {
      this.completedCases.clear();
      this.caseRatings = {};
      this.caseNotes = {};
      this.quizCurrentIndex = 0;
      this.quizScore = 0;
      this.quizAnswers = [];
      localStorage.removeItem('jejak_perang_state');
      this.save();
    }
  };

  AppState.load();

  // ------------------------------------------------------------------------
  // 2. ROUTING & CLEAN PAGE TRANSITIONS (PREVENTS OVERLAPPING)
  // ------------------------------------------------------------------------
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-links a');
  const globalProgressBar = document.getElementById('global-progress-bar');
  const btnMute = document.getElementById('btn-mute');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mainNav = document.getElementById('main-nav');

  // Navbar Scroll Shadow
  window.addEventListener('scroll', () => {
    if (mainNav) {
      if (window.scrollY > 25) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    }
  });

  function showPage(pageId) {
    if (window.ArchiveAudio) window.ArchiveAudio.playClick();

    // Sembunyikan semua halaman secara eksplisit agar tidak saling timpa
    pages.forEach(p => {
      p.classList.remove('active');
      p.style.display = 'none';
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.style.display = 'flex';
      // Trigger browser reflow for CSS keyframe animation
      void targetPage.offsetWidth;
      targetPage.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    AppState.currentPage = pageId;

    // Update active nav links
    navLinks.forEach(link => {
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile nav drawer
    if (mobileNav) mobileNav.classList.remove('open');

    // Inisialisasi sesuai halaman target
    if (pageId === 'page-menu') {
      updateMenuProgress();
    } else if (pageId === 'page-jelajah') {
      renderTimeline(AppState.activePhase);
      initOrRefreshMap();
    } else if (pageId === 'page-detektif') {
      renderCaseSelector();
      renderCase(AppState.activeCaseId);
    } else if (pageId === 'page-kuis') {
      renderQuizQuestion();
    } else if (pageId === 'page-skor') {
      renderScorePage();
      triggerConfetti();
    }

    updateGlobalProgress();
  }

  // Bind Navigation Links
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.getAttribute('data-page');
      showPage(target);
    });
  });

  // Mobile nav toggling
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      if (window.ArchiveAudio) window.ArchiveAudio.playClick();
    });

    const backdrop = mobileNav.querySelector('.mobile-nav-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    }
  }

  // Audio Mute Button
  if (btnMute) {
    function updateMuteIcon() {
      const isMuted = window.ArchiveAudio ? window.ArchiveAudio.isMuted : false;
      btnMute.innerHTML = isMuted ? '🔇' : '🔊';
      btnMute.setAttribute('title', isMuted ? 'Nyalakan Suara' : 'Matikan Suara');
    }
    updateMuteIcon();

    btnMute.addEventListener('click', () => {
      if (window.ArchiveAudio) {
        window.ArchiveAudio.toggleMute();
        updateMuteIcon();
        showToast(window.ArchiveAudio.isMuted ? 'Suara dimatikan' : 'Suara diaktifkan');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 3. TOAST NOTIFICATIONS
  // ------------------------------------------------------------------------
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 15);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // ------------------------------------------------------------------------
  // 4. FLOATING DUST PARTICLES ANIMATION (HERO INTRO)
  // ------------------------------------------------------------------------
  function initHeroParticles() {
    const canvas = document.getElementById('hero-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particleCount = 45;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
        speedY: - (Math.random() * 0.4 + 0.15),
        speedX: (Math.random() - 0.5) * 0.3,
        pulse: Math.random() * Math.PI
      });
    }

    function animate() {
      // Hanya jalankan jika halaman intro aktif untuk menghemat daya
      if (AppState.currentPage === 'page-intro') {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
          p.y += p.speedY;
          p.x += p.speedX;
          p.pulse += 0.02;

          // Wrap around borders
          if (p.y < -10) p.y = height + 10;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.15;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 170, 95, ${Math.max(0.1, currentAlpha)})`;
          ctx.fill();
        });
      }
      requestAnimationFrame(animate);
    }
    animate();
  }
  initHeroParticles();

  // ------------------------------------------------------------------------
  // 5. GLOBAL PROGRESS CALCULATION
  // ------------------------------------------------------------------------
  function updateGlobalProgress() {
    const caseWeight = (AppState.completedCases.size / 5) * 50;
    const quizWeight = (AppState.quizScore / 100) * 50;
    const total = Math.min(100, Math.round(caseWeight + quizWeight));

    if (globalProgressBar) {
      globalProgressBar.style.width = `${total}%`;
    }
    return total;
  }

  // ------------------------------------------------------------------------
  // 6. INTRO & TYPEWRITER EFFECT
  // ------------------------------------------------------------------------
  const typewriterText = "Arsip ini berantakan. Ada saksi mata, laporan resmi, propaganda, dan tulisan sejarawan yang isinya saling bertolak belakang. Tugasmu: bukan sekadar menghafal tanggal, tetapi menjadi Detektif Sumber yang menguji kebenaran masa lalu.";
  const typewriterTarget = document.getElementById('hero-typewriter-text');
  let typeIndex = 0;
  let typeTimer = null;

  function runTypewriter() {
    if (!typewriterTarget) return;
    typewriterTarget.textContent = '';
    typeIndex = 0;

    function typeChar() {
      if (typeIndex < typewriterText.length) {
        typewriterTarget.textContent += typewriterText.charAt(typeIndex);
        if (typeIndex % 3 === 0 && window.ArchiveAudio) {
          window.ArchiveAudio.playTypewriter();
        }
        typeIndex++;
        typeTimer = setTimeout(typeChar, 32);
      }
    }
    typeChar();
  }

  if (typewriterTarget) {
    typewriterTarget.addEventListener('click', () => {
      if (typeTimer) clearTimeout(typeTimer);
      typewriterTarget.textContent = typewriterText;
    });
  }

  const btnStartMission = document.getElementById('btn-start-mission');
  if (btnStartMission) {
    btnStartMission.addEventListener('click', () => {
      AppState.hasStarted = true;
      if (window.ArchiveAudio) window.ArchiveAudio.playClick();
      showPage('page-menu');
    });
  }

  // ------------------------------------------------------------------------
  // 7. MAIN MENU PROGRESS
  // ------------------------------------------------------------------------
  function updateMenuProgress() {
    const statCases = document.getElementById('stat-cases-count');
    const statScore = document.getElementById('stat-quiz-score');
    const statGlobal = document.getElementById('stat-global-percent');

    const cardDetektifBar = document.getElementById('menu-detektif-bar');
    const cardKuisBar = document.getElementById('menu-kuis-bar');
    const cardJelajahBar = document.getElementById('menu-jelajah-bar');

    const completedCount = AppState.completedCases.size;
    const globalPercent = updateGlobalProgress();

    if (statCases) statCases.textContent = `${completedCount} / 5`;
    if (statScore) statScore.textContent = `${AppState.quizScore} Pts`;
    if (statGlobal) statGlobal.textContent = `${globalPercent}%`;

    if (cardDetektifBar) cardDetektifBar.style.width = `${(completedCount / 5) * 100}%`;
    if (cardKuisBar) cardKuisBar.style.width = `${AppState.quizScore}%`;
    if (cardJelajahBar) cardJelajahBar.style.width = '100%';
  }

  // ------------------------------------------------------------------------
  // 8. MODE JELAJAH: TIMELINE & ACCORDION EXPANSION
  // ------------------------------------------------------------------------
  const phaseTabsContainer = document.getElementById('phase-tabs');
  const phaseInfoContainer = document.getElementById('phase-info');
  const timelineListContainer = document.getElementById('timeline-list');

  function renderPhaseTabs() {
    if (!phaseTabsContainer) return;
    phaseTabsContainer.innerHTML = '';

    ARCHIVE_DATA.phases.forEach((ph) => {
      const btn = document.createElement('button');
      btn.className = `phase-tab ${ph.id === AppState.activePhase ? 'active' : ''}`;
      btn.innerHTML = `<span class="phase-num">${ph.id}</span> ${ph.title}`;
      btn.addEventListener('click', () => {
        AppState.activePhase = ph.id;
        if (window.ArchiveAudio) window.ArchiveAudio.playClick();
        renderPhaseTabs();
        renderTimeline(ph.id);
        filterMapByPhase(ph.id);
      });
      phaseTabsContainer.appendChild(btn);
    });
  }

  function renderTimeline(phaseId) {
    renderPhaseTabs();
    const phase = ARCHIVE_DATA.phases.find(p => p.id === phaseId);
    if (!phase) return;

    if (phaseInfoContainer) {
      phaseInfoContainer.innerHTML = `
        <div class="section-label">FASE ${phase.id} · ${phase.period}</div>
        <h3>${phase.title}</h3>
        <p>${phase.description}</p>
      `;
    }

    if (timelineListContainer) {
      timelineListContainer.innerHTML = '';
      phase.events.forEach((ev, idx) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
          <div class="timeline-dot"></div>
          <div class="timeline-card" data-event-id="${ev.id}">
            <div class="flex justify-between items-center" style="margin-bottom: 4px;">
              <span class="event-date">${ev.date}</span>
              <span class="stamp stamp-tan">${ev.tag}</span>
            </div>
            <h4>${ev.title}</h4>
            <p class="text-muted" style="margin-bottom: 6px;">📍 ${ev.location}</p>
            <p>${ev.summary}</p>
            <div class="detail-panel">
              <p>${ev.detail}</p>
              <div style="margin-top: 14px; display: flex; gap: 8px;">
                <button class="btn btn-ghost btn-sm btn-zoom-map" data-lat="${ev.coords[0]}" data-lng="${ev.coords[1]}" data-title="${ev.title}">
                  🗺️ Buka di Peta Teater
                </button>
              </div>
            </div>
            <div class="expand-indicator">
              <span class="arrow">▶</span> Baca Catatan Lengkap Arsip
            </div>
          </div>
        `;

        const card = item.querySelector('.timeline-card');
        card.addEventListener('click', (e) => {
          if (e.target.closest('.btn-zoom-map')) return;
          card.classList.toggle('expanded');
          if (window.ArchiveAudio) window.ArchiveAudio.playPaperFlip();
        });

        const btnZoom = item.querySelector('.btn-zoom-map');
        if (btnZoom) {
          btnZoom.addEventListener('click', (e) => {
            e.stopPropagation();
            const lat = parseFloat(btnZoom.getAttribute('data-lat'));
            const lng = parseFloat(btnZoom.getAttribute('data-lng'));
            if (AppState.mapInstance) {
              AppState.mapInstance.flyTo([lat, lng], 6, { duration: 1.5 });
              document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
            }
          });
        }

        timelineListContainer.appendChild(item);
        setTimeout(() => item.classList.add('revealed'), idx * 80 + 40);
      });
    }
  }

  // ------------------------------------------------------------------------
  // 9. MODE JELAJAH: PETA INTERAKTIF (LEAFLET)
  // ------------------------------------------------------------------------
  function initOrRefreshMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    if (!window.L) {
      mapElement.innerHTML = `
        <div style="padding: 40px; text-align: center; color: var(--tan);">
          <p>⚠️ Peta interaktif sedang memuat modul spasial...</p>
        </div>
      `;
      return;
    }

    if (!AppState.mapInstance) {
      AppState.mapInstance = L.map('map', {
        center: [30, 20],
        zoom: 2,
        minZoom: 2,
        maxZoom: 10
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO &copy; OpenStreetMap',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(AppState.mapInstance);

      renderMapFilterButtons();
      plotAllEventsOnMap();
    } else {
      setTimeout(() => AppState.mapInstance.invalidateSize(), 250);
    }
  }

  function renderMapFilterButtons() {
    const container = document.getElementById('map-filter-container');
    if (!container) return;
    container.innerHTML = `
      <button class="filter-btn active" data-filter="all">Semua Fase</button>
      <button class="filter-btn" data-filter="1">Fase 1: Jalan Menuju Perang</button>
      <button class="filter-btn" data-filter="2">Fase 2: Eropa</button>
      <button class="filter-btn" data-filter="3">Fase 3: Pasifik & Asia</button>
      <button class="filter-btn" data-filter="4">Fase 4: Kemanusiaan</button>
      <button class="filter-btn" data-filter="5">Fase 5: Pascaperang</button>
    `;

    container.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter');
        filterMapByPhase(filterVal === 'all' ? null : parseInt(filterVal));
        if (window.ArchiveAudio) window.ArchiveAudio.playClick();
      });
    });
  }

  function plotAllEventsOnMap() {
    if (!AppState.mapInstance || !window.L) return;

    AppState.mapMarkers.forEach(m => AppState.mapInstance.removeLayer(m));
    AppState.mapMarkers = [];

    ARCHIVE_DATA.phases.forEach(phase => {
      phase.events.forEach(ev => {
        const customIcon = L.divIcon({
          className: 'custom-map-pin',
          html: `<div style="background-color: #8A2A1F; color: #FAF6EE; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; border: 2px solid #FAF6EE; box-shadow: 0 2px 8px rgba(0,0,0,0.45); cursor: pointer; transition: transform 0.2s ease;">${phase.id}</div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
          popupAnchor: [0, -14]
        });

        const marker = L.marker(ev.coords, { icon: customIcon });
        marker.phaseId = phase.id;

        const popupContent = `
          <div style="font-family: 'Inter', sans-serif; max-width: 250px; color: #1C1A15; padding: 4px;">
            <div style="font-size: 10px; font-weight: 800; color: #8A2A1F; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 2px;">
              FASE ${phase.id} · ${ev.date}
            </div>
            <h4 style="font-family: 'Playfair Display', serif; font-size: 14px; margin-bottom: 4px; line-height: 1.3;">${ev.title}</h4>
            <p style="font-size: 11px; color: #6B5F48; margin-bottom: 6px;">📍 ${ev.location}</p>
            <p style="font-size: 12px; line-height: 1.45; margin-bottom: 6px;">${ev.summary}</p>
          </div>
        `;
        marker.bindPopup(popupContent);
        marker.addTo(AppState.mapInstance);
        AppState.mapMarkers.push(marker);
      });
    });
  }

  function filterMapByPhase(phaseId) {
    if (!AppState.mapInstance) return;
    AppState.mapMarkers.forEach(marker => {
      if (!phaseId || marker.phaseId === phaseId) {
        AppState.mapInstance.addLayer(marker);
      } else {
        AppState.mapInstance.removeLayer(marker);
      }
    });
  }

  // ------------------------------------------------------------------------
  // 10. MODE DETEKTIF SUMBER (INTI PROYEK)
  // ------------------------------------------------------------------------
  const caseSelectorContainer = document.getElementById('case-selector');
  const caseBriefContainer = document.getElementById('case-brief');
  const sourcesGridContainer = document.getElementById('sources-grid');
  const ratingSectionContainer = document.getElementById('rating-section');
  const verdictPanelContainer = document.getElementById('verdict-panel');

  function renderCaseSelector() {
    if (!caseSelectorContainer) return;
    caseSelectorContainer.innerHTML = '';

    ARCHIVE_DATA.cases.forEach((cs) => {
      const isDone = AppState.completedCases.has(cs.id);
      const isActive = cs.id === AppState.activeCaseId;

      const btn = document.createElement('button');
      btn.className = `case-btn ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`;
      btn.innerHTML = `
        <span class="check">✓</span>
        Kasus ${cs.id}
      `;
      btn.addEventListener('click', () => {
        AppState.activeCaseId = cs.id;
        if (window.ArchiveAudio) window.ArchiveAudio.playClick();
        renderCaseSelector();
        renderCase(cs.id);
      });
      caseSelectorContainer.appendChild(btn);
    });
  }

  function getCredibilityDetails(value) {
    if (value <= 25) {
      return { className: 'level-very-low', label: '⚠️ Propaganda / Sangat Bias' };
    } else if (value <= 50) {
      return { className: 'level-low', label: '⚡ Cenderung Bias / Perlu Diuji' };
    } else if (value <= 75) {
      return { className: 'level-mid', label: '⚖️ Cukup Berimbang' };
    } else {
      return { className: 'level-high', label: '🛡️ Sangat Kredibel & Kritis' };
    }
  }

  function renderCase(caseId) {
    const currentCase = ARCHIVE_DATA.cases.find(c => c.id === caseId);
    if (!currentCase) return;

    // Render Brief
    if (caseBriefContainer) {
      caseBriefContainer.innerHTML = `
        <div class="brief-icon">🔍</div>
        <div>
          <div class="section-label">${currentCase.badge}</div>
          <h3>${currentCase.title}</h3>
          <p>${currentCase.intro}</p>
          <div style="margin-top: 10px; font-weight: 600; color: var(--brick); font-size: 0.9rem;">
            Pertanyaan Kritis: "${currentCase.question}"
          </div>
        </div>
      `;
    }

    // Render Flip Cards for Sources
    if (sourcesGridContainer) {
      sourcesGridContainer.innerHTML = '';

      currentCase.sources.forEach((src) => {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'flip-card';
        cardWrapper.innerHTML = `
          <div class="flip-card-inner">
            <!-- DEPAN KARTU -->
            <div class="flip-card-front">
              <div>
                <span class="source-type ${src.type}">${src.type === 'primer' ? 'Sumber Primer' : 'Sumber Sekunder'}</span>
              </div>
              <div class="source-header">
                <div class="source-title">${src.title}</div>
                <div class="source-meta">📅 ${src.year} · 📍 ${src.location}</div>
                <div class="source-meta" style="font-weight: 600; color: var(--dark-brown);">✍️ ${src.author}</div>
              </div>
              <div class="source-quote">
                "${src.quote}"
              </div>
              <div class="source-claim">
                <strong>Klaim Utama:</strong> ${src.claim}
              </div>
              <div class="flip-hint">
                <span>🔄</span> Klik kartu untuk memeriksa konteks & bias penulis
              </div>
            </div>

            <!-- BELAKANG KARTU (METADATA ARSIP) -->
            <div class="flip-card-back">
              <div class="back-header">
                🔍 Identifikasi Penulis & Konteks Arsip
              </div>
              <div class="back-field">
                <div class="field-label">Konteks Pembuatan:</div>
                <div class="field-value">${src.context}</div>
              </div>
              <div class="back-field">
                <div class="field-label">Tujuan Penulis (Intent):</div>
                <div class="field-value">${src.intent}</div>
              </div>
              <div class="back-bias-note">
                <div class="field-label" style="color: var(--brick-light);">Analisis Bias:</div>
                ${src.bias}
              </div>
              <div class="flip-hint" style="color: var(--tan-light); margin-top: auto;">
                <span>🔄</span> Klik untuk membalik kembali ke kutipan
              </div>
            </div>
          </div>
        `;

        cardWrapper.addEventListener('click', () => {
          cardWrapper.classList.toggle('flipped');
          if (window.ArchiveAudio) window.ArchiveAudio.playPaperFlip();
        });

        // 3D Card Tilt Interaction on mouse move
        cardWrapper.addEventListener('mousemove', (e) => {
          if (cardWrapper.classList.contains('flipped')) return;
          const rect = cardWrapper.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotateX = (-y / (rect.height / 2)) * 6;
          const rotateY = (x / (rect.width / 2)) * 6;
          const inner = cardWrapper.querySelector('.flip-card-inner');
          if (inner) {
            inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          }
        });

        cardWrapper.addEventListener('mouseleave', () => {
          const inner = cardWrapper.querySelector('.flip-card-inner');
          if (inner && !cardWrapper.classList.contains('flipped')) {
            inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
          }
        });

        sourcesGridContainer.appendChild(cardWrapper);
      });
    }

    // Render Rating Sliders with Realtime Dynamic Feedback Badges
    if (ratingSectionContainer) {
      const savedRatings = AppState.caseRatings[caseId] || {};
      const savedNote = AppState.caseNotes[caseId] || '';

      ratingSectionContainer.innerHTML = `
        <h4>⚖️ Nilai Kredibilitas Setiap Sumber</h4>
        <p class="text-muted" style="margin-bottom: 20px; font-size: 0.88rem;">
          Geser slider (0% = Sangat Bias/Meragukan, 100% = Sangat Kredibel & Teruji Secara Kritis). Pertimbangkan siapa penulisnya, tujuan pembuatannya, dan tahun dokumen ditulis!
        </p>
        <div class="rating-grid" id="rating-sliders-container"></div>
        <div style="margin-top: 22px;">
          <label style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); display: block; margin-bottom: 6px;">
            Catatan Penalaran Detektif (Opsional):
          </label>
          <textarea class="reasoning-box" id="case-reasoning" placeholder="Tuliskan mengapa Anda menilai salah satu sumber lebih kredibel atau memiliki bias politik tertentu...">${savedNote}</textarea>
        </div>
        <div style="margin-top: 26px; text-align: center;">
          <button class="btn btn-primary btn-lg" id="btn-submit-verdict">
            Periksa & Analisis Arsip
          </button>
        </div>
      `;

      const slidersContainer = document.getElementById('rating-sliders-container');
      currentCase.sources.forEach(src => {
        const currentVal = savedRatings[src.id] !== undefined ? savedRatings[src.id] : 50;
        const credDetails = getCredibilityDetails(currentVal);

        const row = document.createElement('div');
        row.className = 'rating-item';
        row.innerHTML = `
          <div>
            <div class="rating-source-name">${src.title}</div>
            <div class="rating-source-meta">${src.author} (${src.year})</div>
            <div class="credibility-level-tag ${credDetails.className}" id="tag-${src.id}">
              ${credDetails.label}
            </div>
          </div>
          <div class="slider-value" id="val-${src.id}">${currentVal}%</div>
          <div class="credibility-slider">
            <label>Kredibilitas:</label>
            <input type="range" class="slider" min="0" max="100" value="${currentVal}" data-source-id="${src.id}">
          </div>
        `;

        const slider = row.querySelector('input[type="range"]');
        const valDisplay = row.querySelector('.slider-value');
        const tagDisplay = row.querySelector(`#tag-${src.id}`);

        slider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          valDisplay.textContent = `${val}%`;
          const updated = getCredibilityDetails(val);
          tagDisplay.className = `credibility-level-tag ${updated.className}`;
          tagDisplay.textContent = updated.label;

          if (window.ArchiveAudio) window.ArchiveAudio.playTick();
        });

        slidersContainer.appendChild(row);
      });

      // Submit Verdict Handler
      const btnSubmit = document.getElementById('btn-submit-verdict');
      btnSubmit.addEventListener('click', () => {
        submitCaseEvaluation(currentCase);
      });
    }

    if (verdictPanelContainer) {
      if (AppState.completedCases.has(caseId)) {
        showVerdictPanel(currentCase, false);
      } else {
        verdictPanelContainer.classList.remove('visible');
        verdictPanelContainer.style.display = 'none';
      }
    }
  }

  function submitCaseEvaluation(currentCase) {
    const sliders = ratingSectionContainer.querySelectorAll('input[type="range"]');
    const ratings = {};
    sliders.forEach(s => {
      ratings[s.getAttribute('data-source-id')] = parseInt(s.value);
    });

    const reasoning = document.getElementById('case-reasoning').value;

    AppState.caseRatings[currentCase.id] = ratings;
    AppState.caseNotes[currentCase.id] = reasoning;
    AppState.completedCases.add(currentCase.id);
    AppState.save();

    renderCaseSelector();
    showVerdictPanel(currentCase, true);
    updateGlobalProgress();

    if (window.ArchiveAudio) window.ArchiveAudio.playSolve();
    showToast(`Kasus ${currentCase.id} berhasil diteliti & tersimpan!`);
  }

  function showVerdictPanel(currentCase, animateScroll = true) {
    if (!verdictPanelContainer) return;

    const userRatings = AppState.caseRatings[currentCase.id] || {};
    const ideal = currentCase.idealScores;

    let totalDiff = 0;
    currentCase.sources.forEach(src => {
      const userVal = userRatings[src.id] !== undefined ? userRatings[src.id] : 50;
      const idealVal = ideal[src.id] || 75;
      totalDiff += Math.abs(userVal - idealVal);
    });

    const maxDiff = currentCase.sources.length * 100;
    const accuracy = Math.max(65, Math.round(100 - (totalDiff / maxDiff) * 60));

    let sourcesHtml = '';
    currentCase.sources.forEach(src => {
      const userVal = userRatings[src.id] !== undefined ? userRatings[src.id] : 50;
      const idealVal = ideal[src.id] || 75;
      let scoreClass = 'score-high';
      if (idealVal < 50) scoreClass = 'score-low';
      else if (idealVal < 80) scoreClass = 'score-mid';

      sourcesHtml += `
        <div class="verdict-source-item">
          <div class="source-score ${scoreClass}">${userVal}%</div>
          <div class="source-detail">
            <strong>${src.title}</strong>
            <span>Penilaian Anda: ${userVal}% · Rekomendasi Sejarawan: ${idealVal}%</span>
            <span>Alasan Kritis: ${src.bias}</span>
          </div>
        </div>
      `;
    });

    verdictPanelContainer.innerHTML = `
      <div class="verdict-header">
        <div class="verdict-icon">⚖️</div>
        <div>
          <div class="verdict-title">${currentCase.verdict.headline}</div>
          <div class="verdict-subtitle">Laporan Pengungkapan Arsiparis Senior</div>
        </div>
      </div>

      <div class="verdict-score-box">
        <div class="score-label">Skor Ketelitian Detektif Sumber</div>
        <div class="final-score">${accuracy} <span style="font-size: 1rem; color: var(--tan);">/ 100</span></div>
        <div style="font-size: 0.82rem; color: var(--tan); margin-top: 4px;">Penilaian Kritis Berhasil Direkam ke Balai Arsip</div>
      </div>

      <div class="verdict-explanation">
        ${currentCase.verdict.explanation}
      </div>

      <div class="verdict-sources">
        ${sourcesHtml}
      </div>

      <div class="verdict-message">
        "${currentCase.verdict.lesson}"
      </div>

      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 24px;">
        <button class="btn btn-secondary" id="btn-next-case">
          ${currentCase.id < 5 ? 'Lanjut ke Kasus Berikutnya ▶' : '🏆 Selesai Semua Kasus! Lihat Skor Akhir'}
        </button>
        <button class="btn btn-ghost" id="btn-re-evaluate">
          Ulangi Penilaian Kasus Ini
        </button>
      </div>
    `;

    verdictPanelContainer.style.display = 'block';
    verdictPanelContainer.classList.add('visible');

    if (animateScroll) {
      setTimeout(() => {
        verdictPanelContainer.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    const btnNext = document.getElementById('btn-next-case');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (currentCase.id < 5) {
          AppState.activeCaseId = currentCase.id + 1;
          renderCaseSelector();
          renderCase(AppState.activeCaseId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          showPage('page-skor');
        }
      });
    }

    const btnReEval = document.getElementById('btn-re-evaluate');
    if (btnReEval) {
      btnReEval.addEventListener('click', () => {
        verdictPanelContainer.classList.remove('visible');
        verdictPanelContainer.style.display = 'none';
        ratingSectionContainer.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // ------------------------------------------------------------------------
  // 11. MODE KUIS (PILIHAN GANDA & FEEDBACK ANIMASI)
  // ------------------------------------------------------------------------
  const quizCounterEl = document.getElementById('quiz-counter');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const quizTextEl = document.getElementById('quiz-text');
  const quizImageTitle = document.getElementById('quiz-image-title');
  const quizAnswersContainer = document.getElementById('quiz-answers');
  const quizFeedbackBanner = document.getElementById('quiz-feedback');
  const btnNextQuestion = document.getElementById('btn-next-question');

  function renderQuizQuestion() {
    const questions = ARCHIVE_DATA.quizzes;
    const currentQ = questions[AppState.quizCurrentIndex];
    if (!currentQ) {
      showPage('page-skor');
      return;
    }

    const progressPercent = ((AppState.quizCurrentIndex) / questions.length) * 100;
    if (quizProgressFill) quizProgressFill.style.width = `${progressPercent}%`;
    if (quizCounterEl) quizCounterEl.textContent = `SOAL ${AppState.quizCurrentIndex + 1} DARI ${questions.length} · FASE ${currentQ.phase}`;
    if (quizTextEl) quizTextEl.textContent = currentQ.question;
    if (quizImageTitle) quizImageTitle.textContent = `📷 Dokumen Arsip: ${currentQ.imageTitle}`;

    if (quizFeedbackBanner) {
      quizFeedbackBanner.className = 'feedback-banner';
      quizFeedbackBanner.style.display = 'none';
      quizFeedbackBanner.textContent = '';
    }

    if (btnNextQuestion) {
      btnNextQuestion.style.display = 'none';
      btnNextQuestion.textContent = AppState.quizCurrentIndex === questions.length - 1 ? 'Selesai & Lihat Skor Akhir' : 'Pertanyaan Selanjutnya ▶';
    }

    if (quizAnswersContainer) {
      quizAnswersContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      currentQ.options.forEach((opt, optIndex) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `
          <div class="answer-letter">${letters[optIndex]}</div>
          <div style="flex: 1;">${opt}</div>
        `;

        btn.addEventListener('click', () => {
          handleQuizAnswer(currentQ, optIndex, btn);
        });

        quizAnswersContainer.appendChild(btn);
      });
    }
  }

  function handleQuizAnswer(currentQ, selectedIndex, selectedBtn) {
    const buttons = quizAnswersContainer.querySelectorAll('.answer-btn');
    buttons.forEach(b => b.classList.add('locked'));

    const isCorrect = selectedIndex === currentQ.correctIndex;

    if (isCorrect) {
      selectedBtn.classList.add('correct');
      AppState.quizScore += 10;
      AppState.quizAnswers.push({ qId: currentQ.id, correct: true });
      if (window.ArchiveAudio) window.ArchiveAudio.playSuccess();

      if (quizFeedbackBanner) {
        quizFeedbackBanner.className = 'feedback-banner correct visible';
        quizFeedbackBanner.innerHTML = `<strong>Tepat Sekali!</strong> ${currentQ.explanation}`;
      }
    } else {
      selectedBtn.classList.add('incorrect');
      if (buttons[currentQ.correctIndex]) {
        buttons[currentQ.correctIndex].classList.add('correct');
      }
      AppState.quizAnswers.push({ qId: currentQ.id, correct: false });
      if (window.ArchiveAudio) window.ArchiveAudio.playWrong();

      if (quizFeedbackBanner) {
        quizFeedbackBanner.className = 'feedback-banner incorrect visible';
        quizFeedbackBanner.innerHTML = `<strong>Kurang Tepat.</strong> ${currentQ.explanation}`;
      }
    }

    AppState.save();
    updateGlobalProgress();

    if (btnNextQuestion) {
      btnNextQuestion.style.display = 'inline-flex';
    }
  }

  if (btnNextQuestion) {
    btnNextQuestion.addEventListener('click', () => {
      AppState.quizCurrentIndex++;
      if (AppState.quizCurrentIndex < ARCHIVE_DATA.quizzes.length) {
        renderQuizQuestion();
      } else {
        showPage('page-skor');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 12. MODE SKOR & LENCANA DENGAN ANIMASI HITUNG
  // ------------------------------------------------------------------------
  function renderScorePage() {
    const badgeRing = document.getElementById('badge-ring');
    const badgeLabel = document.getElementById('badge-label');
    const finalScoreValue = document.getElementById('final-total-score');
    const scoreCasesVal = document.getElementById('score-cases-val');
    const scoreQuizVal = document.getElementById('score-quiz-val');
    const recommendationText = document.getElementById('score-recommendation-text');

    const completedCasesCount = AppState.completedCases.size;
    const quizPts = AppState.quizScore;
    const targetPercent = updateGlobalProgress();

    if (scoreCasesVal) scoreCasesVal.textContent = `${completedCasesCount} dari 5 Kasus Selesai (${completedCasesCount * 20} Poin)`;
    if (scoreQuizVal) scoreQuizVal.textContent = `${quizPts} Poin (dari 100)`;

    // Animasi Hitung Angka Total Skor
    if (finalScoreValue) {
      let currentVal = 0;
      const stepDuration = 1200 / Math.max(1, targetPercent);
      const counterTimer = setInterval(() => {
        currentVal++;
        finalScoreValue.textContent = currentVal;
        if (currentVal >= targetPercent) {
          clearInterval(counterTimer);
          finalScoreValue.textContent = targetPercent;
        }
      }, stepDuration);
    }

    // Tentukan Lencana Kehormatan
    let badgeText = "Peneliti Arsip Pratama";
    let badgeIcon = "📜";

    if (targetPercent >= 85) {
      badgeText = "Arsiparis Utama WW2";
      badgeIcon = "🎖️";
    } else if (targetPercent >= 60) {
      badgeText = "Detektif Sumber Mahir";
      badgeIcon = "🔍";
    }

    if (badgeLabel) badgeLabel.textContent = badgeText;
    if (badgeRing) {
      badgeRing.innerHTML = `
        <span style="font-size: 3rem;">${badgeIcon}</span>
        <span class="badge-label">${badgeText}</span>
      `;
    }

    // Rekomendasi Personal
    if (recommendationText) {
      const unfinishedPhases = [];
      for (let i = 1; i <= 5; i++) {
        if (!AppState.completedCases.has(i)) {
          unfinishedPhases.push(`Fase ${i}`);
        }
      }

      if (unfinishedPhases.length > 0) {
        recommendationText.innerHTML = `
          Anda masih memiliki berkas yang belum diselidiki di: <strong>${unfinishedPhases.join(', ')}</strong>. Buka kembali mode Detektif Sumber untuk melengkapi investigasi arsip Anda!
        `;
      } else if (quizPts < 80) {
        recommendationText.innerHTML = `
          Semua kasus detektif sudah Anda selesaikan! Namun skor kuis literasi Anda (${quizPts}/100) masih dapat ditingkatkan. Pelajari kembali catatan di Mode Jelajah untuk memperdalam konteks sejarah.
        `;
      } else {
        recommendationText.innerHTML = `
          Luar biasa! Anda telah menguasai keahlian membaca sumber sejarah secara kritis. Anda tidak hanya mengingat peristiwa, tetapi mampu membedakan propaganda, mengenali bias pengarang, dan memahami perspektif yang berbeda.
        `;
      }
    }
  }

  // Efek Perayaan Confetti di Halaman Skor
  function triggerConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.inset = '0';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '4500';
    document.body.appendChild(confettiContainer);

    const colors = ['#8A2A1F', '#D4AA5F', '#C4B08E', '#FAF6EE'];
    for (let i = 0; i < 40; i++) {
      const piece = document.createElement('div');
      piece.style.position = 'absolute';
      piece.style.width = `${Math.random() * 8 + 6}px`;
      piece.style.height = `${Math.random() * 12 + 6}px`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.top = '-20px';
      piece.style.opacity = '0.9';
      piece.style.borderRadius = '2px';
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;

      const fallDuration = Math.random() * 2.5 + 2;
      piece.style.transition = `top ${fallDuration}s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${fallDuration}s ease`;

      confettiContainer.appendChild(piece);

      setTimeout(() => {
        piece.style.top = '105vh';
        piece.style.transform = `rotate(${Math.random() * 720}deg) translateX(${Math.random() * 60 - 30}px)`;
      }, 20);
    }

    setTimeout(() => confettiContainer.remove(), 5000);
  }

  // Tombol Ulangi Misi
  const btnRestartMission = document.getElementById('btn-restart-mission');
  if (btnRestartMission) {
    btnRestartMission.addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin mengulang seluruh misi dari awal? Data investigasi Anda akan direset.')) {
        AppState.reset();
        showPage('page-menu');
        showToast('Misi telah direset. Selamat bertugas kembali!');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 13. STARTUP INITIALIZATION
  // ------------------------------------------------------------------------
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        runTypewriter();
      }, 500);
    }, 400);
  } else {
    runTypewriter();
  }

  renderPhaseTabs();
  updateGlobalProgress();
});
