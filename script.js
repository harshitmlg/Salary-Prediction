// Function to predict salary in LPA
function predictSalary(experience, education, role) {
    // Here you would implement your prediction logic
    // For demonstration, let's generate a random salary between 3 LPA to 15 LPA
    let baseSalary = 3; // 3 LPA
    let salaryRange = 12; // Additional 12 LPA range
    let randomSalary = baseSalary + Math.random() * salaryRange;

    // Return predicted salary in LPA (replace with your actual prediction logic)
    return randomSalary.toFixed(2);
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    let experience = parseInt(document.getElementById('experience').value);
    let education = parseInt(document.getElementById('education').value);
    let role = document.getElementById('role').value;

    // Validate input (example validation, adjust as needed)
    if (isNaN(experience) || experience < 0) {
        alert('Please enter a valid number of years of experience.');
        return;
    }
    if (education === 0) {
        alert('Please select an education level.');
        return;
    }
    if (role.trim() === '') {
        alert('Please enter a job role.');
        return;
    }

    // Call prediction function
    let predictedSalary = predictSalary(experience, education, role);

    // Display predicted salary in LPA
    document.getElementById('predicted-salary').textContent = `Predicted Salary: ₹${predictedSalary} LPA`;
}

// Add event listener to form submission
document.getElementById('salary-form').addEventListener('submit', handleFormSubmit);
