# setup.ps1

Write-Host "Instalacja zależności..."
npm install
npm install react-router-dom@6
Write-Host "Zależności zainstalowane."

Write-Host "Uruchamianie aplikacji..."
npm start
