import styled from 'styled-components';

export const Label = styled('label')`
  color: ${(props) => props.theme.colors.subTitle};
  font-size: 1.4rem;

`;

export const SelectBlock = styled('div')`
  position:relative;
  width: 80%;

  &:focus-within::after{
    width: calc(100%-3.2rem);
    height: 3px;
    content: "";
    background: ${(props) => props.theme.colors.primary};
    position: absolute;
    left: 1.6rem;
    right:1.6rem;
    bottom: 0;
  };
  & + div{
    margin-top: 1.4rem;
  }
`;

export const Select = styled('select')`
  width: 100%;

  height: 4.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.colors.box};
  border: 1px solid ${(props) => props.theme.colors.border};
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
  .option-selector{
    color: ${(props) => props.theme.colors.subtext};
  }
`;
