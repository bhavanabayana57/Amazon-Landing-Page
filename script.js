// Select the Shop Now button
const shopBtn = document.querySelector(".cta-btn");

// Select the Products section
const productsSection = document.getElementById("products");

// Add click event to the button
shopBtn.addEventListener("click", function () {

    // Smoothly scroll to the Products section
    productsSection.scrollIntoView({
        behavior: "smooth"
    });

});

const cartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cart-count");
const toast = document.getElementById("toast");

let count = Number(localStorage.getItem("cartCount")) || 0;
cartCount.textContent = count;

cartButtons.forEach(function(button){

    button.addEventListener("click", function(){

        if(button.textContent === "Add to Cart"){

            count++;
            cartCount.textContent = count;

            button.textContent = "Remove from Cart";
            button.style.backgroundColor = "red";

            toast.textContent = "✅ Product Added Successfully";

        }else{

            count--;

            if(count < 0){
                count = 0;
            }

            cartCount.textContent = count;

            button.textContent = "Add to Cart";
            button.style.backgroundColor = "#28a745";

            toast.textContent = "❌ Product Removed Successfully";
        }

        toast.style.display = "block";

        setTimeout(function(){
            toast.style.display = "none";
        },2000);

    });

});


// -------------------------
// Product Search
// -------------------------

const searchBox = document.getElementById("search");

const products = document.querySelectorAll(".product");

searchBox.addEventListener("keyup", function () {

    const searchValue = searchBox.value.toLowerCase();

    products.forEach(function(product){

        const productName = product.querySelector("h3").textContent.toLowerCase();

        if(productName.includes(searchValue)){

            product.style.display = "block";

        }
        else{

            product.style.display = "none";

        }

    });

});

// -------------------------
// Dark Mode
// -------------------------

const themeBtn = document.getElementById("themeBtn");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeBtn.textContent = "☀";

}

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.textContent = "☀";

        localStorage.setItem("theme","dark");

    }else{

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme","light");

    }

});
// -------------------------
// Product Filter
// -------------------------

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const category = button.dataset.category;

        products.forEach(function(product){

            if(category === "all"){

                product.style.display = "block";

            }
            else if(product.dataset.category === category){

                product.style.display = "block";

            }
            else{

                product.style.display = "none";

            }

        });

    });

});

// -------------------------
// Back To Top Button
// -------------------------

const topBtn = document.getElementById("topBtn");

// Show button when user scrolls
window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

// Scroll to top when clicked
topBtn.addEventListener("click", function(){

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// -------------------------
// Hero Slider
// -------------------------

const heroTitle = document.getElementById("hero-title");

const heroText = document.getElementById("hero-text");

const heroSlides = [

    {
        title: "Welcome to Amazon Clone",
        text: "Best Deals on Electronics"
    },

    {
        title: "Smart Watches Sale",
        text: "Up to 40% OFF"
    },

    {
        title: "Latest iPhone Deals",
        text: "Grab Your Dream Phone"
    },

    {
        title: "Wireless Earbuds",
        text: "Crystal Clear Sound Quality"
    }

];

let currentSlide = 0;

setInterval(function(){

    currentSlide++;

    if(currentSlide >= heroSlides.length){

        currentSlide = 0;

    }

    heroTitle.textContent = heroSlides[currentSlide].title;

    heroText.textContent = heroSlides[currentSlide].text;

},3000);
console.log("JavaScript Loaded");