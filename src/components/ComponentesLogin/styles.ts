import styled from 'styled-components';

export const MainDiv = styled.div`
    background-color: rgba(250, 250, 250, 1);
    display: flex;
    height: 100%;
    width: 100%;
`;

export const MainImageDiv = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    width: 40vw;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Img2 = styled.img`
    position: absolute;
    height: 90%;
    margin-top: 10vh;
    margin-left: 2vw;
    -webkit-user-drag: none;
    @media (max-width: 960px) {
        display: none;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Img1 = styled.img`
    position: relative;
    height: 100%;
    -webkit-user-drag: none;
    @media (max-width: 960px) {
        display: none;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

// Login Box começa aqui

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 60vw;
    align-items: center;
    justify-content: center;
    @media (max-width: 960px) {
        width: 100vw;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const TituloLogin = styled.h1`
    font-family: 'Open sans', sans-serif;
    width: max-content;
    height: 8vh;
    font-size: 8vh;
    font-weight: bolder;
    margin-bottom: 5vh;
    color: rgba(57, 44, 114, 1);
    user-select: none;
`;

export const CpfArea = styled.input`
    height: 8vh;
    border: 1px solid;
    border-radius: 2vh;
    padding-left: 1vw;
    border-color: rgba(57, 44, 114, 1);
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const SenhaArea = styled.input`
    height: 8vh;
    border: 1px solid;
    border-radius: 2vh;
    padding-left: 1vw;
    border-color: rgba(57, 44, 114, 1);
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const EsqueceuSenha = styled.button`
    width: 10vw;
    height: 4vh;
    font-size: 2vh;
    margin-left: 40vw;
    margin-bottom: 5vh;
    border-radius: 4vh;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    border: none;
    cursor: pointer;
    font-family: 'Open sans', sans-serif;
    transition: 400ms;
    user-select: none;
`;

export const Entrar = styled.button`
    font-family: 'Open sans', sans-serif;
    width: 30vw;
    height: 8vh;
    font-size: 30px;
    margin: 3vh;
    border-radius: 2vh;
    background-color: rgba(57, 44, 114, 1);
    color: rgba(250, 250, 250, 1);
    border: none;
    cursor: pointer;
    user-select: none;
`;

export const TextoCadastro = styled.h3`
    font-size: 2vh;
    font-family: 'Open sans', sans-serif;
    user-select: none;
    margin-top: 2vh;
    margin-bottom: 1vh;
    color: rgba(57, 44, 114, 1);
`;

export const Cadastro = styled.button`
    width: 12vw;
    height: 4vh;
    font-size: 3vh;
    margin: 1vh;
    align-items: center;
    justify-content: center;
    border-radius: 4vh;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open sans', sans-serif;
    user-select: none;
`;
