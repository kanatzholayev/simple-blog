import * as React from 'react';
import { IPost } from '../../types';
import GlobalStyle from '../../styles/global';
import { Container, Button, MainTitle } from '../../styles/main';
import { Label, Input } from './style';

type Props = {
    savePost: (e: React.FormEvent, formData: any) => void;
};

const AddPost: React.FC<Props> = ({ savePost }) => {
    const [formData, setFormData] = React.useState();

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    return (
        <Container>
            <GlobalStyle />
            <MainTitle>Create Post</MainTitle>
            <form onSubmit={(e) => savePost(e, formData)}>
                <Label htmlFor="name">Title</Label>
                <Input onChange={handleForm} type="text" id="title" />
                <Label htmlFor="body">Description</Label>
                <Input onChange={handleForm} type="text" id="body" />
                <Button disabled={formData === undefined ? true : false}>Add Post</Button>
            </form>
        </Container>
    );
};

export default AddPost;
