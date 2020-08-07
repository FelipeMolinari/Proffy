import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import { useForm } from 'react-hook-form';
import { TeacherListContent, Main, FieldSet, Box, Footer } from './styles';
import InputComponent from '../../Components/InputComponent';
import { TiWarning } from 'react-icons/ti';
import TextAreaComponent from '../../Components/TextAreaComponent';
import SelectComponent from '../../Components/SelectComponent';
import { MdRemoveCircle } from 'react-icons/md';
import api from '../../services/api';
import ErrorMessage from '../../Components/ErrorMessage';

interface Props {
	toggleTheme(): void;
}

const TeacherForm: React.FC<Props> = ({ toggleTheme }) => {
	const history = useHistory();
	const [ scheduleItems, setScheduleItems ] = useState([ { week_day: 0, from: '', to: '' } ]);
	const { register, errors, handleSubmit } = useForm();

	const addNewScheduleItem = () => {
		setScheduleItems([ ...scheduleItems, { week_day: 0, from: '', to: '' } ]);
	};
	const removeScheduleItem = (idx: Number) => {
		setScheduleItems(scheduleItems.filter((_, index) => index != idx));
	};

	const handleSelectChanges = (index: number, value: string, field: string) => {
		const newArray = scheduleItems.map((item, pos) => {
			if (pos === index) {
				return { ...item, [field]: value };
			}
			return item;
		});
		setScheduleItems(newArray);
	};

	const onSubmit = handleSubmit((data) => {
		api
			.post('/classes', { ...data, schedule: scheduleItems })
			.then(() => {
				alert('Cadastro realizado com sucesso');
				history.push('/');
			})
			.catch((error) => {
				alert('Erro no cadastro');
			});
	});

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
						<form
							action=""
							onSubmit={(event) => {
								event.preventDefault();
								onSubmit();
							}}
						>
							<div className="form-container">
								<FieldSet>
									<legend className="legend-field-set">Meus dados</legend>
									<InputComponent
										labelText="Nome"
										htmlFor="name"
										boxClass="input-inside-box"
										name="name"
										register={register({ required: true })}
									/>
									{errors.name && <ErrorMessage text="Campo obrigatório" type="error" />}

									<InputComponent
										labelText="Avatar"
										htmlFor="avatar"
										boxClass="input-inside-box"
										name="avatar"
										register={register({ required: true })}
									/>
									{errors.avatar && <ErrorMessage text="Campo obrigatório" type="error" />}

									<InputComponent
										labelText="WhatsApp"
										htmlFor="whatsapp"
										boxClass="input-inside-box"
										name="whatsapp"
										register={register({ required: true })}
									/>
									{errors.whatsapp && <ErrorMessage text="Campo obrigatório" type="error" />}

									<TextAreaComponent
										htmlFor="bio"
										labelText="Biografia"
										name="bio"
										register={register({ required: true })}
									/>
									{errors.name && <ErrorMessage text="Campo obrigatório" type="error" />}
								</FieldSet>
								<FieldSet>
									<legend className="legend-field-set">Sobre a aula</legend>
									<SelectComponent
										labelText="Disciplina"
										htmlFor="subject"
										boxClass="input-inside-box"
										register={register({ required: true })}
										name="subject"
										options={[
											{ value: 'Artes', label: 'Artes' },
											{ value: 'Biologia', label: 'Biologia' },
											{ value: 'Educação Física', label: 'Educação Física' },
											{ value: 'Química', label: 'Química' },
											{ value: 'Filosofia', label: 'Filosofia' },
											{ value: 'Geografia', label: 'Geografias' }
										]}
									/>
									{errors.subject && <ErrorMessage text="Campo obrigatório" type="error" />}
								</FieldSet>

								<FieldSet>
									<legend className="legend-field-set">
										Horários disponíveis
										<button type="button" onClick={() => addNewScheduleItem()}>
											+ Novo horário
										</button>
									</legend>

									{scheduleItems.map((item, idx) => (
										<div key={idx}>
											<div className="schedule-item">
												<SelectComponent
													labelText="Dia da semana"
													htmlFor="week_day"
													boxClass="input-inside-box"
													register={register({ required: true })}
													name={`week_day${idx}`}
													onChange={(event) =>
														handleSelectChanges(idx, event.target.value, 'week_day')}
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

												<InputComponent
													htmlFor="from"
													labelText="Das"
													type="time"
													boxClass="input-inside-box"
													register={register({ required: true })}
													name={`from${idx}`}
													onChange={(event) =>
														handleSelectChanges(idx, event.target.value, 'from')}
												/>

												<InputComponent
													htmlFor="to"
													labelText="Até"
													type="time"
													boxClass="input-inside-box"
													register={register({ required: true })}
													name={`to${idx}`}
													onChange={(event) =>
														handleSelectChanges(idx, event.target.value, 'to')}
												/>

												{idx != 0 && (
													<MdRemoveCircle
														color="#F54E4E"
														size={36}
														onClick={() => removeScheduleItem(idx)}
													/>
												)}
											</div>
											<div className="schedule-item-errors">
												{errors[`week_day${idx}`] && (
													<ErrorMessage text="Campo obrigatório" type="error" />
												)}
												{errors[`from${idx}`] && (
													<ErrorMessage text="Campo obrigatório" type="error" />
												)}
												{errors[`to${idx}`] && (
													<ErrorMessage text="Campo obrigatório" type="error" />
												)}
											</div>
										</div>
									))}
									<InputComponent
										labelText="Custo da sua hora por aula"
										htmlFor="cost"
										name="cost"
										boxClass="input-inside-box"
										register={register({ required: true })}
									/>
								</FieldSet>
							</div>
							<Footer>
								<p>
									<TiWarning size={24} color="#FFD347" />
									Importante! <br />
									Preencha todos os dados
								</p>
								<button type="submit" className="create-class">
									Salvar cadastro
								</button>
							</Footer>
						</form>
					</Box>
				</Main>
			</TeacherListContent>
		</div>
	);
};
export default TeacherForm;
