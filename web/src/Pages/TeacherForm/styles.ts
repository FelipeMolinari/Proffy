import styled from 'styled-components';

export const TeacherListContent = styled('div')`
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  .input-inside-box{
        width: 100%;
  }


  @media (min-width: 800px){
    width: 60vw;
    margin: 0 auto;
    
    .main{

      width: 60vw;
      margin: 0 auto;
      footer{
        padding: 4.0rem 6.4rem;
        display: flex;
        align-items:center;
        justify-content:space-between;
        p{
          justify-content:space-between;
        }
        button{
          width: 20rem;
          margin-top:0;
        }
      }
      .form-container{
         padding:  0rem 2.6rem;

      }

      div .schedule-item{
        align-items:center;
        display:grid;
        grid-template-columns: 2fr 1fr 1fr 0.1fr;
        
        column-gap: 1.6rem;
        
        .input-block{
          margin-top: 0 !important;
        }
        svg{
          margin-top: 3.4rem;
        }
      }
      div .schedule-item-errors{
        align-items:center;
        display:grid;
        grid-template-columns: 2fr 1fr 1fr 0.1fr;
        
        column-gap: 1.6rem;
        margin-bottom: 1.4rem;
      }
      
  }}
`;

export const Main = styled('main')`
margin: 3.2rem auto;
width:80%;
padding-bottom: 3.6rem;
`;

export const FieldSet = styled('fieldset')`
  border: 0;
  padding: 0 2.4rem;

  & + fieldset{
    margin-top: 6.4rem;
  }
  .schedule-item + .input-inside-box{
    margin-top: 3.6rem;

  }
  .schedule-item + .schedule-item {
    margin-top: 3.6rem;

  }
  .legend-field-set{
    font: 700 2.4rem Archivo;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 2.4rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    button{
      background: none;
      border:0;
      color: ${(props) => props.theme.colors.primary};
      font: 700 1.6rem Archivo;
      cursor: pointer;
      transition:color 0.2;
      &:hover{
        color: ${(props) => props.theme.colors.lighter}
      }

    }
  }
`;

export const Box = styled('div')`
background: ${(props) => props.theme.colors.box};
border-radius: 0.8rem;
overflow: hidden;
padding-top: 2.4rem;
.form-container{
  padding: 0rem;

}
`;

export const Footer = styled('footer')`
  background: ${(props) => props.theme.colors.input};
  margin-top: 6.4rem;
  padding: 1.4rem;
  p{
    display:flex;
    align-items: center;
    justify-content:center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${(props) => props.theme.colors.paragraphText};
    svg{
      margin-right: 2rem;
    }
  }
  .create-class{
    width: 100%;
    height: 5.6rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    border:0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content:center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;
    &:hover{
      background: ${(props) => props.theme.colors.lighter};
    }
    
    }
`;
