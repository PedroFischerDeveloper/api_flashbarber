import './styles.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { GiHairStrands } from 'react-icons/gi';
import Logo from '../../assets/image/Logo.png';
function App() {
	const history = useHistory();
	async function handleSchedule(e) {
		e.preventDefault();
		history.push("/Agenda");

	}
	return (
		<body className='Body_Home'>
			<Container>
				<Row>
					<Col sm={12}>
						<img src={Logo} id="Logo_Home_barberShop" alt="logo"></img>
					</Col>
					<Col sm={12} id="title_Home_barberShop">Tribo Barbearia</Col>
					<Col sm={12} id="description_Home_barberShop">Corte e Barba</Col>
					<Col sm={12} id="description_Home_barberShop">
						<Button
							onClick={handleSchedule}
							variant="warning"
							id="button_Home_barberShop">
							Agenda ai <GiHairStrands size={32} />
						</Button>
					</Col>
				</Row>
			</Container>
		</body>
	);
}

export default App;
