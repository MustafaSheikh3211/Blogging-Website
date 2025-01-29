// JavaScript code to handle interaction
document.addEventListener('DOMContentLoaded', function() {
    // Change the welcome message when the page loads
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = 'Welcome to Our Awesome Website!';
  
    // Change content message when navigation link is clicked
    const navLinks = document.querySelectorAll('nav a');
    const contentMessage = document.getElementById('contentMessage');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
  
        // Update the content based on the clicked link
        const linkText = event.target.textContent;
        contentMessage.textContent = `You clicked on the ${linkText} page!`;
      });
    });
  
    // Example: Add a button to change the content message dynamically
    const changeContentButton = document.createElement('button');
    changeContentButton.textContent = 'Change Content Message';
    document.body.appendChild(changeContentButton);
  
    changeContentButton.addEventListener('click', function() {
      contentMessage.textContent = 'You clicked the button to change the content!';
    });
  });
  