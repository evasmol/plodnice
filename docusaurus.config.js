// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plodnice',
  tagline: 'Cesty k rodičovství',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Poslední články',
          blogSidebarCount: 'ALL',
          // blogTagsPostsComponent: '../src/components/TagList.tsx',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Plodnice',
        // logo: {
        //   alt: 'Plodnice Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'o-mne',
            position: 'left',
            label: 'O mně',
          },
          { to: '/blog', label: 'Články', position: 'left' },
          {
            type: 'doc',
            docId: 'pribehy',
            position: 'left',
            label: 'Příběhy',
          },
        ],
      },
      announcementBar: {
        id: 'brand_header',
        content: `
        <a href="/" id="brand_header">
          <img src="https://i.imgur.com/hxlEmUL.png" />
          <div>
            <h1 class="hero__title">Pl🍎dnice</h1>
            <p class="hero__subtitle">Cesty k rodičovství</p>
          </div>
        </a>
        `,
        backgroundColor: 'var(--ifm-color-primary)',
        textColor: 'var(--ifm-font-color-base-inverse)', // var(--ifm-heading-color)
        isCloseable: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Odkazy',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/plodnice/',
              },
            ],
          },
        ],
        copyright: `
          <p>Tato stránka je určena neplodným párům jako zdroj informací a podpory. Nepropaguje konkrétní postupy léčby neplodnosti ani instituce a neslouží jako odborné poradenství. 
          </p>Copyright © ${new Date().getFullYear()} Plodnice, Eva Šmolíková, Built with Docusaurus.
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
