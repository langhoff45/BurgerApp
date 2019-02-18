import React, {Component} from 'react';
import {Route} from 'react-router-dom';
 
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';

class CheckOut extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 1,
            meat: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};

        for(let param of query.entries()) {
                //['salad', '1']
                ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    }

    render() {
        return(
            <div>
                <CheckOutSummary 
                ingredients={this.state.ingredients}
                onCheckoutCancelled={this.checkoutCancelledHandler}
                onCheckoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + "/contact-data"} component={ContactData}/>
            </div>
        ); 

        
    }
}

export default CheckOut;