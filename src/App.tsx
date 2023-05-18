import React, {useState} from 'react';
import './App.css';
import {Map} from "./components/Map";
import {Button} from "./components/Button";
import FilterComponent from "./components/FilterComponent";
import {FullInput} from "./components/FullInput";


export type topCarsType = {
    manufacturer: string,
    model: string
}
const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]
export type FilterType = 'All' | 'Dollars' | 'RUBLS'
export type MoneyType = {
    banknots: string,
    value: number,
    number: string

}


function App() {

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const [money, setMoney] = useState<MoneyType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('All')

    let curentMoney: MoneyType[] = money
    if (filter === 'RUBLS') {
        curentMoney = money.filter(el => el.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        curentMoney = money.filter(el => el.banknots === 'Dollars')
    }

    const FilteredMoney = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    let [a, setA] = useState<number>(1)
    const AddOne = () => {
        setA(a + 1)
    }
    const SetZero = () => {
        setA(0)
    }

    const MyButton = (text: string) => {
        alert(text)
    }

    const SetTitleInput = (title:string) => {
        let NewMessage = {message: title}
        setMessage([NewMessage, ...message])
    }

    return (
        <div className="App">
            <Map cars={topCars}/>
            <h1>{a}</h1>
            <Button name={'+1'} callBack={() => AddOne()}/>
            <Button name={'0'} callBack={() => SetZero()}/>
            <Button name={'Hello, Im Button'} callBack={() => MyButton('YOYOYO')}/>

            <FilterComponent
                curentMoney={curentMoney}
                FilteredMoney={FilteredMoney}
            />


            {/*<ul>*/}
            {/*    {curentMoney.map((el, index)=>{*/}
            {/*        return (*/}
            {/*            <li key={index}>*/}
            {/*                <span>{el.value} </span>*/}
            {/*                <span>{el.banknots} </span>*/}
            {/*                <span>{el.number} </span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<div>*/}
            {/*    /!*<Button name={'All'} callBack={()=>FilteredMoney('All')} />*!/*/}
            {/*    /!*<Button name={'Dollars'} callBack={()=>FilteredMoney('Dollars')} />*!/*/}
            {/*    /!*<Button name={'RUBLS'} callBack={()=>FilteredMoney('RUBLS')} />*!/*/}
            {/*    <button onClick={()=>FilteredMoney('All')}>All</button>*/}
            {/*    <button onClick={()=>FilteredMoney('Dollars')}>Dollars</button>*/}
            {/*    <button onClick={()=>FilteredMoney('RUBLS')}>RUBLS</button>*/}
            {/*</div>*/}

            {/*--------------------------*/}

            <FullInput SetTitleInput={SetTitleInput}/>

            {/*<div>*/}
            {/*    <input />*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}



        </div>
    );
}

export default App;





