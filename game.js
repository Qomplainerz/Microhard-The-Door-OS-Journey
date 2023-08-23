// Initial game state
var gameState =
  {
    playerName: "Will Grates",
    level: "Novice",
    fans: 0,
    money: 1000,
    knowledge: "Basic",
    staff: 0,
    features: ["Basic UI", "File Management"],
    bugs: 10,
    marketingBudget: 0,
    interest: low,
    customerSatisfaction: "Neutral",
    expectations: "lo"
  };

// Function to update the player's status
function updateStatus()
{
  document.getElementById("status").innerHTML = `
  <h2>Player Status</h2>
  <p>Name: ${gameState.playerName}</p>
  <p>Level: ${gameState.level}</p>
  <p>Fans: ${gameState.fans}</p>
  `;
}

// Function to update resources
function updateResources()
{
  document.getElementById("resources").innerHTML = `
  <h2>Resources</h2>
  <p>Money: ${gameState.money}</p>
  <p>Knowledge: ${gameState.knowledge}</p>
  <p>Staff: ${gameState.staff}</p>
  `;
}

// Function to update development
function updateDevelopment()
{
  document.getElementById("development").innerHTML = `
  <h2>Development</h2>
  <article>
    <h3>Doors OS</h3>
    <p>Features: ${gameState.features.join(", ")}</p>
    <p>Bugs: ${gameState.bugs}</p>
  </article>
`;
}

// Function to update marketing
function updateMarketing()
{
  document.getElementById("marketing").innerHTML = `
  <h2>Marketing</h2>
  <p>Marketing Budget: $${gameState.marketingBudget}</p>
  <p>Interest: ${gameState.interest}</p>
`;
}

// Function to update customer feedback
function updateFeedback()
{
  document.getElementById("feedback").innerHTML = `
    <h2>Customer Feedback</h2>
    <p>Customer Satisfaction: ${gameState.customerSatisfaction}</p>
    <p>Expectations: ${gameState.expectations}</p>
  `;
}

// Function to initialize the game
function initializeGame()
{
  updateStatus();
  updateResources();
  updateDevelopment();
  updateMarketing();
  updateFeedback();
}

// Call the initialize function when the page loads

window.onload = initializeGame;
