// index.config
// cdn基路径
const WWW = 'https://www.fudaqiang.com';
const CDN = 'https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.4.5';
const Logo = '/images/rooon.gif';
//
export const Logolink = [
    {
        title: 'さくら荘その'
    },
    {
        title: '强い'
    }
];
// 首页轮播图
export const Banner = [
    {
        img: `${CDN}/images/cover/(1).jpg`
    },
    {
        img: `${CDN}/images/cover/(2).jpg`
    },
    {
        img: `${CDN}/images/cover/(3).jpg`
    },
    {
        img: `${CDN}/images/cover/(4).jpg`
    },
    {
        img: `${CDN}/images/cover/(5).jpg`
    },
    {
        img: `${CDN}/images/cover/(6).jpg`
    }
];
export const FocusInfo = [
    {
        title: `If you haven't found it yet, keep looking and don't settle${''}`,
        txt: '如果你还没找到，那继续找，别安逸下来。'
    },
    {
        title: `Live your life with passion! With some drive!${''}`,
        txt: '充满激情地生活！开着车！'
    }
];

// 基本信息
export const defaultInfo = {
    cdn: CDN,
    logo: Logo,
    www: WWW
};
