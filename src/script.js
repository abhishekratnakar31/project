
// Modal functions
function openModal() {
    document.getElementById('authModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('authModal').style.display = 'none';
}

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
    
    // Show the selected tab content and mark the tab as active
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
    
    // Show/hide guardian connect field based on selected role
    if (tabId === 'register') {
        const roleRadios = document.getElementsByName('user-role');
        for (let i = 0; i < roleRadios.length; i++) {
            roleRadios[i].addEventListener('change', function() {
                if (this.value === 'guardian') {
                    document.getElementById('guardian-connect').style.display = 'block';
                } else {
                    document.getElementById('guardian-connect').style.display = 'none';
                }
            });
        }
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('authModal');
    if (event.target === modal) {
        closeModal();
    }
}