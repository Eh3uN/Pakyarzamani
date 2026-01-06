const telegramLink = document.getElementById("telegram-link");
  const vpnModal = document.getElementById("vpn-modal");
  const vpnConfirm = document.getElementById("vpn-confirm");

  telegramLink.addEventListener("click", function(event) {
    event.preventDefault(); // جلوی باز شدن مستقیم لینک رو می‌گیره
    vpnModal.classList.remove("hidden"); // نمایش modal
  });

  vpnConfirm.addEventListener("click", function() {
    vpnModal.classList.add("hidden"); // مخفی کردن modal
    // باز کردن تلگرام در تب جدید
    window.open("https://t.me/USERNAME", "_blank", "noopener,noreferrer");
  });