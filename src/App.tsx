import React,{useState} from 'react';
import {ThemeProvider} from 'styled-components'
import GlobalSyles from './styles/global'
import Landing from './Pages/Landing'
import Header from './Components/Header'
import light from './styles/theme/light';
import dark from './styles/theme/dark';

function App() {
	const [theme, setTheme] = useState(light)
	const toggleTheme = ()=>{
		setTheme(theme.title==="light"? dark: light)
	}
	return (
			<ThemeProvider theme={theme}>
				<div className="App">
					<GlobalSyles/>
					<Header {...{toggleTheme}}/>
					<Landing/>
				</div>
			</ThemeProvider>
	);
}

export default App;
