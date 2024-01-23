'use strict';

const container = document.querySelector('.container');
const labels = document.querySelectorAll('.label');

container.addEventListener('scroll', function checkFadeOut() {
  console.log(labels);
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

document.addEventListener('DOMContentLoaded', function () {
  const mangaDivs = document.querySelectorAll('.mannga > div:not(.m1)');

  mangaDivs.forEach((div) => {
    const h3 = div.querySelector('h3');
    const img = div.querySelector('img');

    h3.addEventListener('click', function () {
      mangaDivs.forEach((otherDiv) => {
        const otherImg = otherDiv.querySelector('img');
        if (otherDiv !== div) {
          otherImg.classList.remove('view'); // 隐藏其他图片
          otherImg.style.height = '0px'; // 收起其他图片
        }
      });

      img.classList.toggle('view'); // 切换显示和隐藏当前图片
      if (img.classList.contains('view')) {
        img.style.height = '374px'; // 展开当前图片
      } else {
        img.style.height = '0px'; // 收起当前图片
      }
    });
  });
});

const tpbtn = document.querySelector(`.tpbtn`);
tpbtn.addEventListener(`click`, function () {
  const popup = document.querySelector(`.popup`);
  popup.style.visibility = `unset`;
  document.querySelector(`.close`).addEventListener(`click`, () => {
    popup.style.visibility = `hidden`;
  });
});

// const tpbtn = document.querySelector('.tpbtn');
// tpbtn.addEventListener('click', function () {
//   const popup = document.querySelector('.popup');
//   popup.style.visibility = 'unset';

//   document.querySelector('.close').addEventListener('click', () => {
//     popup.style.visibility = 'hidden';
//   });
// });

// jQuery(document).ready(function ($) {
//   $('.pop-trigger').on('click', function (event) {
//     event.prevebtDefaoult();
//     $('.popup').addClass(is - visible);
//   });

//   $('.popup').on('click', function (event) {
//     if ($(event.target).is('.pop-close') || $(event.target).is('.popup')) {
//       event.preventDefault();
//       $(this).removeClass('is-visible');
//     }
//   });

//   $(document).keyup(function (event) {
//     if (event.which == '27') {
//       $('.popup').removeClass('.is-visiable');
//     }
//   });
// });
