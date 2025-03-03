// Task 1  Business Dashboard – DOM Element Selection and Creation

const dashboardID = document.getElementById("dashboard");
const dashboardByQuery = document.querySelector("#dashboard");
// dashboard selections for elements and queries

const revenueCard = document.createElement("div");
//creating new metric card 

revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("ID", "revenueCard");

revenueCard.innerHTML = `
<h3>Revenue</h3>
<p>$ 0</p>
`;
// populating metric card 

dashboardID.appendChild(revenueCard);
