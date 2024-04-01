document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');

    // Assuming you have already declared 'modal', 'cardForm', 'certificateContent', and 'closeModal' variables elsewhere in your code.

// Hide the modal initially
modal.style.display = 'none';

// Event listener for form submission
cardForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const studentNameInput = document.getElementById('studentName');
  const personalMessageInput = document.getElementById('personalMessage');
  const courseNameInput = document.getElementById('courseName');

  const studentName = studentNameInput.value.trim();
  const personalMessage = personalMessageInput.value.trim();
  const courseName = courseNameInput.value.trim() || "a course"; // Fallback to "a course" if no input

  if (studentName === '' || personalMessage === '') {
    alert('Please fill in all fields');
    return;
  }

  // Generate certificate content dynamically
  certificateContent.innerHTML = `
    <h3>${studentName}</h3>
    <p>${personalMessage}</p>
    <p>Course: ${courseName}</p>
  `;

  // Display the modal
  modal.style.display = 'block';

  // Clear the form inputs
  studentNameInput.value = '';
  personalMessageInput.value = '';
  courseNameInput.value = '';
});

// Event listener to close the modal when the close button is clicked
closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
});
})