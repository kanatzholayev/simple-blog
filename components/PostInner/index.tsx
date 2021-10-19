import * as React from 'react';
import { useRouter } from 'next/router';
import { IPost } from '../../types';
import { Desc } from './styles';
import { Container, Button, MainTitle } from '../../styles/main';

type Props = {
    post: IPost;
};

const PostInner: React.FC<Props> = ({ post }) => {
    const router = useRouter();
    return (
        <Container>
            <Button onClick={() => router.back()}>Back</Button>
            <MainTitle>{post.title}</MainTitle>
            <Desc>{post.body}</Desc>
        </Container>
    );
};

export default PostInner;
