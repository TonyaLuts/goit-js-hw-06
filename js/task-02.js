const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

const elements = ingredients.map((el) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = el;

  console.log(liElement);

  return liElement;
});

listOfIngredients.append(...elements);
console.log(listOfIngredients);
