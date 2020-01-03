import * as React from 'react';

const style = require('./style.css');

type Props = {
    props?: any;
};

const Header: React.FC<Props> = ({props}) => {
    return (
        <div className={style.Header}> </div>
    );
};

export default Header;
