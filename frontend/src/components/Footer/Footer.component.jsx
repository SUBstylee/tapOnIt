import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer className='Footer'>
			<Container>
				<Row>
					<Col className='text-center py-3'>Copyright &copy; Garden Fresh</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
