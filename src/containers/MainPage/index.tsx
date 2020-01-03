import * as React from 'react';

const style = require('./style.css');

type Props = {
    props?: any;
};

const MainPage: React.FC<Props> = ({props}) => {
    return (
        <div className={style.MainPage}>

        </div>
    );
};

export default MainPage;
