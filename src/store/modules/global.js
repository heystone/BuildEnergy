export default {
    state: {
      page_id:'home',//当前router
    },
    getters: {
      page_id:state=>state.page_id,
    },

    mutations: {
      updatePageId(state, payload) {
        state.page_id = payload;
      },
    },

}