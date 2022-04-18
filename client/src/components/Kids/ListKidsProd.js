import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getkidsProd } from '../../redux/actions/actionProduct';
import KidsProdCard from './kidsProdCard';

const ListKidsProd = () => {

    const {products} = useSelector(state => state.productReducer);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getkidsProd)
    }, [dispatch])
    
  return (
    <div>
        {
            products && React.Children.toArray(products.map(el => <KidsProdCard kid={el} />))
        }
    </div>
  )
}

export default ListKidsProd