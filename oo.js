// إظهار زر العودة للأعلى عند التمرير
window.onscroll = function () {
    let button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// عند الضغط على الزر، العودة للأعلى بسلاسة
document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", function() {
    console.log("Magic Technologies website loaded successfully!");

    // تفعيل زر الوضع الليلي
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // تفعيل رسالة نجاح بعد إرسال الرسالة
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("formMessage").innerText = "✅ تم إرسال رسالتك بنجاح!";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    console.log("🚀 Magic Technologies website loaded successfully!");

    // تفعيل زر الوضع الليلي مع حفظ الإعدادات
    const darkModeToggle = document.getElementById("darkModeToggle");
    const isDarkMode = localStorage.getItem("dark-mode");

    if (isDarkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    // تفعيل رسالة نجاح بعد إرسال الرسالة
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("formMessage").innerText = "✅ تم إرسال رسالتك بنجاح!";
    });
});
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("appointmentMessage").innerText = "✅ تم حجز الموعد بنجاح! سيتم التواصل معك قريبًا.";
});