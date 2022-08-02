document
  .getElementsByClassName("Header__scroll")[0]
  .addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });
document
  .getElementsByClassName("About__scroll")[0]
  .addEventListener("click", () => {
    document
      .getElementsByClassName("Experience_groupRenault")[0]
      .scrollIntoView({ behavior: "smooth" });
  });
