import React, {ChangeEvent, useState} from 'react';


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
        </div>
    );
};

