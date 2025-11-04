/* ================================================= */
/* === SCRIPT.JS (VERSI FINAL DENGAN PERBAIKAN STRUKTUR DOM DAN PATH GAMBAR) === */
/* ================================================= */

// --- DATA BARU & KONVERSI ---
const clubData = [
    { id: 1, klub: "Paris Saint-Germain", negara: "Prancis", pelatih: "Luis Enrique", logo: "png/paris-saint-germain-footballlogos-org.png", 
        kiper: ["G. Donnarumma - 1 - GK"], def: ["Marquinhos - 5 - CB", "A. Hakimi - 2 - RB", "L. Beraldo - 4 - CB", "L. Hernández - 21 - LB", "N. Mendes - 25 - LB"], mid: ["W. Zaïre-Emery - 33 - CM", "Vitinha - 17 - CM", "F. Ruiz - 8 - CM", "K. Lee - 19 - AM"], att: ["O. Dembélé - 10 - RW", "G. Ramos - 9 - ST", "K. Kvaratskhelia - 7 - LW", "B. Barcola - 29 - LW", "D. Doue - 14 - RW"] },
    { id: 2, klub: "Liverpool", negara: "Inggris", pelatih: "Arne Slot", logo: "png/liverpool-fc-footballlogos-org.png", 
        kiper: ["Alisson - 1 - GK", "G. Mamardashvili - 25 - GK"], def: ["V. van Dijk - 4 - CB", "A. Robertson - 26 - LB", "J. Gomez - 2 - RB", "I. Konaté - 5 - CB", "M. Kerkez - 6 - LB"], mid: ["A. Mac Allister - 10 - CM", "D. Szoboszlai - 8 - CM", "W. Endo - 3 - CDM", "C. Jones - 17 - CM"], att: ["M. Salah - 11 - RW", "C. Gakpo - 18 - ST", "F. Wirtz - 7 - LW", "Alexander Isak - 9 - ST", "H. Ekitike - 22 - ST"] },
    { id: 3, klub: "Arsenal", negara: "Inggris", pelatih: "Mikel Arteta", logo: "png/arsenal-footballlogos-org.png", 
        kiper: ["D. Raya - 22 - GK", "K. Arrizabalaga - 13 - GK"], def: ["W. Saliba - 2 - CB", "Gabriel - 6 - CB", "B. White - 4 - RB", "J. Kiwior - 15 - CB", "K. Tierney - 3 - LB"], mid: ["D. Rice - 41 - CDM", "M. Ødegaard - 8 - CM", "K. Havertz - 29 - CM", "E. Smith Rowe - 20 - AM"], att: ["B. Saka - 7 - RW", "G. Jesus - 9 - ST", "G. Martinelli - 11 - LW", "L. Trossard - 19 - LW"] },
    { id: 4, klub: "Manchester City", negara: "Inggris", pelatih: "Pep Guardiola", logo: "png/manchester-city-footballlogos-org.png", 
        kiper: ["Ederson - 31 - GK", "S. Ortega - 18 - GK"], def: ["R. Dias - 3 - CB", "J. Stones - 5 - CB", "J. Gvardiol - 24 - LB", "K. Walker - 2 - RB"], mid: ["Rodri - 16 - CDM", "K. De Bruyne - 17 - CM", "B. Silva - 20 - CM", "M. Kovačić - 8 - CM"], att: ["E. Haaland - 9 - ST", "P. Foden - 47 - LW", "J. Grealish - 10 - LW", "J. Doku - 11 - LW"] },
    { id: 5, klub: "Barcelona", negara: "Spanyol", pelatih: "Hansi Flick", logo: "png/fc-barcelona-footballlogos-org.png", 
        kiper: ["M. ter Stegen - 1 - GK", "I. Peña - 13 - GK"], def: ["R. Araújo - 4 - CB", "P. Cubarsí - 5 - CB", "A. Balde - 3 - LB", "J. Koundé - 23 - RB"], mid: ["F. de Jong - 21 - CDM", "Pedri - 8 - CM", "Gavi - 6 - CM", "F. López - 16 - CM"], att: ["R. Lewandowski - 9 - ST", "Lamine Yamal - 10 - RW", "Ferran Torres - 7 - LW", "Vítor Roque - 19 - ST"] },
    { id: 6, klub: "Bayern München", negara: "Jerman", pelatih: "Vincent Kompany", logo: "png/bayern-munich-footballlogos-org.png", 
        kiper: ["M. Neuer - 1 - GK", "S. Ulreich - 26 - GK"], def: ["K. Min-jae - 3 - CB", "D. Upamecano - 2 - CB", "A. Davies - 19 - LB", "J. Kimmich - 6 - RB"], mid: ["L. Goretzka - 8 - CM", "K. Laimer - 27 - CM", "J. Musiala - 10 - AM", "A. Pavlović - 45 - CDM"], att: ["H. Kane - 9 - ST", "S. Gnabry - 7 - RW", "L. Díaz - 14 - LW", "K. Coman - 11 - LW"] },
    { id: 7, klub: "Internazionale", negara: "Italia", pelatih: "Simone Inzaghi", logo: "png/inter-milan-footballlogos-org.png", 
        kiper: ["Y. Sommer - 1 - GK", "J. Martínez - 12 - GK"], def: ["A. Bastoni - 95 - CB", "S. de Vrij - 6 - CB", "B. Pavard - 28 - CB", "F. Dimarco - 32 - LWB"], mid: ["N. Barella - 23 - CM", "H. Çalhanoğlu - 20 - CDM", "D. Dumfries - 2 - RWB", "D. Frattesi - 16 - CM"], att: ["M. Thuram - 9 - ST", "L. Martínez - 10 - ST", "M. Arnautović - 8 - ST"] },
    { id: 8, klub: "Chelsea", negara: "Inggris", pelatih: "Enzo Maresca", logo: "png/chelsea-footballlogos-org.png", 
        kiper: ["R. Sánchez - 1 - GK", "D. Petrović - 28 - GK"], def: ["A. Disasi - 2 - CB", "T. Silva - 6 - CB", "R. James - 24 - RB", "M. Cucurella - 3 - LB"], mid: ["M. Caicedo - 25 - CDM", "E. Fernández - 8 - CM", "C. Gallagher - 23 - CM", "C. Chukwuemeka - 17 - CM"], att: ["C. Palmer - 20 - RW", "N. Jackson - 9 - ST", "M. Mudryk - 10 - LW", "R. Sterling - 7 - LW"] },
    { id: 9, klub: "Real Madrid", negara: "Spanyol", pelatih: "Carlo Ancelotti", logo: "png/real-madrid-footballlogos-org.png", 
        kiper: ["T. Courtois - 1 - GK", "A. Lunin - 13 - GK"], def: ["É. Militão - 3 - CB", "A. Rüdiger - 22 - CB", "D. Carvajal - 2 - RB", "D. Alaba - 4 - CB"], mid: ["J. Bellingham - 5 - AM", "F. Valverde - 8 - CM", "A. Tchouaméni - 14 - CDM", "E. Camavinga - 6 - CM"], att: ["V. Júnior - 7 - LW", "Rodrygo - 11 - RW", "E. Endrick - 16 - ST", "Joselu - 9 - ST"] },
    { id: 10, klub: "Aston Villa", negara: "Inggris", pelatih: "Unai Emery", logo: "png/aston-villa-footballlogos-org.png", 
        kiper: ["E. Martínez - 23 - GK", "M. Bizot - 40 - GK"], def: ["E. Konsa - 4 - CB", "Pau Torres - 14 - CB", "M. Cash - 2 - RB", "L. Digne - 12 - LB"], mid: ["R. Barkley - 6 - CM", "Y. Tielemans - 8 - CM", "J. McGinn - 7 - CM", "A. Onana - 24 - CDM"], att: ["O. Watkins - 11 - ST", "J. Sancho - 19 - RW", "D. Malen - 17 - LW", "M. Rogers - 27 - ST"] },
    { id: 11, klub: "Newcastle United", negara: "Inggris", pelatih: "Eddie Howe", logo: "png/england_newcastle_1500x1500.png", 
        kiper: ["N. Pope - 1 - GK", "A. Ramsdale - 32 - GK"], def: ["S. Botman - 4 - CB", "F. Schär - 5 - CB", "K. Trippier - 2 - RB", "L. Hall - 3 - LB"], mid: ["B. Guimarães - 39 - CDM", "S. Tonali - 8 - CM", "Joelinton - 7 - CM", "J. Willock - 28 - CM"], att: ["A. Isak - 9 - ST", "A. Gordon - 10 - LW", "H. Barnes - 14 - LW", "J. Murphy - 23 - RW"] },
    { id: 12, klub: "Crystal Palace", negara: "Inggris", pelatih: "Oliver Glasner", logo: "png/crystal-palace-footballlogos-org.png", 
        kiper: ["D. Henderson - 1 - GK", "W. Benítez - 44 - GK"], def: ["M. Guéhi - 6 - CB", "M. Lacroix - 5 - CB", "T. Mitchell - 3 - LB", "D. Muñoz - 2 - RB"], mid: ["J. Lerma - 8 - CDM", "A. Wharton - 20 - CM", "D. Kamada - 18 - AM", "C. Doucouré - 28 - CDM"], att: ["E. Nketiah - 9 - ST", "I. Sarr - 7 - RW", "J. Mateta - 14 - ST", "E. Eze - 11 - AM"] },
    { id: 13, klub: "Brighton & Hove Albion", negara: "Inggris", pelatih: "Fabian Hürzeler", logo: "png/brighton-hove-footballlogos-org.png", // Menghilangkan (1)
        kiper: ["B. Verbruggen - 1 - GK", "J. Steele - 23 - GK"], def: ["L. Dunk - 5 - CB", "J. van Hecke - 6 - CB", "M. De Cuyper - 29 - LB", "J. Veltman - 34 - RB"], mid: ["C. Baleba - 17 - CDM", "B. Gruda - 8 - AM", "M. Wieffer - 27 - CM", "J. Milner - 20 - CM"], att: ["S. Tzimas - 9 - ST", "Y. Minteh - 11 - RW", "K. Mitoma - 22 - LW", "G. Rutter - 10 - ST"] },
    { id: 14, klub: "Bayer Leverkusen", negara: "Jerman", pelatih: "Xabi Alonso", logo: "png/bayer-leverkusen-footballlogos-org.png", 
        kiper: ["M. Flekken - 1 - GK", "J. Blaswich - 28 - GK"], def: ["E. Tapsoba - 12 - CB", "J. Quansah - 4 - CB", "Á. Grimaldo - 20 - LB", "J. Frimpong - 30 - RWB"], mid: ["R. Andrich - 8 - CDM", "E. Palacios - 25 - CM", "J. Hofmann - 7 - AM", "A. García - 24 - CM"], att: ["P. Schick - 14 - ST", "E. Poku - 19 - RW", "F. Wirtz - 10 - AM", "M. Terrier - 11 - LW"] },
    { id: 15, klub: "Atlético de Madrid", negara: "Spanyol", pelatih: "Diego Simeone", logo: "png/atletico-madrid-footballlogos-org.png", 
        kiper: ["J. Oblak - 13 - GK", "J. Musso - 1 - GK"], def: ["J. Giménez - 2 - CB", "R. Le Normand - 24 - CB", "N. Molina - 16 - RB", "J. Galán - 21 - LB"], mid: ["Koke - 6 - CDM", "P. Barrios - 8 - CM", "M. Llorente - 14 - CM", "C. Gallagher - 4 - CM"], att: ["A. Griezmann - 7 - ST", "A. Sørloth - 9 - ST", "J. Álvarez - 19 - ST", "A. Baena - 10 - LW"] },
    { id: 16, klub: "Borussia Dortmund", negara: "Jerman", pelatih: "Nuri Sahin", logo: "png/borussia-dortmund-footballlogos-org.png", 
        kiper: ["G. Kobel - 1 - GK", "A. Meyer - 33 - GK"], def: ["N. Schlotterbeck - 4 - CB", "N. Süle - 25 - CB", "J. Ryerson - 26 - RB", "R. Bensebaini - 5 - LB"], mid: ["E. Can - 23 - CDM", "M. Sabitzer - 20 - CM", "J. Brandt - 10 - AM", "F. Nmecha - 8 - CM"], att: ["S. Guirassy - 9 - ST", "K. Adeyemi - 27 - LW", "J. Bynoe-Gittens - 43 - LW", "F. Silva - 21 - ST"] },
    { id: 17, klub: "Napoli", negara: "Italia", pelatih: "Antonio Conte", logo: "png/napoli-footballlogos-org.png", 
        kiper: ["A. Meret - 1 - GK", "V. Milinković-Savić - 32 - GK"], def: ["A. Rrahmani - 13 - CB", "A. Buongiorno - 4 - CB", "G. Di Lorenzo - 22 - RB", "M. Olivera - 17 - LB"], mid: ["S. Lobotka - 68 - CDM", "A. Zambo Anguissa - 99 - CM", "S. McTominay - 8 - CM", "K. De Bruyne - 11 - AM"], att: ["R. Lukaku - 9 - ST", "D. Neres - 7 - RW", "K. Kvaratskhelia - 77 - LW", "R. Højlund - 19 - ST"] },
    { id: 18, klub: "Atalanta", negara: "Italia", pelatih: "Gian Piero Gasperini", logo: "png/atalanta-footballlogos-org.png", 
        kiper: ["M. Carnesecchi - 29 - GK", "F. Rossi - 31 - GK"], def: ["G. Scalvini - 42 - CB", "B. Djimsiti - 19 - CB", "O. Kossounou - 3 - CB", "R. Bellanova - 16 - RWB"], mid: ["T. Koopmeiners - 7 - CM", "M. De Roon - 15 - CDM", "M. Pašalić - 8 - AM"], att: ["G. Scamacca - 90 - ST", "A. Lookman - 11 - LW", "C. De Ketelaere - 17 - AM", "É. Touré - 13 - ST"] },
    { id: 19, klub: "AFC Bournemouth", negara: "Inggris", pelatih: "Andoni Iraola", logo: "png/logo-bournemouth-fc-png-afc-bournemouth-2013-svg-170.png", 
        kiper: ["D. Petrović - 1 - GK", "W. Dennis - 40 - GK"], def: ["M. Senesi - 5 - CB", "B. Diakité - 18 - CB", "A. Truffert - 3 - LB", "J. Araujo - 2 - RB"], mid: ["L. Cook - 4 - CDM", "A. Scott - 8 - CM", "R. Christie - 10 - AM", "T. Adams - 12 - CDM"], att: ["Evanilson - 9 - ST", "J. Kluivert - 19 - LW", "A. Semenyo - 24 - RW", "A. Adli - 21 - RW"] },
    { id: 20, klub: "Sporting CP", negara: "Portugal", pelatih: "Rúben Amorim", logo: "png/sporting-cp-portugal-footballlogos-org.png", 
        kiper: ["A. Silva - 1 - GK", "J. Virgínia - 12 - GK"], def: ["G. Inácio - 25 - CB", "Z. Debast - 6 - CB", "Matheus Reis - 2 - LB", "I. Fresneda - 22 - RB"], mid: ["M. Hjulmand - 42 - CDM", "H. Morita - 5 - CM", "P. Gonçalves - 8 - AM", "D. Bragança - 23 - CM"], att: ["F. Gyökeres - 9 - ST", "G. Catamo - 10 - RW", "F. Trincão - 17 - LW", "G. Quenda - 7 - RW"] }
];

