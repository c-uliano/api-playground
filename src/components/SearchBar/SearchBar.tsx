import React, {useState} from 'react';

export const SearchBar = (props: any) => {
    const {value, setValue} = props;

    const onChangeHandler = (e: any) => {
        setValue(e.target.value);
    }

    return (
        <>
            <form action="">
                <input onChange={onChangeHandler} type="text" value={value} />
            </form>
            <p>{value}</p>
        </>
    );
}