import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
`;

export const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    gap: 24px;

    width: 100%;
    padding: 48px 80px;
`;

export const TopicButton = styled.button`
    background-color: white;
    height: 48px;
    border-radius: 16px;
    padding: 12px 32px;
    border: 0;
    box-shadow: 0px 4px 12.7px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background-color: rgba(19, 0, 87, 1);
    }

    p {
        font-family: 'Poppins';
        font-weight: 300;
        font-size: 24px;
    }

    :not(:hover) > p {
        color: rgba(19, 0, 87, 1);
    }

    &:hover {
        color: white;
    }
`;

export const GlobContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0px;

    z-index: -1;
`;

export const TitleContainer = styled.div`
    height: 500px;
    width: 100%;
    padding-left: 124px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Title = styled.p`
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 80px;
    color: rgba(19, 0, 87, 1);
`;

export const SubTitle = styled.p`
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 24px;
    color: rgba(19, 0, 87, 1);
`;

export const DescriptionContainer = styled.div`
    width: 100%;
    margin-top: 200px;
    padding: 140px 207px 92px 207px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgba(19, 0, 87, 1);
`;

export const DescriptionTitle = styled.p`
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 80px;
    color: white;
`;

export const DescriptionText = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 24px;
    color: white;
    text-align: justify;
`;

export const FeaturesContainer = styled.div`
    width: 100%;
    margin-top: 100px;
    padding-bottom: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;

    > div {
        display: flex;
        flex-direction: row;
        justify-items: space-between;

        width: 100%;

        background-image: url('/images/conected_globe.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;

        margin-top: 40px;
    }
`;

interface FormExternalContainer {
    sent: boolean;
}

export const FormExternalContainer = styled.div<FormExternalContainer>`
    width: 100%;
    padding: 87px 166px ${(props) => (props.sent ? '87px' : '232px')} 166px;
    background-color: rgba(0, 128, 174, 0.38);

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormTitle = styled.p`
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 80px;
    color: white;
    text-align: center;
`;

export const FormSubtitle = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 24px;
    color: rgba(19, 0, 87, 1);
    text-align: center;

    margin-top: 20px;
    margin-bottom: 95px;
`;

export const FormContainer = styled.div`
    width: 60%;
    padding: 60px;

    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 4px 12.7px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 24px;

    > div {
        width: 100%;
    }
`;

export const FormText = styled.p`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    color: black;
`;

export const FormObsText = styled.p`
    font-family: 'Poppins';
    font-size: 12px;
    color: rgba(163, 163, 163, 1);

    margin-bottom: 8px;
`;

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;

    gap: 36px;
`;

export const PlanContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

interface PlanButton {
    selected?: boolean;
}

export const PlanButton = styled.button<PlanButton>`
    width: 30%;
    height: 200px;
    border-radius: 16px;
    background-color: rgba(19, 0, 87, 1);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: ${(props) => (props.selected ? '4px' : '0')} solid white;
`;

export const PlanText = styled.p`
    font-family: 'Poppins';
    font-size: 16px;
    color: white;
`;

export const ConfirmWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ConfirmButton = styled.button`
    width: 40%;
    height: 40px;
    border-radius: 8px;
    background-color: rgba(19, 0, 87, 1);
`;

export const ConfirmText = styled.p`
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 16px;
    color: white;
`;

export const Footer = styled.div`
    width: 100%;
    padding: 32px;

    background-color: rgba(19, 0, 87, 1);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterText = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    color: white;
    text-align: center;

    margin: 12px;
`;
