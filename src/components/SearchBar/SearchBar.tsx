import React, {useState} from 'react';

export const SearchBar = () => {
    const [value, setValue] = useState('');

    const onChangeHandler = (e: any) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h3>SearchBar coming soon</h3>
            <form action="">
                <input onChange={onChangeHandler} type="text" value={value} />
            </form>
            <p>{value}</p>
        </>
    );
}