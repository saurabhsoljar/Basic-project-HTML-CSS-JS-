function updateCurrentDate(date = new Date()) {
    const dateElement = document.getElementById("currentDate");
    if (!dateElement) return; // Avoid errors if the element is missing

    // Format the date (Example: "March 21, 2025")
    const formattedDate = date.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Set date inside span
    dateElement.textContent = formattedDate;
}

// Ensure function runs on page load
document.addEventListener("DOMContentLoaded", () => updateCurrentDate());


// Load the Google Charts package
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    drawDonutChart("guestChart", "Guest Houses", [["Elixir Hills", 3], ["Elixir Woods", 3]], 6, "guestChart.png");
    drawDonutChart("bedroomChart", "Total Bed Rooms", [["Elixir Hills", 40], ["Elixir Woods", 40]], 80, "bedroomChart.png");
    drawDonutChart("occupiedChart", "Occupied Beds", [["Elixir Hills", 50], ["Elixir Woods", 50]], 100, "occupiedChart.png");
    drawDonutChart("availableChart", "Available Beds", [["Elixir Hills", 30], ["Elixir Woods", 50]], 100, "availableChart.png");
}

// Function to draw a donut chart with a central icon
function drawDonutChart(elementId, title, dataValues, totalValue, iconFile) {
    var data = google.visualization.arrayToDataTable([["Category", "Value"], ...dataValues]);

    var options = {
        title: title,
        pieHole: 0.6,
        colors: ["#1565C0", "#FFC107"],
        pieSliceText: "none",
        legend: "none",
        chartArea: { width: "90%", height: "90%" }
    };

    var chart = new google.visualization.PieChart(document.getElementById(elementId));
    chart.draw(data, options);

    // Add central icon & total value after chart is drawn
    document.getElementById(elementId).innerHTML += `
        <div class="chart-center">
            <img src="assets/${iconFile}" alt="${title} Icon">
            <span>${totalValue}</span>
        </div>
    `;
}
