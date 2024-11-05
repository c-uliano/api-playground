'use client'
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";

export default function Home() {
  const [city, setCity] = useState([]);
  
  // TODO this should probably be in a useEffect, it kept running in the console non-stop
  fetch('https://goweather.herokuapp.com/weather/cleveland') // TODO: this needs updated, a variable at the end, for whatever city is entered to search
  .then(response => {
    return response.json();  
  })
  .then(data => {
    console.log(data);  
    setCity(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>API Playground</h1>
        <h2>Test 1</h2>
        <p>A very basic weather api. Search a city to see the weather and forecast</p>
        <p>Repo can be found <a href="https://github.com/robertoduessmann/weather-api" target="_blank">here</a></p>
      </main>



      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
