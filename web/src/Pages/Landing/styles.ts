import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingContent = styled('div')`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items:center;
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding-top: 6rem;
  }
@media (min-width:  700px){
		#grid-container{
      max-width: 1100px;
      display: grid;
      grid-template-rows: 1fr 1fr ;
      grid-template-columns: 1fr 2fr;
      grid-template-areas:
      "logo image" 
      "buttons image";


      .prof-image{
      justify-self:center;
      align-items:center;
      grid-area: image;
      width: 85%;
      margin-bottom: 5rem;
      
    }
  
    .buttons-container{
      align-self:flex-start;
      grid-area: buttons;
      margin-top: 2.6rem;
      .button{
        width: 80%;
      }
    }
    .logo-container{
      align-self:flex-end;
      grid-area: logo;
      margin: 0;
      h2{
        text-align:initial;
      }
      h1{
        align-self: flex-start;
        margin-left: 2.8rem;
      }
    }
    }
   
}
.home-container{
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  

}

`;
export const LogoConteiner = styled('div')`

  text-align: center;
  margin-bottom: 1.6rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  .logo-main{
    font: 10rem Lobster;
    color: ${(props) => props.theme.colors.title};

  }
  .logo-description{
    font-weight: 500;
    font-size: 1.8rem;
    margin-top: 3rem;
    width: 30rem;
    color: ${(props) => props.theme.colors.subtext};
    line-height: 2.6rem;

  }
`;

export const ImageIntro = styled('img')`
  width: 80%;
`;
export const ButtonsContainer = styled('div')`
display:flex;
justify-content: center;
margin: 1rem 0;
width: 100%;
align-items:center;
justify-content:center;
flex-direction:column;
.button:first-child{
  margin-bottom: 1rem;
}
.student{
  background: ${(props) => props.theme.colors.button}
}
.teacher{
  background: ${(props) => props.theme.colors.primary}
}
.student:hover{
  background: ${(props) => props.theme.colors.buttonHover}
}
.teacher:hover{
  background: ${(props) => props.theme.colors.lighter};
}
transition: background-color 0.2s;
`;

export const Button = styled(Link)`
width: 26rem;
height: 4.6rem;
border-radius: 0.8rem;
font: 700 1.6rem Archivo;
display: flex;
align-items:center;
justify-content: center;
text-decoration: none;
color: ${(props) => props.theme.colors.background};
padding-right: 2rem;

span{
  width: 65%;
  margin-left: 1.8rem;
  
}
img{
  width: 2.5rem;
  margin: 0 1rem;
  
}

`;

export const TotalConnections = styled('span')`
  font-size: 1.4rem;
  display:flex;
  align-items: center;
  justify-content:center;
  color: ${(props) => props.theme.colors.subtext};
  img{
    margin-left: 0.8rem;  
  }
  margin: 1.6rem 0 ;

`;
