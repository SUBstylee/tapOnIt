import Likes from '../Likes/Likes.component';

import { Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/products/${product.id}`}>
				<Card.Img src={product.image} variant='top' />
			</Link>
			<Card.Body>
				<Link to={`/products/${product.id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>
				<Card.Text as='div'>
					<div className='my-3'>
						<Likes likes={product.likes} />
					</div>
				</Card.Text>
				<Card.Text as='h3'>
					<div className='my-3'>${product.price}</div>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
