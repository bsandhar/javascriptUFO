// from data.js
var tableData = data;

// YOUR CODE HERE!

// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let newData = tableData;

  // Check for ifs
  if (date) {
    newData = newData.filter(row => row.datetime === date);
  }

  // build table
  buildTable(newData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
