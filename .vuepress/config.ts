import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { viteBundler } from '@vuepress/bundler-vite'
import { navbar, series } from './config/index'

export default defineUserConfig({
    title: 'Justin Xn',
    description: 'Just blog',
    bundler: viteBundler(),
    theme: recoTheme({
        style: '@vuepress-reco/style-default',
        logo: '/logo.png',
        author: 'justinxn',
        authorAvatar: '/head.png',
        componentsDir: './components',
        docsRepo: 'https://github.com/justinxn/justinxn.github.io',
        docsBranch: 'gh-pages',
        lastUpdatedText: '',
        navbar,
        series
    })
});
