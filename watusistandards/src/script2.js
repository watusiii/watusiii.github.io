const standardsInput = document.querySelector("#standards");
const startDateInput = document.querySelector("#start-date");
const totalDaysSelect = document.querySelector("#total-days");
const updatePreviewBtn = document.querySelector("#update-preview");
const previewTable = document.querySelector("#preview");

updatePreviewBtn.addEventListener("click", function () {
  const standards = standardsInput.value.split("\n");
  const startDate = new Date(startDateInput.value);
  const totalDays = parseInt(totalDaysSelect.value);

  // Clear the table before creating a new one
  previewTable.innerHTML = "";

  // Create header row
  const headerRow = document.createElement("tr");
  const headerLabelCell = document.createElement("th");
  headerRow.appendChild(headerLabelCell);
  for (let i = 0; i < totalDays; i++) {
    const day = new Date(startDate);
    day.setDate(day.getDate() + i + 1);
    const headerCell = document.createElement("th");
    headerCell.textContent = day.toLocaleDateString("en-US", {
      weekday: "long",
    });
    headerRow.appendChild(headerCell);
  }
  previewTable.appendChild(headerRow);

  // Create body rows
  for (const standard of standards) {
    const bodyRow = document.createElement("tr");

    // Create left-side label cell
    const labelCell = document.createElement("td");
    labelCell.classList.add("standard-label");
    labelCell.textContent = standard;
    bodyRow.appendChild(labelCell);

    // Create data cells
    for (let i = 0; i < totalDays; i++) {
      const dataCell = document.createElement("td");
      dataCell.addEventListener("click", function () {
        this.textContent = this.textContent === "" ? "X" : "";
      });
      bodyRow.appendChild(dataCell);
    }

    previewTable.appendChild(bodyRow);
  }
});
