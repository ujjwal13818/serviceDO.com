const links = document.querySelectorAll('.nav-link');
const main = document.getElementById("main");
const post = document.getElementById("post-button");
const cont = document.getElementById("contain");
post.addEventListener('click', () => {
    main.classList.toggle("job");
    cont.classList.toggle("post");
    // cont.style.visibility = "visible";
})
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      link.classList.add('active');
    });
  });
}

//note prevent default will not let you go to another url;