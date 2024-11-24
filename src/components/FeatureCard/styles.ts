import styled from 'styled-components';

export const ComponentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
`;

export const CardContainer = styled.div`
    background-color: white;
    display: flex;
    height: 580px;
    width: 420px;
    padding: 32px;

    box-shadow: 0 4px 17.2px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

export const Title = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 32px;
    text-align: center;

    color: rgba(19, 0, 87, 1);
`;

export const Description = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 24px;
    text-align: center;

    color: black;
`;

export const Background = styled.div`
    position: absolute;
    top: 320px;
    left: 245px;

    width: 704px;
    height: 704px;

    /* background-image: url('/images/globe.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%; */
`;
