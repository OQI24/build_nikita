import * as React from 'react';
import MainOffer from "../../components/MainOffer";
import GalleryObjects from "../../components/GalleryObjects";

const style = require('./style.module.css');

type Props = {
    props?: any;
};

const MainPage: React.FC<Props> = ({props}) => {
    return (
        <div className={style.MainPage}>
            <MainOffer/>
            <GalleryObjects tottalCount={3} mainPage={true}/>
        </div>
    );
};

export default MainPage;
