import {styled} from 'styled-components';

export const StyledContainerFilter = styled.div`

    width: 300px;
    height: 450px;
    background-color: var(--color-secound);
    position: fixed;
    top: 13%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        margin-top: -5px;
    }

`;

export const StyledFormFilter = styled.form`

    width: 250px;
    height: 390px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    span{
        display: flex;
        justify-content: space-between;
        font-weight: bold;
    }

    button{
        padding: 10px;
        width: 100px;
        cursor: pointer;
    }

    .box1{
        padding: 15px;
        width: 200px;
        display: flex;
        align-items: center;

        input{
            width: 35px;
            border: none;
        }
    }


    .box2{
        display: flex;
        flex-direction: column;
        align-items: center;

        div{
            display: flex;
            gap: 5px;
            margin-top: 10px;

            input{
            width: 100px;
            border: none;
        }
    }

}
button{
    margin-top: 25px;
    margin: auto;
}
`;