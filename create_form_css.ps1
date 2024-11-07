$cssContent = @'
/* Container du formulaire */
.form-wrapper {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(217, 187, 248, 0.2);
}

/* Progress Steps */
.progress {
    margin-bottom: 2rem;
}

.steps {
    display: flex;
    justify-content: space-between;
    position: relative;
}

.steps::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--color-bg);
    z-index: 1;
}

.step {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: var(--color-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    z-index: 2;
    transition: all 0.3s ease;
}

.step.active {
    background: var(--color-accent);
}

/* Form Steps */
.form-step {
    display: none;
}

.form-step.active {
    display: block;
    animation: fadeIn 0.5s ease;
}

/* Input Groups */
.input-group {
    position: relative;
    margin-bottom: 1.5rem;
}

.input-group input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid var(--color-bg);
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: #f8f9fa;
}

.input-group input:focus {
    border-color: var(--color-secondary);
    outline: none;
    box-shadow: 0 0 0 4px rgba(217, 187, 248, 0.1);
    background: white;
}

.input-group label {
    position: absolute;
    left: 15px;
    top: -10px;
    background: white;
    padding: 0 5px;
    font-size: 0.85rem;
    color: var(--color-text);
}

.input-group.required label::after {
    content: " *";
    color: #ff4d4d;
}

/* File Upload Styles */
.file-upload {
    border: 2px dashed var(--color-secondary);
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.file-upload:hover {
    background: var(--color-bg);
}

.upload-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.file-upload input[type="file"] {
    display: none;
}

/* Document Info Styles */
.docs-info {
    background: var(--color-bg);
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 2rem;
}

.docs-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

.docs-list li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
}

.docs-list li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--color-secondary);
}

/* Password Fields et Alert */
.password-info {
    margin-bottom: 2rem;
}

.info-alert {
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    color: #856404;
    padding: 1.2rem;
    border-radius: 8px;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    animation: slideIn 0.3s ease-in-out;
}

.alert-icon {
    font-size: 1.5rem;
    color: #ffc107;
}

.password-group {
    position: relative;
    margin-bottom: 2rem;
}

.toggle-password {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    font-size: 1.2rem;
    color: var(--color-text);
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.toggle-password:hover {
    opacity: 1;
}

/* Password Strength */
.password-strength {
    margin: 1.5rem 0;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
}

.strength-meter {
    height: 6px;
    background: #e9ecef;
    border-radius: 3px;
    margin-bottom: 0.8rem;
    overflow: hidden;
    position: relative;
}

.strength-meter::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    transition: all 0.3s ease;
}

.strength-meter[data-strength="weak"]::before {
    width: 33%;
    background: #dc3545;
}

.strength-meter[data-strength="medium"]::before {
    width: 66%;
    background: #ffc107;
}

.strength-meter[data-strength="strong"]::before {
    width: 100%;
    background: #28a745;
}

.strength-text {
    font-size: 0.85rem;
    color: var(--color-text);
    text-align: right;
    font-weight: 500;
}

/* Terms Checkbox */
.terms-group {
    margin: 2rem 0;
}

.checkbox-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
    user-select: none;
}

.checkbox-container input {
    display: none;
}

.checkmark {
    width: 22px;
    height: 22px;
    border: 2px solid var(--color-secondary);
    border-radius: 6px;
    display: inline-block;
    position: relative;
    transition: all 0.3s ease;
}

.checkbox-container input:checked + .checkmark {
    background: var(--color-secondary);
}

.checkbox-container input:checked + .checkmark:after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 14px;
}

/* Error Styles */
.error-message {
    color: #ff4d4d;
    font-size: 0.8rem;
    margin-top: 5px;
    display: none;
}

.input-error {
    border-color: #ff4d4d !important;
    animation: shake 0.3s ease-in-out;
}

/* Button Styles */
.btn-group {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

button {
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    flex: 1;
}

.btn-next, .btn-submit {
    background: var(--color-accent);
    color: var(--color-text);
}

.btn-prev {
    background: var(--color-bg);
    color: var(--color-text);
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 480px) {
    .form-wrapper {
        padding: 1rem;
        margin: 1rem;
    }

    .btn-group {
        flex-direction: column;
    }

    button {
        width: 100%;
        padding: 0.8rem;
    }

    .info-alert {
        padding: 1rem;
        font-size: 0.9rem;
    }

    .password-strength {
        padding: 0.8rem;
    }

    .checkbox-container {
        font-size: 0.9rem;
    }
}
'@

Set-Content -Path "styles\form.css" -Value $cssContent -Encoding UTF8