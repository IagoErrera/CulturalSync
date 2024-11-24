import React from 'react';
import * as S from './styles';

interface FeatureCardProps {
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description
}) => {
    return (
        <S.ComponentContainer>
            <S.CardContainer>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.CardContainer>
        </S.ComponentContainer>
    );
};

export default FeatureCard;
