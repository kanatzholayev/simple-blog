import styled from 'styled-components';
export const Container = styled.div`
    max-width: 820px;
    margin: auto;
    padding: 1rem;
`;

export const MainTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 36px;
    padding: 20px;
    margin: 0;
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    padding: 15px;
    display: inline-flex;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    border: 0;
    color: black;
    background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
    border-radius: 20px;
`;
