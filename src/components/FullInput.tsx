import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";


type PropsInputType = {
    SetTitleInput: (title:string)=>void
}


export const FullInput = (props: PropsInputType) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler =(e:ChangeEvent<HTMLInputElement>)=> {
        setTitle(e.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        {props.SetTitleInput(title)}
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
            {/*<Button name={'add message'} callBack={onClickButtonHandler} />*/}
        </div>
    );
};

