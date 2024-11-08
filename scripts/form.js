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

    // Fonction pour masquer le contenu de la page d'accueil
    function hideHomeContent() {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.display = 'none';
        }
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
            if (currentStep === 0) {
                hideHomeContent(); // Cache le contenu de la page d'accueil après l'étape 1
            }
            currentStep++;
            updateStep();
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

    // Validation du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Ajoutez ici votre logique de validation et d'envoi du formulaire
        console.log('Formulaire soumis');
    });
});