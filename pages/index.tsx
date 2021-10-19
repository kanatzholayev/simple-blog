import { useEffect } from 'react';
import Link from 'next/link';
import Post from '../components/PostItem';
import { IPost } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost } from '../store/actions/postAction';
import GlobalStyle from '../styles/global';
import { Container, Button, MainTitle, Center } from '../styles/main';

export default function IndexPage() {
    const dispatch = useDispatch();

    const { posts, loading } = useSelector((state: any) => state.post);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    let postContent;

    const deletePostFunc = async (id: number) => {
        dispatch(deletePost(id));
    };

    if (loading) {
        postContent = <h2>Loading...</h2>;
    } else {
        const reversed = [].concat(posts).reverse();
        postContent = reversed.map((post: IPost) => <Post key={post.id} deletePostFunc={deletePostFunc} post={post} />);
    }

    return (
        <>
            <GlobalStyle />
            <Container>
                <MainTitle>My posts</MainTitle>
                <Center>
                    <Link href="posts/new">
                        <Button>Create New</Button>
                    </Link>
                </Center>
                {postContent}
            </Container>
        </>
    );
}
