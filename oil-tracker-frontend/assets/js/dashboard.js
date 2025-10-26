// Dashboard JS: handle oil tracker and health suggestions

let totalOilConsumed = 0; // Track total monthly oil

const oilForm = document.getElementById("oilForm");
const oilUsedSpan = document.getElementById("oilUsed");
const suggestedOilSpan = document.getElementById("suggestedOil");
const oilSuggestionsDiv = document.getElementById("oilSuggestions");

const healthForm = document.getElementById("healthForm");
const bmiInput = document.getElementById("bmi");
const cholInput = document.getElementById("cholesterol");

// Default monthly suggested intake in ml
const DEFAULT_SUGGESTED = 1200;

// Handle Oil Tracker Submission
oilForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const oilValue = parseInt(document.getElementById("oilConsumed").value);

  if(!isNaN(oilValue) && oilValue > 0) {
    totalOilConsumed += oilValue;  // Sum multiple entries
    oilUsedSpan.textContent = totalOilConsumed;
    suggestedOilSpan.textContent = DEFAULT_SUGGESTED;
    document.getElementById("oilConsumed").value = ""; // Clear input
  }
});

// Handle Health Metrics Submission
healthForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const bmi = parseFloat(bmiInput.value);
  const chol = parseInt(cholInput.value);
  
  let suggestions = "";
  
  if(!isNaN(bmi)) {
    if(bmi < 16) suggestions += "<p>Your BMI is Dangerously Low. Increase healthy oil intake slightly.</p>";
    else if(bmi <= 18.5) suggestions += "<p>Your BMI is Low. Moderate oil intake recommended.</p>";
    else if(bmi <= 24.9) suggestions += "<p>Your BMI is Normal. Maintain healthy oil intake.</p>";
    else if(bmi <= 30) suggestions += "<p>Your BMI is High. Reduce oil intake.</p>";
    else suggestions += "<p>Your BMI is Dangerously High. Significantly reduce oil intake.</p>";
  }

  if(!isNaN(chol)) {
    if(chol < 120) suggestions += "<p>Cholesterol Dangerously Low: Maintain balanced diet.</p>";
    else if(chol <= 159) suggestions += "<p>Cholesterol Low: Maintain balanced diet.</p>";
    else if(chol <= 199) suggestions += "<p>Cholesterol Normal: Good!</p>";
    else if(chol <= 239) suggestions += "<p>Cholesterol High: Reduce oil intake.</p>";
    else suggestions += "<p>Cholesterol Dangerously High: Significantly reduce oil intake.</p>";
  }

  oilSuggestionsDiv.innerHTML = suggestions || "<p>Enter values to get suggestions.</p>";
});