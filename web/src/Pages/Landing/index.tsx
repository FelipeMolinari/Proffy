import React,{useContext} from 'react';
import {ThemeContext} from 'styled-components'
import {LandingContent,LogoConteiner,ImageIntro,ButtonsContainer,Button, TotalConnections} from './styles'
import {FaBookReader, FaHeart} from 'react-icons/fa'
import studyIcon from '../../assets/images/icons/study.svg';
import profIcon from '../../assets/images/icons/give-classes.svg';
import heart from '../../assets/images/icons/heart.svg';


export default function Landing() {
  const {landiscape, colors} = useContext(ThemeContext);
  
	return (
		<LandingContent className="page-langing-content">
			<div className="container home-container" id="grid-container">
  
				<LogoConteiner className="logo-container">
					<h1 className="logo-main">Proffy</h1>
					<h2 className="logo-description">
						Sua plataforma de ensino à distância. Aprenda a qualquer hora com os melhores professores!
					</h2>
				</LogoConteiner>

        <ButtonsContainer className="buttons-container">
          <Button to="/study" className="student button">
            <FaBookReader size={26} color={colors.background}/>
            <span>SOU ALUNO</span>
          </Button>
          <Button to="/give-class" className="teacher button">
            <FaHeart size={26} color={colors.background}/>
            <span>SOU PROFESSOR</span>
          </Button>
          <TotalConnections>
            200 Alunos conectados <img src={heart} alt="Amor" />
          </TotalConnections>
        </ButtonsContainer>
    
        <ImageIntro src={landiscape} alt="Professor" className="prof-image"/>
			</div>
		</LandingContent>
	);
}
