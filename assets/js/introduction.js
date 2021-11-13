const tooltip = document.querySelectorAll(".tooltip");

// const tooltipArr = [...tooltip];

tooltip.forEach(function (element, index) {
  const aElement = document.createElement("a");
  const spanElement = document.createElement("span");
  const imgElement = document.createElement("img");

  if (element.dataset.tooltipType === "text") {
    //   adding class to span element
    spanElement.classList.add("tooltip__box", "tooltip__box--text");
    // setting atribute as a link
    aElement.setAttribute("href", element.dataset.url);
    // <a> element content
    aElement.innerText = element.innerText;
    element.innerText = "";
    // tooltip box content
    spanElement.innerText = element.dataset.tooltipContent;
    // appendChild
    element.appendChild(aElement);
    element.appendChild(spanElement);
  } else if (element.dataset.tooltipType === "image") {
    //   adding class to span and img element
    spanElement.classList.add("tooltip__box", "tooltip__box--image");
    imgElement.classList.add("tooltip__image");
    // setting atribute for <a> and <img> element
    aElement.setAttribute("href", element.dataset.url);
    imgElement.setAttribute("src", element.dataset.tooltipContent);
    // <a> element content
    aElement.innerText = element.innerText;
    element.innerText = "";
    // appendChild
    element.appendChild(aElement);
    element.appendChild(spanElement);
    spanElement.appendChild(imgElement);
  }
});
