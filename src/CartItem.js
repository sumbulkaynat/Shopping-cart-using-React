import React from "react";

class CartItem extends React.Component {

    render () {
        const { price , title , qty } = this.props.product ;
        const {
            product ,
            onIncreaseQuantity ,
            onDecreaseQuantity ,
            onDeleteProduct 
        } = this.props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs: {price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/premium-icon/icons/svg/3114/3114793.svg" 
                            onClick={ () => onIncreaseQuantity(product) }
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg" 
                            onClick={ () => onDecreaseQuantity(product) }
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/premium-icon/icons/svg/2874/2874796.svg" 
                            onClick={ () => onDeleteProduct(product.id) }

                        />
                    </div>
                
                </div>
                

            </div>
        );
    }
}

const styles = {
    image: {
        height: 124,
        width: 124,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;