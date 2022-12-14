import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
export default {
    namespaced: true,
    state: {
        item: [],
    },
     getters: {
        items(state){
            return state.Items;
        }
     },

     mutations: {
        LlenarItems(state, data){
            state.Items = data;
        }
     },
     actions: {
        cargarImagenes: async function ({commit}) {
            try {
                const setting = {
                    method: 'GET',
                }
                const data = await fetch(url,setting);
                const json = await data.json();
                commit('LlenarItems', json)
            }
            catch(err){
                console.log(err)
            }
        }
     },
    }