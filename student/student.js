// Function to handle evaluation submission
function handleEvaluation(event) {
    event.preventDefault();
    
    // Get selected teacher from the dropdown
    let teacher = document.getElementById('teacherSelect').value;
    
    // Prepare object to store evaluations for this submission
    let evaluation = {
        teacher: teacher,
        items: []
    };
    
    // Loop through each evaluation item
    for (let i = 1; i <= 5; i++) {
        let itemValue = document.querySelector(`input[name="item${i}"]:checked`);
        
        if (itemValue) {
            evaluation.items.push({
                item: i,
                rating: parseInt(itemValue.value)
            });
        } else {
            // If any item is not rated, show an error message
            document.getElementById('evaluationMessage').textContent = 'Please rate all evaluation items.';
            return;
        }
    }
    
    // Retrieve evaluations from localStorage or initialize an empty array
    let storedEvaluations = JSON.parse(localStorage.getItem('teacherEvaluations')) || [];
    
    // Push the new evaluation to the stored evaluations array
    storedEvaluations.push(evaluation);
    
    // Save updated evaluations back to localStorage
    localStorage.setItem('teacherEvaluations', JSON.stringify(storedEvaluations));
    
    // Confirmation message
    document.getElementById('evaluationMessage').textContent = 'Evaluation submitted successfully!';
    
    // Optional: Clear form fields after submission
    document.getElementById('teacherSelect').selectedIndex = 0;
    document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
        input.checked = false;
    });
}

// Event listener for evaluation form submission
document.getElementById('evaluationForm').addEventListener('submit', handleEvaluation);
