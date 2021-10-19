import * as React from 'react';
import { IPost } from '../types';
import Link from 'next/link';

type Props = {
    post: IPost;
    deletePostFunc: (id: number) => void;
};

const Post: React.FC<Props> = ({ post, deletePostFunc }) => {
    return (
        <div className="Card">
            <div className="Card--body">
                <Link href={`/posts/${post.id}`}>
                    <a className="Card--body-title">{post.title}</a>
                </Link>
                {/* <p className="Card--body-text">{post.body}</p> */}
                <button className="Card__button" onClick={() => deletePostFunc(post.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Post;
