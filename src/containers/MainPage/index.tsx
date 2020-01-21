import * as React from 'react';
import MainOffer from "../../components/MainOffer";
import GalleryObjects from "../../components/GalleryObjects";
import Button from '@material-ui/core/Button'
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// @ts-ignore
import {NavLink} from 'react-router-dom';

const style = require('./style.module.scss');

type Props = {
    props?: any;
};

const MainPage: React.FC<Props> = ({props}) => {
    return (
        <div className={style.MainPage}>
            <MainOffer/>
            <div className={style.simpleGallery}>
                <GalleryObjects tottalCount={3} mainPage={true}/>

                    <Button variant={'outlined'} color={'default'}>
                        <NavLink style={{textDecoration: 'none', color: 'Black', width: '100%'}} to={'/objects'}>
                            {/*<MoreHorizIcon/>*/}
                        </NavLink>
                    </Button>

            </div>
        </div>
    );
};

export default MainPage;
