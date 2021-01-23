import React from "react";

class CartItem extends React.Component {
    
    increaseQuantity = () => {
       this.setState((prevState) => {
           return{
               qty : prevState.qty + 1
           }
       });
    }

    decreaseQuantity = () => {
        const {qty} = this.state;

        if(qty == 0) {
            return;
        }

       this.setState((prevState) => {
           return{
               qty : prevState.qty - 1
           }
       });
    }

    render () {
        const { price , title , qty } = this.props.product ;
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
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg" 
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/premium-icon/icons/svg/2874/2874796.svg" 
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