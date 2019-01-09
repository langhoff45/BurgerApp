import React from 'react';

import Classes from './Layout.css'

import Aux from '../../hoc/Aux2';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const Layout = (props) => (
    <Aux>
        <Toolbar />
        <Sidedrawer />
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;