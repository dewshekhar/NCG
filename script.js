// script.js

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const nameInput = document.getElementById('name');
    const greeting = document.getElementById('greeting');

    // Handle button click
    submitBtn.addEventListener('click', () => {
        const userName = nameInput.value.trim();
        if (userName) {
            greeting.textContent = `Hello, ${userName}! Welcome to DevOps Training.`;
        } else {
            greeting.textContent = 'Please enter your name to receive a greeting.';
        }
    });

    // View Counter (Mock Example)
    const counter = document.querySelector('.counter-number');
    let views = localStorage.getItem('views') || 0;
    views++;
    localStorage.setItem('views', views);
    counter.textContent = `Views: ${views}`;
});
