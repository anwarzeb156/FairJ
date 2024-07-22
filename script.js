document.addEventListener('DOMContentLoaded', () => {
    // QR code generation (you need to add QR code generation logic here)
    const qrCodeContainer = document.getElementById('qrcode');
    const whatsappUrl = "https://wa.me/1234567890"; // Replace with your WhatsApp number
    new QRCode(qrCodeContainer, whatsappUrl);
});
