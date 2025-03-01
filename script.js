// Your JS code here. If required.
document.getElementById("submit").addEventListener("click", function () {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const isbn = document.getElementById("isbn");
    const table = document.getElementById("table1");

    // Insert a new row at the end of the table
    let newRow = table.insertRow(table.rows.length);
    newRow.setAttribute("class", "row");

    // Insert cells into the new row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    // Set the text content for each cell
    cell1.textContent = title.value;
    cell2.textContent = author.value;
    cell3.textContent = isbn.value;

    // Clear input fields
    title.value = "";
    author.value = "";
    isbn.value = "";

    // Create the delete button
    const btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.setAttribute("class", "delete");
    btn.setAttribute("id", `delete${table.rows.length}`);

    // Add event listener to delete the row when clicked
    btn.addEventListener("click", function () {
        const row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    });

    // Append the delete button to the last cell
    cell4.appendChild(btn);
});
