import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
	font-size: 60%;
 	--color-primary-lighter: #4bc26f;
	--color-primary-light: #61e585;
 	--color-primary: #6ec987;
 	--color-primary-dark: #298642;
 	--color-primary-darker: #11812f;
 	--color-secundary: #7F86CB;
 	--color-secundary-dark: #774dd6;
 	--color-text-in-primary: #d4c2ff;
 	--color-text-title: #32264d;
 	--color-text-complement: #9c98a6;
 	--color-text-base: #6a6180;
 	--color-line-in-white: #e6e6f0;
 	--color-input-background: #f8f8fc;
 	--color-button-text: #ffffff;
 	--color-box-base: #ffffff;
 	--color-box-footer: #fafafc;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html,
body,
#root {
	height: 100vh;
}

body {
	background: ${(props) => props.theme.colors.background};
}

#root {
	display: flex;
	align-items: center;
	justify-content: center;
}

body,
input,
textarea {
	font: 500 1.6rem Poppins;
}
a{
	font: 700 1.6rem Archivo;

}

.container {
	width: 80%;
	max-width: 900px;
	align-items:center;
	justify-content:center;
	display:flex;
}

@media (min-width: 700px) {
	:root {
		font-size: 62.5%;
	}
}

`;
