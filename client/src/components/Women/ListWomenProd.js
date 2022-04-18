import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWomenProd } from '../../redux/actions/actionProduct';
import WomenProdCard from './WomenProdCard';

const ListWomenProd = () => {

    const {products} = useSelector();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getWomenProd())
    }, [dispatch])
    
  return (
    <div>
        {
            products && React.Children.toArray(products.map(el => <WomenProdCard woman={el} />))
        }
    </div>
  )
}

export default ListWomenProd