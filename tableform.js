let id = 0;

//code to use input to adda row

document.getElementById("add").addEventListener("click", () => {
  let table = document.getElementById("petted-list");
  //row 0 is header so items are added at row 1

  let row = table.insertRow(1);
  //creates ID for each row which is item-(id var which is incremented)
  row.setAttribute("id", `item-${id}`);
  //sets text in row to the value from the task input field
  row.insertCell(0).innerHTML = document.getElementById("animal-name").value;
  //use +1 on the month because month #s are 0-based
  row.insertCell(1).innerHTML = document.getElementById("animal-type").value;

  row.insertCell(2).innerHTML = document.getElementById("pet-date").value;
  row.insertCell(3).innerHTML = document.getElementById("how-did-it-go").value;
  let actions = row.insertCell(4);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById("animal-name").value = "";
  document.getElementById("animal-type").value = "";
  document.getElementById("pet-date").value = "";
  document.getElementById("how-did-it-go").value = "";
});

/*This function:
1. creates a button
2. makes an ID for that button that matches the row ID
3. sets an action on click to delete the corresponding row
4. */

function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = id;
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}

//allow text input for dropwdown when "other" is selected (i couldn't get this to work before i ran out of time but it's not part of the assignment!)

let name = getElementById("animal-type").value;

function showfield(name) {
  if (name == "Other")
    document.getElementById("div1").innerHTML =
      'Other: <input type="text" name="other" />';
  else document.getElementById("div1").innerHTML = "";
}
