import * as React from 'react';
// @ts-ignore
import {NavLink} from 'react-router-dom';

const style = require('./style.module.css');

type Props = {
    props?: any;
};

const Header: React.FC<Props> = ({props}) => {
    return (
        <div className={style.Header}>
            <div className={style.logo}>
                <NavLink to="/mainpage">
                    <img src={'https://image.flaticon.com/icons/svg/327/327985.svg'} alt={'logo'}/>
                </NavLink>
            </div>
            <div className={style.links}>
                <NavLink to="/mainpage">Main Page</NavLink>
                <NavLink to="/objects">Objects</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
            </div>
        </div>
    );
};

export default Header;
