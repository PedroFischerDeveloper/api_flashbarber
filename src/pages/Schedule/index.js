import React, { useState } from 'react';
import { format, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DatePickerCalendar } from 'react-nice-dates';
import { Container, Row, Col } from 'react-bootstrap';
import SelectHours from '../../components/SelectHours';
import 'react-nice-dates/build/style.css';
import './styles.css';

const modifiers = {
	disabled: date => getDay(date) === 6, // Disables Saturdays
	highlight: date => getDay(date) === 3 // Highlights Tuesdays
}
const modifiersClassNames = {
	highlight: '-highlight'
}

function App() {
	const [date, setDate] = useState();

	return (
		<body className='Body_Schedules'>
			<Container>
				<Row>
					<Col xs={12} id="title_Schedules_barberShop">Tribo Barbearia</Col>
					<Col xs={12} id="description_Schedules_barberShop">Corte e Barba</Col>
					<Col xs={12}>
						<Col xs={12} id="TextTitleData_Schedules">
							<p>Data do Agendamento:</p>
						</Col>
						<Col xs={12} >
							<p id="TextData_Schedules">{date ? format(date, 'dd MMM yyyy', { locale: ptBR }) : 'none'}.</p>
						</Col>
					</Col>
					<Col xs={12}>
						<div id="style_line"></div>
					</Col>
					<Col xs={9}>
						<div className="DatePickerCalendar_Schedules">
							<DatePickerCalendar

								date={date}
								onDateChange={setDate}
								locale={ptBR}
								modifiers={modifiers}
								modifiersClassNames={modifiersClassNames}
							/>
						</div>
					</Col>
					<Col xs={3}>
						<SelectHours />
					</Col>

				</Row>
			</Container>
		</body>
	);
}

export default App;
