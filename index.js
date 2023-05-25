
document.body.style.backgroundColor = "silver";

var title= document.getElementById("title");
title.style.color = "green";

var h3Font = document.getElementsByTagName("h3");
for (var i = 0; i < h3Font.length; i++) {
  h3Font[i].style.textTransform = "uppercase";
}

var fruList = document.getElementById("fruList");
var newFruit = document.createElement("li");
newFruit.textContent = "Strawberry";
fruList.appendChild(newFruit);

var vegList = document.getElementById("vegList");
var newVegetable = document.createElement("li");
newVegetable.textContent = "Spinach";
vegList.appendChild(newVegetable);