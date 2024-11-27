import React, {useState} from 'react';

export const SearchBar = (props: any) => {
    const {value, setValue, onSearchHandler, btnText} = props;

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
                <button onClick={onSearchHandler}>{btnText ? btnText : 'Search'}</button>
            </form>
            <p>{value}</p>
        </>
    );
}

// * other version, with props and their types defined how I've done it in the past. Didn't test, assumption that it would still work
// export const SearchBar = (props: {value: string; setValue: (e:string)=>void; onSearchHandler: ()=>void}) => {
//     // const {value, setValue, onSearchHandler} = props;

//     const onChangeHandler = (e: any) => {
//         props.setValue(e.target.value);
//     }

//     const onSubmitHandler = (e: any) => {
//         e.preventDefault();
//     }

//     return (
//         <>
//             <form action="" onSubmit={onSubmitHandler}>
//                 <input onChange={onChangeHandler} type="text" value={props.value} />
//                 <button onClick={props.onSearchHandler}>Search</button>
//             </form>
//             <p>{props.value}</p>
//         </>
//     );
// }