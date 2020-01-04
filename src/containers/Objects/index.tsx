import * as React from 'react';

const style = require('./style.module.css');

type Props = {
    props?: any;
};

const Objects: React.FC<Props> = ({props}) => {
    return (
        <div className={style.Objects}> </div>
    );
};

export default Objects;
