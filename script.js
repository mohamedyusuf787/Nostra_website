// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['"Playfair Display"', 'serif'],   // <- default font
//       },
//     },
//   },
// }

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


function toggleFilter() {
    const panel = document.getElementById("filterPanel");
    panel.classList.toggle("hidden");
}

document.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", function () {
        let group = this.parentNode.querySelectorAll(".option");
        group.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});

function toggleFilter() {
    const panel = document.getElementById("filterPanel");
    panel.classList.toggle("hidden");
}


