import * as React from 'react';
import SingleObject from "../Object";
import {Objects} from "../../Utils";
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import {useState} from "react";

const style = require('./style.module.css');

type Props = {
    props?: any;
    tottalCount: number;
};

const GalleryObjects: React.FC<Props> = ({props, tottalCount}) => {

    const [current, setCurrent] = useState(1);

    const objArray = Objects(tottalCount);

    return (
        <div className={style.GalleryObjects}>
            {Objects(tottalCount).map((e)=> {
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
