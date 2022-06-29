import captureWebsite from 'capture-website';
const OPTIONS = {
    type: "jpeg",
	removeElements: [
		'#onetrust-consent-sdk',
		'.CookieConsent'
	]
};

const URLS = [
    'https://www.renault.fr', 
    'https://www.dacia.fr', 
    'https://driversolutions.mobilize.fr/limo-electrique.html', 
    'https://config.alpinecars.com/fr/fr.html?conf=https%3A%2F%2Ffr.co.rplug.renault.com%2Fc%2FBAHR5%2FApmA&step=COULEUR',
    'https://www.renault.es/renault-webstore.html',
    'https://occasion.renault.fr/vehicules.html'
];

URLS.forEach(async (url, index) => {
    await captureWebsite.file(url, `./img/renault-${index}.jpg`, OPTIONS);
})