// Data Berita (Tidak Berubah)
const newsData = [
    { 
        id: 1, judul: "Kylian Mbappé Resmi ke Real Madrid!", 
        deskripsi: "Transfer paling ditunggu akhirnya terjadi. Bintang Prancis ini bergabung dengan Madrid secara gratis dari PSG setelah saga transfer yang panjang. Kontrak lima tahun dan menjadi wajah baru klub.", 
        gambar: "png/mbappetoreal.jpg", 
        imageLarge: "png/mbappetoreal.jpg" // Gunakan gambar yang sama untuk large jika tidak ada versi besar
    },
    { 
        id: 2, judul: "Liverpool Kontrak Arne Slot sebagai Pelatih Baru", 
        deskripsi: "Setelah era Jurgen Klopp berakhir, pelatih asal Belanda, Arne Slot dari Feyenoord, mengambil alih kemudi The Reds. Klub optimis dengan masa depan di bawah taktik menyerang Slot.", 
        gambar: "png/arneslot.jpeg", // Path diperbarui
        imageLarge: "png/arneslot.jpeg" // Path diperbarui
    },
    { 
        id: 3, judul: "Barcelona Angkat Hansi Flick, Janji Gaya Menyerang", 
        deskripsi: "Mantan pelatih Bayern München dan Timnas Jerman ini ditunjuk menggantikan Xavi. Flick siap mengembalikan kejayaan Barca di La Liga dengan filosofi tiki-taka yang baru dan dinamis.", 
        gambar: "png/hansiflik.jpg", // Path diperbarui
        imageLarge: "png/hansiflik.jpg" // Path diperbarui
    },
];

