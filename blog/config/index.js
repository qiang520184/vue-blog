// index.config
// cdn基路径
const WWW = 'https://www.fudaqiang.com';
const CDN = 'https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.5';
const Logo = '/images/rooon.gif';
const ImgAlt = '付大强';
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
        img: `${CDN}/images/cover/1.jpg`
    },
    {
        img: `${CDN}/images/cover/2.jpg`
    },
    {
        img: `${CDN}/images/cover/3.jpg`
    },
    {
        img: `${CDN}/images/cover/4.jpg`
    },
    {
        img: `${CDN}/images/cover/5.jpg`
    },
    {
        img: `${CDN}/images/cover/6.jpg`
    }
];
// 首页列表
export const ArticleList = [
    {
        img: 'https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.4.1/md-img/javascript.png',
        title: 'js中全等和等于技术',
        id: '1',
        time: '2019-6-9 13:06',
        type: 'archives',
        typeName: '技术',
        classifyPath: '/archives/skill',
        path: '/'
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.4.1/md-img/javascript.png',
        title: '生活生活js中全等和等于',
        id: '1',
        time: '2019-6-9 13:06',
        type: 'archives',
        typeName: '生活',
        classifyPath: '/archives/live',
        path: '/'
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.4.1/md-img/javascript.png',
        title: 'j随想随想',
        id: '1',
        time: '2019-6-9 13:06',
        type: 'caprice',
        typeName: '随想',
        classifyPath: '/archives/caprice',
        path: '/'
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.4.1/md-img/javascript.png',
        title: 'js中全等和等于',
        id: '1',
        time: '2019-6-9 13:06',
        type: '/resource',
        typeName: '转载',
        classifyPath: '/archives/resource',
        path: '/'
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
export const FocusInfoIcon = [
    {
        img: `${CDN}/img/other/next-b.svg`,
        text: 'left',
        type: 'left'
    },
    {
        img: `${CDN}/img/social/github.png`,
        path: 'https://github.com/qiang520184',
        text: 'github',
        type: '_blank'
    },
    {
        img: `${CDN}/img/social/email.svg`,
        path: 'mailto:199513521@qq.com',
        text: 'email',
        type: '_blank'
    },
    {
        img: `${CDN}/img/social/sina.png`,
        path: 'https://weibo.com/xq520184',
        text: 'sina',
        type: '_blank'
    },
    {
        img: `${CDN}/img/social/wangyiyun.png`,
        path: 'https://music.163.com/#/playlist?id=2523258784',
        text: 'wangyiyun',
        type: '_blank'
    },
    {
        img: `${CDN}/img/social/wechat.png`,
        text: 'weixin',
        type: 'hover',
        hoverImg: `${CDN}/img/custom/donate/wxgzh.jpg`
    },
    {
        img: `${CDN}/img/other/next-b.svg`,
        text: 'right',
        type: 'right'
    }
];
// 基本信息
export const defaultInfo = {
    cdn: CDN,
    logo: Logo,
    www: WWW,
    imgAlt: ImgAlt
};
