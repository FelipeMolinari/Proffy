import React, { SelectHTMLAttributes } from 'react';
import { Label, Select, SelectBlock } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
	labelText: string;
	htmlFor: string;
	options: Array<{
		value: string;
		label: string;
	}>;
	boxClass?: string;
}

const SelectComponent: React.FC<Props> = ({ labelText, htmlFor, options, boxClass, ...rest }) => {
	return (
		<SelectBlock className={`select-block ${boxClass}`}>
			<Label htmlFor={htmlFor}>{labelText}</Label>
			<Select id={htmlFor} {...rest}>
				<option className="option-selector" value="" disabled selected hidden>
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
