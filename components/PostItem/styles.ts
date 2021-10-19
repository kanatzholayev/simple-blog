import styled from 'styled-components';

export const PostTitle = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`;

export const Card = styled.div`
    width: 100%;
    padding: 20px;
    background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
    border-radius: 20px;
    margin-top: 30px;
    position: relative;
`;

export const Desc = styled.p`
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: unset;
    font-family: 'Montserrat', sans-serif;
`;

export const DeleteBtn = styled.button`
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: red;
    cursor: pointer;
    border: 0;
    background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
    border-radius: 20px;
`;
