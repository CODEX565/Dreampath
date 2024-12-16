// Handle image upload and preview
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const image = document.getElementById('profile-image');
            image.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
}

// Toggle the analytics section visibility
function toggleAnalytics() {
    const analyticsSection = document.getElementById('analytics-section');
    const displayStyle = analyticsSection.style.display;

    if (displayStyle === 'none' || displayStyle === '') {
        analyticsSection.style.display = 'block';
    } else {
        analyticsSection.style.display = 'none';
    }
}

// Show the Edit Profile form when clicking the 'Edit Profile' button
document.querySelector('.edit-btn').addEventListener('click', function() {
    const editProfileForm = document.getElementById('edit-profile-form');
    editProfileForm.style.display = 'block';
});

// Hide the Edit Profile form when clicking the 'Cancel' button
document.getElementById('cancel-btn').addEventListener('click', function() {
    const editProfileForm = document.getElementById('edit-profile-form');
    editProfileForm.style.display = 'none';
});

// Handle the form submission
document.getElementById('save-btn').addEventListener('click', function() {
    const name = document.getElementById('edit-name').value;
    const username = document.getElementById('edit-username').value;
    const bio = document.getElementById('edit-bio').value;
    
    // Update the profile with the new details
    document.querySelector('.profile-info h2').textContent = name;
    document.querySelector('.profile-info .username').textContent = `@${username}`;
    document.querySelector('.profile-info .bio').textContent = bio;

    // Hide the edit form after saving
    const editProfileForm = document.getElementById('edit-profile-form');
    editProfileForm.style.display = 'none';
});

// Optional: Form validation (you can improve this as needed)
document.getElementById('edit-profile-form').addEventListener('submit', function(event) {
    if (!document.getElementById('edit-name').value || !document.getElementById('edit-username').value) {
        alert('Please fill in all fields!');
        event.preventDefault();
    }
});
