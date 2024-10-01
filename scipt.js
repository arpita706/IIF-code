document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    alert(`Thank you for registering, ${name}! We will contact you at ${email}.`);
    
    // Here you would typically send the data to a server
    // For example, using fetch() or XMLHttpRequest
});
