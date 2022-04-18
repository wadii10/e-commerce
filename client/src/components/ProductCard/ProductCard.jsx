import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts, removeProduct } from '../../redux/actions/actionProduct';
import UpdateProd from '../UpdateProd';
import './ProductCard.css'


const ProductCard = ({ product }) => {

    const { user } = useSelector((state) => state.userReducer);
    console.log(user);

    const dispatch = useDispatch();

    return (
        <div className='productCard'>
            <Card style={{ width: '18rem' ,height:'30rem'}}>
                <Card.Img style={{ height:'20rem' }}  variant="top" src={product.image} alt="wait for data" />
                <Card.Body>
                    <div className="nameProde">
                    <Card.Title>{product.nameProd}</Card.Title>
                    </div>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Button variant="primary">BUY</Button>
                    <Link to={`/detailProduct/${product._id}`}> <Button variant="info">DETAIL</Button> </Link>
                    <Button variant="danger" onClick={() => { dispatch(removeProduct(product._id)); dispatch(getAllProducts()) }} >DELETE</Button>
                    {/* <Button variant="primary">UPDATE</Button> */}
                    {user && user.userRole === "admin" ?<UpdateProd updateProd={product} /> : null }
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard