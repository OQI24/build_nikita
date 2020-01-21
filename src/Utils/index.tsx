export const Objects = (N:number) => {
    let objs = [];
    for (let n = 0; n < N; n++) {
        objs.push({
            tittle: '1 комнатная квартира',
            subTittle: null,
            address: 'Жулебино',
            note: 'Светлая, ухоженная квартира от собственника. Пешая доступность, 12мин от метро.'
        });
    }
    return (objs);
};
