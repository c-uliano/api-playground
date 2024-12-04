"use client";
import styles from "./page.module.scss";
import React, { useState, useEffect } from "react";
import { SearchBar } from "@/components/SearchBar/SearchBar";

// * had to do this, defining the types of each property, because typescript throws an error: Property 'title' does not exist on type 'never'
type ItemType = {
    title: string;
    id: number;
    authors: string[];
    copyright: boolean;
    download_count: number;
    // other properties
};
export default function Home() {
    const [searchResult, setSearchResult] = useState<ItemType[]>([]);
    const [value, setValue] = useState('');
    const [query, setQuery] = useState('');

    //// this should probably be in a useEffect, it kept running in the console non-stop
    // * https://gutendex.com/ for documentation

    const written_by: string[] = [];

    useEffect(() => {
        // if there's nothing saved in value, don't fetch. This stopped the random data that would be pulled and displayed
        if (query) {
            fetch(`https://gutendex.com/books?search=${query}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setSearchResult(data.results);
                    console.log('LOOK AT THESE RESULTS', searchResult);
                    data.results.map((each: any) => {
                        written_by.push(each.authors)
                    });
                    // TODO: I can't figure out how to get the author's name
                    // ! this isn't what's showing in the console...
                    console.log('ONLY LOOK HERE', written_by);
                    // console.log(written_by.map(author => author));
                })
                .catch((error) => {
                    console.log("Error:", error);
                });
        }
    }, [query]); // this needs to run every time the search value changes

    const onSearch = () => {
        // when the button is clicked the searched term needs to be updated in the api query
        // on click, update value with new value
        // const newValue = value;
        // setValue(newValue); // this doesn't work, I'm getting some weirdness, probably because setValue is being used in the SearchBar input's onChange as well?

        // okay, so the search term and the search query should be 2 different pieces.
        // take the search value and update the query value
        setQuery(value);
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>API Playground</h1>
                <h2>Test 1</h2>
                <p>A very basic api. Search an author or title to find book info</p>

                <h4>Phase Two</h4>
                <p><code>input</code> to capture a search term</p>
                <SearchBar btnText="Search Now" value={value} setValue={setValue} onSearchHandler={onSearch} />

                {/* Display the search results TODO update to display author name */}
                <ul>
                    {searchResult.map((book) => (
                        <li key={book.id}>{book.download_count}</li>
                    ))}
                </ul>
                <ul>
                    {written_by.map(author => (
                        <li>{author}</li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
