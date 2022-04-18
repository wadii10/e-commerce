import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMenProd } from '../../redux/actions/actionProduct';
import MenProdCard from './MenProdCard';
import './Men.css';

const ListMenProd = () => {

    const {products} = useSelector(state => state.productReducer)

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getMenProd())
    }, [dispatch])
    
  return (
    <div className="listProduct" >
        {
            products && React.Children.toArray(products.map(el => <MenProdCard man={el} />))
        }
    </div>
  )
}

export default ListMenProd