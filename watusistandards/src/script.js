// Function to create the table and add it to the page
function createTable(standards, firstDay, totalDays) {
  // Create the table element
  var table = document.createElement("table");

  // Create the header row
  var headerRow = document.createElement("tr");
  [...Array(totalDays).keys()].forEach(function (i) {
    var headerCell = document.createElement("th");
    headerCell.textContent = getDayOfWeek(firstDay.getDay());
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);

  // Create the body rows
  standards.forEach(function (standard) {
    var bodyRow = document.createElement("tr");
    [...Array(totalDays).keys()].forEach(function (i) {
      var bodyCell = document.createElement("td");
      bodyCell.textContent = "";
      bodyRow.appendChild(bodyCell);
    });
    bodyRow.insertBefore(document.createElement("td"), bodyRow.firstChild);
    bodyRow.firstChild.textContent = standard;
    table.appendChild(bodyRow);
  });

  // Add the table to the page
  document.getElementById("preview").appendChild(table);
}

// Function to get the day of the week for a given number
function getDayOfWeek(dayNumber) {
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[dayNumber % 7];
}

// Call the createTable function when the updatePreview button is clicked
var updatePreviewButton = document.getElementById("updatePreview");
updatePreviewButton.addEventListener("click", function () {
  var standards = document.getElementById("standards").value.split("\n");
  var firstDay = new Date(document.getElementById("firstDay").value);
  var totalDays = parseInt(document.getElementById("totalDays").value);

  // Remove the previous table if it exists
  var preview = document.getElementById("preview");
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  createTable(standards, firstDay, totalDays);
});
