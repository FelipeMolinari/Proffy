import React, { useState } from 'react';
import { TeacherListContent, Form, Main } from './styles';
import Header from '../../Components/Header';
import TeacherItem from '../../Components/TeacherItem';
import InputComponent from '../../Components/InputComponent';
import SelectComponent from '../../Components/SelectComponent';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import api from '../../services/api';
import { PropsTeacher } from '../../Components/TeacherItem';
interface Props {
	toggleTheme(): void;
}

interface FormProps {
	week_day: number;
	subject: string;
	time: string;
}
interface Teacher {
	id: PropsTeacher;
}

const TeacherList: React.FC<Props> = ({ toggleTheme }) => {
	const { register, handleSubmit } = useForm<FormProps>();
	const [ classList, setClassList ] = useState([]);
	const onSubmit = handleSubmit(async ({ week_day, subject, time }) => {
		try {
			const response = await api.get('/classes', {
				params: {
					week_day,
					subject,
					time
				}
			});
			setClassList(response.data);
			console.log(response.data);
		} catch (error) {
			alert('Erro ao filtrar classes');
		}
	});
	return (
		<div className="container">
			<TeacherListContent>
				<Header
					mainText="Estes são os proffys disponíveis."
					subText="Informe a matéria, dia de semana e o horário para encontrar o melhor proffy!"
					toggleTheme={toggleTheme}
				/>
				<Form
					className="form-teacher-list"
					onSubmit={(event) => {
						event.preventDefault();
						onSubmit();
					}}
				>
					<SelectComponent
						labelText="Disciplina"
						htmlFor="subject"
						name="subject"
						options={[
							{ value: 'Artes', label: 'Artes' },
							{ value: 'Biologia', label: 'Biologia' },
							{ value: 'Educação Física', label: 'Educação Física' },
							{ value: 'Química', label: 'Química' },
							{ value: 'Filosofia', label: 'Filosofia' },
							{ value: 'Geografia', label: 'Geografias' }
						]}
						register={register}
					/>
					<SelectComponent
						labelText="Dia da semana"
						htmlFor="week_day"
						name="week_day"
						options={[
							{ value: '0', label: 'Domingo' },
							{ value: '1', label: 'Segunda-feira' },
							{ value: '2', label: 'Terça-feira' },
							{ value: '3', label: 'Quarta-feira' },
							{ value: '4', label: 'Quinta-feira' },
							{ value: '5', label: 'Sexta-feira' },
							{ value: '6', label: 'Sabado' }
						]}
						register={register}
					/>
					<InputComponent htmlFor="time" labelText="Hora" type="time" register={register} name="time" />
					<button type="submit" className="search-container">
						<span className="text-button">Pesquisar</span>
						<FaSearch size={'1.8rem'} />
					</button>
				</Form>
				<Main className="main">
					{classList.length === 0 ? (
						<h1>Nenhum usuário</h1>
					) : (
						classList.map((classItem: PropsTeacher) => {
							return <TeacherItem key={classItem.id} teacher={classItem} />;
						})
					)}
				</Main>
			</TeacherListContent>
		</div>
	);
};
export default TeacherList;
