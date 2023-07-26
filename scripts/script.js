"use strict";

const itemDisplay = document.getElementsByClassName("item");

function init() {
  displayItems();
}

init();

function displayItems() {
  const url = `https://fakestoreapi.com/products`;
  const fetchImages = async () => {
    const response = await fetch(url);
    const data = await response.json();
    addImages(data);
  };
  fetchImages();
}

function addImages(productsData) {
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    const imageUrl = productsData[i].image;
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.classList.add("product-image");
    items[i].appendChild(imageElement);
  }
}
