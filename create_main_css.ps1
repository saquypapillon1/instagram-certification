$cssContent = @'
:root {
    --color-bg: #F3EEF8;
    --color-accent: #FCDF78;
    --color-text: #857E81;
    --color-secondary: #D9BBF8;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: "Inter", sans-serif;
    line-height: 1.6;
    padding-top: 80px;
}

/* Header et Navigation */
.main-header {
    padding: 1rem 2rem;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    color: var(--color-text);
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--color-secondary);
}

.cta-button {
    background-color: var(--color-accent);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.cta-button:hover {
    transform: translateY(-2px);
}

/* Section Hero */
.hero {
    text-align: center;
    padding: 4rem 2rem;
    max-width: 800px;
    margin: 0 auto;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--color-text);
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--color-text);
    opacity: 0.9;
}

.primary-button {
    background-color: var(--color-accent);
    border: none;
    padding: 1rem 2rem;
    border-radius: 25px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(252, 223, 120, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
    
    .main-header {
        padding: 0.8rem 1rem;
    }
    
    .cta-button {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    body {
        padding-top: 60px;
    }
    
    .hero {
        padding: 2rem 1rem;
    }
    
    .primary-button {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
    }
}
'@

Set-Content -Path "styles\main.css" -Value $cssContent -Encoding UTF8