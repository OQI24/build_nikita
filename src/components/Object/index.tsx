import * as React from 'react';
// @ts-ignore
import { BrowserHistory, link} from 'react-router-dom';

const style = require('./style.module.css');

type Props = {
    id: number;
    tittle?: any;
    subTittle?: any;
    address?: any;
    note?: any;
};

const SingleObject: React.FC<Props> = ({tittle, subTittle, address, note, id}) => {
    return (
        <div className={style.SingleObject}>
            <h3 className={style.tittle}>{tittle}</h3>
            <h5 className={style.subTittle}>{'Район ' + address}</h5>
            <h5 className={style.subTittle}>{subTittle}</h5>
            <img
                className={style.picture}
                alt={'room1'}
                src={'https://avatars.mds.yandex.net/get-pdb/1754666/19c45314-9c79-4d5d-ab65-d4d542cb56ba/s1200?webp=false'}
            />
            <span className={style.note}>{note}</span>
        </div>
    );
};

export default SingleObject;
