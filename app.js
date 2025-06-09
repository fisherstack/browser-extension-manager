const toggles = document.querySelectorAll(".toggle");

toggles.forEach((element) => {
  element.addEventListener("click", (el) => {
    const target = el.currentTarget;
    console.log("toggle = ", target);
    target.toggleAttribute("data-toggle-on");
  });
});
