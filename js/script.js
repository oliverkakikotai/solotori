'use strict';
/*
document.addEventListener("DOMContentLoaded", function () {
  const mangaDivs = document.querySelectorAll(".mannga > div:not(.m1)");

  mangaDivs.forEach((div) => {
    const h3 = div.querySelector("h3");
    const img = div.querySelector("img");

    h3.addEventListener("click", function () {
      mangaDivs.forEach((div) => {
        if (div !== this.parentElement) {
          div.querySelector("img").style.display = "none"; // 隐藏其他图片
        }
      });

      if (img.style.display === "none") {
        img.style.display = "block"; // 点击时显示对应图片
      } else {
        img.style.display = "none"; // 再次点击时隐藏图片
      }
    });
  });
});*/

// document.addEventListener('DOMContentLoaded', function () {
//   const mangaDivs = document.querySelectorAll('.mannga > div:not(.m1)');

//   mangaDivs.forEach((div) => {
//     const h3 = div.querySelector('h3');
//     const img = div.querySelector('img');

//     h3.addEventListener('click', function () {
//       mangaDivs.forEach((otherDiv) => {
//         const otherImg = otherDiv.querySelector('img');
//         if (otherDiv !== div) {
//           otherImg.style.display = 'none'; // 隐藏其他图片
//         }
//       });
//       img.classList.toggle('view');
//       if (img.style.display === 'none') {
//         img.style.display = 'block'; // 点击时显示对应图片
//         img.style.opacity = '1'; // 将透明度设为 1
//         img.style.transform = 'scale(1)'; // 放大图片
//         img.style.height = '374px';
//         img.style.transition = '2s ease-in-out';
//       } else {
//         img.style.display = 'none'; // 再次点击时隐藏图片
//         img.style.opacity = '0'; // 将透明度设为 0
//         img.style.transform = 'scale(0)'; // 缩小图片
//         img.style.height = '0px';
//       }
//     });
//   });
// });

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

function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block'; // 显示弹窗
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none'; // 关闭弹窗
}
// const mannga = document.querySelector('.mannga');
// const mElements = document.querySelectorAll('.mannga .m');

// mElements.forEach((m) => {
//   m.addEventListener('click', function fn(e) {
//     console.log(m.querySelector('img'));

//     m.classList.toggle('view');
//   });
// });

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
