/* ==========================================================================
   JEJAK PERANG: DETEKTIF SUMBER WW2
   Basis Data Sejarah, Kasus Detektif, dan Kuis Evaluasi
   IFB-303 Teknik Multimedia - 2026
   ========================================================================== */

const ARCHIVE_DATA = {
  // ------------------------------------------------------------------------
  // LIMA FASE SEJARAH (MODE JELAJAH)
  // ------------------------------------------------------------------------
  phases: [
    {
      id: 1,
      title: "Jalan Menuju Perang",
      period: "1919 – 1939",
      summary: "Runtuhnya tatanan perdamaian Perjanjian Versailles, kebangkitan fasisme di Jerman & Italia, serta militerisme Jepang di Asia Timur.",
      description: "Setelah Perang Dunia I berakhir, kepahitan ekonomi dan klausul keras Perjanjian Versailles memicu ketidakpuasan mendalam di Jerman. Sementara itu, krisis ekonomi global Depresi Besar (1929) membuka jalan bagi Adolf Hitler di Jerman dan rezim militeris di Jepang untuk mengekspansi wilayah demi 'ruang hidup' (Lebensraum). Liga Bangsa-Bangsa gagal menghentikan agresi ini.",
      events: [
        {
          id: "e1-1",
          date: "28 Juni 1919",
          title: "Perjanjian Versailles Ditandatangani",
          location: "Versailles, Prancis",
          coords: [48.8049, 2.1204],
          summary: "Jerman dipaksa membayar ganti rugi perang besar dan kehilangan wilayah, menanam benih dendam nasional.",
          detail: "Pasal 231 (Klausul Kesalahan Perang) memaksa Jerman menanggung tanggung jawab penuh atas PD I. Pembatasan militer ketat dan krisis hiperinflasi 1923 melahirkan narasi 'tikaman dari belakang' (Dolchstoßlegende) yang kemudian dimanfaatkan Partai Nazi.",
          tag: "Politik & Diplomasi"
        },
        {
          id: "e1-2",
          date: "18 September 1931",
          title: "Insiden Mukden: Invasi Jepang ke Manchuria",
          location: "Shenyang (Mukden), Tiongkok",
          coords: [41.8057, 123.4315],
          summary: "Tentara Kwantung merekayasa ledakan rel kereta api sebagai dalih menganeksasi wilayah kaya sumber daya Tiongkok.",
          detail: "Banyak sejarawan Asia menganggap peristiwa ini sebagai benih awal agresi militer di Asia. Jepang mendirikan negara boneka Manchukuo dan keluar dari Liga Bangsa-Bangsa setelah Laporan Lytton mengecam aksi mereka.",
          tag: "Ekspansi Asia"
        },
        {
          id: "e1-3",
          date: "7 Juli 1937",
          title: "Insiden Jembatan Marco Polo",
          location: "Beijing, Tiongkok",
          coords: [39.8492, 116.2198],
          summary: "Baku tembak antara pasukan Jepang dan Tiongkok memicu Perang Tiongkok-Jepang Kedua skala penuh.",
          detail: "Perang ini menelan belasan juta jiwa rakyat Tiongkok. Pertempuran sengit di Shanghai dan Pembantaian Nanjing menyusul dalam beberapa bulan kemudian. Bagi masyarakat Tiongkok, inilah awal sebenarnya dari Perang Dunia Kedua.",
          tag: "Titik Balik Asia"
        },
        {
          id: "e1-4",
          date: "29–30 September 1938",
          title: "Perjanjian Munich & Kebijakan 'Appeasement'",
          location: "Munich, Jerman",
          coords: [48.1351, 11.5820],
          summary: "Inggris dan Prancis mengizinkan Hitler menganeksasi Sudetenland (Cekoslowakia) demi harapan damai semu.",
          detail: "Perdana Menteri Inggris Neville Chamberlain mengklaim telah membawa 'perdamaian untuk zaman kita'. Namun kebijakan penenangan ini justru meyakinkan Hitler bahwa negara Barat lemah dan tidak berani berperang.",
          tag: "Diplomasi Eropah"
        },
        {
          id: "e1-5",
          date: "23 Agustus 1939",
          title: "Pakta Non-Agresi Molotov–Ribbentrop",
          location: "Moskwa, Uni Soviet",
          coords: [55.7558, 37.6173],
          summary: "Jerman Nazi dan Uni Soviet menandatangani perjanjian damai rahasia untuk membagi Polandia dan Baltik.",
          detail: "Dunia tercengang melihat dua musuh ideologis (Fasisme dan Komunisme) bergandengan tangan. Pakta ini memberi lampu hijau bagi Hitler menyerang Polandia tanpa takut menghadapi perang di dua front sekaligus.",
          tag: "Pakta Rahasia"
        }
      ]
    },
    {
      id: 2,
      title: "Perang di Eropa",
      period: "1939 – 1945",
      summary: "Blitzkrieg Jerman melibas Eropa Barat, invasi Uni Soviet (Operasi Barbarossa), dan pertempuran brutal Front Timur.",
      description: "Pada 1 September 1939, Jerman menyerbu Polandia dengan strategi kilat (Blitzkrieg). Inggris dan Prancis menyatakan perang dua hari kemudian. Dalam tempo singkat, Belanda, Belgia, dan Prancis takluk. Titik balik utama terjadi saat Jerman gagal menundukkan Uni Soviet di Pertempuran Stalingrad (1942–1943) serta pendaratan Sekutu di Normandia (D-Day 1944).",
      events: [
        {
          id: "e2-1",
          date: "1 September 1939",
          title: "Invasi Jerman ke Polandia",
          location: "Wieluń & Danzig, Polandia",
          coords: [51.2206, 18.5702],
          summary: "Jerman melancarkan serangan udara dan tank terkoordinasi, menandai resminya pecah PD II di Eropa.",
          detail: "Kombinasi divisi lapis baja (Panzer), infanteri bermotor, dan dukungan udara dekat Luftwaffe melumpuhkan pertahanan Polandia. Pada 17 September, Uni Soviet menyerbu dari timur sesuai kesepakatan rahasia.",
          tag: "Blitzkrieg"
        },
        {
          id: "e2-2",
          date: "26 Mei – 4 Juni 1940",
          title: "Evakuasi Pasukan Sekutu di Dunkirk (Operasi Dynamo)",
          location: "Dunkirk, Prancis",
          coords: [51.0343, 2.3768],
          summary: "Armada ratusan kapal kecil nelayan dan kapal perang Inggris mengevakuasi lebih dari 338.000 tentara.",
          detail: "Meskipun merupakan penarikan mundur besar-besaran akibat kekalahan Prancis, evakuasi ini menyelamatkan inti kekuatan tentara Inggris yang nantinya menjadi fondasi perlawanan Sekutu.",
          tag: "Evakuasi Bersejarah"
        },
        {
          id: "e2-3",
          date: "22 Juni 1941",
          title: "Operasi Barbarossa: Invasi ke Uni Soviet",
          location: "Brest-Litovsk, Perbatasan Soviet",
          coords: [52.0976, 23.7341],
          summary: "Invasi militer darat terbesar dalam sejarah umat manusia dengan lebih dari 3,8 juta tentara Poros.",
          detail: "Hitler melanggar pakta dengan Stalin untuk memusnahkan ideologi Komunisme dan merebut ladang minyak Kaukasus serta lumbung gandum Ukraina. Front Timur menjadi palagan pertempuran paling mematikan dalam sejarah.",
          tag: "Front Timur"
        },
        {
          id: "e2-4",
          date: "Agustus 1942 – Februari 1943",
          title: "Pertempuran Stalingrad",
          location: "Volgograd (Stalingrad), Rusia",
          coords: [48.7080, 44.5133],
          summary: "Tentara Merah Soviet mengurung dan menghancurkan Angkatan Darat Keenam Jerman dalam pertempuran kota berdarah.",
          detail: "Menelan hampir 2 juta korban dari kedua belah pihak. Kekalahan di Stalingrad mematahkan reputasi tak terkalahkan tentara Jerman dan menandai permulaan gerak mundur pasukan Poros di Eropa Timur.",
          tag: "Titik Balik Utama"
        },
        {
          id: "e2-5",
          date: "6 Juni 1944",
          title: "D-Day: Pendaratan Sekutu di Normandia (Operasi Overlord)",
          location: "Normandia, Prancis",
          coords: [49.3697, -0.8711],
          summary: "Operasi amfibi gabungan terbesar membuka front kedua di Eropa Barat untuk membebaskan Prancis.",
          detail: "Pasukan AS, Inggris, Kanada, dan sekutunya mendarat di lima pantai (Utah, Omaha, Gold, Juno, Sword) di bawah hujan peluru pertahanan Dinding Atlantik Jerman, membuka rute menuju jantung Berlin.",
          tag: "Pembebasan Eropa"
        }
      ]
    },
    {
      id: 3,
      title: "Perang Pasifik & Asia",
      period: "1941 – 1945",
      summary: "Serangan Pearl Harbor, ekspansi kilat Kekaisaran Jepang, dan masa kelam Pendudukan Jepang di Kepulauan Nusantara (Indonesia).",
      description: "Untuk mengamankan pasokan minyak bumi setelah embargo AS, Jepang melancarkan serangan mendadak ke Pearl Harbor pada 7 Desember 1941. Dalam hitungan bulan, Jepang menguasai Asia Tenggara termasuk Hindia Belanda (Indonesia). Semboyan propaganda 'Tiga A' berganti menjadi masa kerja paksa (Romusha), eksploitasi pangan, dan represi militer hingga kapitulasi 1945.",
      events: [
        {
          id: "e3-1",
          date: "7 Desember 1941",
          title: "Serangan Mendadak ke Pearl Harbor",
          location: "Oahu, Hawaii, AS",
          coords: [21.3649, -157.9496],
          summary: "Armada kapal induk Jepang melumpuhkan armada kapal tempur AS di Pasifik, menyeret AS ke kancah perang.",
          detail: "Presiden Franklin D. Roosevelt menyebut hari itu sebagai 'a date which will live in infamy'. Keesokan harinya, Kongres AS resmi mendeklarasikan perang terhadap Kekaisaran Jepang.",
          tag: "Perang Pasifik"
        },
        {
          id: "e3-2",
          date: "8 Maret 1942",
          title: "Kapitulasi Kalijati: Hindia Belanda Takluk ke Jepang",
          location: "Kalijati, Subang, Jawa Barat, Indonesia",
          coords: [-6.5367, 107.6747],
          summary: "Pemerintah Hindia Belanda menyerah tanpa syarat kepada Letnan Jenderal Hitoshi Imamura di Kalijati.",
          detail: "Peristiwa ini mengakhiri lebih dari 3 abad kekuasaan kolonial Belanda di Indonesia. Pasukan Jepang awalnya disambut sebagai 'Saudara Tua' yang membebaskan bangsa Asia dari penjajahan barat.",
          tag: "Sejarah Indonesia"
        },
        {
          id: "e3-3",
          date: "4–7 Juni 1942",
          title: "Pertempuran Laut Midway",
          location: "Kepulauan Midway, Samudra Pasifik",
          coords: [28.2072, -177.3735],
          summary: "Intelijen sandi AS berhasil mengungkap rencana Jepang; 4 kapal induk armada Jepang tenggelam dalam 4 hari.",
          detail: "Kekalahan ini menjadi titik balik krusial yang menghentikan inisiatif ofensif armada laut Jepang di Pasifik dan memaksa mereka beralih ke strategi bertahan pulau ke pulau.",
          tag: "Titik Balik Pasifik"
        },
        {
          id: "e3-4",
          date: "1943 – 1945",
          title: "Tragedi Kerja Paksa Romusha di Indonesia",
          location: "Jawa, Sumatera, hingga Burma",
          coords: [-0.9471, 100.4172],
          summary: "Ratusan ribu warga Indonesia dimobilisasi secara paksa untuk proyek militer, termasuk rel kereta maut Muaro-Pekanbaru.",
          detail: "Koran propaganda kala itu menyebut mereka sebagai 'Pahlawan Pekerja'. Pada kenyataannya, sebagian besar pekerja mengalami kelaparan ekstrem, penyakit tropis tanpa obat, dan puluhan ribu tidak pernah kembali ke kampung halaman.",
          tag: "Eksploitasi Kolonial"
        },
        {
          id: "e3-5",
          date: "14 Februari 1945",
          title: "Pemberontakan PETA di Blitar",
          location: "Blitar, Jawa Timur, Indonesia",
          coords: [-8.0983, 112.1681],
          summary: "Pasukan Pembela Tanah Air (PETA) yang dipimpin Supriyadi memberontak melawan kekejaman militer Jepang.",
          detail: "Dipicu kemarahan atas penderitaan rakyat akibat Romusha dan perampasan padi. Walau pemberontakan berhasil dipadamkan dan perwiranya dieksekusi, peristiwa ini mengobarkan semangat kemerdekaan Indonesia.",
          tag: "Perlawanan Indonesia"
        }
      ]
    },
    {
      id: 4,
      title: "Dampak Kemanusiaan",
      period: "1939 – 1945",
      summary: "Genosida Holocaust, pemusnahan etnis, kejahatan perang, pengungsian massal, dan bencana kelaparan warga sipil.",
      description: "Perang Dunia II adalah konflik paling berdarah dalam sejarah kemanusiaan, di mana jumlah korban warga sipil jauh melampaui korban personel militer. Mesin industri modern digunakan untuk pemusnahan sistematis 6 juta orang Yahudi dan jutaan korban lain di kamp konsentrasi, sementara bombardir bom atom dan perang total meratakan kota-kota dari London, Tokyo, hingga Warsawa.",
      events: [
        {
          id: "e4-1",
          date: "20 Januari 1942",
          title: "Konferensi Wannsee & 'Solusi Akhir'",
          location: "Danau Wannsee, Berlin, Jerman",
          coords: [52.4278, 13.1678],
          summary: "Pejabat tinggi Nazi menyusun rencana administratif dan logistik pemusnahan seluruh populasi Yahudi Eropa.",
          detail: "Konferensi berdurasi 90 menit yang dipimpin Reinhard Heydrich ini mengorganisasi pembunuhan massal berskala industri melalui kamp-kamp pemusnahan gas beracun (seperti Auschwitz-Birkenau, Treblinka, dan Sobibor).",
          tag: "Holocaust"
        },
        {
          id: "e4-2",
          date: "1940 – 1945",
          title: "Kamp Konsentrasi & Pemusnahan Auschwitz-Birkenau",
          location: "Oświęcim, Polandia",
          coords: [50.0264, 19.2040],
          summary: "Lebih dari 1,1 juta orang dibunuh secara terorganisasi di dalam kompleks kamp maut terbesar milik Nazi.",
          detail: "Para tahanan yang tiba diseleksi: mereka yang dianggap tidak layak kerja langsung dikirim ke kamar gas Cyclone B. Kamp ini dibebaskan oleh Tentara Merah Soviet pada 27 Januari 1945.",
          tag: "Kejahatan Kemanusiaan"
        },
        {
          id: "e4-3",
          date: "13–15 Februari 1945",
          title: "Pengeboman Kota Dresden oleh Sekutu",
          location: "Dresden, Jerman",
          coords: [51.0504, 13.7373],
          summary: "Badai api yang dipicu ribuan ton bom Sekutu menewaskan sekitar 25.000 warga dan memicu debat etika perang.",
          detail: "Meskipun Sekutu berargumen Dresden adalah simpul kereta api militer penting, banyaknya korban sipil dan hancurnya warisan budaya kota tua memicu perdebatan panjang tentang batas legalitas perang total.",
          tag: "Perang Udara"
        },
        {
          id: "e4-4",
          date: "1943 – 1944",
          title: "Bencana Kelaparan Bengal",
          location: "Bengal, India (Kekuasaan Inggris)",
          coords: [22.9868, 87.8550],
          summary: "Kebijakan perang, pengalihan beras, dan blokade menewaskan sekitar 2 hingga 3 juta warga sipil India.",
          detail: "Setelah Jepang merebut Burma (pemasok beras utama), pemerintah kolonial Inggris menerapkan kebijakan bumi hangus kapal dan cadangan pangan di Bengal. Winston Churchill menuai kritik tajam atas penanganan bencana ini.",
          tag: "Bencana Kelaparan"
        },
        {
          id: "e4-5",
          date: "1944 – 1945",
          title: "Krisis Pengungsi Terbesar dalam Sejarah",
          location: "Seluruh Eropa & Asia",
          coords: [52.5200, 13.4050],
          summary: "Lebih dari 40 juta orang kehilangan tempat tinggal (Displaced Persons) akibat pergeseran batas negara dan kekacauan perang.",
          detail: "Jutaan orang terpaksa berjalan kaki melintasi perbatasan musim dingin yang membeku tanpa dokumen, tempat tinggal, atau makanan. Kondisi ini mendorong lahirnya Konvensi Pengungsi Jenewa dan badan PBB UNRRA.",
          tag: "Pengungsian Massal"
        }
      ]
    },
    {
      id: 5,
      title: "Akhir Perang & Pascaperang",
      period: "1945 – 1950+",
      summary: "Jatuhnya Berlin, bom atom di Jepang, proklamasi kemerdekaan bangsa Asia, serta lahirnya tatanan PBB dan Perang Dingin.",
      description: "Pada Mei 1945, Jerman menyerah tanpa syarat setelah Hitler bunuh diri di bunkernya. Di Pasifik, pemboman atom di Hiroshima dan Nagasaki memaksa Jepang menyerah pada Agustus 1945. Kekosongan kekuasaan ini segera dimanfaatkan oleh bangsa-bangsa di Asia—termasuk Indonesia pada 17 Agustus 1945—untuk memproklamasikan kemerdekaan, di tengah munculnya rivalitas baru antara AS dan Uni Soviet.",
      events: [
        {
          id: "e5-1",
          date: "8 Mei 1945",
          title: "Hari Kemenangan di Eropa (V-E Day)",
          location: "Berlin, Jerman / Reims, Prancis",
          coords: [52.5163, 13.3777],
          summary: "Dokumen kapitulasi militer Jerman tanpa syarat ditandatangani, mengakhiri pertempuran di palagan Eropa.",
          detail: "Setelah pertempuran Berlin yang meluluhlantakkan kota dan kematian Adolf Hitler pada 30 April, Marsekal Wilhelm Keitel menandatangani penyerahan kepada komandan Sekutu dan Uni Soviet.",
          tag: "Kapitulasi Poros"
        },
        {
          id: "e5-2",
          date: "6 & 9 Agustus 1945",
          title: "Bom Atom di Hiroshima dan Nagasaki",
          location: "Hiroshima & Nagasaki, Jepang",
          coords: [34.3853, 132.4553],
          summary: "AS menjatuhkan bom atom 'Little Boy' dan 'Fat Man', menewaskan lebih dari 150.000 orang seketika.",
          detail: "Senjata nuklir pertama yang digunakan dalam konflik bersenjata ini membawa kehancuran radiasi yang mengerikan, mendorong Kaisar Hirohito menyampaikan dekrit siaran radio menyerah tanpa syarat pada 15 Agustus 1945.",
          tag: "Era Nuklir"
        },
        {
          id: "e5-3",
          date: "17 Agustus 1945",
          title: "Proklamasi Kemerdekaan Indonesia",
          location: "Jakarta, Indonesia (Jalan Pegangsaan Timur 56)",
          coords: [-6.2023, 106.8488],
          summary: "Memanfaatkan 'vacuum of power' pasca menyerahnya Jepang, Soekarno dan Hatta memproklamasikan kemerdekaan RI.",
          detail: "Para pemuda mendesak para tokoh tua untuk tidak menunggu janji kemerdekaan dari pihak Jepang. Kemerdekaan ini menjadi babak awal Perang Kemerdekaan Indonesia melawan upaya Belanda menjajah kembali.",
          tag: "Kemerdekaan RI"
        },
        {
          id: "e5-4",
          date: "24 Oktober 1945",
          title: "Piagam Perserikatan Bangsa-Bangsa (PBB) Berlaku",
          location: "San Francisco, AS",
          coords: [37.7749, -122.4194],
          summary: "50 negara meratifikasi Piagam PBB untuk mencegah terulangnya perang dunia di masa depan.",
          detail: "Menggantikan Liga Bangsa-Bangsa yang dianggap mandul. PBB mendirikan Dewan Keamanan dengan hak veto bagi 5 kekuatan pemenang (AS, Uni Soviet, Inggris, Prancis, Tiongkok) serta Deklarasi Universal HAM 1948.",
          tag: "Tatanan Global"
        },
        {
          id: "e5-5",
          date: "1945 – 1946",
          title: "Pengadilan Militer Internasional Nuremberg",
          location: "Nuremberg, Jerman",
          coords: [49.4542, 11.0538],
          summary: "Pimpinan politik dan militer Nazi diadili atas dakwaan kejahatan terhadap perdamaian dan kemanusiaan.",
          detail: "Pengadilan ini meletakkan preseden hukum internasional baru: bahwa 'hanya menjalankan perintah atasan' bukanlah pembelaan yang sah atas tindakan kejahatan genosida dan kejahatan perang kemanusiaan.",
          tag: "Hukum Internasional"
        }
      ]
    }
  ],

  // ------------------------------------------------------------------------
  // KASUS DETEKTIF SUMBER (MODE INTI)
  // ------------------------------------------------------------------------
  cases: [
    {
      id: 1,
      phaseId: 1,
      title: "Kasus 1: Kapan Sebenarnya Perang Dunia II Dimulai?",
      badge: "Kasus Kronologi & Sudut Pandang",
      intro: "Buku-buku teks sekolah sering menulis bahwa Perang Dunia II dimulai pada 1 September 1939 saat Jerman menginvasi Polandia. Namun seorang peneliti arsip di Asia Timur mengajukan keberatan keras. Periksalah tiga arsip berikut untuk mengungkap mengapa tanggal dimulainya perang menjadi perdebatan sengit!",
      question: "Apakah Perang Dunia II memiliki satu tanggal resmi yang mutlak, ataukah persepsi waktu sangat dipengaruhi oleh posisi geografis dan kepentingan nasional penulisnya?",
      sources: [
        {
          id: "c1-s1",
          type: "primer",
          title: "Pidato Radio Perdana Menteri Neville Chamberlain",
          author: "Neville Chamberlain (Perdana Menteri Kerajaan Inggris)",
          year: "3 September 1939",
          location: "London, Inggris",
          quote: "Pagi ini, Duta Besar Inggris di Berlin telah menyerahkan nota terakhir kepada Pemerintah Jerman bahwa jika mereka tidak menarik pasukannya dari Polandia sebelum pukul 11.00, keadaan perang akan berlaku. Saya harus memberi tahu Anda sekarang bahwa tidak ada kepastian semacam itu yang diterima, dan akibatnya negara ini sekarang berperang melawan Jerman.",
          claim: "PD II resmi dimulai pada September 1939 ketika negara-negara adidaya Eropa menyatakan perang.",
          context: "Disiarkan langsung melalui radio BBC kepada rakyat Inggris dan imperium koloni beberapa jam setelah invasi ke Polandia.",
          intent: "Membenarkan keputusan perang kepada rakyat Inggris dan memperlihatkan kepatuhan terhadap perjanjian pertahanan dengan Polandia.",
          bias: "Eurosentris: Menganggap perang belum berskala 'dunia' selama negara-negara kekuatan besar Eropa belum resmi saling menyerang."
        },
        {
          id: "c1-s2",
          type: "primer",
          title: "Pernyataan Resmi Jenderal Chiang Kai-shek di Lushan",
          author: "Chiang Kai-shek (Pemimpin Nasionalis Republik Tiongkok)",
          year: "17 Juli 1937",
          location: "Lushan, Jiangxi, Tiongkok",
          quote: "Begitu perang telah dimulai, tidak akan ada lagi batasan utara atau selatan; setiap jengkal tanah adalah medan pertempuran, dan setiap individu—tua maupun muda—harus mengemban tugas suci membela tanah air melawan agresi Jepang di Jembatan Marco Polo.",
          claim: "Perang total melawan fasisme Poros telah berkobar hebat di Asia sejak Juli 1937, jauh sebelum Eropa bergolak.",
          context: "Pidato mobilisasi total bangsa Tiongkok menyusul baku tembak tentara Kekaisaran Jepang di Jembatan Marco Polo.",
          intent: "Menyatukan faksi-faksi politik Tiongkok yang terpecah untuk melakukan perlawanan hidup-mati terhadap tentara Jepang.",
          bias: "Nasionalis Asia: Menekankan bahwa jutaan nyawa rakyat Tiongkok sudah menjadi korban perang melawan Poros saat negara Barat masih menjalankan 'appeasement'."
        },
        {
          id: "c1-s3",
          type: "sekunder",
          title: "Analisis Buku 'The Second World Wars'",
          author: "Prof. Victor Davis Hanson (Sejarawan Militer Modern)",
          year: "2017",
          location: "New York, Amerika Serikat",
          quote: "Perang Dunia II bukanlah satu perang yang dimulai pada hari yang sama di seluruh dunia, melainkan rangkaian konflik regional yang terpisah—mulai dari Manchuria 1931, Beijing 1937, Polandia 1939—yang akhirnya melebur menjadi satu perang global tunggal setelah serangan Pearl Harbor dan deklarasi perang Hitler kepada Amerika pada Desember 1941.",
          claim: "Perang Dunia II adalah penggabungan bertahap dari konflik-konflik regional yang berbeda benua.",
          context: "Kajian historiografi komprehensif setelah menelaah arsip dari berbagai negara pasca Perang Dingin.",
          intent: "Menjembatani perbedaan pandangan antara sejarawan Barat dan Asia dengan melihat dinamika perang secara holistik.",
          bias: "Akademis Modern: Berusaha netral, namun menganalisis peristiwa puluhan tahun kemudian dengan keuntungan melihat gambaran utuh (hindsight)."
        }
      ],
      idealScores: {
        "c1-s1": 85,
        "c1-s2": 85,
        "c1-s3": 95
      },
      verdict: {
        headline: "Mengapa Sumber-sumber Ini Berbeda Pandangan?",
        explanation: "Tidak ada tanggal tunggal yang 'salah' atau 'palsu' di antara sumber-sumber ini. Perbedaan tanggal awal perang adalah cerminan dari **sudut pandang geografis (perspektif geopolitik)**. Bagi bangsa-bangsa Barat, perang dimulai saat tatanan keamanan Eropa runtuh di Polandia (1939). Namun bagi jutaan rakyat Tiongkok dan Asia, pertempuran mematikan melawan kekuatan Poros sudah berkobar sejak 1937 (bahkan 1931 di Manchuria).",
        lesson: "Seorang sejarawan yang kritis harus menyadari bahwa penetapan batas waktu (periodisasi) dalam sejarah sering kali dipengaruhi oleh bias siapa yang menulisnya (Eurosentris vs Asiasentris).",
        archiveWisdom: "Sejarah bukan hanya 'apa yang terjadi', melainkan 'dari mana kita berdiri saat melihatnya'."
      }
    },
    {
      id: 2,
      phaseId: 2,
      title: "Kasus 2: Misteri Evakuasi Dunkirk: Keajaiban atau Blunder Hitler?",
      badge: "Kasus Propaganda & Taktik Militer",
      intro: "Pada Mei 1940, lebih dari 330.000 tentara Sekutu terkurung di pantai Dunkirk. Secara matematis, tank-tank Jerman seharusnya dapat menghabisi mereka dalam sekejap. Namun tentara Sekutu berhasil kabur melintasi Selat Inggris. Laporan resmi menyebutnya 'Keajaiban Dunkirk', sementara memoar jenderal Jerman mencatat kisah yang sama sekali berbeda!",
      question: "Apakah evakuasi Dunkirk berhasil murni karena kepahlawanan rakyat Inggris, ataukah akibat keraguan fatal perintah militer Jerman di lapangan?",
      sources: [
        {
          id: "c2-s1",
          type: "primer",
          title: "Pidato 'We Shall Fight on the Beaches' Winston Churchill",
          author: "Winston Churchill (Perdana Menteri Inggris)",
          year: "4 Juni 1940",
          location: "House of Commons, London",
          quote: "Meskipun sebuah keajaiban keselamatan besar telah dicapai di Dunkirk oleh armada kapal-kapal kecil dan keberanian Angkatan Udara Kerajaan kita... kita harus sangat berhati-hati untuk tidak menganggap pembebasan ini sebagai sebuah kemenangan. Perang tidak dimenangkan dengan evakuasi.",
          claim: "Evakuasi berhasil berkat keberanian luar biasa para pelaut sipil Inggris dan perlindungan pilot RAF di udara.",
          context: "Pidato di hadapan parlemen Inggris untuk membakar moral rakyat yang ketakutan akan ancaman invasi langsung Jerman ke pulau Inggris.",
          intent: "Mengubah kekalahan telak di medan perang menjadi narasi mitos heroisme nasional ('Semangat Dunkirk') guna menjaga tekad bangsa untuk terus bertempur.",
          bias: "Propaganda Perang Positif: Membesar-besarkan peran armada kapal kecil sipil ('Little Ships') demi memperkuat ketahanan mental publik."
        },
        {
          id: "c2-s2",
          type: "primer",
          title: "Buku Harian Perang Komando Grup Angkatan Darat A Jerman",
          author: "Marsekal Lapangan Gerd von Rundstedt & Jenderal Franz Halder",
          year: "24–26 Mei 1940",
          location: "Markas Komando Jerman, Charleville",
          quote: "Perintah Penghentian (Haltebefehl): Atas persetujuan Führer, korps lapis baja diperintahkan menghentikan gerak maju ke Dunkirk. Tanah berawa-rawa di Flanders berisiko merusak mesin tank yang kita butuhkan untuk operasi selatan menuju Paris. Biarkan Luftwaffe yang menyelesaikan sisa-sisa pasukan musuh dari udara.",
          claim: "Tentara Sekutu selamat karena Hitler dan pimpinan lapangan mengeluarkan perintah berhenti mendadak untuk menghemat divisi tank Panzer.",
          context: "Catatan operasional harian rahasia staf militer Jerman di Front Barat, ditulis saat kejadian berlangsung tanpa tujuan konsumsi publik.",
          intent: "Mendokumentasikan keputusan taktis internal dan mencatat kekhawatiran komandan tank mengenai keausan mesin dan kontur tanah berlumpur.",
          bias: "Militeristik Teknis: Ditulis oleh jenderal profesional yang kemudian setelah perang cenderung menyalahkan Hitler sepenuhnya atas blunder tersebut."
        },
        {
          id: "c2-s3",
          type: "sekunder",
          title: "Buku 'The Miracle of Dunkirk: The True Story'",
          author: "Walter Lord (Sejarawan Peneliti Sumber Terbuka)",
          year: "1982",
          location: "London & New York",
          quote: "Keberhasilan Dunkirk adalah hasil kombinasi dari tiga faktor yang saling bertaut: blunder perintah berhenti tank Jerman karena perselisihan ego Göring (Luftwaffe), kondisi laut Selat Inggris yang luar biasa tenang selama berhari-hari, dan keberanian terorganisir Angkatan Laut Kerajaan bersama kapal sipil.",
          claim: "Dunkirk bukan keajaiban supranatural, melainkan kebetulan cuaca yang digabungkan dengan salah hitung komando Poros.",
          context: "Wawancara dengan ratusan saksi mata prajurit, kapten kapal nelayan, dan pemeriksaan silang arsip militer kedua belah kubu.",
          intent: "Membongkar mitos perang yang terlalu disederhanakan tanpa mengurangi penghargaan terhadap penderitaan para prajurit di pantai.",
          bias: "Sintesis Modern: Memeriksa kedua sisi tanpa terikat pada kepentingan membela kebanggaan nasional suatu negara."
        }
      ],
      idealScores: {
        "c2-s1": 75,
        "c2-s2": 90,
        "c2-s3": 95
      },
      verdict: {
        headline: "Antara Narasi Moral dan Realitas Taktik Militer",
        explanation: "Sumber primer dari Churchill adalah contoh brilian **retorika politik perang**: ia mengubah aib kekalahan menjadi simbol persatuan moral ('Dunkirk Spirit'). Di sisi lain, arsip militer Jerman membuktikan bahwa Sekutu selamat terutama karena keputusan taktis *Haltebefehl* yang menahan laju tank Jerman karena kekhawatiran medan rawa dan klaim sesumbar Hermann Göring bahwa Angkatan Udara (Luftwaffe) sanggup menghancurkan mereka sendirian.",
        lesson: "Pernyataan resmi pemimpin negara pada masa perang selalu memiliki fungsi ganda: menyampaikan fakta sekaligus mengontrol moral psikologis warganya.",
        archiveWisdom: "Jangan menyamakan pidato kenegaraan yang menggebu-gebu dengan laporan harian perwira lapangan di parit pertempuran."
      }
    },
    {
      id: 3,
      phaseId: 3,
      title: "Kasus 3: Romusha di Indonesia: Sukarela Membangun Asia atau Kerja Paksa?",
      badge: "Kasus Pendudukan Jepang di Indonesia",
      intro: "Masa pendudukan Jepang di Nusantara (1942–1945) menyisakan trauma mendalam melalui pengerahan jutaan tenaga kerja Romusha. Namun jika Anda membuka surat kabar terbitan Jawa pada tahun 1943, Anda akan menemukan cerita yang sangat berlawanan dengan kesaksian para penyintas!",
      question: "Bagaimana media massa propaganda bentukan penguasa militer memutarbalikkan kenyataan kerja paksa yang mematikan di lapangan?",
      sources: [
        {
          id: "c3-s1",
          type: "primer",
          title: "Artikel Koran Propaganda 'Asia Raja'",
          author: "Badan Penerangan Gunseikanbu (Pemerintah Militer Jepang)",
          year: "15 September 1943",
          location: "Djakarta (Batavia), Jawa",
          quote: "Pemuda-pemuda Romusha berangkat menuju medan kerja dengan wajah berseri-seri dan sorak 'Banzai!'. Mereka adalah Prajurit Ekonomi, pahlawan pembangun jalan kemakmuran bersama Asia Timur Raya untuk memusnahkan imperialisme Sekutu. Mereka mendapat upah cukup, makanan bergizi, dan pemeliharaan kesehatan yang baik.",
          claim: "Para Romusha bekerja secara sukarela, gembira, terhormat, dan dijamin kesejahteraannya oleh pemerintah militer.",
          context: "Diterbitkan dalam koran resmi harian yang diawasi ketat oleh dinas sensor militer (Hodohan) di masa Perang Asia Timur Raya.",
          intent: "Membujuk para pemuda desa agar mau mendaftarkan diri menjadi tenaga kerja di luar pulau tanpa menimbulkan kerusuhan sosial.",
          bias: "Propaganda Totaliter Ekstrem: Sepenuhnya merekayasa realitas untuk kepentingan logistik perang Kekaisaran Jepang."
        },
        {
          id: "c3-s2",
          type: "primer",
          title: "Buku Harian & Kesaksian Penyintas Jalur Kereta Muaro-Pekanbaru",
          author: "Saksi Korban (Penyintas Romusha asal Jawa Tengah)",
          year: "Dicatat pasca perang (1946)",
          location: "Pekanbaru, Riau, Sumatera",
          quote: "Kami ditipu lurah dengan janji bekerja di kebun dengan gaji besar. Nyatanya kami dibawa dengan gerbong tertutup rapat ke tengah belantara Sumatera. Di sana kami disuruh membelah bukit dan membuat rel kereta api hanya berbaju karung goni, makan bubur tapioka encer, dan dicambuk bila berhenti. Ratusan kawan mati tiap minggu karena malaria dan disentri tanpa ada sebutir obat pun.",
          claim: "Pengerahan Romusha dilakukan dengan tipu daya pemaksaan, kerja paksa tanpa upah layak, perlakuan kejam, dan angka kematian massal.",
          context: "Catatan kesaksian langsung dari korban yang selamat dari pembangunan jalur kereta maut Muaro-Pekanbaru sepanjang 220 km.",
          intent: "Mendokumentasikan penderitaan sesungguhnya yang dialami rakyat kecil dan mencari keadilan bagi kawan-kawan yang tewas.",
          bias: "Perspektif Korban: Sangat emosional dan traumatis, namun memberikan data empiris tentang penderitaan nyata di tingkat bawah."
        },
        {
          id: "c3-s3",
          type: "sekunder",
          title: "Laporan Riset 'Under the Shadow of the Rising Sun'",
          author: "Dr. Shigeru Sato (Sejarawan Universitas Newcastle)",
          year: "1994",
          location: "Canberra, Australia",
          quote: "Diperkirakan antara 4 hingga 10 juta orang di Pulau Jawa dimobilisasi untuk kerja lokal, sementara sekitar 300.000 dikirim ke luar Jawa dan Asia Tenggara. Dari mereka yang dikirim ke luar daerah, angka kematian mencapai lebih dari 50% hingga 70% akibat malnutrisi akut, ketiadaan obat-obatan kinine untuk malaria, dan kebrutalan komando militer lapangan.",
          claim: "Pengerahan Romusha adalah bencana demografi terbesar di Jawa modern dengan tingkat kematian melebihi 50% di lokasi proyek luar pulau.",
          context: "Penelitian berbasis kompilasi arsip militer Jepang yang disita di Tokyo, laporan Palang Merah Internasional, dan data sensus Hindia Belanda.",
          intent: "Memberikan estimasi statistik independen yang objektif mengenai skala pengerahan dan korban Romusha.",
          bias: "Kajian Kritis Berimbang: Menggunakan metodologi historiografi modern untuk menguji klaim saksi dan arsip militer resmi."
        }
      ],
      idealScores: {
        "c3-s1": 20,
        "c3-s2": 90,
        "c3-s3": 95
      },
      verdict: {
        headline: "Mengapa Koran Resmi Zaman Pendudukan Begitu Menyesatkan?",
        explanation: "Koran *Asia Raja* tahun 1943 adalah contoh nyata **rekayasa realitas oleh sensor militer perang**. Sumber primer tidak selalu berarti sumber yang jujur! Surat kabar yang terbit di bawah rezim fasis militer tidak memiliki kebebasan pers; isi beritanya sepenuhnya diarahkan untuk mengaburkan penderitaan rakyat demi menjaga kelangsungan mesin perang.",
        lesson: "Penyelidik arsip harus selalu bertanya: 'Siapa yang mengendalikan percetakan ini? Apakah penulis memiliki kebebasan untuk mengatakan hal yang sebenarnya?'",
        archiveWisdom: "Kertas koran kuno bisa menjadi bukti kebohongan zaman, sementara catatan saksi mata korban adalah suara kebenaran yang tertindas."
      }
    },
    {
      id: 4,
      phaseId: 4,
      title: "Kasus 4: Berapa Sebenarnya Korban Jiwa Perang Dunia II?",
      badge: "Kasus Statistik Demografi & Kepentingan Politik",
      intro: "Berapa banyak manusia yang kehilangan nyawa akibat Perang Dunia II? Jika Anda memeriksa ensiklopedia terbitan tahun 1950, 1980, dan 2020, Anda akan menemukan angka yang melompat puluhan juta jiwa—terutama mengenai korban di Uni Soviet dan Tiongkok!",
      question: "Mengapa angka kematian perang yang begitu dahsyat bisa berbeda hingga selisih 15–20 juta jiwa antar lembaga resmi?",
      sources: [
        {
          id: "c4-s1",
          type: "primer",
          title: "Wawancara Joseph Stalin dengan Surat Kabar 'Pravda'",
          author: "Joseph Stalin (Pemimpin Uni Soviet)",
          year: "14 Maret 1946",
          location: "Moskwa, Uni Soviet",
          quote: "Sebagai akibat dari invasi Jerman, Uni Soviet telah kehilangan tanpa dapat dipulihkan dalam pertempuran melawan Jerman dan juga melalui penyanderaan serta deportasi paksa... sebanyak sekitar tujuh juta orang (7.000.000 jiwa).",
          claim: "Total korban jiwa Uni Soviet dalam Perang Patriotik Raya hanya berjumlah 7 juta jiwa.",
          context: "Wawancara resmi tak lama setelah perang berakhir di harian partai komunis Pravda menanggapi pidato Tirai Besi Churchill.",
          intent: "Menyembunyikan kelemahan demografis Uni Soviet pascaperang agar tidak tampak rapuh di hadapan kekuatan kapitalis Barat yang memiliki monopoli bom atom.",
          bias: "Manipulasi Politik Total: Pemimpin negara secara sengaja mengecilkan angka kematian warganya demi gengsi militer dan doktrin geopolitik."
        },
        {
          id: "c4-s2",
          type: "primer",
          title: "Pidato Rahasia Nikita Khrushchev di Kongres Partai ke-20",
          author: "Nikita Khrushchev (Sekretaris Jenderal Partai Komunis Soviet)",
          year: "1956 / Ditegaskan ulang 1961",
          location: "Moskwa, Uni Soviet",
          quote: "Rakyat kita membayar harga yang tak terperikan demi kemenangan. Stalin memalsukan data. Bukan tujuh juta, melainkan lebih dari dua puluh juta warga Soviet (20.000.000 jiwa) yang gugur demi menyelamatkan tanah air kita dari cengkeraman fasisme.",
          claim: "Korban jiwa Soviet sebenarnya melampaui 20 juta orang, jauh melampaui klaim awal Stalin.",
          context: "Bagian dari era 'De-Stalinisasi' setelah kematian Stalin, ketika kepemimpinan baru membuka sebagian arsip yang disembunyikan.",
          intent: "Mengecam kepemimpinan diktator Stalin dan menunjukkan kepada dunia pengorbanan raksasa rakyat Soviet.",
          bias: "Koreksi Politik Pasca-Stalin: Menghancurkan kultus individu Stalin, meskipun metodologi sensusnya masih belum sepenuhnya diuji secara independen."
        },
        {
          id: "c4-s3",
          type: "sekunder",
          title: "Studi Demografi Arsip 'Poteri narodonaseleniia v XX veke'",
          author: "Vadim Erlikman (Peneliti Demografi Sejarah Rusia)",
          year: "2004",
          location: "Moskwa, Federasi Rusia",
          quote: "Berdasarkan pembukaan arsip rahasia KGB pasca-Soviet dan rekonstruksi piramida penduduk: Korban tewas Uni Soviet adalah sekitar 26,6 juta jiwa (termasuk 8,7 juta militer dan hampir 18 juta warga sipil akibat genosida, kelaparan di Leningrad, dan kerja paksa). Di seluruh dunia, total korban PD II berkisar antara 70 hingga 85 juta jiwa.",
          claim: "Korban Perang Dunia II dunia melampaui 70-85 juta jiwa, dengan Uni Soviet menyumbang 26,6 juta kematian.",
          context: "Dihitung setelah runtuhnya Uni Soviet menggunakan data sensus komparatif 1939 dan 1959 yang sebelumnya diklasifikasikan sebagai rahasia negara.",
          intent: "Memberikan penghitungan ilmiah bebas sensor politik mengenai kerugian nyata generasi yang hilang.",
          bias: "Metodologis Demografis: Memperhitungkan kematian tidak langsung (kelaparan dan wabah), yang batasannya kadang diperdebatkan oleh para ekonom."
        }
      ],
      idealScores: {
        "c4-s1": 30,
        "c4-s2": 80,
        "c4-s3": 95
      },
      verdict: {
        headline: "Mengapa Data Kematian Terus Bertambah Seiring Waktu?",
        explanation: "Kasus ini membuktikan bahwa **data statistik sejarah kerap kali disandera oleh kepentingan keamanan nasional**. Di era Stalin (1946), mengakui bahwa 26 juta warganya telah tewas akan memperlihatkan kepada Amerika Serikat bahwa Uni Soviet sangat lemah secara militer dan ekonomi. Baru setelah rezim runtuh dan arsip rahasia dibuka pada dekade 1990-an, para sejarawan dapat menghitung selisih sensus penduduk secara objektif.",
        lesson: "Angka yang terbit paling awal tidak selalu paling akurat. Terkadang dokumen yang terbit puluhan tahun kemudian jauh lebih kredibel karena tidak lagi terikat sensor rezim yang berkuasa.",
        archiveWisdom: "Di balik setiap angka statistik perang yang dingin, ada jutaan nama dan keluarga yang pernah dihapus dari catatan resmi demi kepentingan politik."
      }
    },
    {
      id: 5,
      phaseId: 5,
      title: "Kasus 5: Bom Atom di Jepang: Menyelamatkan Nyawa atau Awal Perang Dingin?",
      badge: "Kasus Etika Perang & Geopolitik Nuklir",
      intro: "Pada Agustus 1945, dua bom atom meratakan Hiroshima dan Nagasaki. Pemerintah Amerika Serikat mengklaim tindakan ini mendesak demi mencegah Operasi Downfall (invasi darat) yang diprediksi menelan ratusan ribu nyawa tentara Sekutu. Namun sejarawan menemukan memo rahasia yang menunjukkan motif lain yang jauh lebih rumit!",
      question: "Apakah bom atom dijatuhkan murni untuk mengakhiri perang dengan Jepang sesegera mungkin, ataukah sebagai sinyal ancaman kepada Uni Soviet?",
      sources: [
        {
          id: "c5-s1",
          type: "primer",
          title: "Pernyataan Publik Presiden Harry S. Truman",
          author: "Harry S. Truman (Presiden Amerika Serikat)",
          year: "6 Agustus 1945",
          location: "Kapal Penjelajah USS Augusta / Washington D.C.",
          quote: "Dunia akan mencatat bahwa bom atom pertama telah dijatuhkan di Hiroshima, sebuah pangkalan militer... Kami telah menggunakannya untuk memperpendek kepedihan perang, untuk menyelamatkan nyawa ribuan dan ribuan pemuda Amerika. Kami akan terus menggunakannya sampai kita benar-benar menghancurkan kekuatan Jepang untuk berperang.",
          claim: "Bom atom dijatuhkan pada target militer semata-mata demi mempercepat perdamaian dan menyelamatkan ratusan ribu tentara Sekutu dari invasi darat.",
          context: "Pengumuman radio resmi kepresidenan kepada rakyat Amerika Serikat sesaat setelah bom Little Boy dijatuhkan.",
          intent: "Menenangkan nurani publik Amerika mengenai penggunaan senjata pemusnah massal dan membenarkan pembelanjaan raksasa Proyek Manhattan.",
          bias: "Justifikasi Kepresidenan: Menyebut kota padat penduduk Hiroshima sebagai 'pangkalan militer' demi meminimalkan kecaman moral atas jatuhnya puluhan ribu korban warga sipil."
        },
        {
          id: "c5-s2",
          type: "primer",
          title: "Memoar 'The White House Years' Jenderal Dwight D. Eisenhower",
          author: "Dwight D. Eisenhower (Panglima Tertinggi Sekutu di Eropa)",
          year: "1963 (Merekam perbincangan Juli 1945)",
          location: "Potsdam, Jerman / Washington",
          quote: "Pada Juli 1945 di Potsdam, Menteri Perang Stimson memberi tahu saya bahwa mereka akan menjatuhkan bom tersebut. Saya menyampaikan keraguan mendalam saya: Pertama, berdasarkan keyakinan saya bahwa Jepang sudah kalah dan penjatuhan bom tersebut benar-benar tidak lagi diperlukan. Kedua, karena saya membenci gagasan bahwa negara kita harus menjadi yang pertama menggunakan senjata semacam itu.",
          claim: "Tokoh militer tertinggi Sekutu sendiri menilai Jepang sudah di ambang menyerah dan penggunaan bom atom tidak lagi esensial secara militer.",
          context: "Ditulis oleh mantan jenderal bintang lima dan presiden AS ke-34 setelah meninjau kembali keputusan masa lalu.",
          intent: "Menjaga integritas kehormatan militer tradisionil dan menjauhkan dirinya dari keputusan moral pengeboman warga sipil tak berdaya.",
          bias: "Perspektif Moral Pasca-Jabatan: Ditulis belasan tahun kemudian dengan mempertimbangkan reputasi sejarah pribadinya."
        },
        {
          id: "c5-s3",
          type: "sekunder",
          title: "Buku Riset 'Racing the Enemy: Stalin, Truman, and the Surrender of Japan'",
          author: "Prof. Tsuyoshi Hasegawa (Sejarawan Universitas California)",
          year: "2005",
          location: "Cambridge, Massachusetts",
          quote: "Bukti arsip dari Moskwa dan Tokyo menunjukkan bahwa deklarasi perang Uni Soviet pada 8 Agustus 1945—yang membatalkan Pakta Netralitas Soviet-Jepang—memiliki dampak psikologis yang sama atau bahkan lebih menentukan daripada bom atom dalam memaksa Dewan Militer Tertinggi Jepang menyerah. Truman juga terburu-buru menjatuhkan bom sebelum Soviet merebut wilayah di Asia.",
          claim: "Intervensi militer Soviet adalah faktor yang tidak kalah krusial dengan bom atom, dan pertimbangan membendung Soviet (diplomasi atom) sangat memengaruhi Washington.",
          context: "Kajian komparatif trilateral pertama yang menelaah dokumen arsip militer Amerika Serikat, Uni Soviet, dan Kekaisaran Jepang secara bersamaan.",
          intent: "Menggugat narasi tunggal bahwa 'hanya bom atom' yang mengakhiri perang dunia, memperlihatkan awal mula bibit Perang Dingin.",
          bias: "Kajian Multilateral Modern: Menghubungkan akhir PD II langsung dengan awal Perang Dingin secara analitis dan seimbang."
        }
      ],
      idealScores: {
        "c5-s1": 70,
        "c5-s2": 85,
        "c5-s3": 95
      },
      verdict: {
        headline: "Menghubungkan Akhir Perang Dunia II dengan Awal Perang Dingin",
        explanation: "Keputusan menjatuhkan bom atom bukanlah keputusan militer yang berdiri sendiri. Dokumen menunjukkan adanya keterkaitan erat antara **faktor militer** (keinginan menghindari korban invasi darat) dan **faktor diplomasi politik** (menunjukkan keunggulan teknologi nuklir kepada Joseph Stalin sebelum Soviet memperluas pengaruhnya di Manchuria dan Kepulauan Kuril).",
        lesson: "Keputusan besar dalam perang jarang sekali hanya memiliki satu motivasi tunggal. Sering kali motif militer, gengsi teknologi, dan persaingan politik global saling berkelindan.",
        archiveWisdom: "Seorang detektif sejarah tidak mencari 'siapa yang 100% benar', melainkan membedah motif kompleks dari setiap pihak yang berkuasa."
      }
    }
  ],

  // ------------------------------------------------------------------------
  // KUIS LITERASI & MATERI SEJARAH (10 SOAL)
  // ------------------------------------------------------------------------
  quizzes: [
    {
      id: 1,
      phase: 1,
      question: "Mengapa banyak sejarawan di Tiongkok dan Asia menganggap Perang Dunia II sebenarnya telah dimulai pada tahun 1937, bukan 1939?",
      imageTitle: "Insiden Jembatan Marco Polo (1937)",
      options: [
        "Karena Adolf Hitler telah menyerang Paris pada tahun 1937",
        "Karena pertempuran skala penuh dan pembantaian massal oleh militer Jepang di Tiongkok telah meletus sejak Insiden Jembatan Marco Polo 1937",
        "Karena Liga Bangsa-Bangsa secara resmi membubarkan diri pada tahun 1937",
        "Karena Uni Soviet telah melancarkan Operasi Barbarossa pada tahun tersebut"
      ],
      correctIndex: 1,
      explanation: "Bagi masyarakat Asia Timur, agresi militer total tentara Kekaisaran Jepang yang menelan jutaan korban jiwa di Tiongkok telah berkobar sejak Juli 1937. Tanggal 1 September 1939 adalah sudut pandang Eurosentris saat perang melanda benua Eropa."
    },
    {
      id: 2,
      phase: 1,
      question: "Di bawah ini, manakah yang merupakan ciri utama dari sebuah 'Sumber Primer' dalam penelitian sejarah?",
      imageTitle: "Katalog Arsip Bersejarah",
      options: [
        "Buku pelajaran sejarah modern yang ditulis oleh peneliti pada tahun 2024",
        "Artikel ensiklopedia online Wikipedia yang merangkum peristiwa masa lalu",
        "Dokumen, foto, catatan harian, atau rekaman audio yang dibuat langsung oleh pelaku/saksi saat peristiwa terjadi",
        "Video animasi sejarah di YouTube yang dibuat dengan teknologi grafis komputer"
      ],
      correctIndex: 2,
      explanation: "Sumber primer adalah kesaksian langsung dari masa lampau (firsthand evidence) yang diciptakan sezaman dengan peristiwa sejarah tersebut, seperti telegram militer, buku harian prajurit, atau foto arsip."
    },
    {
      id: 3,
      phase: 2,
      question: "Mengapa pidato radio Winston Churchill mengenai 'Keajaiban Dunkirk' (1940) tidak bisa ditelan mentah-mentah sebagai kebenaran taktis militer seutuhnya?",
      imageTitle: "Evakuasi Pasukan di Pantai Dunkirk",
      options: [
        "Karena Churchill sengaja menggunakan retorika heroik untuk mengangkat moral rakyat Inggris yang terancam putus asa akibat kekalahan besar di Prancis",
        "Karena Churchill sebenarnya tidak berada di Inggris saat peristiwa terjadi",
        "Karena tentara Sekutu sebenarnya tidak berhasil dievakuasi sama sekali",
        "Karena radio BBC belum memiliki izin penyiaran berita perang saat itu"
      ],
      correctIndex: 0,
      explanation: "Sebagai pemimpin negara dalam kondisi darurat perang, tugas Churchill adalah menjaga ketahanan moral bangsanya. Laporan militer lapangan menunjukkan Sekutu selamat terutama akibat perintah berhenti mendadak divisi tank Jerman (Haltebefehl)."
    },
    {
      id: 4,
      phase: 2,
      question: "Pertempuran manakah di Front Timur Eropa yang menjadi titik balik krusial hancurnya reputasi tak terkalahkan tentara Jerman Nazi pada musim dingin 1942–1943?",
      imageTitle: "Pertempuran di Reruntuhan Stalingrad",
      options: [
        "Pertempuran Somme",
        "Pertempuran Stalingrad",
        "Pertempuran Waterloo",
        "Pertempuran Teluk Leyte"
      ],
      correctIndex: 1,
      explanation: "Pertempuran Stalingrad menelan hampir dua juta korban dan berakhir dengan kehancuran total Angkatan Darat Keenam Jerman. Sejak kekalahan ini, inisiatif strategis beralih ke tangan Tentara Merah Soviet."
    },
    {
      id: 5,
      phase: 3,
      question: "Peristiwa penyerahan tanpa syarat kekuasaan Hindia Belanda kepada tentara Jepang pada 8 Maret 1942 di Indonesia dikenal dengan nama peristiwa...",
      imageTitle: "Perundingan di Lapangan Udara Kalijati",
      options: [
        "Perjanjian Renville",
        "Kapitulasi Kalijati (Subang)",
        "Konferensi Meja Bundar",
        "Perjanjian Roem-Roijen"
      ],
      correctIndex: 1,
      explanation: "Di Kalijati, Subang, Jawa Barat, Gubernur Jenderal Tjarda van Starkenborgh Stachouwer dan Panglima Ter Poorten menyerah tanpa syarat kepada Letnan Jenderal Hitoshi Imamura, mengakhiri kekuasaan kolonial Belanda di Indonesia."
    },
    {
      id: 6,
      phase: 3,
      question: "Koran propaganda zaman Jepang 'Asia Raja' menyebut kaum Romusha sebagai 'Pahlawan Pekerja Sukarela'. Mengapa arsip koran tersebut memiliki tingkat bias yang sangat tinggi?",
      imageTitle: "Lembaran Koran Asia Raja 1943",
      options: [
        "Karena koran tersebut dicetak menggunakan kertas daur ulang bermutu rendah",
        "Karena koran itu diterbitkan di bawah sensor ketat dinas militer Jepang untuk mengaburkan penderitaan kerja paksa dan menghindari perlawanan rakyat",
        "Karena penulis koran tersebut adalah agen rahasia Sekutu yang menyamar",
        "Karena saat itu seluruh rakyat Indonesia telah lancar berbahasa Jepang"
      ],
      correctIndex: 1,
      explanation: "Dalam masa perang di bawah rezim fasis, pers dikendalikan penuh oleh badan sensor militer (Hodohan). Setiap laporan yang mengkritik perlakuan kejam terhadap Romusha dilarang terbit."
    },
    {
      id: 7,
      phase: 4,
      question: "Apakah tujuan utama diadakannya Konferensi Wannsee oleh para pejabat tinggi Nazi pada 20 Januari 1942?",
      imageTitle: "Vila Pertemuan Konferensi Wannsee",
      options: [
        "Merencanakan pakta perdamaian rahasia dengan Uni Soviet",
        "Mengatur koordinasi administratif dan logistik genosida sistematis bangsa Yahudi Eropa ('Solusi Akhir')",
        "Merancang pendaratan amfibi ke kepulauan Britania Raya",
        "Menurunkan tarif pajak ekspor perdagangan batu bara di Eropa Tengah"
      ],
      correctIndex: 1,
      explanation: "Konferensi Wannsee mengkoordinasikan birokrasi pemerintahan Nazi untuk mengangkut jutaan orang Yahudi dari seluruh penjuru Eropa menuju kamp-kamp pemusnahan massal dengan kamar gas beracun."
    },
    {
      id: 8,
      phase: 4,
      question: "Mengapa estimasi korban tewas Uni Soviet di era Stalin tahun 1946 (7 juta) jauh lebih rendah dibandingkan data riset kearsipan modern pasca-Soviet (26,6 juta)?",
      imageTitle: "Monumen Peringatan Perang Patriotik",
      options: [
        "Karena mesin hitung komputer baru ditemukan pada tahun 1990",
        "Karena Stalin sengaja menutupi kehancuran demografi warganya demi menjaga citra ketangguhan Uni Soviet di hadapan blok Barat pada permulaan Perang Dingin",
        "Karena korban sipil tidak dihitung sebagai manusia oleh organisasi Palang Merah Internasional",
        "Karena jutaan prajurit Soviet yang hilang sebenarnya melarikan diri ke Kutub Utara"
      ],
      correctIndex: 1,
      explanation: "Statistik korban perang kerap dimanipulasi untuk kepentingan geopolitik. Mengakui kematian 26 juta warganya pada tahun 1946 akan membuat Uni Soviet tampak rentan terhadap ancaman militer Amerika Serikat."
    },
    {
      id: 9,
      phase: 5,
      question: "Selain penjatuhan bom atom di Hiroshima dan Nagasaki, faktor apakah yang menurut arsip modern sangat menentukan keputusan Jepang untuk menyerah tanpa syarat pada Agustus 1945?",
      imageTitle: "Penandatanganan Dokumen Kapitulasi di USS Missouri",
      options: [
        "Deklarasi perang mendadak Uni Soviet dan invasi kilat Tentara Merah ke Manchuria pada 8 Agustus 1945",
        "Serangan armada angkatan laut Spanyol di Samudra Hindia",
        "Letusan gunung berapi Gunung Fuji di Tokyo",
        "Habisnya cadangan air minum di istana kekaisaran Kyoto"
      ],
      correctIndex: 0,
      explanation: "Deklarasi perang Uni Soviet menghancurkan harapan terakhir para pemimpin militer Jepang untuk meminta bantuan mediasi netral dari Moskwa. Jepang kini terkepung oleh dua kekuatan adidaya sekaligus."
    },
    {
      id: 10,
      phase: 5,
      question: "Apa pelajaran literasi sejarah terpenting yang dipelajari oleh seorang 'Detektif Sumber' ketika meneliti Perang Dunia II?",
      imageTitle: "Penyelidikan Arsip Dokumen Sejarah",
      options: [
        "Menghafal tanggal dan bulan pertempuran sebanyak mungkin tanpa perlu membaca konteksnya",
        "Mempercayai sumber resmi pemerintah di atas segala kesaksian saksi mata rakyat biasa",
        "Memeriksa siapa penulisnya, kapan ditulis, untuk siapa ditujukan, serta motif di balik pembuatan dokumen tersebut secara kritis",
        "Mengabaikan semua sumber asing dan hanya membaca sumber yang memuji negara sendiri"
      ],
      correctIndex: 2,
      explanation: "Literasi sejarah kritis melatih kita untuk tidak sekadar menelan informasi mentah-mentah, melainkan memeriksa konteks pengarang (siapa, kapan, untuk siapa), mengenali bias propaganda, dan membandingkan berbagai sumber untuk mendekati kebenaran faktual."
    }
  ]
};

