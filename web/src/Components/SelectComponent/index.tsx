import React, { SelectHTMLAttributes } from 'react';
import { Label, Select, SelectBlock } from './styles';
import ErrorMessage from '../ErrorMessage';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
	labelText: string;
	htmlFor: string;
	options: Array<{
		value: string;
		label: string;
	}>;
	boxClass?: string;
	register?: any;
	error?: any;
}

const SelectComponent: React.FC<Props> = ({ labelText, htmlFor, options, boxClass, register, ...rest }) => {
	return (
		<SelectBlock className={`select-block ${boxClass}`}>
			<Label htmlFor={htmlFor}>{labelText}</Label>
			<Select id={htmlFor} {...rest} ref={register}>
				<option className="option-selector" disabled={false} hidden value="">
					Selecione uma opção
				</option>
				{options.map((option, idx) => {
					return (
						<option className="option-selector" key={idx} value={option.value}>
							{option.label}
						</option>
					);
				})}
			</Select>
		</SelectBlock>
	);
};
export default SelectComponent;
