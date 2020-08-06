import React from 'react';
import { TeacherListContent, Form, Main } from './styles';
import Header from '../../Components/Header';
import TeacherItem from '../../Components/TeacherItem';
import InputComponent from '../../Components/InputComponent';
import SelectComponent from '../../Components/SelectComponent';

interface Props {
	toggleTheme(): void;
}

const TeacherList: React.FC<Props> = ({ toggleTheme }) => {
	return (
		<div className="container">
			<TeacherListContent>
				<Header
					mainText="Estes são os proffys disponíveis."
					subText="Informe a matéria, dia de semana e o horário para encontrar o melhor proffy!"
					toggleTheme={toggleTheme}
				/>
				<Form className="form-teacher-list">
					<SelectComponent
						labelText="Disciplina"
						htmlFor="subject"
						options={[
							{ value: 'Artes', label: 'Artes' },
							{ value: 'Biologia', label: 'Biologia' },
							{ value: 'Educação Física', label: 'Educação Física' },
							{ value: 'Química', label: 'Química' },
							{ value: 'Filosofia', label: 'Filosofia' },
							{ value: 'Geografia', label: 'Geografias' }
						]}
					/>
					<SelectComponent
						labelText="Dia da semana"
						htmlFor="week_day"
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
					<InputComponent htmlFor="time" labelText="Hora" type="time" />
				</Form>
				<Main className="main">
					<TeacherItem />
					<TeacherItem />
					<TeacherItem />
					<TeacherItem />
				</Main>
			</TeacherListContent>
		</div>
	);
};
export default TeacherList;
