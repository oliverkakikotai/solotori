'use script';
var clicked = false;

function changeStyle() {
  var button = document.querySelector('.like');

  if (!clicked) {
    button.style.backgroundColor = '#000';
    button.style.color = '#fff';
  } else {
    button.style.backgroundColor = '#fff';
    button.style.color = '#000';
  }

  clicked = !clicked;
}
const container = document.querySelector('.container');
const labels = document.querySelectorAll('.label');

container.addEventListener('scroll', function () {
  const containerHeight = container.offsetHeight;
  const containerScroll = container.scrollTop;
  const containerMiddle = containerScroll + containerHeight / 2;

  labels.forEach((label) => {
    const labelOffset = label.offsetTop - container.offsetTop;
    const labelHeight = label.offsetHeight;

    if (
      labelOffset - 10 <= containerMiddle &&
      labelOffset + labelHeight + 10 >= containerMiddle
    ) {
      label.classList.add('labelbig');
      label.classList.remove('labelsmall');
    } else {
      label.classList.add('labelsmall');
      label.classList.remove('labelbig');
    }
  });
});
