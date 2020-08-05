import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './Pages/Landing'
import TeacherList from './Pages/TeacherList';
import TeacherForm from './Pages/TeacherForm';
import SwitchHeader from './Components/SwitchHeader'

interface Props {
  toggleTheme(): void,
}

const Routes: React.FC<Props>=({toggleTheme})=>{

  return(
    <BrowserRouter>
    	<SwitchHeader {...{toggleTheme}}/>
      <Route path="/" component={Landing} exact/>
      <Route path="/study" render={()=>(<TeacherList {...{toggleTheme}} />)}/>
      <Route path="/give-class" render={()=>(<TeacherForm {...{toggleTheme}} />)}/>
    </BrowserRouter>
  )
}
export default Routes;