import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty } from '../../redux/actions/actionCart';


const ItemQty = ({ el }) => {

  const [qty, setQty] = useState(el.qty);

  const dispatch = useDispatch();

  return (
    <div className="ItemQty">
      {
        qty > 0 ? <div><IconButton onClick={ () => dispatch(decrementQty(el))} ><i className="fa fa-minus-circle"></i></IconButton> <span >{el.qty}</span> <IconButton onClick={ () => dispatch(incrementQty(el))}><i className="fa fa-plus-circle"></i></IconButton></div> :
          <div> <IconButton  ><i className="fa fa-minus-circle"></i></IconButton> <span >{el.qty}</span> <IconButton onClick={ () => dispatch(incrementQty(el))}><i className="fa fa-plus-circle"></i></IconButton></div>
      }
    </div>
  );
};

export default ItemQty;