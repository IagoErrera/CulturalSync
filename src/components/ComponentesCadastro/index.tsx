import React, { useState } from 'react';
import * as S from './styles';

export const TelasCadastro: React.FC = () => {
    const [count, setCount] = useState(0);

    const [styles1, setStyles1] = useState({});
    const [styles2, setStyles2] = useState({});
    const [styles3, setStyles3] = useState({});
    const [styles4, setStyles4] = useState({});
    const [styles5, setStyles5] = useState({});
    const [CPFvalue, setCPFValue] = useState('');
    const [Senhavalue, setSenhaValue] = useState('');
    const [ConfirmaSenhavalue, setConfirmaSenhaValue] = useState('');
    const [perguntas1, setPerguntas1] = useState({});
    const [perguntas2, setPerguntas2] = useState({});

    const Click = () => {
        setCount(count + 1);
        setStyles1((prevStyles) => ({
            ...prevStyles,
            display: count <= -1 ? 'none' : 'flex',
            backgroundColor:
                count === 0 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setStyles2((prevStyles) => ({
            ...prevStyles,
            display: count <= 0 ? 'none' : 'flex',
            backgroundColor:
                count === 1 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setStyles3((prevStyles) => ({
            ...prevStyles,
            display: count <= 1 ? 'none' : 'flex',
            backgroundColor:
                count === 2 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setStyles4((prevStyles) => ({
            ...prevStyles,
            display: count <= 2 ? 'none' : 'flex',
            backgroundColor:
                count === 3 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setStyles5((prevStyles) => ({
            ...prevStyles,
            display: count <= 3 ? 'none' : 'flex',
            backgroundColor:
                count === 4 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setPerguntas1((prevStyles) => ({
            ...prevStyles,
            display: count !== -1 ? 'none' : 'flex'
        }));
        setPerguntas2((prevStyles) => ({
            ...prevStyles,
            display: count !== 0 ? 'none' : 'flex'
        }));
    };

    const CPFInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setCPFValue(e.target.value);
    };
    const SenhaInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSenhaValue(e.target.value);
    };
    const ConfirmaSenhaInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setConfirmaSenhaValue(e.target.value);
    };

    return (
        <S.MainDiv>
            <S.ContagemPassos>
                <S.Passo1 style={styles1}>1</S.Passo1>
                <S.Passo2 style={styles2}>2</S.Passo2>
                <S.Passo3 style={styles3}>3</S.Passo3>
                <S.Passo4 style={styles4}>4</S.Passo4>
                <S.Passo5 style={styles5}>5</S.Passo5>
            </S.ContagemPassos>
            <S.Box1>
                {/* perguntas 1 */}

                <S.BemVindoCadastro style={perguntas1}>
                    Seja bem-vindo ao Lide!
                </S.BemVindoCadastro>
                <S.CpfArea
                    style={perguntas1}
                    placeholder="CPF"
                    value={CPFvalue}
                    onChange={CPFInputChange}
                />
                <S.SenhaArea
                    style={perguntas1}
                    placeholder="Senha"
                    value={Senhavalue}
                    onChange={SenhaInputChange}
                />
                <S.ConfirmaSenhaArea
                    style={perguntas1}
                    placeholder="Confirme sua senha"
                    value={ConfirmaSenhavalue}
                    onChange={ConfirmaSenhaInputChange}
                />

                {/* perguntas 2 */}

                <S.NomeTexto style={perguntas2}>
                    Como gostaria de ser chamado?
                </S.NomeTexto>
                <S.NomeArea
                    style={perguntas2}
                    placeholder="Digite seu nome aqui"
                    /* value={Nomevalue} */
                    onChange={SenhaInputChange}
                />
                <S.GeneroTexto style={perguntas2}>
                    Qual o seu gênero?
                </S.GeneroTexto>
                <S.BoxGeneroCheckBox style={perguntas2}>
                    <S.DivCheckBox style={perguntas2}>
                        <S.GeneroCheckBoxArea
                            style={perguntas2}
                            type="checkbox"
                            /* value={Maculinovalue} */
                            onChange={SenhaInputChange}
                        />
                        <S.CheckBoxTexto style={perguntas2}>
                            Masculino
                        </S.CheckBoxTexto>
                    </S.DivCheckBox>
                    <S.DivCheckBox style={perguntas2}>
                        <S.GeneroCheckBoxArea
                            style={perguntas2}
                            type="checkbox"
                            /* value={Femininovalue} */
                            onChange={SenhaInputChange}
                        />
                        <S.CheckBoxTexto style={perguntas2}>
                            Feminino
                        </S.CheckBoxTexto>
                    </S.DivCheckBox>
                    <S.DivCheckBox style={perguntas2}>
                        <S.GeneroCheckBoxArea
                            style={perguntas2}
                            type="checkbox"
                            /* value={OutroGenerovalue} */
                            onChange={SenhaInputChange}
                        />
                        <S.CheckBoxTexto style={perguntas2}>
                            Outro
                        </S.CheckBoxTexto>
                    </S.DivCheckBox>
                </S.BoxGeneroCheckBox>

                {/* perguntas 3 */}

                {/* perguntas 4 */}

                {/* perguntas 5 */}
            </S.Box1>
            <S.SetaProximoDiv>
                <S.SetaProximo onClick={Click}>
                    <img src="public\Downloads\Seta.png" alt="SetaProximo" />
                </S.SetaProximo>
            </S.SetaProximoDiv>
        </S.MainDiv>
    );
};

export default TelasCadastro;
