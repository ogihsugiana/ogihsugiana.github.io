const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', debounce(handleSearch, 300));

function debounce(func, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}

function handleSearch() {
    const searchTerm = searchInput.value.trim();

    if (searchTerm.length === 0) {
        searchResults.innerHTML = '';
        return;
    }

    // Ganti dengan URL API pihak ketiga yang sesuai
    const apiUrl = `https://api.example.com/search?q=${encodeURIComponent(searchTerm)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayResults(results) {
    searchResults.innerHTML = '';

    if (results.length === 0) {
        const noResultsItem = document.createElement('li');
        noResultsItem.textContent = 'Tidak ada hasil ditemukan';
        searchResults.appendChild(noResultsItem);
    } else {
        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = result.title;
            searchResults.appendChild(listItem);
        });
    }
}

    // Event listener untuk input pencarian dengan tombol Enter
    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleSearch(); // Panggil fungsi pencarian saat tombol Enter ditekan
        }
    });

        // Dummy biodata
        const biodata = [
            {
                nomor: "4564240582",
                produk: "SKIDGRO",
                terdaftar: "BPOM"
            },
            {
                nomor: "48257341784",
                produk: "SKIDGRO",
                terdaftar: "BPOM"
            },
            {
                nomor: "109536373848",
                produk: "SKIDGRO",
                terdaftar: "BPOM"
            }
        ];

        // Event listener untuk input pencarian
        document.getElementById("search-input").addEventListener("input", function() {
            const searchResults = document.getElementById("search-results");
            searchResults.innerHTML = "";

            const query = this.value.toLowerCase();

            // Mencari biodata yang sesuai dengan kata kunci
            biodata.forEach((data, index) => {
                if (data.nomor.toLowerCase().includes(query) || data.terdaftar.toLowerCase().includes(query)) {
                    const listItem = document.createElement("li");
                    listItem.textContent = `No Registrasi: ${data.nomor}, Produk: ${data.produk}, Terdaftar: ${data.terdaftar}`;
                    
                    // Menambahkan latar belakang putih pada elemen list
                    listItem.style.backgroundColor = "#fff"; // Latar belakang putih
                    listItem.style.padding = "14px";
                    listItem.style.borderRadius = "4px";
                    listItem.style.marginBottom = "8px"; // Spasi antara hasil pencarian

                    searchResults.appendChild(listItem);
                }
            });
        });

// Fungsi untuk menambahkan isi panduan dengan JavaScript
function addSearchGuide() {
    const guideContainer = document.getElementById("search-guide-container");
    const guideContent = `
        <p>1. Ketik kata kunci pencarian di dalam kotak pencarian di atas.</p>
        <p>2. Tekan Enter atau klik tombol pencarian untuk melihat hasil.</p>
        <p>3. Hasil pencarian akan ditampilkan di bawah kotak pencarian.</p>
        <p>4. Klik salah satu hasil untuk melihat detailnya.</p>
    `;

    guideContainer.innerHTML += guideContent;
    
}

// Panggil fungsi untuk menambahkan panduan saat halaman dimuat
// Fungsi untuk mengatur sumber gambar logo
function setLogoSource() {
    const logo = document.getElementById("logo");
    logo.src = "asset/skidgro.png"; // Ganti dengan nama dan lokasi gambar logo Anda
    logo.alt = "Logo";
    logo.style.width = "200px"; // Ubah ukuran lebar logo sesuai kebutuhan Anda
    logo.style.height = "80px"; // Ubah ukuran tinggi logo sesuai kebutuhan Anda
    logo.style.marginBottom = "40px"; // Tambahkan spasi antara logo dan elemen berikutnya
}

// Panggil fungsi untuk menambahkan panduan dan mengatur sumber gambar logo saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    addSearchGuide();
    setLogoSource();
});

// Event listener untuk tombol "Kembali ke Beranda"
document.getElementById("back-to-home").addEventListener("click", function () {
    // Gantilah URL dengan URL halaman beranda Anda
    window.location.href = "#"; // Gantilah dengan URL beranda Anda
});
