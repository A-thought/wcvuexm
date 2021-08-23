import {request} from "./request"

//详情页数据请求
export function getDetail(iid) {
    return request({
        url: "detail",
        params: {
            iid
        }
    })
}

//详情页其余商品数据请求
export function getRecommend() {
    return request({
        url: "recommend"
    })
}

//详情页数据整合

export class Persion{
    constructor(iteminfo,columns,services){
        this.title = iteminfo.title //标题
        this.desc = iteminfo.desc //商品描述
        this.newPrice = iteminfo.price //新价格
        this.realPrice = iteminfo.lowNowPrice //最低价格
        this.oldPrice = iteminfo.oldPrice //原价格
        this.discount = iteminfo.discountDesc //折扣
        this.column = columns
        this.services = services
        this.realPrice = iteminfo.lowNowPrice
    }
}
//用户评分等数据
export class ShopData{
    constructor(shopinfo){
        this.logo = shopinfo.shopLogo //店铺logo
        this.name = shopinfo.name //店铺名称
        this.fans = shopinfo.cFans
        this.sells = shopinfo.cSells
        this.score = shopinfo.score //评分
        this.goodsCount = shopinfo.cGoods
    }
}

export class Params{
    constructor(info,rule) {
        //三目运算 避免没有图片
        this.image = info.images ? info.images[0] : ''
        this.infos = info.set
        this.sizes = rule.tables
    }
}