import styled from "styled-components";


export const StyledContainerBannersIsDesktop = styled.div`

    max-width: 100%;
    display: flex;
    display: flex;
    margin-top: 85px;

    .boxMain{
        width: 50%;
        img{
            width: 100%;
            height: 710px;
            cursor: pointer;
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
                cursor: pointer;
            }
        }

        .box2{
            width: 100%;
            
            img{
                width: 100%;
                height: 410px;
                cursor: pointer;
            }
        }
    }

`;