import type { DefaultTheme } from "vitepress"

const sidebar: DefaultTheme.SidebarMulti = {
  "/download/": defaultSidebar(),
  "/docs/": defaultSidebar(),
  "/changelogs/": defaultSidebar()
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        {
          text: 'Download',
          link: '/download/',
        },
        {
          text: 'Changelogs',
          link: '/changelogs/',
        }
      ]
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Getting started',
          link: '/docs/guides/getting-started',
        },
      ]
    }
  ]
}

export default sidebar