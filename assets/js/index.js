document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
 
$(".bars-icon").on("click", function () {
    $(".menu").fadeToggle(100, "linear");
});