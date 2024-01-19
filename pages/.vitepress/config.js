// @ts-check

const GITHUB_URL = 'https://github.com/m1-dev/vitepress-demo';

/** @satisfies {import('../../types').VitePressConfig} */
module.exports = {
    title: 'VitePress Demo',
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'GitHub',
                link: GITHUB_URL
            }
        ],
        sidebar: [
            {
                text: 'Start Here',
                items: [
                    {
                        text: 'About',
                        link: '/about'
                    },
                    {
                        text: 'GitHub',
                        link: GITHUB_URL
                    }
                ]
            }
        ]
    }
};
