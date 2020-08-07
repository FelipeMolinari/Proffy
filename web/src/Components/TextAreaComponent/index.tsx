import React, { TextareaHTMLAttributes } from 'react';
import { Label, TextArea, TextAreaBlock } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	labelText: string;
	htmlFor: string;
	register?: any;
}

const TextAreaComponent: React.FC<Props> = ({ labelText, htmlFor ,register, ...rest }) => {
	return (
		<TextAreaBlock className="Textarea-block">
			<Label htmlFor={htmlFor}>{labelText}</Label>
			<TextArea id={htmlFor} ref={register} {...rest} />
		</TextAreaBlock>
	);
};
export default TextAreaComponent;
