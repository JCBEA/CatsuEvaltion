function loadTeacherEvaluations(username) {
    // Retrieve evaluations from localStorage
    let storedEvaluations = JSON.parse(localStorage.getItem('teacherEvaluations')) || [];
    
    // Filter evaluations for the logged-in teacher
    let teacherEvaluations = storedEvaluations.filter(evaluation => evaluation.teacher === username);
    
    // Display evaluations on the teacher's dashboard
    let evaluationsContainer = document.getElementById('evaluationsContainer');
    
    if (teacherEvaluations.length > 0) {
        evaluationsContainer.innerHTML = ''; // Clear previous evaluations
        
        teacherEvaluations.forEach((evaluation, index) => {
            let evaluationHTML = `
                <div class="evaluation-item">
                    <h3>Evaluation ${index + 1}</h3>
                    <ul>
                        ${evaluation.items.map(item => `<li>${getEvaluationItemDescription(item.item)}: ${item.rating}</li>`).join('')}
                    </ul>
                </div>
            `;
            
            evaluationsContainer.innerHTML += evaluationHTML; // Append each evaluation
        });
    } else {
        evaluationsContainer.innerHTML = '<p>No evaluations found.</p>';
    }
}

// Function to get evaluation item description based on item number
function getEvaluationItemDescription(itemNumber) {
    switch (itemNumber) {
        case 1:
            return 'Give an activity that is effective in learning';
        case 2:
            return 'Provide clear explanations';
        case 3:
            return 'Encourage questions and discussions';
        case 4:
            return 'Provide constructive feedback';
        case 5:
            return 'Create a positive learning environment';
        default:
            return `Item ${itemNumber}`;
    }
}

// Example: Load evaluations for the logged-in teacher (adjust as per your application)
// Replace 'teacher1' with the logged-in teacher's username
loadTeacherEvaluations('teacher1'); // Example usage, adjust for actual implementation