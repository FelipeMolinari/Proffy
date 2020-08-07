import React, { InputHTMLAttributes } from 'react';
import { Label, Input, InputBlock } from './styles';
import ErrorMessage from '../ErrorMessage';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	labelText: string;
	htmlFor: string;
	boxClass?: string;
	register?: any;
}

const InputComponent: React.FC<Props> = ({ labelText, htmlFor, boxClass, register, ...rest }) => {
	return (
		<InputBlock className={`input-block ${boxClass}`}>
			<div className="input-camp">
				<Label htmlFor={htmlFor}>{labelText}</Label>
				<Input type="text" name={htmlFor} {...rest} ref={register} />
			</div>
		</InputBlock>
	);
};
export default InputComponent;
