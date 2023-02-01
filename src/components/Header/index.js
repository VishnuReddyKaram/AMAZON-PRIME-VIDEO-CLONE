import React from 'react';

import {Container, Menu, Search, User } from "./styles";
import logoPrime from "../../assets/logo-prime.svg";
import logoUser from "../../assets/user.png";

const Header = () =>(
    <Container>
        <div className="nav-wrapper">
            <img className="brand-logo" src={logoPrime} alt="logo" />
            <Menu>
                <a href="#" className="active-link">Home</a>
                <a href="#" className="">Movies</a>
                <a href="#" className="">Orginals</a>
                <a href="#" className="">Series</a>
                <a href="#" className="">Kids</a>
            </Menu>
        </div>

        <div className="actions">
            <Search>
                <input type="text" placeholder="Search" />
            </Search>
            
            <User>
                <img className="user-logo" src={logoUser} alt="logo" />
                <span>Vishnu Karam</span>
                <i className="fa fa-caret-down arrow-icon" />
            </User>
        </div>
    </Container>
);

export default Header;