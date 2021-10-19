import axios from 'axios';
import BASE_URL from '../../apis';
import { POST_LOADING, GET_POSTS, GET_POST, ADD_POST, DELETE_POST } from '../types';

export const fetchPosts = () => async (dispatch: any) => {
    dispatch(setPostLoading());
    axios.get(BASE_URL).then((res) =>
        dispatch({
            type: GET_POSTS,
            payload: res.data,
        }),
    );
};

export const fetchOnePost = (id: any) => async (dispatch: any) => {
    dispatch(setPostLoading());
    axios.get(`${BASE_URL}/${id}`).then((res) =>
        dispatch({
            type: GET_POST,
            payload: res.data,
        }),
    );
};

export const addPost = (body: any, router: any) => async (dispatch: any) => {
    dispatch(setPostLoading());
    axios
        .post(`${BASE_URL}`, body)
        .then(() =>
            dispatch({
                type: ADD_POST,
            }),
        )
        .then(() => router.back());
};

export const deletePost = (id: any) => async (dispatch: any) => {
    axios
        .delete(`${BASE_URL}/${id}`)
        .then(() =>
            dispatch({
                type: DELETE_POST,
                payload: id,
            }),
        )
        .then(() => fetchPosts);
    // .then(() => router.push('/'));
};

export const setPostLoading = () => {
    return {
        type: POST_LOADING,
    };
};
