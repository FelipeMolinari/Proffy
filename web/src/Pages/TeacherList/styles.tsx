import styled from 'styled-components';

export const TeacherListContent = styled('div')`
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction:column;
  align-items:center;


  @media (min-width: 800px){
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
      .select-block{
        margin-top:0;
        flex:0.31;
      }
      .search-container{
        align-self: flex-end;
        height: 4.6rem;
        width: 4.6rem;
        
        .text-button{
          display:none;
        }
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
export const Form = styled('form')`
  margin-top: 3.2rem;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  .search-container{
    padding: 0;
    border: none;
    margin-top: 1.4rem;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 1.4rem;
    height: 4.6rem;
    width: 80%;
    align-items:center;
    display:flex;
    align-items:center;
    justify-content:center;
    .text-button{
      color:${(props) => props.theme.colors.background};
      font: 700 1.8rem Archivo;
      margin-right: 1.6rem;

    }
    svg{
      fill:${(props) => props.theme.colors.background};
    }
  }
`;

export const Main = styled('main')`
margin: 3.2rem auto;
width:80%;
padding-bottom: 3.6rem;
`;
