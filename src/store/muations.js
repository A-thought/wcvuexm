export default {
    addcount(state,payload) {
        payload.count +=1 //购物车商品数量提升
    },
    addinsert(state,payload) {
        payload.checked = true
        state.cartlist.push(payload)
    },
    nxzhong(state) {
        state.cartlist.forEach(item => {
            item.checked = false
        });
    },
    xzhong(state) {
        state.cartlist.forEach(item => {
            item.checked = true
        });
    }
}