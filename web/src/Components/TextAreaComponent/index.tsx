import React, { TextareaHTMLAttributes } from 'react';
import { Label, TextArea, TextAreaBlock } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	labelText: string;
	htmlFor: string;
}

const TextAreaComponent: React.FC<Props> = ({ labelText, htmlFor, ...rest }) => {
	return (
		<TextAreaBlock className="Textarea-block">
			<Label htmlFor={htmlFor}>{labelText}</Label>
			<TextArea id={htmlFor} {...rest} />
		</TextAreaBlock>
	);
};
export default TextAreaComponent;
