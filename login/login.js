// Arrays to store users for teachers and students
let teachers = [
    { username: 'teacher1', password: 'teacher1' },
    { username: 'teacher2', password: 'teacher2' }
];

let students = [
    { username: 'student1', password: 'student1' },
    { username: 'student2', password: 'student2' }
];

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get username and password input values
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    // Check if the user is a teacher
    let isTeacher = teachers.find(u => u.username === username && u.password === password);
    
    // Check if the user is a student
    let isStudent = students.find(u => u.username === username && u.password === password);
    
    if (isTeacher) {
        // Successful login for teacher
        document.getElementById('loginMessage').textContent = 'Login successful as Teacher!';
        setTimeout(() => {
            window.location.href = 'teacher.html'; // Redirect to teacher dashboard
        }, 1000);
    } else if (isStudent) {
        // Successful login for student
        document.getElementById('loginMessage').textContent = 'Login successful as Student!';
        setTimeout(() => {
            window.location.href = 'student.html'; // Redirect to student dashboard
        }, 1000);
    } else {
        // Failed login
        document.getElementById('loginMessage').textContent = 'Invalid username or password. Please try again.';
    }
}

// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', handleSubmit);
