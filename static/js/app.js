// from data.js
let tableData = data;

// YOUR CODE HERE!
let table = d3.select('#ufo-table');
let tbody = table.select('tbody');


tableData.forEach((ufoSighting) => {
let newRow = tbody.append('tr');
Object.entries(ufoSighting).forEach(([key, value]) => {
   let newCell = newRow.append('td');
   newCell.text(value);
  });
});
