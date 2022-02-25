import {
    createApp
} from 'vue'
import {
    createStore
} from 'vuex'

const store = createStore({
    state: {
        moviesToDisplay: [],
        fetching: false
    },
    mutations: {
        setMoviesToDisplay(state, payload) {
            state.moviesToDisplay = payload;
        },
        setFetchingStatus(state, payload) {
            state.fetching = payload;
        }
    },
    actions: {
        async getPopularMovies(state) {
            state.commit("setMoviesToDisplay", [])
            state.commit("setFetchingStatus", true)
            const movies = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c40032dade4d1a42e0a2b3b831b512d1", {
                Accept: "application/json"
            })
            const moviesArr = await movies.json();
            state.commit("setMoviesToDisplay", moviesArr.results)
            state.commit("setFetchingStatus", false)
        },
        async getNowPlayingMovies(state) {
            state.commit("setMoviesToDisplay", [])
            state.commit("setFetchingStatus", true)
            const movies = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c40032dade4d1a42e0a2b3b831b512d1", {
                Accept: "application/json"
            })
            const moviesArr = await movies.json();
            state.commit("setMoviesToDisplay", moviesArr.results)
            state.commit("setFetchingStatus", false)
        },
        async getUpcomingMovies(state) {
            state.commit("setMoviesToDisplay", [])
            state.commit("setFetchingStatus", true)
            const movies = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=c40032dade4d1a42e0a2b3b831b512d1", {
                Accept: "application/json"
            })
            const moviesArr = await movies.json();
            state.commit("setMoviesToDisplay", moviesArr.results)
            state.commit("setFetchingStatus", false)
        },
        async getTopRatedMovies(state) {
            state.commit("setMoviesToDisplay", [])
            state.commit("setFetchingStatus", true)
            const movies = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c40032dade4d1a42e0a2b3b831b512d1", {
                Accept: "application/json"
            })
            const moviesArr = await movies.json();
            state.commit("setMoviesToDisplay", moviesArr.results)
            state.commit("setFetchingStatus", false)
        },
    },
    modules: {},
    getters: {
        getAllMovies: state => state.moviesToDisplay,
        getFetching: state => state.fetching
    }
})



import App from './App.vue'

let app = createApp(App)
app.use(store)
app.mount('#app')