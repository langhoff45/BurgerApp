import React, {Component} from 'react';

import classes from './ContactData.css';

import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalcode: ""
        }
    }

    render() {
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="enter your name"/>
                    <input className={classes.Input} type="email" name="email" placeholder="enter your email"/>
                    <input className={classes.Input} type="text" name="street" placeholder="enter your street"/>
                    <input className={classes.Input} type="text" name="postalcode" placeholder="enter your postal code"/>
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;