import { styled } from 'styled-components';

interface ContainerInfoMovie {
  hasVideo: string;
  img: string;
  imgMobile: string;
}

export const StyledContainerInfoMovie = styled.section<ContainerInfoMovie>`
  position: relative; 
  max-width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-repeat: no-repeat;
  margin-top: ${(props) => (props.hasVideo ? '-4px' : '85px')};
  

  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.img});
    opacity: 0.3; 
    z-index: -1; 
  }

  .box1 {
    margin-top: 25px;
    max-width: 250px;
    display: flex;
    justify-content: center;

    img {
      width: 250px;
      border-radius: 10px;
      height: 350px;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
    }
  }

  .box2 {
    position: relative;
    max-width: 100%;
    margin-top: 90px;
    font-weight: bold;
   

    ul{
        max-width: 90%;
        display: flex;
        gap: 25px;
        align-items: center;
        padding-left: 0px;
        list-style: none;
        font-size: 14px;
        font-weight:200;
        margin-top: -20px;
    }

    h3{
        margin-top: 35px;
    }

    p{
        margin-top: -15px;
        font-weight: 400;
    }

    .div1{
        
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        line-height: 25px;

        span{
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }

    .div2{
        
        
        margin-top: 10px;
        display: flex;
      
        width: 860px;
        flex-direction: column;
        line-height: 25px;
        

        ul{
          display: flex;
          margin-top: 5px;
          align-items: end;
          justify-items: center;
          list-style: none;
          
          li{
             display: flex;
       
            img{
             cursor: pointer;
              width: 50px;
              border: 1px solid black;
              
            }
          }
        }
    }
  }

  @media (min-width: 600px) {
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 50px;

    &::before {
    background-image: url(${(props) => props.imgMobile});

  }

  .box2 {
   
    max-width: 100%;
    margin-top: 30px;
    margin-left: 45px;
    font-weight: bold;
    
  }
  }
`;
