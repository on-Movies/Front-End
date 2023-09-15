import {styled} from 'styled-components';

export const StyledHeader = styled.header`

    max-width: 100%;
    padding: 20px 20px 20px 20px;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-secound);
    position: relative;
    
    span{
        font-weight: bold;
        cursor: pointer;
    }

    div{
        display: flex;
        gap: 25px;
        cursor: pointer;
    }
`;

export const StyledMenuButtons = styled.div`
    padding: 15px;
    background-color: var(--color-secound);
    position: absolute;
    right: 0%;
    top: 85%;
    display: flex;
    gap: 15px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.3s ease-in-out forwards;

    .span {
        font-weight: bold;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
