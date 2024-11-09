document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments
    const form = document.querySelector('.certification-form');
    const steps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.step');
    const prevBtns = document.querySelectorAll('.btn-prev');
    const nextBtns = document.querySelectorAll('.btn-next');
    const fileInput = document.querySelector('input[type="file"]');
    const fileLabel = document.querySelector('.file-label');
    const fileSelected = document.querySelector('.file-selected');
    const passwordToggles = document.querySelectorAll('.toggle-password');

    // Fonctions de validation
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|fr|net)$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^(\+|00)?[0-9]{10,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    function isValidInstagramUsername(username) {
        const usernameRegex = /^[a-zA-Z0-9._]{1,30}$/;
        return usernameRegex.test(username);
    }

    // Fonction pour masquer le contenu de la page d'accueil
    function hideHomeContent() {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.display = 'none';
        }
    }

    // Fonction pour valider les champs de l'étape courante
    function validateCurrentStep(step) {
        const inputs = step.querySelectorAll('input[required]');
        let isValid = true;

        inputs.forEach(input => {
            let isFieldValid = true;
            const value = input.value.trim();

            if (!value) {
                isFieldValid = false;
                input.classList.add('input-error');
                const errorMessage = input.nextElementSibling.nextElementSibling;
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.style.display = 'block';
                    errorMessage.textContent = 'Ce champ est obligatoire';
                }
            } else {
                // Validations spécifiques selon le type de champ
                switch(input.id) {
                    case 'instagramUsername':
                        if (!isValidInstagramUsername(value)) {
                            isFieldValid = false;
                            input.classList.add('input-error');
                            const errorMessage = input.nextElementSibling.nextElementSibling;
                            if (errorMessage && errorMessage.classList.contains('error-message')) {
                                errorMessage.style.display = 'block';
                                errorMessage.textContent = 'Le nom d\'utilisateur doit contenir uniquement des lettres, chiffres, points ou underscores';
                            }
                        }
                        break;
                    
                    case 'phone':
                        if (!isValidPhone(value)) {
                            isFieldValid = false;
                            input.classList.add('input-error');
                            const errorMessage = input.nextElementSibling.nextElementSibling;
                            if (errorMessage && errorMessage.classList.contains('error-message')) {
                                errorMessage.style.display = 'block';
                                errorMessage.textContent = 'Veuillez entrer un numéro de téléphone valide (minimum 10 chiffres)';
                            }
                        }
                        break;
                    
                    case 'email':
                        if (!isValidEmail(value)) {
                            isFieldValid = false;
                            input.classList.add('input-error');
                            const errorMessage = input.nextElementSibling.nextElementSibling;
                            if (errorMessage && errorMessage.classList.contains('error-message')) {
                                errorMessage.style.display = 'block';
                                errorMessage.textContent = 'L\'email doit être au format exemple@gmail.com';
                            }
                        }
                        break;
                }
            }

            if (isFieldValid) {
                input.classList.remove('input-error');
                const errorMessage = input.nextElementSibling.nextElementSibling;
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.style.display = 'none';
                }
            } else {
                isValid = false;
            }
        });

        return isValid;
    }

    // Gestion du changement d'étapes
    let currentStep = 0;

    function updateStep() {
        steps.forEach(step => step.classList.remove('active'));
        progressSteps.forEach(step => step.classList.remove('active'));
        
        steps[currentStep].classList.add('active');
        for(let i = 0; i <= currentStep; i++) {
            progressSteps[i].classList.add('active');
        }
    }

    nextBtns.forEach(button => {
        button.addEventListener('click', function() {
            const currentStepElement = steps[currentStep];
            
            if (validateCurrentStep(currentStepElement)) {
                if (currentStep === 0) {
                    hideHomeContent();
                }
                currentStep++;
                updateStep();
            }
        });
    });

    prevBtns.forEach(button => {
        button.addEventListener('click', function() {
            currentStep--;
            updateStep();
        });
    });

    // Gestion de l'upload de fichier
    fileInput.addEventListener('change', function(e) {
        if(this.files && this.files[0]) {
            const fileName = this.files[0].name;
            fileSelected.textContent = fileName;
            fileSelected.style.display = 'block';
            fileLabel.querySelector('.upload-text').style.display = 'none';
            fileLabel.querySelector('.upload-icon').style.display = 'none';
        }
    });

    // Gestion des toggles de mot de passe
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if(input.type === 'password') {
                input.type = 'text';
                this.textContent = '👁️';
            } else {
                input.type = 'password';
                this.textContent = '👁️';
            }
        });
    });

    // Validation du formulaire et soumission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const lastStep = steps[steps.length - 1];
        
        if (validateCurrentStep(lastStep)) {
            // Vérifie si la case à cocher des conditions est cochée
            const checkbox = document.querySelector('input[type="checkbox"]');
            if (!checkbox.checked) {
                alert('Veuillez accepter les conditions générales');
                return;
            }

            // Vérifie si un fichier a été uploadé
            if (!fileInput.files || fileInput.files.length === 0) {
                alert('Veuillez uploader une pièce d\'identité');
                return;
            }

            // Si tout est valide, soumet le formulaire
            this.submit();
        }
    });

    // Gestionnaire pour le bouton "Valider"
    document.querySelector('.btn-submit').addEventListener('click', function(e) {
        e.preventDefault();
        const submitEvent = new Event('submit', {
            'bubbles': true,
            'cancelable': true
        });
        form.dispatchEvent(submitEvent);
    });

    // Suppression des messages d'erreur lors de la saisie
    document.querySelectorAll('input[required]').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                const value = this.value.trim();
                let isValid = true;

                switch(this.id) {
                    case 'instagramUsername':
                        isValid = isValidInstagramUsername(value);
                        break;
                    case 'phone':
                        isValid = isValidPhone(value);
                        break;
                    case 'email':
                        isValid = isValidEmail(value);
                        break;
                }

                if (isValid) {
                    this.classList.remove('input-error');
                    const errorMessage = this.nextElementSibling.nextElementSibling;
                    if (errorMessage && errorMessage.classList.contains('error-message')) {
                        errorMessage.style.display = 'none';
                    }
                }
            }
        });
    });
});