import PropTypes from 'prop-types';
import React from 'react';
const Item = (props)=>{
    const{title,amount}=props
    return(
        <li>{title}<span>{amount}</span></li>
    );
}

Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item;