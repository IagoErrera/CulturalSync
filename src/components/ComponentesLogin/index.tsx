import React from 'react';
import * as S from './styles';

export const LoginBox: React.FC = () => {
    return (
        <S.MainDiv>
            <S.MainImageDiv>
                <S.Img1 src="/Downloads/Elipse.png" />
                <S.Img2 src="/Downloads/LoginMainImage.png" />
            </S.MainImageDiv>
            <S.LoginBox>
                <S.TituloLogin>Bem-vindo de volta!</S.TituloLogin>
                <S.CpfArea placeholder="CPF" />
                <S.SenhaArea placeholder="Senha" />
                <S.EsqueceuSenha>Esqueceu a senha?</S.EsqueceuSenha>
                <S.Entrar>Entrar</S.Entrar>
                <S.TextoCadastro>Não tem conta?</S.TextoCadastro>
                <S.Cadastro>CADASTRE-SE</S.Cadastro>
            </S.LoginBox>
        </S.MainDiv>
    );
};

export default LoginBox;
