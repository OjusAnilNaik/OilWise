// Dummy state-wise data
const stateData = [
  { state: "Maharashtra", avgOil: 480 },
  { state: "Karnataka", avgOil: 520 },
  { state: "Tamil Nadu", avgOil: 600 },
  { state: "Uttar Pradesh", avgOil: 550 },
  { state: "Gujarat", avgOil: 450 },
  { state: "Rajasthan", avgOil: 620 },
];

// Populate Table
const tableBody = document.getElementById("stateTableBody");
stateData.forEach(data => {
  let status = "";
  if (data.avgOil <= 500) status = "<span class='status-green'>Good</span>";
  else if (data.avgOil <= 600) status = "<span class='status-yellow'>Moderate</span>";
  else status = "<span class='status-red'>High</span>";

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${data.state}</td>
    <td>${data.avgOil}</td>
    <td>${status}</td>
  `;
  tableBody.appendChild(row);
});

// Create Bar Chart using Chart.js
const ctx = document.getElementById("stateChart").getContext("2d");
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: stateData.map(d => d.state),
    datasets: [{
      label: 'Average Weekly Oil (ml)',
      data: stateData.map(d => d.avgOil),
      backgroundColor: stateData.map(d => 
        d.avgOil <= 500 ? '#2e8b57' :
        d.avgOil <= 600 ? '#f4a300' : '#e74c3c'
      ),
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'State-wise Oil Consumption' }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});