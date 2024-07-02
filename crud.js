var selectedRow=null


function onformsubmit(e){

    event.preventDefault();
    var formdata= readformdata();
    if (selectedRow==null){
        insertNewrecord(formdata);
    }

    else{
        updateRecord(formdata);
    }
     resetform();

}

function readformdata(){
    var DATA = {};
    DATA ["StudentId"]=document.getElementById("StudentId").value;
    DATA ["Name"]=document.getElementById("Name").value;
    DATA ["Age"]=document.getElementById("Age").value;
    DATA ["Email"]=document.getElementById("Email").value;
    DATA ["Contact"]=document.getElementById("Contact").value;
    DATA ["Semester"]=document.getElementById("Semester").value;
    return DATA;

}


// Insert the Data
function insertNewrecord(data) {
  var multi = data.qty * data.price;
  var table = document.getElementById("store").getElementsByTagName("tbody")[0];
  // if (table.rows.length >= 10) {
  //   alert("Table can only have 10 rows");
  //   return;
  // }
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.StudentId;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Name;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Age;

  cell3 = newRow.insertCell(3);
  cell3.innerHTML = data.Email;


  cell3 = newRow.insertCell(4);
  cell3.innerHTML = data.Contact;

  cell3 = newRow.insertCell(5);
  cell3.innerHTML = data.Semester;


  cell5 = newRow.insertCell(6);
  cell5.innerHTML =
    '<button onClick="onEdit(this)" class="btn btn-outline-danger text-light fw-bold">Update</button>        <button onClick="onDelete(this)" class="btn btn-outline-secondary text-light fw-bold">Delete</button>';

  calculateTotalPrice();
}

// Calculate Total Price
function calculateTotalPrice() {
  var table = document.getElementById("store").getElementsByTagName("tbody")[0];
  var rows = table.getElementsByTagName("tr");
  var total = 0;

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var priceCell = row.cells[3];
    var price = parseFloat(priceCell.innerHTML);
    total += price;
  }

  // Display the total price
  
}


// EDIT
function onEdit(td){
  selectedRow=td.parentElement.parentElement;
  document.getElementById("StudentId").value=selectedRow.cells[0].innerHTML;
  document.getElementById("Name").value=selectedRow.cells[1].innerHTML;
  document.getElementById("Age").value=selectedRow.cells[2].innerHTML;
  document.getElementById("Email").value=selectedRow.getAttribute('data-original-price');
  document.getElementById("Contact").value=selectedRow.cells[3].innerHTML;
  document.getElementById("Semester").value=selectedRow.cells[4].innerHTML;
}

function updateRecord(formdata){
  var multi = formdata.qty * formdata.price;
  selectedRow.cells[0].innerHTML=formdata.StudentId;
  selectedRow.cells[1].innerHTML=formdata.Name;
  selectedRow.cells[2].innerHTML=formdata.Age;
  selectedRow.cells[3].innerHTML=formdata.Email;
  selectedRow.cells[4].innerHTML=formdata.Contact;
  selectedRow.cells[5].innerHTML=formdata.Semester;
  selectedRow.cells[6].innerHTML=multi;
  resetform();
  calculateTotalPrice();

}


// delete
function onDelete(td){
  if(confirm('Do you want to delete this record?')){
    row=td.parentElement.parentElement;
    document.getElementById('store').deleteRow(row.rowIndex);
    resetform();
    calculateTotalPrice();
  }
}





// Reset 
function resetform(){
  document.getElementById("StudentId").value='';
  document.getElementById("Name").value='';
  document.getElementById("Age").value='';
  document.getElementById("Email").value='';
  document.getElementById("Contact").value='';
  document.getElementById("Semester").value='';

  selectedRow = null;

}

   