// Data Semua Pemain (Tidak Berubah)
const allPlayers = clubData.flatMap(club => {
    const allSquad = [].concat(club.kiper, club.def, club.mid, club.att).filter(p => p);
    return allSquad.map(playerInfo => {
        const [nama, nomor, posisi] = playerInfo.split(' - ').map(s => s.trim());
        const playerId = `${nama}-${club.klub}`;
        
        // Simulasikan data statistik, status absen, dan deskripsi
        let stats = { '2024/2025': { goals: 0, assists: 0, games: 0 } };
        let statusAbsen = null;
        let deskripsi = `Pemain ${nama} berposisi ${posisi} di klub ${club.klub}.`;

        // Contoh simulasi data yang spesifik/unik (Anda bisa mengembangkannya)
        if (nama === 'K. Lee') { // PSG
            stats = null; // Contoh kasus statistik kosong
            statusAbsen = 'Cedera Engkel (2 Minggu)';
            deskripsi = 'Playmaker serba bisa dari Korea Selatan. Sedang dalam masa pemulihan.';
        } else if (nama === 'E. Haaland') { // Man City
            stats = { '2024/2025': { goals: 25, assists: 5, games: 30 } };
        } else if (nama === 'M. Thuram' && club.klub === 'Internazionale') {
            statusAbsen = 'Sanksi Kartu Merah (1 Laga)';
        }

        return {
            id: playerId,
            nama,
            nomor: parseInt(nomor),
            posisi,
            klub: club.klub,
            negara: club.negara,
            pelatih: club.pelatih,
            statusAbsen: statusAbsen,
            description: deskripsi,
            stats: stats // Tambahkan stats, statusAbsen, dan deskripsi ke objek pemain
        };
    });
});


