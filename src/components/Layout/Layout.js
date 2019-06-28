import React, {Component} from 'react';

import { connect } from 'react-redux';
import Classes from './Layout.css'

import Aux from '../../hoc/Aux2';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {
        showSidedrawer: false
    }

    sidedrawerClosedHandler = () => {
        this.setState({showSidedrawer: false});
    }

    sidedrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSidedrawer: !prevState.showSidedrawer};
        });
    }

    render() {
        return( <Aux>
                    <Toolbar
                        isAuth={this.props.isAuthenticated}
                        DrawerToggleClicked={this.sidedrawerToggleHandler}  />
                    <Sidedrawer
                        isAuth={this.props.isAuthenticated} 
                        closed={this.sidedrawerClosedHandler} 
                        open={this.state.showSidedrawer}/>
                    <main className={Classes.Content}>
                        {this.props.children}
                    </main>
                </Aux>
    )
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(Layout);