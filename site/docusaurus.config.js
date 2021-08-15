const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'djs-cc',
  tagline: 'A simple Discord.js command client',
  url: 'matthewferderber.github.io',
  baseUrl: '/djs-cc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'matthewferderber', // Usually your GitHub org/user name.
  projectName: 'djs-cc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'djs-cc',
      items: [
        {
          type: 'doc',
          docId: 'api/index',
          position: 'left',
          label: 'API Docs',
        },
        {
          href: 'https://github.com/matthewferderber/djs-cc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API Docs',
              to: '/docs/api',
            },
          ],
        },
        {},
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/matthewferderber/djs-cc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Matthew Ferderber. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/matthewferderber/djs-cc/edit/master/site/',
        },
        theme: {
          customCss: require.resolve('./css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json'
      },
    ],
  ]
};
