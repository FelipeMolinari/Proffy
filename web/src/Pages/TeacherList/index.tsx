import React from 'react'
import {TeacherListContent, Form, Input, InputBlock, Label, Main} from './styles'
import Header from '../../Components/Header'
import TeacherItem from '../../Components/TeacherItem'

interface Props {
  toggleTheme(): void,
}

const TeacherList: React.FC<Props> = ({toggleTheme}) =>{
  return (
    <div className="container">
      <TeacherListContent >
        <Header 
        mainText="Estes são os proffys disponíveis." 
        subText="Informe a matéria, dia de semana e o horário para encontrar o melhor proffy!"
        toggleTheme={toggleTheme}
        />
        <Form className="form-teacher-list">
          <InputBlock className="input-block">
            <Label htmlFor="subject">Matéria</Label>
            <Input type="text" id="subject"/>
          </InputBlock>
          <InputBlock className="input-block">
            <Label htmlFor="week_day">Dia da semana</Label>
            <Input type="text" id="week_day"/>
          </InputBlock>
          <InputBlock className="input-block">
            <Label htmlFor="time">Hora</Label>
            <Input type="text" id="time"/>
          </InputBlock>
        </Form>
        <Main className="main">
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </Main>

      </TeacherListContent>
    </div>
 )
}
export default TeacherList;