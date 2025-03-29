document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Tampilkan alert sebagai konfirmasi
    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);

    // Reset form setelah pengiriman
    document.getElementById('contactForm').reset();
});