/* ================================================= */
/* === ELEMENT DOM & LISTENERS (DIPERBARUI) === */
/* ================================================= */

const contentTabs = {
    'daftar-klub': document.getElementById('daftar-klub-content'),
    'cari-klub-pemain': document.getElementById('cari-klub-pemain-content'),
    'filter-data': document.getElementById('filter-data-content'),
    'berita': document.getElementById('berita-content')
};

const clubModal = document.getElementById('clubModal');
const newsModal = document.getElementById('newsModal');
const modalClubContentDetail = document.getElementById('modal-content-detail');
const modalNewsContent = document.getElementById('news-modal-content');

const menuItems = document.querySelectorAll('.menu-item');

// Tutup modal secara umum (dengan ID)
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Tutup modal saat klik di luar area
window.onclick = function(event) {
    if (event.target === clubModal) {
        clubModal.style.display = 'none';
    }
    if (event.target === newsModal) {
        newsModal.style.display = 'none';
    }
}

// Handler Navigasi Tab
menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        const menu = this.getAttribute('data-content');
        if (contentTabs[menu]) {
             navigate(menu);
        }
    });
});

// setActiveMenu - Menangani Kelas Aktif Navigasi
function setActiveMenu(activeMenu) {
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-content') === activeMenu) {
            item.classList.add('active');
        }
    });
}

