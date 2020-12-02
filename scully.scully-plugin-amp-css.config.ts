import { HandledRoute, registerPlugin, ScullyConfig } from '@scullyio/scully';
require('@scullyio/scully-plugin-amp-css');

export const config: ScullyConfig = {
	projectRoot: './src',
	projectName: 'scully-plugin-amp-css',
	outDir: './dist/static',
	routes: {},
	defaultPostRenderers: ['combineStylesAmpPlugin'],
};
