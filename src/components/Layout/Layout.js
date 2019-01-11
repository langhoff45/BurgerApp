import React, {Component} from 'react';

import Classes from './Layout.css'

import Aux from '../../hoc/Aux2';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {
        showSidedrawer: true
    }

    sidedrawerClosedHandler = () => {
        this.setState({showSidedrawer: false});
    }

    render() {
        return( <Aux>
                    <Toolbar />
                    <Sidedrawer closed={this.sidedrawerClosedHandler} open={this.state.showSidedrawer}/>
                    <main className={Classes.Content}>
                        {this.props.children}
                    </main>
                </Aux>
    )
    }
};

export default Layout;