import styled from 'styled-components';

export const Card = styled('article')`
  background: ${(props) => props.theme.colors.box};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow:hidden;
  border: 1px solid ${(props) => props.theme.colors.border};
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .footer-card{
      button{
        flex: 1;
        margin-left: 1.6rem;
      }
    }
  }

`;

export const CardHeader = styled('header')`
  padding: 3.2rem 2rem;
  display:flex;
  align-items:center;

`;

export const TeacherImage = styled('img')`
width: 8rem;
height: 8rem;
border-radius: 50%;
`;
export const TeacherDetails = styled('div')`
  margin-left: 2.4rem;
  display:flex;
  flex-direction:column;
  strong{
    font: 700 2.0rem Archivo;
    color: ${(props) => props.theme.colors.subTitle}
  }
  span{
    font: 400 1.6rem Archivo;
    margin-top: 0.4rem;
    color: ${(props) => props.theme.colors.paragraphText}
  }
`;

export const Description = styled('p')`
  padding: 0 2rem;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: ${(props) => props.theme.colors.subtext}
`;

export const Footer = styled('footer')`
padding: 3.2rem 2rem;
background: ${(props) => props.theme.colors.input};
margin-top: 3.2rem;
display: flex;
align-items:center;
justify-content:space-between;
p{
  color: ${(props) => props.theme.colors.subtext};
}
p strong{
  color: var(--color-secundary);
  display:block;
}

a{
  width: 20rem;
  height: 5.6rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.input};
  border: 0;
  border-radius: 0.8rem;
  text-decoration:none;
  cursor: pointer;
  font: 700 1.4rem Archivo;
  display: flex;
  align-items:center;
  justify-content:space-evenly;
  transition: 0.2;
  &:hover{
    background: ${(props) => props.theme.colors.lighter}
  }
}
`;
