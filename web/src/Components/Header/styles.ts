import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled('div')`
  width: 100vw;
  background: transparent;
  display:flex;
  flex-direction:column;
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .content-header{
      width:100vw;
      display:flex;
      align-items:center; 
      span,strong{
        width: 80%;
      }
    }
    .logo-main{
      font-size: 6rem;
    }
   
  }
`;

export const TopBar = styled('header')`
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 2.6rem;
  width: 100vw;
  background: ${(props) => props.theme.colors.background};
  z-index: 1;
`;
export const BackButton = styled(Link)`
  .back-icon{
    :hover path{
      
    }
  }
`;

export const LogoMain = styled('h1')`
    font: 8rem Lobster;
    color:${(props) => props.theme.colors.title};
     width:80vw;
    text-align:center;
`;

export const HeaderContent = styled('div')`
    width:60vw;
    display: flex;
    position: relative;
    margin: 3.2rem auto;
    margin-top: 16rem;
    flex-direction:column;
   
    strong{
      font: 700 2.8rem Poppins;
      width: 300px;
      line-height: 2.6rem;
      color:${(props) => props.theme.colors.subTitle}
      
    }
    span{
      font: 1.6rem Poppins;
      width: 400px;
      line-height: 2rem;
      color:${(props) => props.theme.colors.subtext}; 
      margin-top: 2.4rem;

    }

`;
