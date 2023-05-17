import React from 'react';
import {FilterType, MoneyType} from "../App";
import { Button } from './Button';

type PropsFilterComponent = {
    curentMoney: MoneyType[],
    FilteredMoney: (nameButton:FilterType)=>void

}

const FilterComponent = (props:PropsFilterComponent ) => {
    return (
        <div>
            <ul>
                {props.curentMoney.map((el, index)=>{
                    return (
                        <li key={index}>
                            <span>{el.value} </span>
                            <span>{el.banknots} </span>
                            <span>{el.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button name={'All'} callBack={()=>props.FilteredMoney('All')} />
                <Button name={'Dollars'} callBack={()=>props.FilteredMoney('Dollars')} />
                <Button name={'RUBLS'} callBack={()=>props.FilteredMoney('RUBLS')} />
                {/*<button onClick={()=>props.FilteredMoney('All')}>All</button>*/}
                {/*<button onClick={()=>props.FilteredMoney('Dollars')}>Dollars</button>*/}
                {/*<button onClick={()=>props.FilteredMoney('RUBLS')}>RUBLS</button>*/}
            </div>
        </div>
    );
};

export default FilterComponent;