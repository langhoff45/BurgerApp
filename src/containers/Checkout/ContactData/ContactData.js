import React, {Component} from 'react';

import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalcode: ""
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({loading: true});
       const order = {
           ingredients: this.props.ingredients,
           price: this.props.price,
           customer: {
               name: "Pusheen",
               address: {
                    street: "teststreet 1",
                    zipcode: "2200",
                    country: "Denmark"
               },
               email: 'test@test.dk'
           },
           deliveryMethod: 'fastest'
       }

       axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error =>  {
                console.log(error)
                this.setState({loading: false});
            });

    }

    render() {
        let form = ( 
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="enter your name"/>
                <input className={classes.Input} type="email" name="email" placeholder="enter your email"/>
                <input className={classes.Input} type="text" name="street" placeholder="enter your street"/>
                <input className={classes.Input} type="text" name="postalcode" placeholder="enter your postal code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>);
        if(this.state.loading) {
            form = <Spinner/>;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;