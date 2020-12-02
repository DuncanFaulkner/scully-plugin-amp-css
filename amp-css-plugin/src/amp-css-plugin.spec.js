const { combineStylesAmpPlugin } = require('./amp-css-plugin.js');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const STARTING_HTML = `<!DOCTYPE html> <html lang="en"> <head> <style>html { background: #dedede; }</style> <style>html { color: #444; }</style> <style>* { font-family: 'Arial'; }</style> <title>Test HTML File</title> </head> <body> </body> </html>`;

const EXPECTED_HTML = `<!DOCTYPE html><html lang=\"en\"><head>    <title>Test HTML File</title> <style>html { background: #dedede; }html { color: #444; }* { font-family: 'Arial'; }</style></head> <body>  </body></html>`;

test('it should convert multiple style tags into one style tag', async () => {
	const newHtml = await combineStylesAmpPlugin(STARTING_HTML, { route: 'test-route' });
	const dom = new JSDOM(newHtml);
	const { window } = dom;
	const { document } = window;
	const styleTags = document.querySelectorAll('style');

	expect(newHtml).toBe(EXPECTED_HTML);
	expect(styleTags.length).toBe(1);
});
