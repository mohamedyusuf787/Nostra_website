// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['"Playfair Display"', 'serif'],   // <- default font
//       },
//     },
//   },
// }

let cancelbtn = document.getElementById("cancelbtn")
let offerbar = document.getElementById("offer-bar")
let navbar = document.getElementById("nav_bar")
let logoemblem = document.getElementById("logo-emblem")
let logomark = document.getElementById("logo-mark")
let navlink=document.querySelector(".navbar-links")
let menubtn=document.querySelector("#menu-btn")


// cancel btn for offer bar 
cancelbtn.addEventListener("click", () => {
    offerbar.classList.toggle("hidden")
    navbar.style.backgroundColor = "#006039"
    logoemblem.style.fill = "#ffffff"
    logomark.style.fill = "#ffffff"
    navlink.style.color="#ffffff"
    menubtn.style.color="#ffffff"

}
);

// mobile menu btn functions
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

// product search list functionality
let searchbox=document.getElementById("search-box")
let categorycontainer=document.querySelector("category-cards")
let categorycard=document.querySelectorAll(".category-card")

searchbox.addEventListener("keyup",function(event){
    let enteredvalue= event.target.value.toUpperCase()

    for(count=0;count<categorycard.length;count++){
        let productname=categorycard[count].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            categorycard[count].style.display="none"
        }
        else{
            categorycard[count].style.display="block"
        }
    }
})

// filter option functionality 
const buttons = document.querySelectorAll('#filterPanel .filter-options button');
const cards = document.querySelectorAll('.category-card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // RESET all button styles
    buttons.forEach(b => {
      b.style.backgroundColor = "";
      b.style.color = "";
    });

    // APPLY highlight to clicked button
    btn.style.backgroundColor = "black";
    btn.style.color = "white";

    // FILTER PRODUCTS
    cards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// const buttons = document.querySelectorAll('.filter-options button');
// console.log("Buttons found:", buttons.length);  // debugging

// buttons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log("Clicked:", btn.dataset.filter);  // debugging
//   });
// });
