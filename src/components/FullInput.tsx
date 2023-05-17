import React, {ChangeEvent, useState} from 'react';

export const FullInput = () => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler =(e:ChangeEvent<HTMLInputElement>)=> {
        console.log(e.currentTarget.value)
        setTitle(e.currentTarget.value)

    }
    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={()=>{}}>+</button>
        </div>
    );
};

