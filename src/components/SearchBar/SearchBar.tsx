import React, {useState} from 'react';

export const SearchBar = (props: any) => {
    const {value, setValue, onSearchHandler} = props;

    const onChangeHandler = (e: any) => {
        setValue(e.target.value);
    }

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
    }

    return (
        <>
            <form action="" onSubmit={onSubmitHandler}>
                <input onChange={onChangeHandler} type="text" value={value} />
                <button onClick={onSearchHandler}>Search</button>
            </form>
            <p>{value}</p>
        </>
    );
}