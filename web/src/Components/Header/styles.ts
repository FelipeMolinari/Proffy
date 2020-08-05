import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled("header")`
  width: 100vw;
  background: transparent;
  display:flex;
  flex-direction:column;
   margin-top: 4rem;

`;

export const TopBar = styled("div")`
  display:flex;
  align-items:center;
  justify-content:center;
  margin: 0 2.4rem;
`;
export const BackButton = styled(Link)`
  .back-icon{
    :hover path{
      
    }
  }
`;

export const LogoMain = styled("h1")`
    font: 8rem Lobster;
    color:${props=>props.theme.colors.title};
     width:80vw;
    text-align:center;
`

export const HeaderContent = styled("div")`
    width:60vw;
    display: flex;
    position: relative;
    margin: 3.2rem auto;
    flex-direction:column;
   
    strong{
      font: 700 2.8rem Poppins;
      width: 300px;
      line-height: 2.6rem;
      color:${props=>props.theme.colors.subTitle}
      
    }
    span{
      font: 1.6rem Poppins;
      width: 380px;
      line-height: 2rem;
      color:${props=>props.theme.colors.subtext}; 
      margin-top: 2.4rem;

    }

`;