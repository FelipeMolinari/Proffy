import styled from 'styled-components';
export const Label = styled('label')`
  color: ${(props) => props.theme.colors.subTitle};
  font-size: 1.4rem;

`;

export const TextAreaBlock = styled('div')`
position:relative;
margin-top: 1.4rem;
  width: 100%;
  &:focus-within::after{
    width: calc(100%-3.2rem);
    height: 3px;
    content: "";
    background: ${(props) => props.theme.colors.primary};
    position: absolute;
    left: 1.6rem;
    right:1.6rem;
    bottom: 0.8rem;
    
  };
  & + div{
    margin-top: 1.4rem;
  }
  
`;

export const TextArea = styled('textarea')`
  width: 100%;
  resize:vertical;
  height: 16rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.colors.box};
  border: 1px solid ${(props) => props.theme.colors.border};
  outline: 0;
  padding: 1.2 1.6rem;
  font: 1.6rem Archivo;
  min-height: 8rem;
  
`;
