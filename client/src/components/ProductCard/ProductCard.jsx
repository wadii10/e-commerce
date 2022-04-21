import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts, removeProduct } from '../../redux/actions/actionProduct';
import UpdateProd from '../UpdateProd';
import './ProductCard.css'


const ProductCard = ({ product }) => {

    const { user } = useSelector((state) => state.userReducer);
    // console.log(user);

    // const [qty, setQty] = useState()

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addToCartHandler = () => {
        navigate(`/cart/${product._id}`)
    }
    // useEffect(() => {
    //     dispatch(getAllProducts())
    // }, [])


    return (
        <div className='productCard'>
            <Card style={{ width: '18rem', height: '30rem' }}>
                <Card.Img style={{ height: '20rem' }} variant="top" src={product.image} alt="wait for data" />
                <Card.Body>
                    <div className="nameProde">
                        <Card.Title>{product.nameProd}</Card.Title>
                    </div>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    {user && user.userRole === "admin" ? <div className="btns_admin">
                        <Button variant="danger" onClick={() => { dispatch(removeProduct(product._id)); dispatch(getAllProducts()) }} >DELETE</Button>
                        <UpdateProd updateProd={product} />
                        <Link to={`/detailProduct/${product._id}`}> <Button variant="info">DETAIL</Button> </Link>
                    </div> : <div className="btns_user">
                        <Button variant="primary" onClick={addToCartHandler} >BUY</Button>
                        <Link to={`/detailProduct/${product._id}`}> <Button variant="info">DETAIL</Button> </Link>
                    </div>}
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard