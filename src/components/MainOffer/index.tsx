import * as React from 'react';

const style = require('./style.module.css');

type Props = {
    props?: any;
};

const MainOffer: React.FC<Props> = ({props}) => {
    return (
        <div className={style.MainOffer}>
            <div className={style.text}>
                <h1> Настало время <span style={{color: 'lightpink'}}>выбрать</span>.. </h1>
                <h4>„Инвестирование в недвижимость через бизнес дает сразу четыре дохода: рентный доход, амортизация, повышение стоимости и налоговые преимущества.“</h4>
                <h4>„Инвестирование в недвижимость через бизнес дает сразу четыре дохода: рентный доход, амортизация, повышение стоимости и налоговые преимущества.“</h4>
                <h4>„Инвестирование в недвижимость через бизнес дает сразу четыре дохода: рентный доход, амортизация, повышение стоимости и налоговые преимущества.“</h4>
            </div>
        </div>
    );
};

export default MainOffer;
