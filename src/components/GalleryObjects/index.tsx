import * as React from 'react';
import SingleObject from "../Object";

const style = require('./style.module.css');

type Props = {
    props?: any;
};

const GalleryObjects: React.FC<Props> = ({props}) => {

    const Objects = [
        {
            tittle: '1 комнатная квартира',
            subTittle: null,
            address: 'Жулебино',
            note: 'Светлая, ухоженная квартира от собственника. Пешая доступность, 12мин от метро.'
        },
        {
            tittle: '1 комнатная квартира',
            subTittle: null,
            address: 'Жулебино',
            note: 'Светлая, ухоженная квартира от собственника. Пешая доступность, 12мин от метро.'
        },
        {
            tittle: '1 комнатная квартира',
            subTittle: null,
            address: 'Жулебино',
            note: 'Светлая, ухоженная квартира от собственника. Пешая доступность, 12мин от метро.'
        },

    ];

    return (
        <div className={style.GalleryObjects}>
            {Objects.map((e)=> {
                return(
                <SingleObject
                    tittle={e.tittle}
                    subTittle={e.subTittle}
                    address={e.address}
                    note={e.note}
                />);
            })}
        </div>
    );
};

export default GalleryObjects;
