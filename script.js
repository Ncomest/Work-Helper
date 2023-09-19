let sectionBlocks = document.querySelectorAll(".section-block");

sectionBlocks.forEach(function (sectionBlock) {
 sectionBlock.addEventListener("click", function () {
  let insideList = sectionBlock.querySelector(".inside-list");
  insideList.classList.toggle("active");

  let arrow = document.querySelector(".section-block-text");

  arrow.textContent === "ФВ выпечка: ▼"
   ? (arrow.textContent = "ФВ выпечка: ▲")
   : (arrow.textContent = "ФВ выпечка: ▼");
 });
});
