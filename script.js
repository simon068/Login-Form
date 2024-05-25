// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// Handle input focus and blur effects
const handleInputFocus = () => {
    this.classList.add('focused');
};

const handleInputBlur = () => {
    if (!this.value.trim()) {
        this.classList.remove('focused');
    }
};

// Handle form submission logic
const handleFormSubmit = event => {
    event.preventDefault();
    // Add your login logic here
    alert('Login logic will be implemented here.');
};

// Setup input events
const setupInputEvents = (inputId, labelId) => {
    const input = document.getElementById(inputId);
    const label = document.getElementById(labelId);

    input.addEventListener('focus', () => label.classList.add('focused'));
    input.addEventListener('blur', () => {
        if (!input.value.trim()) {
            label.classList.remove('focused');
        }
    });
    input.addEventListener('input', () => {
        label.classList.toggle('focused', input.value.trim() !== '');
    });
};

// Add ripple effect to buttons
const addRippleEffect = event => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.pointerEvents = 'none';
    ripple.classList.add('ripple-container');

    if (button.id === 'rippleButton') {
        ripple.classList.add('red-ripple-container');
    } else if (button.id === 'createRippleButton') {
        ripple.classList.add('blue-ripple-container');
    }

    button.appendChild(ripple);

    const removeRipple = () => ripple.remove();

    button.addEventListener('mouseup', removeRipple);
    button.addEventListener('mouseout', event => {
        if (!button.contains(event.relatedTarget || event.toElement)) {
            removeRipple();
        }
    });
};

// Initialize event listeners on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Setup input events
    setupInputEvents('username', 'username-label');
    setupInputEvents('password', 'password-label');

    // Setup form submit event
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', handleFormSubmit);

    // Setup ripple effect on buttons
    const rippleButton = document.querySelector('#rippleButton');
    if (rippleButton) {
        rippleButton.addEventListener('mousedown', addRippleEffect);
    }

    const createRippleButton = document.querySelector('#createRippleButton');
    if (createRippleButton) {
        createRippleButton.addEventListener('mousedown', addRippleEffect);
    }
});
