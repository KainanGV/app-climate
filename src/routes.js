import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './pages/Home';
import Search from './pages/Search';

// Linha que tras todas as propriedades e métodos do react-navigation/drawer
const Drawer = createDrawerNavigator();

function Routes() {
    return (
        // Menu de navegação escolhemos o Drawer
        // Cada item deste é um Drawer Screen

        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Minha Cidade'
                }}
            />

            <Drawer.Screen 
                name="Search"
                component={Search}
                options={{
                    title: 'Procurar'
                }}
            />
        </Drawer.Navigator>
    )
}

export default Routes;
