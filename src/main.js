import {
    createApp
} from 'vue'
import {
    createStore
} from 'vuex'

const store = createStore({
    state: {
        moviesToDisplay: []
    },
    mutations: {
        setMoviesToDisplay(state, payload) {
            state.moviesToDisplay = payload;
        }
    },
    actions: {
        async getPopularMovies(state) {
            const movies = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c40032dade4d1a42e0a2b3b831b512d1", {
                Accept: "application/json"
            })
            const moviesArr = await movies.json();
            state.commit("setMoviesToDisplay", moviesArr.results)
        }
    },
    modules: {},
    getters: {
        getAllMovies: state => state.moviesToDisplay
    }
})



import App from './App.vue'

let app = createApp(App)
app.use(store)
app.mount('#app')