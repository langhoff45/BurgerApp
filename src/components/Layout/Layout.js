import React from 'react';

import Classes from './Layout.css'

import Aux from '../../hoc/Aux2';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;