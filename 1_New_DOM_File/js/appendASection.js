// Where to add
var mainContainer = document.getElementById("main-container");

// What to be added
var addSection = document.createElement("section");

var addH1 = document.createElement("H1");
addH1.innerText = "This section is created using JavaScript";

var addUnorderedList = document.createElement("ul");

var addList1 = document.createElement("li");
addList1.innerText = "InnerText-1";

var addList2 = document.createElement("li");
addList2.innerText = "InnerText-2";

var addList3 = document.createElement("li");
addList3.innerText = "InnerText-3";

// Add the child
addSection.appendChild(addH1); // H1 added in Section

addUnorderedList.appendChild(addList1);
addUnorderedList.appendChild(addList2);
addUnorderedList.appendChild(addList3);
addSection.appendChild(addUnorderedList); // Unordered List added in Section

mainContainer.appendChild(addSection); // Section is added in Main Container
