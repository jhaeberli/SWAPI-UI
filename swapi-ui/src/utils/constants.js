export const api = {
    url: "https://swapi.dev/api",
    methods: {
        planets: '/planets/?page=',
    }
};

export const actionTypes = {
    SET_LOADING: "SET_LOADING",
    SET_LIST: "SET_LIST",
    SET_ERROR: 'SET_ERROR',
}


export const errorTypes = {
    ERROR_1: 'define error',
}
