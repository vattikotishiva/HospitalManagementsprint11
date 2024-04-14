const patients = [
    { id: 1234, name: "Ajay", roomCharges: 1000, pharmacyCharges: 500, diagnosticsCharges: 200 },
    { id: 5678, name: "Tilak", roomCharges: 1200, pharmacyCharges: 600, diagnosticsCharges: 300 }
];

const searchForm = document.getElementById('searchForm');
const searchMessage = document.getElementById('searchMessage');
const patientDetails = document.getElementById('patientDetails');
``
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const patientId = parseInt(document.getElementById('patient-id').value);
  
    const foundPatient = patients.find(patient => patient.id === patientId);
  
    if (foundPatient) {
        displayPatientDetails(foundPatient);
        showMessage("Patient found!", "success");
    } else {
        clearPatientDetails();
        showMessage("Patient not found!");
    }
});

function displayPatientDetails(patient) {
    const tableHTML = `
        <h3>Patient Details</h3>
        <table>
            <tr>
                <th>ID</th>
                <td>${patient.id}</td>
            </tr>
            <tr>
                <th>Name</th>
                <td>${patient.name}</td>
            </tr>
            <tr>
                <th>Room Charges</th>
                <td>${patient.roomCharges}/-</td>
            </tr>
            <tr>
                <th>Pharmacy Charges</th>
                <td>${patient.pharmacyCharges}/-</td>
            </tr>
            <tr>
                <th>Diagnostics Charges</th>
                <td>${patient.diagnosticsCharges}/-</td>
            </tr>
            <tr>
                <th>Total Bill</th>
                <td>${calculateTotalBill(patient)}/-</td>
            </tr>
        </table>
        <div class="sub">
        <button onclick="printBillingTable()">Print</button>
        </div>
    `;
    patientDetails.innerHTML = tableHTML;
}

function clearPatientDetails() {
    patientDetails.innerHTML = "";
}

function calculateTotalBill(patient) {
    return patient.roomCharges + patient.pharmacyCharges + patient.diagnosticsCharges;
}

function showMessage(message, type = "error") {
    searchMessage.textContent = message;
    searchMessage.className = type; // Set class directly to replace existing classes
}

function printBillingTable() {
    const printContents = document.getElementById('patientDetails').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
