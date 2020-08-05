import styled from 'styled-components'

export const TeacherListContent = styled("div")`
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media (min-width: 800px){
    padding: 3.2rem 0;
    width: 60vw;
    margin: 0 auto;
    .form-teacher-list{
      flex-direction:row;
      align-items:center;
      justify-content:space-between;
      width: 60vw;
      .input-block{
        margin-top:0;
        flex:0.31;
      }
    }
    .main{
      width: 60vw;
      margin: 0 auto;
      .card-item{
        footer,header{
          padding:3.2rem;
        }

        footer p strong{
          display:inline;
          margin-left: 1.6rem;
        }
        footer button{
          width: 245px;
          font-size: 1.6rem;
          justify-content:center;
          span{
            margin-left: 1.6rem;
          }
        }   
    } 
  }}
`;
// Form, Input, InputBlock, Label
export const Form = styled("form")`
  margin-top: 3.2rem;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;

`

export const Label = styled("label")`
  color: ${props=>props.theme.colors.subTitle};
  font-size: 1.4rem;

`

export const InputBlock = styled("div")`
position:relative;
  width: 80%;
  &:focus-within::after{
    width: calc(100%-3.2rem);
    height: 3px;
    content: "";
    background: var(--color-primary);
    position: absolute;
    left: 1.6rem;
    right:1.6rem;
    bottom: 0;
  };
  & + div{
    margin-top: 1.4rem;
  }
`

export const Input = styled("input")`
  width: 100%;

  height: 4.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: ${props=>props.theme.colors.box};
  border: 1px solid ${props=>props.theme.colors.border};
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
  
`;

export const Main = styled("main")`
margin: 3.2rem auto;
width:80%;
`