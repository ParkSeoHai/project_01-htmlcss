// Scroll to top
const scrollElement = document.querySelector(".scroll-top");
// Sự kiện croll 
window.onscroll = function() {scrollToTop()};

function scrollToTop() {{
    if(document.documentElement.scrollTop > 200) {
        scrollElement.style.display = "block";
    } else {
        scrollElement.style.display = "none";
    }
}}

scrollElement.addEventListener("click", function() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if(c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c);
    }
})