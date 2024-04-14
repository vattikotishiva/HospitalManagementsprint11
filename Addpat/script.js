var selectedRow = null;
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow===null)  {
         if(formData.gender !== "select" && formData.Specalist !== "select" && formData.phn.length === 10){
            insertNewRecord(formData);
            resetForm();
        }else {
            alert("Please fill all the required data");
        }
        } else {
           
            updateRecord(formData);
        }
    } else {
        alert("Please fill out all required fields.");
    }
}
function readFormData(event) {
    var formData = {};
    formData["PatientID"] = document.getElementById("randomNumberInput").value;
    formData["fullName"] = document.getElementById("fullName").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["gender"] = document.getElementById("gend").value;
    formData["addres"] = document.getElementById("addres").value;
    formData["phn"] = document.getElementById("phn").value;
    formData["doa"] = document.getElementById("doa").value;
    formData["Specalist"] = document.getElementById("Specalist").value;
    formData["Bdetails"] = document.getElementById("Bdetails").value;
    formData["Information"] = document.getElementById("Information").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.dob;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.addres;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.phn;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.doa;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Specalist;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.Bdetails;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = PatientID();
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.Information;
    cell10.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("gend").value = "";
    document.getElementById("addres").value = "";
    document.getElementById("phn").value = "";
    document.getElementById("doa").value = "";
    document.getElementById("Specalist").value = "";
    document.getElementById("Bdetails").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[1].innerHTML;
    document.getElementById("gend").value = selectedRow.cells[2].innerHTML;
    document.getElementById("addres").value = selectedRow.cells[3].innerHTML;
    document.getElementById("phn").value = selectedRow.cells[4].innerHTML; 
    document.getElementById("doa").value = selectedRow.cells[5].innerHTML;
    document.getElementById("Specalist").value = selectedRow.cells[6].innerHTML;
    document.getElementById("Bdetails").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.dob;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.addres;
    selectedRow.cells[4].innerHTML = formData.phn;
    selectedRow.cells[5].innerHTML = formData.doa;
    selectedRow.cells[6].innerHTML = formData.Specalist;
    selectedRow.cells[7].innerHTML = formData.Bdetails;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
        var deleteMessage = document.getElementById('deleteMessage');
        setTimeout(function() {
            deleteMessage.classList.remove('hide');
            setTimeout(function() {
                deleteMessage.classList.add('hide');
            }, 6000);
        }, 1000);
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "" ) {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
function check(data){
    var bool=true;
    var i;
    if(data.gender==="select"){
        alert("please select gender");
        bool=false;
}
    return bool;
}