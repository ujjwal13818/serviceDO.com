const elementl = document.querySelectorAll(".hidel");
const elementr = document.querySelectorAll(".hider");
const elementup = document.querySelectorAll(".hideup");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show" , entry.isIntersecting)
        })
    },
    {
        threshold:.1,
    }
)

elementl.forEach(fromLeft => {
    observer.observe(fromLeft);
})
elementr.forEach(fromright => {
    observer.observe(fromright);
})
elementup.forEach(fromup => {
    observer.observe(fromup);
})