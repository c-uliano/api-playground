"use client";
import styles from "./page.module.scss";
import React, { useState, useEffect } from "react";
import { SearchBar } from "@/components/SearchBar/SearchBar";

// * had to do this, defining the types of each property, because typescript throws an error: Property 'title' does not exist on type 'never'
type ItemType = {
    title: string;
    id: number;
    // other properties
};
export default function Home() {
    const [searchResult, setSearchResult] = useState<ItemType[]>([]);
    const [value, setValue] = useState('');

    //// this should probably be in a useEffect, it kept running in the console non-stop
    // * https://gutendex.com/ for documentation
    useEffect(() => {
        fetch(`https://gutendex.com/books?search=${value}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setSearchResult(data.results);
            console.log(data.results);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    }, []);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>API Playground</h1>
                <h2>Test 1</h2>
                <p>A very basic api. Search an author or title to find book info</p>

                <h4>Phase Two</h4>
                <p><code>input</code> to capture a search term</p>
                <SearchBar value={value} setValue={setValue} />

                {/* Display the search results */}
                {/* <ul>
                    {searchResult.map((book) => (
                        <li key={book.id}>{book.title}</li>
                    ))}
                </ul> */}
            </main>
        </div>
    );
}
