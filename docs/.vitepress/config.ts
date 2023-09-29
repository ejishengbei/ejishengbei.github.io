export default ({
    // app level config options
    lang: 'zh-cn',
    title: 'hanPress',
    description: 'Vite & Vue powered static site generator.',

    lastUpdated:true,

    base:'/hanPress/',

    themeConfig:{
        //logo
        logo:'/logo.png',

        // 导航栏
        nav:[
            {text:'mess',link:'./mess/000_markdown',},

            {text:'下拉选择框',
            items:[
                {text:'option-1', link:'/'},
                {text:'option-2', link:'http://www.baidu.com'}
            ]
            }
        ],

        // 社交链接？
        // socialLinks:[{icon:'github', link:'http://www.baidu.com'}],

        //侧边导航栏
        sidebar:[{
            text:'mess',
            items:[
                {text:'000_markdown', link:'./000_markdown', activeMatch:'/mess/000_markdown'},
                {text:'011_condaCommand', link:'./011_condaCommand', activeMatch:'/mess/011_condaCommand'}
            ],
            collapsible: true,
            collappsed: true
        }],

        //文章底部翻页
        docFooter:{prev:'上一篇', next:'下一篇'},

        //更新时间
        lastUpdatedText:'最近更新时间',

        //页脚设置
        footer:{
            message:'messge',
            copyright:'copyright han发布只为自用，他人请慎重'
        },

        //语言切换
        localeLinks:{
            items:[
                {text:'简体中文', link:'/'},
                {text:'English',link:'/en'}
            ]
        },
        locales:{
            //调用函数
            '/':getChinesThemeConfig(),
            '/en/':getEnglishThemeConfig()
        },
        
        //添加搜索功能
        search:{
            provider:'local'
        },
    },

    //语言
    locales:{
        '/':{lang:'zh-CN',title:'',description:''},
        '/en/':{lang:'en-US',title:'?',description:'?'}
    },
});

function getChinesThemeConfig(){
    return {
        nav:[{text:'待整理',link:'./mess/000_markdown',}]
    }
}

function getEnglishThemeConfig(){
    return {
        nav:[{text:'mess',link:'./mess/000_markdown',},]
    }
}