import styled from 'styled-components'
export const LandingContent = styled("div")`
width: 100vh;
height: 100vh;
display: flex;
justify-content: center;
align-items:center;
.home-container{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
`;
export const LogoConteiner = styled("div")`

  text-align: center;
  margin-bottom: 1.6rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  .logo-main{
    font: 6rem Lobster;
    color: ${props=>props.theme.colors.title};

  }
  .logo-description{
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 4.6rem;
    margin-top: 3rem;
    width: 50%;
    color: ${props=>props.theme.colors.subtext};
    line-height: 2rem;

  }
`;

export const ImageIntro = styled("img")`
  width: 60%;
`
export const ButtonsContainer = styled("div")`
display:flex;
justify-content: center;
margin: 1rem 0;
width: 100%;
align-items:center;
justify-content:center;
flex-direction:column;
a:first-child{
  margin-bottom: 1rem;
}
.student{
  background: ${props=>props.theme.colors.button}
}
.teacher{
  background: var(--color-primary)
}
.student:hover{
  background: ${props=>props.theme.colors.buttonHover}
}
.teacher:hover{
  background: var(--color-primary-lighter);
}
transition: background-color 0.2s;
`;

export const Button = styled("a")`
width: 35%;
height: 4rem;
border-radius: 0.8rem;
font: 700 2.0 Archivo;
display: flex;
align-items:center;
justify-content: flex-start;
text-decoration: none;
color: ${props=> props.theme.colors.background};
padding-right: 2rem;

img{
  width: 2.5rem;
  margin: 0 2rem;
  
}

`;

export const TotalConnections = styled("span")`
  font-size: 1.4rem;
  display:flex;
  align-items: center;
  justify-content:center;
  color: ${props=> props.theme.colors.subtext};
  img{
    margin-left: 0.8rem;  
  }
  margin-bottom: 1.6rem;

`;

export const Content = styled("div")`
display:flex;
align-items: center;
justify-content:center;
flex-direction: column-reverse;
width: 100%;
.buttons-connecteds{ 
  width: 100%;
  border: 1px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
`;

