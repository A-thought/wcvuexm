module.export = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewprotwidth: 350,//视窗宽度，对应设计稿宽度
            viewportHeight: 667,//视窗高度，对应设计稿宽度
            unitPrecision: 5,//指定"px"转换为视窗单位值的小数位数
            viewprotUnig: "vw",//指定需要转换成的视窗单位
            selectorBlackList: ['ignore','nav-bar','tab-bar','tab-bar-item'],//z指定不需要转换的类
            minpPixelValue: 1,//小于或等于"1px",则不转换为视窗单位
            mediaQuery: false, //允许在媒体查询中转换"px""
            ecclude: [/Tabbar/]
        }
    }
}
//没有作用，请参考官网