const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToogle = document.querySelector(".darkLight"),
  searchToogle = document.querySelector(".searchBox");


  modeToogle.addEventListener("click", () => {
    modeToogle.classList.toggle("active");
    body.classList.toggle("dark")
  })
  searchToogle.addEventListener("click", () => {
    searchToogle.classList.toggle("active");
  })