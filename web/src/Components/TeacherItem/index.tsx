import React, {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import {Card,CardHeader,TeacherImage, TeacherDetails, Description, Footer} from './styles'
import { IoLogoWhatsapp } from 'react-icons/io'



function TeacherList(){
  const {colors} = useContext(ThemeContext)
  return (

          <Card className="card-item">
            <CardHeader>
              <TeacherImage src="https://avatars0.githubusercontent.com/u/44385529?s=460&u=c8a1d528513e46dce6a4bb1d689155fa18b5f1d4&v=4" alt="Felipe Molinari"/>
              <TeacherDetails>
                <strong>Felipe Molinari</strong>
                <span>Química</span>
              </TeacherDetails>
            </CardHeader>
            <Description>
              Entusiasta das melhores tecnologias de quimica avançada.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis dui sed leo volutpat facilisis. Praesent ac mauris lobortis, tempus arcu nec, auctor diam. Nulla facilisi. Nullam ut elit a enim vulputate semper. Sed mattis ac neque quis imperdiet. Nunc dui massa, sagittis vel efficitur quis, luctus vel libero. Morbi vel libero nec ex convallis venenatis.
            </Description>
            <Footer className="footer-card">
              <p>Preço/Hora <strong>R$ 80,00</strong></p>
              
              <button type="button">  
                
                <IoLogoWhatsapp size={26} color={colors.input} />
                <span>Entrar em contato</span>
              </button>
            </Footer>
          </Card>
 )
}
export default TeacherList;