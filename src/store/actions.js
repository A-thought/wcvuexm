export default {
    addcart(context,payload) {
      return new Promise((resolve,reject) => {
        let oldproduct = context.state.cartlist.find(item => item.iid === payload.iid)
        if(oldproduct){
          context.commit("addcount",oldproduct)
          resolve("商品数量+1")
          
        }else{
          payload.count =1
          context.commit("addinsert",payload);
          resolve("商品添加成功")
        }
      })
      
    }
}