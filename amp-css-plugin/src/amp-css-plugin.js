const { logWarn, yellow } = require('@scullyio/scully');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const combineStylesAmpPlugin = async (html, options) => {
	try {
		const dom = new JSDOM(html);
		const { window } = dom;
		const { document } = window;
		const { head } = document;
		// Solution
		const styleTags = document.querySelectorAll('style');
		var totalStyles = ``;
		Array.prototype.forEach.call(styleTags, (style) => {
			const parent = style.parentNode;
			parent.removeChild(style);
			totalStyles += style.innerHTML;
		});
		var newStyle = document.createElement('style');
		head.appendChild(newStyle);
		newStyle.innerHTML = totalStyles;
		return dom.serialize();
	} catch (e) {
		logWarn(`error in combineStylesPlugin, didn't parse for route "${yellow(route.route)}"`);
	}
	// in case of failure return unchanged HTML to keep flow going
	return html;
};

module.exports = {
	combineStylesPlugin: combineStylesAmpPlugin,
};
