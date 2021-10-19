import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import AddPost from '../../components/AddPost';
import { IPost } from '../../types';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/actions/postAction';

function CreatePost() {
    const router = useRouter();

    const dispatch = useDispatch();

    const addPostFunc = async (e: React.FormEvent, formData: IPost) => {
        e.preventDefault();
        const post: IPost = {
            id: Date.now(),
            title: formData.title,
            body: formData.body,
        };
        dispatch(addPost(post, router));
        // router.back();
    };

    return (
        <>
            <AddPost savePost={addPostFunc} />
        </>
    );
}

export default CreatePost;
