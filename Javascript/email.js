// 1️⃣ تهيئة EmailJS
(function () {
  emailjs.init("UBe2G3JQms6LOgA_p"); // <-- حط الـ Public Key هنا
})();

// 2️⃣ الإمساك بالفورم
const form = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // رسالة تحميل
  messageBox.classList.remove("hidden");
  messageBox.className =
    "mt-6 text-blue-600 font-medium bg-blue-50 border border-blue-200 rounded-xl px-4 py-3";
  messageBox.innerText = "Sending your message...";

  // 3️⃣ الإرسال
  emailjs
    .sendForm(
      "service_korct6f",   // <-- Service ID
      "template_g2m07gn",  // <-- Template ID
      this
    )
    .then(
      function () {
        messageBox.className =
          "mt-6 text-green-600 font-medium bg-green-50 border border-green-200 rounded-xl px-4 py-3";
        messageBox.innerText =
          "✅ Message sent successfully. We will contact you soon.";

        form.reset();
      },
      function (error) {
        messageBox.className =
          "mt-6 text-red-600 font-medium bg-red-50 border border-red-200 rounded-xl px-4 py-3";
        messageBox.innerText =
          "❌ Something went wrong. Please try again later.";
        console.error("EmailJS Error:", error);
      }
    );
});
