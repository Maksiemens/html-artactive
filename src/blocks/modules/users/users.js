function isEllipsisActive(element) {
  console.log(element.offsetWidth);
  console.log(element.scrollWidth);
  return element.offsetWidth < element.scrollWidth;
}

document.querySelectorAll('.js-ellipsis').forEach(element => {
  if (isEllipsisActive(element)) {
    element.dataset.tooltipText = element.innerText;
    element.classList.add("active-tooltip");
  }
  else {
    element.removeAttribute("data-tooltip-text");
    element.classList.remove("add-tooltip");
  }
});

