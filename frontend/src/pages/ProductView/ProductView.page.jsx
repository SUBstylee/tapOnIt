import Likes from '../../components/Likes/Likes.component';

import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

import { Link, useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import axios from 'axios';

const ProductView = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/products/${id}`);
			setProduct(data);
			console.log(product);
		};
		fetchProduct();
	}, [id]);

	return (
		<div>
			<Link className='btn btn-primary my-3' to='/'>
				Go Back
			</Link>
			<Card className='my-3 p-3 rounded'>
				<Row>
					<Col md={6}>
						<Image src={product.image} alt={product.name} fluid />
					</Col>
					<Col md={6}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<h4>${product.price}</h4>
							</ListGroup.Item>
							<ListGroup.Item>
								<p>{product.description}</p>
							</ListGroup.Item>
							<ListGroup.Item>
								<h5>
									<Likes likes={product.likes} />
								</h5>
								<Button>Like</Button>
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default ProductView;
