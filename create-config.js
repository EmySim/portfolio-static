const fs = require('fs');
const path = require('path');

// Lire les variables d'environnement
const formspreeId = process.env.REACT_APP_FORMSPREE_ID;

// Contenu du fichier config.js
const configContent = `
const config = {
  formspreeId: '${formspreeId}',
};

export default config;
`;

// Écrire le fichier config.js dans le répertoire src
const filePath = path.join(__dirname, 'src', 'config.js');
fs.writeFileSync(filePath, configContent);

console.log('Config file created successfully.');