let openBtn = document.getElementById("open");
openBtn.onclick = function () {
  document.getElementById("fullScreenNav").style.width = "100%";
};

let closeBtn = document.getElementById("close");
closeBtn.onclick = function () {
  document.getElementById("fullScreenNav").style.width = "0%";
};

let linksClose = document.querySelectorAll(".overlay-content__link");

let arrLink = Array.from(linksClose);

arrLink.forEach(
  (item) =>
    (item.onclick = () =>
      (document.getElementById("fullScreenNav").style.width = "0%"))
);
