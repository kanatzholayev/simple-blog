import { POST_LOADING, GET_POSTS, GET_POST, ADD_POST, DELETE_POST } from '../types';

const initialState = {
    posts: [],
    post: {},
    loading: false,
    error: null,
};

export const postReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case POST_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null,
            };
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false,
                error: null,
            };
        case ADD_POST:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case DELETE_POST:
            return {
                ...state,
                loading: false,
                posts: state.posts.filter((post) => post['id'] !== action.payload),
            };
        default:
            return state;
    }
};
