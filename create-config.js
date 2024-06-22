const fs = require('fs');

const config = {
  formspreeId: process.env.REACT_APP_FORMSPREE_ID,
};

const configContent = `const config = ${JSON.stringify(config, null, 2)};

export default config;`;

fs.writeFileSync('./src/config.js', configContent, 'utf8');

console.log('config.js has been generated successfully.');
