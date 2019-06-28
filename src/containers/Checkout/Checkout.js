import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import { connect } from 'react-redux';

import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';

class CheckOut extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    }

    render() {
        let summary = <Redirect to="/"/>;
        
       

        if(this.props.ings) { 
            
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckOutSummary 
                        ingredients={this.props.ings}
                        onCheckoutCancelled={this.checkoutCancelledHandler}
                        onCheckoutContinued={this.checkoutContinuedHandler}/>
                    <Route path={this.props.match.path + "/contact-data"} 
                            component={ContactData} />
                </div>
            );
        }
        return summary; 

        
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased
    }
    
}

export default connect(mapStateToProps)(CheckOut);