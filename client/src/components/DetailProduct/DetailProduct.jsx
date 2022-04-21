import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../redux/actions/actionProduct';

const DetailProduct = () => {

    //reducer state
    const {products} = useSelector(state => state.productReducer);
    // console.log(product)

    // product
    // const [product, setProduct] = useState("")

    const dispatch = useDispatch();
    const { _id } = useParams();

    useEffect(() => {
        // try {
        //     const getOneProd = async () => {
        //         const res1 = await axios.get(`/product/getOneProduct/${_id}`) ;
        //         return setProduct(res1.data);
        //       };
        //       getOneProd();

        // } catch (error) {
        //     alert("get one error")
        // }
          dispatch(getOneProduct(_id));
    }, [_id])

    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={products.image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{products.nameProd}</Card.Title>
                    <Card.Text>
                        {products.price}
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default DetailProduct