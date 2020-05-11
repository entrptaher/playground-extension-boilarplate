export default {
  manifest_version: 2,
  name: 'Playground Extension',
  version: '1.0.0',
  short_name: 'playground_extension',
  description: 'Playground extension with modern techs',
  icons: {
    '128': 'img/logo.png',
  },
  permissions: [
    '<all_urls>',
    'tabs',
    'activeTab',
	],
  background: {
    scripts: ['js/background.js'],
    persistent: false,
  },
  browser_action: {
    default_icon: 'img/logo.png',
  },
  offline_enabled: true,
};
