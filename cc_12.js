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
    //removes new item when clicked 
}

// Task 4 Business Customer Section – Handling Event Bubbling
const customerSection = document.getElementById("customerSection"); // Fixed typo

// Ensure customerSection exists before adding event listeners
if (customerSection) {
    // Creating customer section
    customerSection.addEventListener("click", () => {
        console.log("Item Selected");
    });

    const customers = ["Customer 1", "Customer 2"];

    customers.forEach((name) => {
        const customerCard = document.createElement("div");
        customerCard.classList.add("customer-card");
        customerCard.innerText = name;

        customerCard.addEventListener("click", (event) => {
            console.log(name + " has been selected");
            event.stopPropagation(); // Stops parent click event from firing
        });

        customerSection.appendChild(customerCard); // Add to the customer section
    });
} else {
    console.error("Element with id 'customerSection' not found.");
}
