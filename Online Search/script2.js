document.addEventListener('DOMContentLoaded', () => {
  const patientList = document.getElementById('patient-list');
  const filterSelect = document.getElementById('filter-select');
  const searchForm = document.getElementById('search-form');
  const searchMessage = document.getElementById('search-message');

  // Sample patient data (replace with actual data retrieval logic)
  const patients = [
    { 
      id: 1,
      name: "Karthik",
      age: 30,
      bloodGroup: "A+",
      dateOfJoining: "01-15-2024",
      disease: "Hypertension",
      department: "Cardiology",
      active: true 
    },
    { 
      id: 2,
      name: "Vijay Ch",
      age: 25,
      bloodGroup: "O-",
      dateOfJoining: "03-20-2024",
      disease: "Diabetes",
      department: "Endocrinology",
      active: true 
    },
    { 
      id: 3,
      name: "Rajesk K",
      age: 40,
      bloodGroup: "B+",
      dateOfJoining: "11-05-2024",
      disease: "Asthma",
      department: "Pulmonology",
      active: false 
    },
    // Add more patient data...
    { 
      id: 4,
      name: "Ramu P",
      age: 35,
      bloodGroup: "AB-",
      dateOfJoining: "02-10-2024",
      disease: "Arthritis",
      department: "Rheumatology",
      active: false 
    },
    // Add more patient data...
    { 
      id: 5,
      name: "Harsha J",
      age: 28,
      bloodGroup: "A-",
      dateOfJoining: "04-01-2024",
      disease: "Migraine",
      department: "Neurology",
      active: true 
    },
  ];

  function populatePatientTable(data) {
    patientList.innerHTML = ''; 
    data.forEach(patient => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${patient.id}</td>
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>${patient.bloodGroup}</td>
        <td>${patient.dateOfJoining}</td>
        <td>${patient.disease}</td>
        <td>${patient.department}</td>
        <td>${patient.active ? '<span class="active-dot"></span> Active' : 'Old'}</td>
      `;
      patientList.appendChild(row);
    });
  }

  function filterPatients(status) {
    let filteredPatients = patients;
    if (status === 'active') {
      filteredPatients = patients.filter(patient => patient.active);
    } else if (status === 'old') {
      filteredPatients = patients.filter(patient => !patient.active);
    }
    populatePatientTable(filteredPatients);
  }

  populatePatientTable(patients);
  filterSelect.addEventListener('change', (event) => {
    const selectedStatus = event.target.value;
    filterPatients(selectedStatus);
  });

  // Event listener for patient search form submission
  // searchForm.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   const patientId = parseInt(document.getElementById('patient-id').value);
  //   searchPatientById(patientId);
  // });

  function searchPatientById() {
    const patientId = document.getElementById('patient-id');
    console.log(patientId);
    const foundPatient = patients.find(patient => patient.id === patientId);
      
    if (foundPatient) {
      showMessage("Patient found!", "success");
      populatePatientTable([foundPatient]); 
    } else {
      showMessage("Patient not found!");
      populatePatientTable([]); 
    }
  }
  function showMessage(message, type = "error") {
    searchMessage.textContent = message;
    searchMessage.className = type; 
  }
});
