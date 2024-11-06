'use client'
import Image from "next/image";
import styles from "./page.module.scss";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [searchResult, setSearchResult] = useState([]);
  
  // //TODO this should probably be in a useEffect, it kept running in the console non-stop
  // * https://gutendex.com/ for documentation
  useEffect(() => {
    fetch('https://gutendex.com/books?search=alice%20in%20wonderland') // TODO: this needs updated, a variable at the end, for whatever is typed in searchbar
    .then(response => {
      return response.json();  
    })
    .then(data => {
      setSearchResult(data.results);
      console.log(data.results);
    })
    .catch(error => {
      console.log('Error:', error);
    });
  }, 
  []);
  

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>API Playground</h1>
        <h2>Test 1</h2>
        <p>A very basic api. Search an author or title to find book info</p>
        <ul>
        {searchResult.map(item => (<li>{item.title}</li>))}
        </ul>


      </main>
    </div>
  );
}
