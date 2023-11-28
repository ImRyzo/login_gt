// Variabel untuk menyimpan status tema gelap
var darkThemeEnabled = false;

// Fungsi untuk mengganti tema
function toggleTheme() {
    // Mengubah status tema
    darkThemeEnabled = !darkThemeEnabled;

    // Menambah atau menghapus kelas 'dark-theme' pada elemen body
    document.body.classList.toggle('dark-theme', darkThemeEnabled);

    // Mengganti teks dan animasi pada tombol tema
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.textContent = darkThemeEnabled ? '☀️' : '🌙';
    themeToggle.style.transform = darkThemeEnabled ? 'rotate(180deg)' : 'rotate(0)';

    // Menyimpan preferensi tema pada localStorage
    localStorage.setItem('darkThemeEnabled', darkThemeEnabled);
}

// Fungsi untuk memvalidasi login
function validateLogin() {
    // Mengambil nilai dari input username dan password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Memeriksa apakah kedua input tidak kosong
    if (username !== '' && password !== '') {
        // Menampilkan pesan sukses jika login berhasil
        alert('Login successful!');
    } else {
        // Menampilkan pesan kesalahan jika salah satu atau kedua input kosong
        alert('Please enter both username and password.');
    }
}

// Mengambil preferensi tema yang disimpan sebelumnya dari localStorage
var storedTheme = localStorage.getItem('darkThemeEnabled');

// Jika preferensi tema tersedia dan bernilai 'true', maka terapkan tema gelap
if (storedTheme && storedTheme === 'true') {
    toggleTheme();
}

// Jika browser mendukung preferensi tema gelap dan preferensi belum disetel menjadi 'false',
// maka terapkan tema gelap sebagai tema default
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && storedTheme !== 'false') {
    toggleTheme();
}
