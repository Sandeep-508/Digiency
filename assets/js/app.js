let btn = document.querySelector(".lg-view");
let nav = document.querySelector("#menu");

menu.addEventListener("click", () => {
    btn.classList.toggle("show");
});


function changeFilter(clickedFilter) {
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => filter.classList.remove('Color_change'));
    clickedFilter.classList.add('Color_change');
}

