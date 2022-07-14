import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import gfresh from './gfresh-trans.png';

const Header = () => {
	return (
		<header className='Header'>
			<Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<Image src={gfresh} height='75px' width='75px' />
						</Navbar.Brand>
					</LinkContainer>
					<Nav>
						<LinkContainer to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
					</Nav>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='https://www.jjthr.com/portfolio' target='_blank'>
								<i className='fa-solid fa-circle-info'></i> About
							</Nav.Link>

							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fa-solid fa-user'></i> Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
