import { HandledRoute, registerPlugin, ScullyConfig } from '@scullyio/scully';
require('@scullyio/scully-plugin-amp-css');

// const combineStylesAmpPlugin = async (html: any, route: HandledRoute) => {
// 	console.log('hello there');
// 	console.log(html);
// 	console.log(route);
// };
// const validator = () => [];
// registerPlugin('render', 'testPlugin', combineStylesAmpPlugin, validator);

export const config: ScullyConfig = {
	projectRoot: './src',
	projectName: 'scully-plugin-amp-css',
	outDir: './dist/static',
	routes: {},
	defaultPostRenderers: ['combineStylesAmpPlugin'],
};
