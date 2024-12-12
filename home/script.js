// JavaScript to handle the Get Started button behavior
window.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.getElementById('getStartedBtn');

   
    const userVisited = localStorage.getItem('userVisited');

    if (userVisited) {
        
        getStartedBtn.textContent = 'Go to Your Profile';
        getStartedBtn.onclick = () => {
            alert('Welcome back! Redirecting to your profile...');
             
        };
    } else {
        
        getStartedBtn.onclick = () => {
            alert('Welcome! Redirecting to sign-up...');
            localStorage.setItem('userVisited', 'true');
            
        };
    }
});
