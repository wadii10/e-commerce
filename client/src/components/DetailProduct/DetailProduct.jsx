import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../redux/actions/actionProduct';

const DetailProduct = () => {

     //reducer state
     const product = useSelector( state => state.products);
    
    const dispatch = useDispatch();
    const {_id} = useParams();

    useEffect(() => {
      dispatch(getOneProduct(_id));
    }, [dispatch])
    
    return (
        <div>
            <Card style={{ width: '50rem' }} className="bg-dark text-white">
                <Card.Img src={product.image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{product.nameProd}</Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default DetailProduct