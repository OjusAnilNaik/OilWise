// ICMR recommended oil per year in ml
const ICMR_RECOMMENDED = 12000;

// Dummy person data
const users = [
  { name: "Alice", oilUsed: 10000, state: "Maharashtra" },
  { name: "Bob", oilUsed: 13000, state: "Maharashtra" },
  { name: "Charlie", oilUsed: 15000, state: "Karnataka" },
  { name: "David", oilUsed: 18000, state: "Karnataka" },
  { name: "Eva", oilUsed: 12000, state: "Tamil Nadu" }
];

// Sort users by oilUsed ascending
users.sort((a,b) => a.oilUsed - b.oilUsed);

// Badge function for person
function getPersonBadge(oilUsed) {
  if(oilUsed <= ICMR_RECOMMENDED) return "gold";
  if(oilUsed <= ICMR_RECOMMENDED*1.2) return "silver";
  if(oilUsed <= ICMR_RECOMMENDED*1.45) return "bronze";
  return "green";
}

// Populate person leaderboard
const personLeaderboard = document.getElementById("personLeaderboard");
users.forEach((user,i) => {
  const div = document.createElement("div");
  div.className = "leaderboard-entry";
  const badge = getPersonBadge(user.oilUsed);
  div.innerHTML = `
    <span>${i+1}</span>
    <span>${user.name}</span>
    <span>${user.oilUsed}</span>
    <span class="badges"><span class="badge ${badge}">${badge}</span></span>
    <span>${user.state}</span>
  `;
  personLeaderboard.appendChild(div);
});

// State averages (dummy realistic values)
const stateDataValues = {
  "Karnataka": 9000, "Kerala": 9500, "Tamil Nadu": 9700, "Maharashtra": 12000,
  "Madhya Pradesh": 12500, "Gujarat": 12800, "Rajasthan": 13000, "Andhra Pradesh": 12200,
  "Telangana": 11800, "Punjab": 12100, "Haryana": 11900, "Uttar Pradesh": 13200,
  "Bihar": 12700, "West Bengal": 12300, "Odisha": 12400, "Chhattisgarh": 12600,
  "Jharkhand": 12550, "Himachal Pradesh": 11700, "Jammu & Kashmir": 11600, "Sikkim": 11500,
  "Arunachal Pradesh": 11300, "Nagaland": 11400, "Manipur": 11200, "Mizoram": 11100,
  "Tripura": 11850, "Meghalaya": 11950, "Assam": 12050, "Goa": 12150,
  "Delhi": 12500, "Chandigarh": 12450, "Puducherry": 11900, "Lakshadweep": 11650,
  "Andaman & Nicobar": 11800, "Dadra & Nagar Haveli": 11750, "Daman & Diu": 11850, "Ladakh": 11550
};

// Prepare states array
const states = Object.keys(stateDataValues).map((stateName,i) => {
  const avg = stateDataValues[stateName];
  let badge = "green"; 
  if(avg <= ICMR_RECOMMENDED) badge="green";
  else if(avg <= ICMR_RECOMMENDED*1.2) badge="yellow";
  else badge="red";

  return { rank: i+1, name: stateName, avgOil: avg, badge: badge };
});

// Sort by avgOil ascending
states.sort((a,b) => a.avgOil - b.avgOil);
states.forEach((state,i) => state.rank = i+1); // update rank

// Populate state leaderboard
const stateLeaderboard = document.getElementById("stateLeaderboard");
states.forEach(state => {
  const div = document.createElement("div");
  div.className = "leaderboard-entry";
  div.innerHTML = `
    <span>${state.rank}</span>
    <span>${state.name}</span>
    <span>${state.avgOil}</span>
    <span class="badges"><span class="badge ${state.badge}">${state.badge}</span></span>
  `;
  stateLeaderboard.appendChild(div);
});

// Tab switching with dynamic legend
function showTab(tab) {
  const person = document.getElementById("personLeaderboard");
  const state = document.getElementById("stateLeaderboard");
  const personLegend = document.getElementById("personLegend");
  const stateLegend = document.getElementById("stateLegend");
  const buttons = document.querySelectorAll(".tab-btn");

  if(tab === "person") {
    person.style.display = "flex";
    state.style.display = "none";
    personLegend.style.display = "block";
    stateLegend.style.display = "none";
    buttons[0].classList.add("active");
    buttons[1].classList.remove("active");
  } else {
    person.style.display = "none";
    state.style.display = "flex";
    personLegend.style.display = "none";
    stateLegend.style.display = "block";
    buttons[0].classList.remove("active");
    buttons[1].classList.add("active");
  }
}