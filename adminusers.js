// SEARCH FUNCTIONALITY
document.getElementById("searchUser").addEventListener("keyup", function () {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll("#userTable tbody tr");

  rows.forEach(row => {
    const name = row.children[0].textContent.toLowerCase();
    const email = row.children[1].textContent.toLowerCase();
    row.style.display = name.includes(filter) || email.includes(filter) ? "" : "none";
  });
});

// SORT FUNCTIONALITY
function sortTable(n) {
  const table = document.getElementById("userTable");
  let switching = true;
  let dir = "asc";
  let switchcount = 0;

  while (switching) {
    switching = false;
    let rows = table.rows;
    
    for (let i = 1; i < rows.length - 1; i++) {
      let shouldSwitch = false;
      let x = rows[i].getElementsByTagName("TD")[n];
      let y = rows[i + 1].getElementsByTagName("TD")[n];

      if ((dir === "asc" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) ||
          (dir === "desc" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

// DOWNLOAD CSV FUNCTION
function downloadCSV() {
  const rows = document.querySelectorAll("table tr");
  let csv = [];

  rows.forEach(row => {
    let cols = row.querySelectorAll("td, th");
    let data = Array.from(cols).map(col => `"${col.innerText}"`).join(",");
    csv.push(data);
  });

  const csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(csvFile);
  link.download = "users.csv";
  link.click();
}
