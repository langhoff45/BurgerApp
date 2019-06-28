import React, {Component} from 'react';

import Aux from '../../../hoc/Aux2';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //this could be a functional component, doesent have to be a class

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey =>  {
                return  <li key={igKey}>
                            <span style={{textTransform: 'capitalize'}}>{igKey}</span>:
                            {this.props.ingredients[igKey]}
                        </li>
            });

        return ( <Aux>
            <h3>Your order</h3>
            <p>A pusheen burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux>
        );
    }
} 

export default OrderSummary;