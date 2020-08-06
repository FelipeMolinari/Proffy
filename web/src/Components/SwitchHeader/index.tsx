import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { SwitchContainer } from './styles';
import Switch from 'react-switch';
import { useLocation } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosSunny, IoIosMoon } from 'react-icons/io';

interface Props {
	toggleTheme(): void;
}

const SwitchHeader: React.FC<Props> = ({ toggleTheme }) => {
	const { title } = useContext(ThemeContext);
	let { pathname } = useLocation();
	const landing = pathname === '/' ? true : false;

	return landing ? (
		<SwitchContainer>
			<Switch
				onChange={() => {
					toggleTheme();
				}}
				checked={title === 'dark' ? true : false}
				checkedIcon={<IoIosMoon color={'#232423'} style={{ width: 30, height: 30 }} />}
				uncheckedIcon={<IoIosSunny color={'#fff'} style={{ width: 30, height: 30, marginLeft: 2 }} />}
				height={30}
				width={60}
				handleDiameter={25}
				offColor={'#232423'}
				onHandleColor={'#232423'}
				offHandleColor={'#fff'}
				onColor={'#fff'}
			/>
		</SwitchContainer>
	) : (
		<React.Fragment />
	);
};
export default SwitchHeader;
