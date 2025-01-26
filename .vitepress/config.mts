import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "Christian Klihm",
  description: "curriculum vitae",
  base: '/vita/',
  themeConfig: {
    logo: '/me.png',
    nav: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pagequit' },
      { icon: 'xing', link: 'https://www.xing.com/profile/Christian_Klihm/web_profiles' },
    ],
  },
});
