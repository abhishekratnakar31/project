 // Tab switching
 function switchTab(tabId) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    // Remove active class from all tabs
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');
    
    // For verification tab, no tab header should be active
    if (tabId !== 'verify') {
        // Find the tab with matching id and make it active
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].textContent.toLowerCase().includes(tabId)) {
                tabs[i].classList.add('active');
            }
        }
    }
}

// Role selection
function selectRole(role, element) {
    // Remove active class from all role cards
    const roleCards = document.getElementsByClassName('role-card');
    for (let i = 0; i < roleCards.length; i++) {
        roleCards[i].classList.remove('active');
    }
    
    // Add active class to selected role card
    element.classList.add('active');
    
    // Show/hide guardian form if guardian role is selected
    if (role === 'guardian') {
        document.getElementById('guardian-form').style.display = 'block';
    } else {
        document.getElementById('guardian-form').style.display = 'none';
    }
}

// Form handling
function handleLogin(event) {
    event.preventDefault();
    
    // Simple validation
    const phone = document.getElementById('login-phone').value;
    const password = document.getElementById('login-password').value;
    
    // In a real application, you would send this data to your server
    // For demo, just show a success or error message
    if (phone && password) {
        // Simulate successful login
        window.location.href = "dashboard.html";
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    // Get form values
    const fullname = document.getElementById('register-fullname').value;
    const phone = document.getElementById('register-phone').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Simple validation
    if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
    }
    
    // In a real application, you would send this data to your server
    // For demo, just switch to verification tab
    document.getElementById('register-success').style.display = 'block';
    setTimeout(() => {
        switchTab('verify');
    }, 1500);
}

function handleVerification(event) {
    event.preventDefault();
    
    // In a real application, you would verify the OTP
    // For demo, just redirect to dashboard
    window.location.href = "dashboard.html";
}

// OTP input handling
document.addEventListener('DOMContentLoaded', function() {
    const otpInputs = document.querySelectorAll('.otp-input');
    
    otpInputs.forEach((input, index) => {
        // Auto-focus next input after entering a digit
        input.addEventListener('input', function() {
            if (this.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });
        
        // Handle backspace to go to previous input
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !this.value && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });
});