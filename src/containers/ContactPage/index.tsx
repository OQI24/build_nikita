import * as React from 'react';
import './style.css'

const style = require('./style.css');

type Props = {
    props?: any;
};

const Contacts: React.FC<Props> = ({props}) => {
    return (
        <div className={'Contacts'}>
        </div>
    );
};

export default Contacts;
