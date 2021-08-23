import BackTop from "components/content/backTop/backTop"
export const btop = {
    data() {
        return {
            ymshow: false
        }
    },
    methods: {
        batop(position) {
            this.ymshow = -position.y > 344
        },
        backtopclick(){
            this.$refs.goodsimgload.scrollcf(0,0,1000)
        }   
    },
    components: {
        BackTop
    }
}