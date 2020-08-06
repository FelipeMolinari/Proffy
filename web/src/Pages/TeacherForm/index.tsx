import React, {useState, useContext} from 'react';
import Header from '../../Components/Header';
import { TeacherListContent, Main, FieldSet, Box, Footer } from './styles';
import InputComponent from '../../Components/InputComponent';
import { TiWarning } from 'react-icons/ti';
import TextAreaComponent from '../../Components/TextAreaComponent';
import SelectComponent from '../../Components/SelectComponent';
import {MdRemoveCircle} from 'react-icons/md'
interface Props {
	toggleTheme(): void;
}

const TeacherForm: React.FC<Props> = ({ toggleTheme }) => {
	const [scheduleItems, setScheduleItems] = useState([{week_day:0, from:'', to:''}]);
	
	const addNewScheduleItem = ()=>{
		setScheduleItems([...scheduleItems, {week_day:0, from:'', to:''}])
	}
	const removeScheduleItem = (idx: Number)=>{
		setScheduleItems(scheduleItems.filter((_, index)=>(index!=idx)))
	}

	return (
		<div className="container">
			<TeacherListContent>
				<Header
					mainText="Que incrível que você quer ser um Proffy."
					subText="Preencha o formulário abaixo para começar a sua história como proffy!"
					toggleTheme={toggleTheme}
				/>
				<Main className="main">
					<Box>
						<div className="form-container">
						<FieldSet>
							<legend className="legend-field-set">Meus dados</legend>
							<InputComponent labelText="Nome" htmlFor="name" boxClass="input-inside-box"/>
							<InputComponent labelText="Avatar" htmlFor="avatar" boxClass="input-inside-box"/>
							<InputComponent labelText="WhatsApp" htmlFor="whatsapp" boxClass="input-inside-box"/>
							<TextAreaComponent htmlFor="bio" labelText="Biografia" />
						</FieldSet>
						<FieldSet>
							<legend className="legend-field-set">Sobre a aula</legend>
							<SelectComponent
								labelText="Disciplina"
								htmlFor="subject"
								boxClass="input-inside-box"
								options={[
									{ value: 'Artes', label: 'Artes' },
									{ value: 'Biologia', label: 'Biologia' },
									{ value: 'Educação Física', label: 'Educação Física' },
									{ value: 'Química', label: 'Química' },
									{ value: 'Filosofia', label: 'Filosofia' },
									{ value: 'Geografia', label: 'Geografias' }
								]}
							/>
							<InputComponent labelText="Custo da sua hora por aula" htmlFor="cost" boxClass="input-inside-box"/>
						</FieldSet>
						<FieldSet>
							<legend className="legend-field-set">
								Horários disponíveis <button type="button" onClick={()=>addNewScheduleItem()}>+ Novo horário</button>
							</legend>

							{scheduleItems.map((item,idx)=>(
								<div key={item.week_day} className="schedule-item">
								<SelectComponent
									labelText="Dia da semana"
									htmlFor="week_day"
									boxClass="input-inside-box"

									options={[
										{ value: '0', label: 'Domingo' },
										{ value: '1', label: 'Segunda-feira' },
										{ value: '2', label: 'Terça-feira' },
										{ value: '3', label: 'Quarta-feira' },
										{ value: '4', label: 'Quinta-feira' },
										{ value: '5', label: 'Sexta-feira' },
										{ value: '6', label: 'Sabado' }
									]}
								/>

								<InputComponent htmlFor="from" labelText="Das" type="time" boxClass="input-inside-box"/>
								<InputComponent htmlFor="to" labelText="Até" type="time" boxClass="input-inside-box"/>
								{idx!=0 && <MdRemoveCircle color="#F54E4E" size={36} onClick={()=>removeScheduleItem(idx)}/>}
							</div>
							))}
							<InputComponent labelText="Custo da sua hora por aula" htmlFor="cost" boxClass="input-inside-box"/>
						</FieldSet>
						</div>
						<Footer>
							<p>
								<TiWarning size={24} color="#FFD347" />
								Importante! <br />
								Preencha todos os dados
							</p>
							<button type="button" className="create-class">
								Salvar cadastro
							</button>
						</Footer>
					</Box>
				</Main>
			</TeacherListContent>
		</div>
	);
};
export default TeacherForm;
