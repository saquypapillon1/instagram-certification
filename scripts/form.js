document.addEventListener("DOMContentLoaded", () => {
    // Variables globales
    const form = document.querySelector(".certification-form");
    const steps = document.querySelectorAll(".form-step");
    const stepIndicators = document.querySelectorAll(".step");
    let currentStep = 0;

    // Gestion de la navigation entre les Ã©tapes
    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.style.display = index === stepIndex ? "block" : "none";
            stepIndicators[index].classList.toggle("active", index <= stepIndex);
        });
    }

    // Validation du nom d`utilisateur Instagram
    function validateInstagramUsername(username) {
        const regex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
        return regex.test(username) && 
               !username.startsWith(".") && 
               !username.endsWith(".") && 
               username.length >= 1 && 
               username.length <= 30;
    }

    // Validation du numÃ©ro de tÃ©lÃ©phone (format franÃ§ais)
    function validatePhone(phone) {
        const regex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        return regex.test(phone);
    }

    // Validation de l`email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Gestion des erreurs
    function showError(input, message) {
        input.classList.add("input-error");
        const errorDiv = input.parentElement.querySelector(".error-message");
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = "block";
        }
    }

    function resetErrors() {
        document.querySelectorAll(".input-error").forEach(input => {
            input.classList.remove("input-error");
        });
        document.querySelectorAll(".error-message").forEach(error => {
            error.style.display = "none";
        });
    }

    // Validation de l`Ã©tape 1
    function validateStep1() {
        resetErrors();
        let isValid = true;

        const username = document.getElementById("instagramUsername").value.trim();
        const phone = document.getElementById("instagramPhone").value.trim();
        const email = document.getElementById("instagramEmail").value.trim();

        if (!username) {
            showError(document.getElementById("instagramUsername"), "Le nom d`utilisateur est requis");
            isValid = false;
        } else if (!validateInstagramUsername(username)) {
            showError(document.getElementById("instagramUsername"), "Format de nom d`utilisateur Instagram invalide");
            isValid = false;
        }

        if (!phone) {
            showError(document.getElementById("instagramPhone"), "Le numÃ©ro de tÃ©lÃ©phone est requis");
            isValid = false;
        } else if (!validatePhone(phone)) {
            showError(document.getElementById("instagramPhone"), "Format de tÃ©lÃ©phone invalide");
            isValid = false;
        }

        if (!email) {
            showError(document.getElementById("instagramEmail"), "L`email est requis");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError(document.getElementById("instagramEmail"), "Format d`email invalide");
            isValid = false;
        }

        return isValid;
    }

    // Gestion du fichier uploadÃ©
    const fileInput = document.getElementById("document");
    if (fileInput) {
        fileInput.addEventListener("change", function(e) {
            const fileName = e.target.files[0]?.name;
            if (fileName) {
                const fileSelected = this.parentElement.querySelector(".file-selected");
                const uploadText = this.parentElement.querySelector(".upload-text");
                fileSelected.textContent = `Fichier sÃ©lectionnÃ© : ${fileName}`;
                fileSelected.style.display = "block";
                uploadText.style.display = "none";
            }
        });
    }

    // Gestion des mots de passe
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const strengthMeter = document.querySelector(".strength-meter");
    const strengthText = document.querySelector(".strength-text");

    if (passwordInput) {
        passwordInput.addEventListener("input", () => {
            checkPasswordStrength(passwordInput.value);
        });
    }

    function checkPasswordStrength(password) {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^a-zA-Z0-9]/)) strength++;

        strengthMeter.style.width = `${(strength / 4) * 100}%`;
        
        switch (strength) {
            case 0:
            case 1:
                strengthMeter.style.backgroundColor = "#ff4d4d";
                strengthText.textContent = "Faible";
                break;
            case 2:
                strengthMeter.style.backgroundColor = "#ffd700";
                strengthText.textContent = "Moyen";
                break;
            case 3:
            case 4:
                strengthMeter.style.backgroundColor = "#00cc00";
                strengthText.textContent = "Fort";
                break;
        }
    }

    // Toggle password visibility
    document.querySelectorAll(".toggle-password").forEach(button => {
        button.addEventListener("click", function() {
            const input = this.previousElementSibling;
            const type = input.type === "password" ? "text" : "password";
            input.type = type;
            this.textContent = type === "password" ? "ðŸ‘ï¸" : "ðŸ”’";
        });
    });

    // Navigation buttons
    document.querySelectorAll(".btn-next").forEach(button => {
        button.addEventListener("click", () => {
            if (currentStep === 0 && !validateStep1()) return;
            
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    document.querySelectorAll(".btn-prev").forEach(button => {
        button.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    // Form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, "Les mots de passe ne correspondent pas");
            return;
        }

        // Ici, vous pouvez ajouter votre logique d`envoi du formulaire
        alert("Formulaire soumis avec succÃ¨s !");
    });

    // Initialize
    showStep(currentStep);

    // Gestion du bouton "Commencer maintenant"
    const startButton = document.querySelector(".primary-button");
    if (startButton) {
        startButton.addEventListener("click", () => {
            document.querySelector(".form-wrapper").scrollIntoView({ 
                behavior: "smooth" 
            });
        });
    }
});
