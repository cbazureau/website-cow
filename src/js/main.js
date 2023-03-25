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

let index = 0,
  interval = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

for (const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);

    setInterval(() => animate(star), 2000);
  }, index++ * (interval / 3));
}
