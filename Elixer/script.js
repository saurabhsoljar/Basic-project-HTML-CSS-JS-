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


// CharacterData
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Guest Houses'],
            ["Elixir Hills",3],
            ["Elixir Woods",3],

        ]);

        var options = {
          title: 'My Daily Activities',
          pieHole: 0.9,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }