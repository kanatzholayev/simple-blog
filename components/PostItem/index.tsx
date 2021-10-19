import * as React from 'react';
import { IPost } from '../../types';
import Link from 'next/link';
import { PostTitle, Card, DeleteBtn, Desc } from './styles';

type Props = {
    post: IPost;
    deletePostFunc: (id: number) => void;
};

const Post: React.FC<Props> = ({ post, deletePostFunc }) => {
    return (
        <Card>
            <Link href={`/posts/${post.id}`}>
                <PostTitle>{post.title}</PostTitle>
            </Link>
            <Desc>{post.body}</Desc>
            <DeleteBtn onClick={() => deletePostFunc(post.id)}>Delete</DeleteBtn>
        </Card>
    );
};

export default Post;
