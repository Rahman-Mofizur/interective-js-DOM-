console.log("Success!");

//  1. Id find out
console.log(document.getElementById("place-title").innerText);
//   console.log(document.getElementsByClassName("countries").innerText);
var favCountryCollection = document.getElementsByClassName("countries");
//   console.log(favCountryCollection);
favCountryCollection[2].innerText = "Bangladesh"; // Changing text through JS
for (let favCountry of favCountryCollection) {
  console.log(favCountry.innerText);
}

document.getElementById("place-title").style.textAlign = "center";

// 2. Hover Efect on Place Title
var title = document.getElementById("place-title");
title.setAttribute("title", "UAE is a small country with vast wealth");

// 3. Query Selector
console.log("Class: fav-fruits = ", document.querySelectorAll(".fav-fruits"));
console.log(
  "Class: fav-fruits er list items = ",
  document.querySelectorAll(".fav-fruits li")
);

// 4. Section styles using JS
var sections = document.querySelectorAll("section");
for (let section of sections) {
  section.style.border = "2px solid steelblue";
  section.style.marginBottom = "5px";
  section.style.padding = "5px";
  section.style.borderRadius = "10px";
}
