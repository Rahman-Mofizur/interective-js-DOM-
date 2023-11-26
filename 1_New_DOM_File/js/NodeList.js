// 5. NodeList
var fruitContainer = document.getElementById("fruit-container");
console.log(
  "Thiese are the Child Nodes of Fruit Container: ",
  fruitContainer.childNodes
);

// NodeLists doesn't work with Classes
console.log(
  "These are the Child Nodes of fav-fruits container: ",
  document.getElementsByClassName("fav-fruits").childNodes
);

// 6. Create and Append Element: [Append means adding]
var listOfFruits = document.querySelector("#fruit-container li");
// console.log("Lists of Fruits: ", listOfFruits.childNodes);

// Create a "li Element" and Add into Fruits section by Append.
var list0 = document.createElement("li");
list0.innerText = "Jackfruit";
listOfFruits.appendChild(list0);

var list1 = document.createElement("li");
list1.innerText = "Guava";
listOfFruits.appendChild(list1);

// 7. Practice: Append
var listOfCountry = document.querySelector("#countryList li");

// Create a country named Turkey
var country1 = document.createElement("li");
country1.innerText = "Turkey";

// Append the Country
listOfCountry.appendChild(country1);
