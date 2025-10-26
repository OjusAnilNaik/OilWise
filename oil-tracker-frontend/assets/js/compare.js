const oils = {
  "Sunflower Oil": {
    fat: "100g (mostly polyunsaturated)",
    smokePoint: "232°C",
    vitaminE: "41 mg per 100g",
    health: "High in omega-6; may cause imbalance if overused.",
  },
  "Mustard Oil": {
    fat: "100g (monounsaturated + omega-3)",
    smokePoint: "250°C",
    vitaminE: "19 mg per 100g",
    health: "Good for heart health, boosts metabolism.",
  },
  "Olive Oil": {
    fat: "100g (monounsaturated)",
    smokePoint: "190°C (extra virgin)",
    vitaminE: "14 mg per 100g",
    health: "Reduces bad cholesterol, best for salads and light cooking.",
  },
  "Coconut Oil": {
    fat: "100g (saturated)",
    smokePoint: "177°C",
    vitaminE: "0.1 mg per 100g",
    health: "Good for skin and hair, limited use recommended in cooking.",
  },
  "Groundnut Oil": {
    fat: "100g (monounsaturated + polyunsaturated)",
    smokePoint: "225°C",
    vitaminE: "17 mg per 100g",
    health: "Balanced oil, supports heart health.",
  }
};

document.getElementById("compareBtn").addEventListener("click", () => {
  const oil1 = document.getElementById("oil1").value;
  const oil2 = document.getElementById("oil2").value;

  const resultDiv = document.getElementById("comparisonResult");
  resultDiv.innerHTML = "";

  if (!oil1 || !oil2) {
    resultDiv.innerHTML = "<p style='color:red;'>Please select both oils!</p>";
    return;
  }

  const data1 = oils[oil1];
  const data2 = oils[oil2];

  resultDiv.innerHTML = `
    <h3>Comparison: ${oil1} 🆚 ${oil2}</h3>
    <div class="comparison-card"><strong>Fat Composition:</strong><span>${data1.fat} | ${data2.fat}</span></div>
    <div class="comparison-card"><strong>Smoke Point:</strong><span>${data1.smokePoint} | ${data2.smokePoint}</span></div>
    <div class="comparison-card"><strong>Vitamin E:</strong><span>${data1.vitaminE} | ${data2.vitaminE}</span></div>
    <div class="comparison-card"><strong>Health Notes:</strong><span>${data1.health} | ${data2.health}</span></div>
  `;
});