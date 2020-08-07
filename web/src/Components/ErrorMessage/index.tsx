import React from 'react';
import { ErrorContainer } from './styled';
interface Props {
	text: string;
	type: string;
}
const ErrorMessage: React.FC<Props> = ({ text, type }) => {
	return (
		<ErrorContainer>
			<p className={type}>{text}</p>
		</ErrorContainer>
	);
};
export default ErrorMessage;
