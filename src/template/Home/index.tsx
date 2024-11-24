import React, { useState } from 'react';
import Image from 'next/image';

import FeatureCard from 'components/FeatureCard';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import * as S from './styles';

const HomePage = () => {
    const [area, setArea] = useState<string | null>();
    const [features, setFeatures] = useState<string[]>([]);
    const [plan, setPlan] = useState<'PPU' | 'Monthly' | 'Yearly' | null>();
    const [sent, setSent] = useState<boolean>(false);

    return (
        <S.Container>
            <S.Bar>
                <S.TopicButton
                    onClick={() =>
                        window.scrollTo({ top: 830, behavior: 'smooth' })
                    }
                >
                    <p>Sobre Nós</p>
                </S.TopicButton>
                <S.TopicButton
                    onClick={() =>
                        window.scrollTo({ top: 1690, behavior: 'smooth' })
                    }
                >
                    <p>Funcionalidades</p>
                </S.TopicButton>
                <S.TopicButton
                    onClick={() =>
                        window.scrollTo({ top: 2570, behavior: 'smooth' })
                    }
                >
                    <p>Planos</p>
                </S.TopicButton>
                <S.TopicButton
                    onClick={() =>
                        window.scrollTo({ top: 2570, behavior: 'smooth' })
                    }
                >
                    <p>Use CulturalSync</p>
                </S.TopicButton>
            </S.Bar>

            <S.GlobContainer>
                <Image src="/images/globe.svg" width={900} height={900} />
            </S.GlobContainer>

            <S.TitleContainer>
                <S.Title>CulturalSync</S.Title>
                <S.SubTitle>
                    SINCRONIZANDO CULTURAS EM INTERAÇÕES GLOBAIS
                </S.SubTitle>
            </S.TitleContainer>

            <S.DescriptionContainer>
                <S.DescriptionTitle>O que é o CulturalSync?</S.DescriptionTitle>
                <S.DescriptionText>
                    A CulturalSync é uma ferramenta inovadora para videochamadas
                    que oferece assistência cultural em tempo real, ajudando
                    equipes multinacionais a se comunicarem de forma mais
                    eficaz. Integrada a plataformas como Zoom e Microsoft Teams,
                    a solução utiliza inteligência artificial para fornecer
                    insights personalizados e discretos, adaptados às nuances
                    culturais de cada interação. Com foco na conexão global e no
                    respeito à diversidade, a CulturalSync atua como um
                    facilitador prático e eficiente para reuniões
                    multiculturais.
                </S.DescriptionText>
                <Image
                    src="/images/cultural_sync.svg"
                    width={600}
                    height={200}
                />
            </S.DescriptionContainer>

            <S.FeaturesContainer>
                <S.Title>Funcionalidades</S.Title>
                <div>
                    <FeatureCard
                        title="Feedback Cultural"
                        description="Fornecemos insights personalizados para superar barreiras culturais em interações globais"
                    />
                    <FeatureCard
                        title="Feedback em tempo real"
                        description="Nossas análises são entregues instantaneamente  e de forma privada durante as videochamadas, garantindo eficácia imediata."
                    />
                    <FeatureCard
                        title="Integração com plataformas de video"
                        description="Compatível com Zoom, Microsoft Teams e outras ferramentas, nossa solução se adapta perfeitamente ao seu fluxo de trabalho."
                    />
                </div>
            </S.FeaturesContainer>
            <S.FormExternalContainer sent={sent}>
                {sent ? (
                    <S.FormTitle>Enviado!</S.FormTitle>
                ) : (
                    <>
                        <S.FormTitle>
                            O plano perfeito para você e para sua empresa
                        </S.FormTitle>
                        <S.FormSubtitle>
                            Preencha o formulário abaixo para lhe encaminharmos
                            uma proposta!
                        </S.FormSubtitle>

                        <S.FormContainer>
                            <div>
                                <S.FormText>
                                    Em qual setor sua empresa atua?
                                </S.FormText>
                                <Select
                                    value={area}
                                    onChange={(event) =>
                                        setArea(event.target.value as string)
                                    }
                                    displayEmpty
                                    inputProps={{
                                        'aria-label': 'Without label'
                                    }}
                                    fullWidth
                                    style={{ marginTop: 8 }}
                                >
                                    <MenuItem value="Tecnologia">
                                        Tecnologia
                                    </MenuItem>
                                    <MenuItem value="Saúde">Saúde</MenuItem>
                                    <MenuItem value="Educação">
                                        Educação
                                    </MenuItem>
                                    <MenuItem value="Finanças">
                                        Finanças
                                    </MenuItem>
                                    <MenuItem value="Agronegócio">
                                        Agronegócio
                                    </MenuItem>
                                    <MenuItem value="Indústria">
                                        Indústria
                                    </MenuItem>
                                    <MenuItem value="Comércio">
                                        Comércio
                                    </MenuItem>
                                    <MenuItem value="Alimentos e Bebidas">
                                        Alimentos e Bebidas
                                    </MenuItem>
                                    <MenuItem value="Transporte e Logística">
                                        Transporte e Logística
                                    </MenuItem>
                                    <MenuItem value="Construção Civil">
                                        Construção Civil
                                    </MenuItem>
                                    <MenuItem value="Marketing e Publicidade">
                                        Marketing e Publicidade
                                    </MenuItem>
                                    <MenuItem value="Energia">Energia</MenuItem>
                                    <MenuItem value="Entretenimento">
                                        Entretenimento
                                    </MenuItem>
                                    <MenuItem value="Turismo">Turismo</MenuItem>
                                    <MenuItem value="Serviços Jurídicos">
                                        Serviços Jurídicos
                                    </MenuItem>
                                    <MenuItem value="Consultoria">
                                        Consultoria
                                    </MenuItem>
                                    <MenuItem value="Recursos Humanos">
                                        Recursos Humanos
                                    </MenuItem>
                                    <MenuItem value="Moda e Vestuário">
                                        Moda e Vestuário
                                    </MenuItem>
                                    <MenuItem value="Imobiliário">
                                        Imobiliário
                                    </MenuItem>
                                    <MenuItem value="Meio Ambiente">
                                        Meio Ambiente
                                    </MenuItem>
                                    <MenuItem value="Telecomunicações">
                                        Telecomunicações
                                    </MenuItem>
                                    <MenuItem value="Outro">Outro</MenuItem>
                                </Select>
                            </div>

                            <div>
                                <S.FormText>
                                    Em qual setor sua empresa atua?
                                </S.FormText>
                                <S.FormObsText>
                                    Escolha até 3 funcionalidades
                                </S.FormObsText>

                                <Select
                                    value={features}
                                    onChange={(event) => {
                                        const {
                                            target: { value }
                                        } = event;
                                        setFeatures(
                                            typeof value === 'string'
                                                ? value.split(',')
                                                : value
                                        );
                                    }}
                                    displayEmpty
                                    inputProps={{
                                        'aria-label': 'Without label'
                                    }}
                                    fullWidth
                                    multiple
                                >
                                    <MenuItem value="Feedback Cultural">
                                        Feedback Cultural
                                    </MenuItem>
                                    <MenuItem value="Feedback em Tempo Real">
                                        Feedback em Tempo Real
                                    </MenuItem>
                                    <MenuItem value="Integração com Aplicativos de Video Chamada">
                                        Integração com Aplicativos de Video
                                        Chamada
                                    </MenuItem>
                                    <MenuItem value="Personalização">
                                        Personalização
                                    </MenuItem>
                                    <MenuItem value="Geração de Relatórios">
                                        Geração de Relatórios
                                    </MenuItem>
                                </Select>
                            </div>
                            <S.FormText>Qual plano você prefere?</S.FormText>
                            <S.PlanContainer>
                                <S.PlanButton
                                    selected={plan === 'PPU'}
                                    onClick={() => setPlan('PPU')}
                                >
                                    <Image
                                        src="/images/payperuse.svg"
                                        width={80}
                                        height={80}
                                    />
                                    <S.PlanText>Pay-Per-Use</S.PlanText>
                                </S.PlanButton>

                                <S.PlanButton
                                    selected={plan === 'Monthly'}
                                    onClick={() => setPlan('Monthly')}
                                >
                                    <Image
                                        src="/images/monthly.svg"
                                        width={80}
                                        height={80}
                                    />
                                    <S.PlanText>Assinatura Mensal</S.PlanText>
                                </S.PlanButton>

                                <S.PlanButton
                                    selected={plan === 'Yearly'}
                                    onClick={() => setPlan('Yearly')}
                                >
                                    <Image
                                        src="/images/yearly.svg"
                                        width={80}
                                        height={80}
                                    />
                                    <S.PlanText>Assinatura Anual</S.PlanText>
                                </S.PlanButton>
                            </S.PlanContainer>
                            <S.ConfirmWrapper>
                                <S.ConfirmButton>
                                    <S.ConfirmText
                                        onClick={() => setSent(true)}
                                    >
                                        Confirmar
                                    </S.ConfirmText>
                                </S.ConfirmButton>
                            </S.ConfirmWrapper>
                        </S.FormContainer>
                    </>
                )}
            </S.FormExternalContainer>
            <S.Footer>
                <S.FooterText>
                    Escola Politécnica da Universidade de São Paulo
                </S.FooterText>
                <S.FooterText>Disciplina de PRO3811</S.FooterText>
            </S.Footer>
        </S.Container>
    );
};

export default HomePage;
