import React from 'react';

import Classes from './Layout.css'

import Aux from '../../hoc/Aux2';

const Layout = (props) => (
    <Aux>
        <div>
            toolbar, SideDrawer
        </div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;