// FUNGSI NAVIGASI
function navigate(menu) {
    setActiveMenu(menu);

    Object.keys(contentTabs).forEach(key => {
        const tabElement = contentTabs[key];
        if (tabElement) {
            tabElement.classList.remove('active-content');
        }
    });

    const activeContentDiv = contentTabs[menu];
    if (activeContentDiv) {
        activeContentDiv.classList.add('active-content');
        
        switch (menu) {
            case 'daftar-klub':
                renderDaftarKlub(); 
                break;
            case 'berita':
                renderNews();
                break;
            case 'cari-klub-pemain':
                renderSearch(activeContentDiv);
                break;
            case 'filter-data':
                renderFilter(activeContentDiv); 
                break;
        }
    }
}

// Fungsi pembantu untuk membuat baris tabel pemain di modal klub
function createPlayerTableRow(playerString, clubName) {
    const [nama, nomor, posisi] = playerString.split(' - ').map(s => s.trim());
    const playerId = `${nama}-${clubName}`; 
    
    // Cari status absen dari allPlayers yang sudah diperkaya datanya
    const playerDetail = allPlayers.find(p => p.id === playerId);
    const statusAbsen = playerDetail ? playerDetail.statusAbsen : null;
    const status = statusAbsen ? `<span class="status-absen">(${statusAbsen})</span>` : '';

    return `
        <tr onclick="showPlayerDetail('${playerId.replace(/'/g, "\\'")}')" style="cursor: pointer;">
            <td>${nama} ${status}</td>
            <td>${nomor}</td>
            <td>${posisi}</td>
            <td><button onclick="event.stopPropagation(); showPlayerDetail('${playerId.replace(/'/g, "\\'")}')">Detail</button></td>
        </tr>
    `;
}

