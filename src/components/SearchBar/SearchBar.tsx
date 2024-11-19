import React, {useState} from 'react';

export const SearchBar = (props: any) => {
    const {value, setValue, onSearchClick} = props;

    const onChangeHandler = (e: any) => {
        setValue(e.target.value);
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <>
            <form action="" onSubmit={onSubmit}>
                <input onChange={onChangeHandler} type="text" value={value} />
                <button type='button' onClick={onSearchClick}>Search</button>
            </form>
            <p>{value}</p>
        </>
    );
}