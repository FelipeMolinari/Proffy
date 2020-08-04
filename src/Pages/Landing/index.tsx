import React,{useContext} from 'react';
import {ThemeContext} from 'styled-components'
import {LandingContent,LogoConteiner,Content,ImageIntro,ButtonsContainer,Button, TotalConnections} from './styles'

import studyIcon from '../../assets/images/icons/study.svg';
import profIcon from '../../assets/images/icons/give-classes.svg';
import heart from '../../assets/images/icons/heart.svg';


export default function Landing() {
  const {landiscape} = useContext(ThemeContext)
	return (
		<LandingContent>
			<div className="container home-container" >
  
				<LogoConteiner>
					<h1 className="logo-main">Proffy</h1>
					<h2 className="logo-description">
						Sua plataforma de ensino à distância. Aprenda com os melhores professores!
					</h2>
				</LogoConteiner>

        <Content>
				  <ImageIntro src={landiscape} alt="Professor" />
          <div className="buttons-connecteds">
            <ButtonsContainer>
              <Button href="" className="student">
                <img src={studyIcon} alt="study" />
                SOU ALUNO
              </Button>

              <Button href="" className="teacher">
                <img src={profIcon} alt="study" />
                SOU PROFESSOR
              </Button>
            </ButtonsContainer>
            <TotalConnections>
              200 Alunos conectados <img src={heart} alt="Amor" />
            </TotalConnections>
          </div>
        </Content>
			</div>
		</LandingContent>
	);
}
