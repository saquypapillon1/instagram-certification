document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.certification-form');
    const steps = Array.from(document.querySelectorAll('.form-step'));
    const stepIndicators = Array.from(document.querySelectorAll('.step'));
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const passwordToggles = document.querySelectorAll('.toggle-password');
    const fileInput = document.querySelector('input[type="file"]');
    const fileLabel = document.querySelector('.file-label .upload-text');
    const fileSelected = document.querySelector('.file-selected');

    let currentStep = 0;

    // Gestion des étapes suivantes
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                steps[currentStep].classList.remove('active');
                stepIndicators[currentStep].classList.remove('active');
                currentStep++;
                steps[currentStep].classList.add('active');
                stepIndicators[currentStep].classList.add('active');
            }
        });
    });

    // Gestion des étapes précédentes
    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            steps[currentStep].classList.remove('active');
            stepIndicators[currentStep].classList.remove('active');
            currentStep--;
            steps[currentStep].classList.add('active');
            stepIndicators[currentStep].classList.add('active');
        });
    });

    // Validation des étapes
    function validateStep(step) {
        const currentInputs = steps[step].querySelectorAll('input[required]');
        let isValid = true;

        currentInputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                showError(input, 'Ce champ est requis');
            } else if (input.type === 'email' && !validateEmail(input.value)) {
                isValid = false;
                showError(input, 'Email invalide');
            } else if (input.id === 'instagramPhone' && !validatePhone(input.value)) {
                isValid = false;
                showError(input, 'Numéro de téléphone invalide');
            } else {
                hideError(input);
            }
        });

        return isValid;
    }

    // Affichage des erreurs
    function showError(input, message) {
        const errorElement = input.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        input.classList.add('input-error');
    }

    // Masquage des erreurs
    function hideError(input) {
        const errorElement = input.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
        input.classList.remove('input-error');
    }

    // Validation email
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Validation téléphone
    function validatePhone(phone) {
        return /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(phone);
    }

    // Gestion du toggle mot de passe
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
        });
    });

    // Gestion du fichier uploadé
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                const fileName = this.files[0].name;
                fileLabel.style.display = 'none';
                fileSelected.textContent = fileName;
                fileSelected.style.display = 'block';
            } else {
                fileLabel.style.display = 'block';
                fileSelected.style.display = 'none';
            }
        });
    }

    // Soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateStep(currentStep)) {
            // Ici, vous pouvez ajouter le code pour envoyer les données
            console.log('Formulaire soumis avec succès');
        }
    });
});