
// قائمة الهاتف
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// إغلاق القائمة بعد اختيار قسم
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// الوضع الليلي والنهاري
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeBtn.textContent =
        document.body.classList.contains("light") ? "☾" : "☀";
});

// نسخ رقم الهاتف
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("+249 92 219 2281");
        copyBtn.textContent = "تم نسخ الرقم ✓";
    } catch (error) {
        copyBtn.textContent = "تعذر النسخ";
    }
});

// السنة الحالية
document.getElementById("year").textContent =
    new Date().getFullYear();

// زر العودة للأعلى
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display =
        window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ظهور الأقسام أثناء التمرير
const sections = document.querySelectorAll(".section");

sections.forEach(section => {
    section.classList.add("reveal");
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => observer.observe(section));
