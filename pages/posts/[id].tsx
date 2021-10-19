import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PostInner from '../../components/PostInner';
import { fetchOnePost } from '../../store/actions/postAction';
import GlobalStyle from '../../styles/global';

const PostDetailView = () => {
    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch();

    const { post, loading } = useSelector((state: any) => state.post);

    useEffect(() => {
        dispatch(fetchOnePost(id));
    }, []);

    let postContent;

    if (loading) {
        postContent = <h2>Loading...</h2>;
    } else {
        postContent = <PostInner post={post} />;
    }

    return (
        <>
            <GlobalStyle />
            {postContent}
        </>
    );
};

export default PostDetailView;
