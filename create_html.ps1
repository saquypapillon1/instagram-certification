# Création du fichier HTML
$htmlContent = @'
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Certification Instagram - Accueil</title>
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/form.css">
</head>
<body>
    <!-- Header et Navigation -->
    <header class="main-header">
        <nav class="nav-container">
            <div class="logo">
                <img src="assets/logo.svg" alt="Logo Certification Instagram">
            </div>
            <ul class="nav-links">
                <li><a href="/">Accueil</a></li>
                <li><a href="/processus">Processus</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <button class="cta-button">Certifier mon compte</button>
        </nav>
    </header>

    <main>
        <!-- Section Hero -->
        <section class="hero">
            <h1>Certifiez votre compte Instagram</h1>
            <p>Gagnez en crédibilité et en visibilité avec un badge vérifié</p>
            <button class="primary-button">Commencer maintenant</button>
        </section>

        <!-- Formulaire de Certification -->
        <div class="form-wrapper">
            <form class="certification-form">
                <!-- Indicateur de progression -->
                <div class="progress">
                    <div class="steps">
                        <div class="step active">1</div>
                        <div class="step">2</div>
                        <div class="step">3</div>
                    </div>
                </div>

                <!-- Étape 1 -->
                <div class="form-step active">
                    <h3>Informations Instagram</h3>
                    
                    <div class="input-group required">
                        <input 
                            type="text" 
                            id="instagramUsername"
                            pattern="^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$"
                            placeholder="votrecompte"
                            required
                        >
                        <span class="input-prefix">@</span>
                        <label>Nom d`utilisateur Instagram</label>
                        <span class="error-message"></span>
                    </div>

                    <div class="input-group required">
                        <input 
                            type="tel" 
                            id="instagramPhone"
                            pattern="^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$"
                            placeholder="06XXXXXXXX"
                            required
                        >
                        <label>Numéro de téléphone</label>
                        <span class="error-message"></span>
                    </div>

                    <div class="input-group required">
                        <input 
                            type="email" 
                            id="instagramEmail"
                            placeholder="exemple@email.com"
                            required
                        >
                        <label>Email</label>
                        <span class="error-message"></span>
                    </div>

                    <button type="button" class="btn-next">Continuer</button>
                </div>

                <!-- Étape 2 -->
                <div class="form-step">
                    <h3>Vérification</h3>
                    
                    <div class="docs-info">
                        <div class="info-icon"ℹ️</div>
                        <p>Documents acceptés :</p>
                        <ul class="docs-list">
                            <li>Carte Nationale d`Identité</li>
                            <li>Passeport</li>
                            <li>Permis de conduire</li>
                        </ul>
                    </div>

                    <div class="upload-container">
                        <div class="input-group file-upload">
                            <input type="file" id="document" accept="image/*,.pdf" required>
                            <label for="document" class="file-label">
                                <span class="upload-icon">📎</span>
                                <span class="upload-text">Glissez votre document ou cliquez ici</span>
                                <span class="file-selected"></span>
                            </label>
                        </div>
                        <p class="upload-info">Format acceptés : JPG, PNG, PDF (Max 5MB)</p>
                    </div>

                    <div class="btn-group">
                        <button type="button" class="btn-prev">Retour</button>
                        <button type="button" class="btn-next">Continuer</button>
                    </div>
                </div>

                <!-- Étape 3 -->
                <div class="form-step">
                    <h3>Confirmation</h3>

                    <div class="password-info">
                        <div class="info-alert">
                            <span class="alert-icon">⚠️</span>
                            <p>Important : Un mot de passe incorrect entraînera l`annulation automatique de votre demande de certification.</p>
                        </div>
                    </div>

                    <div class="input-group password-group">
                        <input type="password" id="password" required>
                        <label>Mot de passe Instagram</label>
                        <button type="button" class="toggle-password">👁️</button>
                    </div>

                    <div class="input-group password-group">
                        <input type="password" id="confirmPassword" required>
                        <label>Confirmer le mot de passe</label>
                        <button type="button" class="toggle-password">👁️</button>
                    </div>

                    <div class="password-strength">
                        <div class="strength-meter"></div>
                        <p class="strength-text"></p>
                    </div>

                    <div class="terms-group">
                        <label class="checkbox-container">
                            <input type="checkbox" required>
                            <span class="checkmark"></span>
                            J`accepte les conditions d`utilisation
                        </label>
                    </div>

                    <div class="btn-group">
                        <button type="button" class="btn-prev">Retour</button>
                        <button type="submit" class="btn-submit">Valider</button>
                    </div>
                </div>
            </form>
        </div>
    </main>

    <script src="scripts/form.js"></script>
</body>
</html>
'@

Set-Content -Path "index.html" -Value $htmlContent -Encoding UTF8