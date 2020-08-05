import React from 'react'

interface Props {
  toggleTheme(): void,
}

const TeacherForm: React.FC<Props> = ({toggleTheme}) =>{
  return (<h1>Teacher Form</h1>)
}
export default TeacherForm;