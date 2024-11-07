$svgContent = @'
<svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="35" font-family="Arial" font-size="24" fill="#857E81">
        Instagram Certification
    </text>
</svg>
'@

Set-Content -Path "assets\logo.svg" -Value $svgContent -Encoding UTF8