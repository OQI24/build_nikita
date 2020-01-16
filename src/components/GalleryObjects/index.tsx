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
    mainPage?: boolean;
};

const GalleryObjects: React.FC<Props> = ({props, tottalCount, mainPage}) => {

    const [current, setCurrent] = useState(1);

    const objArray = Objects(tottalCount);

    return (
        <div className={style.GalleryObjects}>
            {objArray.slice(current*9-9,current*9).map((e,i)=> {
                return(
                <SingleObject
                    key={(current-1)*9+i+1}
                    id={i}
                    current={current}
                    tittle={e.tittle}
                    subTittle={e.subTittle}
                    address={e.address}
                    note={e.note}
                />);
            })}
            <Pagination
                style={mainPage ? {display: 'none'} : {}}
                className={style.Pagination}
                defaultCurrent={1}
                current={current}
                onChange={setCurrent}
                total={tottalCount}
            />
        </div>
    );
};

export default GalleryObjects;
