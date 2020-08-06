import React, { InputHTMLAttributes } from 'react';
import { Label, Input, InputBlock } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	labelText: string;
	htmlFor: string;
	boxClass?: string;
}

const InputComponent: React.FC<Props> = ({ labelText, htmlFor, boxClass, ...rest }) => {
	return (
		<InputBlock className={`input-block ${boxClass}`}>
			<Label htmlFor={htmlFor}>{labelText}</Label>
			<Input type="text" id={htmlFor} {...rest} />
		</InputBlock>
	);
};
export default InputComponent;
