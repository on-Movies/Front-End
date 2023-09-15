import {styled} from 'styled-components';

export const StyledContainerBannersIsMobille = styled.div`

    max-width: 100%;
    display: flex;
    flex-direction: column;

    img{
        width: 100%;
        height: 450px;
    }

`;

export const StyledContainerBannersIsDesktop = styled.div`

    max-width: 100%;
    display: flex;
    display: flex;

    .boxMain{
        width: 50%;
        img{
            width: 100%;
            height: 710px;
        }
    }

    .boxsecondary{
        width: 50%;
        height: 550px;
        display: flex;
        flex-direction: column;

        .box1{
            width: 100%;


            img{
                width: 100%;
                height: 300px;
            }
        }

        .box2{
            width: 100%;
            
            img{
                width: 100%;
                height: 410px;
            }
        }
    }

`;