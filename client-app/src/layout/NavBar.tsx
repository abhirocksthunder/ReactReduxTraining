import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    React Training
                </Menu.Item>
                <Menu.Item as={NavLink} to='/products' name='Products' />
                <Menu.Item as={NavLink} to='/movies' name='Movies' />
                <Menu.Item as={NavLink} to='/weather' name='Weather Forecast' />
                
            </Container>
        </Menu>
    )
}