/* ================================================= */
/* === FUNGSI RENDER HALAMAN === */
/* ================================================= */

// 1. RENDER NEWS (Tidak Berubah Signifikan)
function renderNews() {
    const newsListDiv = document.getElementById('newsList'); 
    if (!newsListDiv) return;

    let html = '';
    
    newsData.forEach((item, index) => {
        const isReversed = index % 2 !== 0 ? 'news-item-reversed' : '';
        html += `
            <div class="news-item ${isReversed}" onclick="showNewsDetail(${item.id})">
                <div class="news-thumbnail-container">
                    <img src="${item.gambar}" alt="${item.judul}" class="news-thumbnail" onerror="this.onerror=null;this.src='png/placeholder.jpg';">
                </div>
                <div class="news-info">
                    <h3>${item.judul}</h3>
                    <p>${item.deskripsi.substring(0, 100)}...</p>
                    <button class="read-more-button">Baca Selengkapnya</button>
                </div>
            </div>
        `;
    });
    
    newsListDiv.innerHTML = html;
}

// 2. RENDER DAFTAR KLUB (Tidak Berubah Signifikan)
function renderDaftarKlub() {
    const tableBody = document.getElementById('clubTableBody');
    if (!tableBody) return;

    let html = '';
    
    clubData.forEach(club => {
        html += `
            <tr>
                <td>${club.id}</td>
                <td>
                    <img src="${club.logo}" alt="Logo ${club.klub}" class="club-logo-small" onerror="this.onerror=null;this.src='png/placeholder.jpg';">
                    <span class="player-link" onclick="showClubDetail(${club.id})">${club.klub}</span>
                </td>
                <td>${club.negara}</td>
                <td>${club.pelatih}</td>
                <td><button onclick="showClubDetail(${club.id})">Lihat Skuad</button></td>
            </tr>
        `;
    });

    tableBody.innerHTML = html;
}

// 3. RENDER PENCARIAN (Tidak Berubah Signifikan)
function renderSearch(contentDiv) {
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.innerHTML = '<p>Silakan masukkan nama klub atau pemain untuk mencari.</p>';
    }
    document.getElementById('searchInput').setAttribute('onkeyup', 'performSearch()');
}

// 4. RENDER FILTER (Tidak Berubah Signifikan)
function renderFilter(contentDiv) {
    const uniqueNegara = [...new Set(clubData.map(c => c.negara))].sort();
    const uniquePosisi = [...new Set(allPlayers.map(p => p.posisi))].sort();

    const filterNegara = document.getElementById('filterNegara');
    const filterPosisi = document.getElementById('filterPosisi');

    filterNegara.innerHTML = '<option value="">Filter Berdasarkan Negara</option>';
    uniqueNegara.forEach(n => {
        filterNegara.innerHTML += `<option value="${n}">${n}</option>`;
    });

    filterPosisi.innerHTML = '<option value="">Filter Berdasarkan Posisi</option>';
    uniquePosisi.forEach(p => {
        filterPosisi.innerHTML += `<option value="${p}">${p}</option>`;
    });

    const filterResults = document.getElementById('filterResults');
    if (filterResults) {
        filterResults.innerHTML = '<p>Tabel hasil filter akan ditampilkan di bawah.</p>';
    }
}


/* ================================================= */
/* === FUNGSI LOGIKA (MODAL BERITA, KLUB, PEMAIN) === */
/* ================================================= */

// MODAL NEWS (Tidak Berubah Signifikan)
function showNewsDetail(newsId) {
    const newsItem = newsData.find(item => item.id === newsId);
    if (!newsItem) return;

    modalNewsContent.innerHTML = `
        <div class="news-modal-content-inner">
            <img src="${newsItem.imageLarge || newsItem.gambar}" alt="${newsItem.judul}" class="news-modal-image" onerror="this.onerror=null;this.src='png/placeholder.jpg';">
            <h3>${newsItem.judul}</h3>
            <p>${newsItem.deskripsi}</p>
        </div>
    `;
    newsModal.style.display = 'block';
}

