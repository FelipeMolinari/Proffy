import React,{ useContext} from 'react';
import {ThemeContext} from 'styled-components'
import {Container} from './styles'
import Switch from 'react-switch'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({toggleTheme}) =>{
  const {title} = useContext(ThemeContext)
	return (
			<Container >
				<Switch onChange={()=>{toggleTheme()}}
            checked={title==="dark"? true: false}
            checkedIcon={false}
            uncheckedIcon={false}
            height={30}
            width={60}
            handleDiameter={25}
            offColor={"#232423"}
            onHandleColor={"#232423"}
            offHandleColor={"#fff"}
            onColor={"#fff"}
        />
			</Container>
	);
}
export default Header