const { registerPlugin } = require('@scullyio/scully');
const { combineStylesAmpPlugin } = require('./amp-css-plugin');

const validator = async (config) => [];
registerPlugin('render', 'combineStylesAmpPlugin', combineStylesAmpPlugin, validator);

module.exports = {
	combineStylesAmpPlugin,
};
