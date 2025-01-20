document.addEventListener("DOMContentLoaded", function () {
    // Simulating the current balance
    let balance = 0;
    document.getElementById("balance-amount").textContent = `₦${balance.toLocaleString()}`;

    // Form submission
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been received.`);
            document.getElementById("contactForm").reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
