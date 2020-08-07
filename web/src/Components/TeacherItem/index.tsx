import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Card, CardHeader, TeacherImage, TeacherDetails, Description, Footer } from './styles';
import { IoLogoWhatsapp } from 'react-icons/io';
import api from '../../services/api';

export interface PropsTeacher {
	id: number;
	subject: string;
	bio: string;
	url: string;
	name: string;
	cost: number;
	whatsapp: string;
}
interface Teacher {
	teacher: PropsTeacher;
}
const TeacherList: React.FC<Teacher> = ({ teacher }) => {
	const { colors } = useContext(ThemeContext);
	function createNewConnection() {
		api.post('connections', {
			user_id: teacher.id
		});
	}
	return (
		<Card className="card-item">
			<CardHeader>
				<TeacherImage src={teacher.url} alt={teacher.name} />
				<TeacherDetails>
					<strong>{teacher.name}</strong>
					<span>{teacher.subject}</span>
				</TeacherDetails>
			</CardHeader>
			<Description>{teacher.bio}</Description>
			<Footer className="footer-card">
				<p>
					Preço/Hora <strong>R$ {teacher.cost}</strong>
				</p>

				<a onClick={() => createNewConnection()} href={`https://wa.me/${teacher.whatsapp}`}>
					<IoLogoWhatsapp size={26} color={colors.input} />
					<span>Entrar em contato</span>
				</a>
			</Footer>
		</Card>
	);
};
export default TeacherList;