// MODAL CLUB DETAIL (Tidak Berubah Signifikan)
function showClubDetail(clubId) {
    const club = clubData.find(c => c.id === clubId);
    if (!club) return;

    let html = `
        <div class="modal-club-header">
            <img src="${club.logo}" alt="Logo ${club.klub}" class="club-logo-large" onerror="this.onerror=null;this.src='png/placeholder.jpg';">
            <h2>${club.klub}</h2>
        </div>
        <p><strong>Negara:</strong> ${club.negara} | <strong>Pelatih:</strong> ${club.pelatih}</p>
        
        <h3 style="margin-top: 20px;">Daftar Skuad Inti</h3>
    `;

    const renderTableSection = (title, players, clubName) => {
        if (!players || players.length === 0) return '';
        
        if (typeof players[0] === 'string') {
            const tableRows = players.map(p => createPlayerTableRow(p, clubName)).join('');
            
            return `
                <div class="squad-section">
                    <h4>${title} (${players.length} Pemain)</h4>
                    <table class="player-squad-table">
                        <thead>
                            <tr>
                                <th>Nama Pemain</th>
                                <th style="width: 15%;">Nomor</th>
                                <th style="width: 20%;">Posisi</th>
                                <th style="width: 15%;">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>${tableRows}</tbody>
                    </table>
                </div>
            `;
        }
        return '';
    };

    html += renderTableSection('Penyerang', club.att, club.klub);
    html += renderTableSection('Pemain Tengah', club.mid, club.klub);
    html += renderTableSection('Belakang/Defender', club.def, club.klub);
    html += renderTableSection('Kiper', club.kiper, club.klub);
    
    modalClubContentDetail.innerHTML = html;
    clubModal.style.display = 'block';
}

// MODAL PLAYER DETAIL (FUNGSI KRITIS YANG DIREVISI)
function showPlayerDetail(playerId) {
    // Cari pemain berdasarkan ID unik (Nama-Klub)
    const player = allPlayers.find(p => p.id === playerId);
    const modalContentDetail = document.getElementById('modal-content-detail');

    if (!player) {
        modalContentDetail.innerHTML = '<p>Detail pemain tidak ditemukan.</p>';
        clubModal.style.display = 'block';
        return;
    }

    // Ambil data dari objek player yang sudah diperkaya
    const club = clubData.find(c => c.klub === player.klub);
    
    // --- Logika Statistik (Perbaikan Fokus Utama) ---
    const stats2425 = player.stats ? player.stats['2024/2025'] : null;
    const goals = stats2425 && stats2425.goals !== undefined ? stats2425.goals : 0;
    const assists = stats2425 && stats2425.assists !== undefined ? stats2425.assists : 0;
    const games = stats2425 && stats2425.games !== undefined ? stats2425.games : 0;

    let statsContent;
    
    // ✅ PERBAIKAN: Menghilangkan pesan spesifik "statistik ini belum dimasukan di data base"
    if (!stats2425) {
        statsContent = `<p>Statistik belum tersedia untuk musim ini.</p>`;
    } else {
        statsContent = `
            <p><strong>Bermain:</strong> ${games} Laga</p>
            <p><strong>Goal:</strong> ${goals}</p>
            <p><strong>Assist:</strong> ${assists}</p>
        `;
    }

    // Status Absen
    const statusText = player.statusAbsen ? `<span class="status-absen">${player.statusAbsen}</span>` : 'Tidak Absen';
    
    // Tombol Kembali
    const backButton = club ? 
        `<button class="read-more-button" style="margin-top: 20px;" onclick="showClubDetail(${club.id})">
            Kembali ke Skuad ${club.klub}
        </button>` : '';

    modalContentDetail.innerHTML = `
        <div class="modal-player-header">
            <h2>${player.nama} (#${player.nomor})</h2>
        </div>
        
        <div class="player-detail-section">
            <p><strong>Klub Saat Ini:</strong> ${player.klub} (${player.negara})</p>
            <p><strong>Posisi Utama:</strong> ${player.posisi}</p>
            <p><strong>Status Absen:</strong> ${statusText}</p>
        </div>

        <h4>Statistik Musim 2024/2025:</h4>
        <div class="stats-box">
            ${statsContent}
        </div>

        <h4>Deskripsi Pemain:</h4>
        <p>${player.description || 'Tidak ada deskripsi yang tersedia.'}</p>
        
        ${backButton}
    `;

    clubModal.style.display = 'block';
}


