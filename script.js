document.addEventListener('DOMContentLoaded', function() {
    const API_URL = 'https://api.example.com/patient-data'; // Replace with actual API URL
    const patientId = 'jessica-taylor'; // Replace with the correct patient ID

    // Fetch patient data from the API
    fetch(`${API_URL}/${patientId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('age').textContent = data.age;
            document.getElementById('blood-pressure').textContent = data.bloodPressure;

            // Create the blood pressure chart
            const ctx = document.getElementById('bloodPressureChart').getContext('2d');
            const bloodPressureChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.bloodPressureHistory.years,
                    datasets: [{
                        label: 'Systolic',
                        data: data.bloodPressureHistory.systolic,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 2,
                        fill: false
                    }, {
                        label: 'Diastolic',
                        data: data.bloodPressureHistory.diastolic,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2,
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
