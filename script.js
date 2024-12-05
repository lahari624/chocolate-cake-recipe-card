// Toggle Ingredients
const toggleIngredientsBtn = document.getElementById("toggle-ingredients");
const ingredientsList = document.getElementById("ingredients-list");

toggleIngredientsBtn.addEventListener("click", function () {
  if (ingredientsList.style.display === "none") {
    ingredientsList.style.display = "block";
    toggleIngredientsBtn.textContent = "Hide Ingredients";
  } else {
    ingredientsList.style.display = "none";
    toggleIngredientsBtn.textContent = "Show Ingredients";
  }
});

// Toggle Steps
const toggleStepsBtn = document.getElementById("toggle-steps");
const stepsList = document.getElementById("steps-list");

toggleStepsBtn.addEventListener("click", function () {
  if (stepsList.style.display === "none") {
    stepsList.style.display = "block";
    toggleStepsBtn.textContent = "Hide Steps";
  } else {
    stepsList.style.display = "none";
    toggleStepsBtn.textContent = "Show Steps";
  }
});

// Cooking Progress
const startCookingBtn = document.getElementById("start-cooking");
const steps = document.querySelectorAll("#steps-list li");
const progressBar = document.getElementById("progress-bar");
let currentStep = 0;

startCookingBtn.addEventListener("click", function () {
  if (currentStep < steps.length) {
    steps[currentStep].style.color = "green";
    progressBar.style.width = ((currentStep + 1) / steps.length) * 100 + "%";
    currentStep++;
  } else {
    alert("You have completed all the steps!");
  }
});