/* ================================================= */
/* === FUNGSI PENCARIAN & FILTER (TIDAK BERUBAH SIGNIFIKAN) === */
/* ================================================= */

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';
    
    if (!query) {
        resultsDiv.innerHTML = '<p>Silakan masukkan nama klub atau pemain untuk mencari.</p>';
        return;
    }

    // 1. Cari Klub
    const clubResults = clubData.filter(klub => 
        klub.klub.toLowerCase().includes(query) || klub.pelatih.toLowerCase().includes(query)
    );

    // 2. Cari Pemain
    const playerResults = allPlayers.filter(pemain => 
        pemain.nama.toLowerCase().includes(query)
    );

    let html = `<h3>Hasil Pencarian untuk "${query}"</h3>`;

    // Tampilkan Hasil Klub
    html += '<h4>⚽ Hasil Klub:</h4>';
    if (clubResults.length > 0) {
        html += '<table class="club-table">';
        clubResults.forEach(klub => {
            html += `
                <tr>
                    <td><img src="${klub.logo}" class="club-logo-small" alt="Logo" onerror="this.onerror=null;this.src='png/placeholder.jpg';">${klub.klub}</td>
                    <td>${klub.negara}</td>
                    <td><button onclick="showClubDetail(${klub.id})">Lihat Skuad</button></td>
                </tr>
            `;
        });
        html += '</table>';
    } else {
        html += '<p>Tidak ada klub yang ditemukan.</p>';
    }

    // Tampilkan Hasil Pemain
    html += '<h4 style="margin-top: 20px;">🏃 Hasil Pemain:</h4>';
    if (playerResults.length > 0) {
        html += '<table class="player-squad-table">';
        html += '<thead><tr><th>Nama Pemain</th><th>Klub</th><th>Posisi</th><th>Detail</th></tr></thead><tbody>';
        playerResults.forEach(pemain => {
            const playerId = `${pemain.nama}-${pemain.klub}`; 
            html += `
                <tr>
                    <td>${pemain.nama}</td>
                    <td>${pemain.klub}</td>
                    <td>${pemain.posisi}</td>
                    <td><button onclick="showPlayerDetail('${playerId.replace(/'/g, "\\'")}')">Detail</button></td>
                </tr>
            `;
        });
        html += '</tbody></table>';
    } else {
        html += '<p>Tidak ada pemain yang ditemukan.</p>';
    }

    resultsDiv.innerHTML = html;
}

function terapkanFilter() { 
    const negara = document.getElementById('filterNegara').value;
    const posisi = document.getElementById('filterPosisi').value;
    const resultsDiv = document.getElementById('filterResults');

    let filteredPlayers = allPlayers.filter(player => {
        const matchNegara = !negara || player.negara === negara;
        const matchPosisi = !posisi || player.posisi === posisi;
        return matchNegara && matchPosisi;
    });

    if (filteredPlayers.length === 0) {
        resultsDiv.innerHTML = '<p>Tidak ada pemain yang cocok dengan filter yang Anda pilih.</p>';
        return;
    }

    // Tampilkan hasil
    let html = `<h4>Hasil Filter Pemain (${filteredPlayers.length} Pemain):</h4>`;
    html += '<table class="club-table">';
    html += '<thead><tr><th>Nama Pemain</th><th>Klub</th><th>Negara</th><th>Nomor</th><th>Posisi</th><th>Detail</th></tr></thead>';
    html += '<tbody>';
    
    filteredPlayers.forEach(player => {
        const playerId = `${player.nama}-${player.klub}`; 
        
        html += `
            <tr>
                <td><span class="player-link" onclick="showPlayerDetail('${playerId.replace(/'/g, "\\'")}')">${player.nama}</span></td>
                <td>${player.klub}</td>
                <td>${player.negara}</td>
                <td>${player.nomor}</td>
                <td>${player.posisi}</td>
                <td><button onclick="showPlayerDetail('${playerId.replace(/'/g, "\\'")}')">Detail</button></td>
            </tr>
        `;
    });
    html += '</tbody></table>';
    resultsDiv.innerHTML = html;
}


// Initial Load: Render data awal dan tampilkan tab default
document.addEventListener('DOMContentLoaded', () => {
    navigate('berita'); 
    renderDaftarKlub();
});