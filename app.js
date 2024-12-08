document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert('Message sent successfully!');
          e.target.reset();
        } else {
          alert('Error sending message. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    });
  }

  // Function to open modal
  window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }

  // Function to close modal
  window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  // Close modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  }
});