import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Home from './pages/Home/Home.page';
import ProductView from './pages/ProductView/ProductView.page';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Container } from 'react-bootstrap';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Header />
				<main className='py-3'>
					<Container>
						<Routes>
							<Route exact path='/' element={<Home />} />
							<Route path='products/:id' element={<ProductView />} />
							<Route
								path='/about'
								element={() => {
									window.location.href = 'https://www.jjthr.com/portfolio';
									return null;
								}}
							/>
						</Routes>
					</Container>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
