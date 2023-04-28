let sectionBlocks = document.querySelectorAll('.section-block');

sectionBlocks.forEach(function(sectionBlock) {
  sectionBlock.addEventListener('click', function() {
    let insideList = sectionBlock.querySelector('.inside-list');
    insideList.classList.toggle('active');
  });
});
