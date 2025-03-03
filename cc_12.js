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

// Task 2 Updating Dashboard Metrics - Working with NodeLists and Arrays
const metricCards = document.querySelectorAll(".metric-card");

const metricCardsArray = [...metricCards];

metricCardsArray.forEach(card => {
    card.innerText += "-Updated";
    card.style.backgroundColor = `magenta`;
});
//added updated text and changed background color

//Task 3 Dynamic Inventory Management – Adding and Removing Items
const inventoryList = document.getElementById("inventoryList");
function addInventoryItem(productName){
    const nameItem = document.createElement("li");

    newItem.setAttribute("class", "product-item");
    newItem.innerHTML = `${productName}`;

    inventoryList.appendChild(newItem);

    newItem.addEventListener("click", (event) => {
        inventoryList.removeChild(newItem);
    });
}