var theme = 'dark';

document.getElementById('theme-toggle').onclick = function() {
	theme = (theme === 'dark') ? 'light' : 'dark';
    document.getElementById('theme-toggle').innerHTML = (theme === 'dark') ? '<i class="fas fa-lightbulb"></i> Turn the lights on' : '<i class="fas fa-lightbulb"></i> Turn the lights off';
    console.log(theme);
    if (theme === 'dark') {
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
    }
};



const secretActions = {
    'FOO': () => alert('BAR!'),
    '2316': () => alert('You do not recognise the bodies in the water.'),
    'UPSIDEDOWN': () => document.body.style.transform = document.body.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)',
    'ARROWUPARROWUPARROWDOWNARROWDOWNARROWLEFTARROWRIGHTBA': () => alert('No secrets here.'),
    '1337': () => {
        function toLeetSpeak(str) {
            return str.replace(/A/gi, '4')
                      .replace(/E/gi, '3')
                      .replace(/I/gi, '1')
                      .replace(/O/gi, '0')
                      .replace(/S/gi, '5')
                      .replace(/T/gi, '7');
        }
        function walk(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = toLeetSpeak(node.textContent);
            } else {
                node.childNodes.forEach(walk);
            }
        }
        walk(document.body);
    },
    'RM -RF': () => {
        const stylesheet = document.styleSheets[0];
        if (stylesheet.ownerNode && stylesheet.ownerNode.parentNode) {
            stylesheet.ownerNode.parentNode.removeChild(stylesheet.ownerNode);
        }
        document.body.style.fontFamily = 'monospace';
        document.body.innerHTML = '<p>Error 404 - Site not found...</p>' +
        '<p>Try checking the URL or go back to the previous page.</p>'+
        '<br/><br/>' +
        '<p><i>Great one, you\'ve broken it now. Just go ahead and refresh the page or something, that should probably fix it.</i></p>';
    }
};

let inputSequence = '';
document.addEventListener('keydown', function(e) {
    inputSequence += e.key.toUpperCase();
    const maxLength = Math.max(...Object.keys(secretActions).map(code => code.length));
    if (inputSequence.length > maxLength) {
        inputSequence = inputSequence.slice(-maxLength);
    }
    for (const code in secretActions) {
        if (inputSequence.endsWith(code)) {
            secretActions[code]();
            inputSequence = '';
            break;
        }
    }
});