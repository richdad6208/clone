const questionList = document.querySelectorAll(".question__item");

questionList.forEach((item, index, array) =>
  item.addEventListener("click", () => {
    array.forEach((innerItem, innerIndex) => {
      if (index !== innerIndex) innerItem.removeAttribute("data-active");
    });
    item.toggleAttribute("data-active");
  })
);
