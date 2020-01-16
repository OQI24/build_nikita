import * as React from 'react';
import GalleryObjects from "../../components/GalleryObjects";

const style = require('./style.module.css');

type Props = {
    props?: any;
};

const Objects: React.FC<Props> = ({props}) => {
    return (
        <div className={style.Objects}>
            <GalleryObjects tottalCount={150}/>
        </div>
    );
};

export default Objects;
