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
    window.open("https://t.me/hossein_zam", "_blank", "noopener,noreferrer");
  });
   const telegramLink2 = document.getElementById("telegram-link-2");
  const telegramModal2 = document.getElementById("telegram-vpn-modal-2");
  const telegramConfirm2 = document.getElementById("telegram-vpn-confirm-2");

  telegramLink2.addEventListener("click", function (event) {
    event.preventDefault(); // جلوگیری از باز شدن مستقیم
    telegramModal2.classList.remove("hidden");
  });

  telegramConfirm2.addEventListener("click", function () {
    telegramModal2.classList.add("hidden");
    window.open(
      "https://t.me/Eh3unamm",
      "_blank",
      "noopener,noreferrer"
    );
  });
    // Mobile menu toggle
      const mobileMenuBtn = document.getElementById("mobile-menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");

      mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Close menu when a link is clicked
      const menuLinks = mobileMenu.querySelectorAll("a");
      menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
        });
      });
      
    // instagram vpn confirmation

    const instagramLink = document.getElementById("instagram-link");
  const instagramModal = document.getElementById("instagram-modal");
  const instagramConfirm = document.getElementById("instagram-confirm");

  instagramLink.addEventListener("click", function(event) {
    event.preventDefault(); // جلوی باز شدن مستقیم لینک رو می‌گیره
    instagramModal.classList.remove("hidden"); // نمایش modal
  });

 instagramConfirm.addEventListener("click", function() {
    instagramModal.classList.add("hidden"); // مخفی کردن modal
    // باز کردن تلگرام در تب جدید
    window.open("https://www.instagram.com/pakyar_zamani", "_blank", "noopener,noreferrer");
  });
