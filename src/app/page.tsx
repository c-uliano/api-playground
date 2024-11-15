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

    //// this should probably be in a useEffect, it kept running in the console non-stop
    // * https://gutendex.com/ for documentation
    useEffect(() => {
        fetch("https://gutendex.com/books?search=alice%20in%20wonderland") // TODO: this needs updated, a variable at the end, for whatever is typed in searchbar
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
                <h4>Phase One</h4>
                <p>This list is showing the results of a search for "Alice In Wonderland"</p>
                <ul>
                    {searchResult.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
                <h4>Phase Two</h4>
                <p><code>input</code> to capture a search term</p>
                <SearchBar />
            </main>
        </div>
    );
}
