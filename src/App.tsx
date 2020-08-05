import React,{useState} from 'react';
import {ThemeProvider} from 'styled-components'
import Routes from './routes'
import GlobalSyles from './styles/global'
import light from './styles/theme/light';
import dark from './styles/theme/dark';

function App() {
	const [theme, setTheme] = useState(light)
	const toggleTheme = ()=>{
		setTheme(theme.title==="light"? dark: light)
	}
	return (
			<ThemeProvider theme={theme}>
					<GlobalSyles/>
					<Routes {...{toggleTheme}}/>
			</ThemeProvider>
	);
}

export default App;
