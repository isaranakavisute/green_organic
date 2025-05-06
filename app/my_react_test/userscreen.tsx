'use client'; 

//import logo from "./images/new_logo.png";
import Image from '@/node_modules/next/image';
//import Link from '@/node_modules/next/link';
//import { FormEvent, useEffect } from 'react';
import useRouter from '@/node_modules/next/router';
//import useRouter from '@/node_modules/next/navigator';
import axios from 'axios';
import React, { FormEvent } from "react";
import tsubakimoto_logo from "./images/tsubakimoto_logo.svg";
import Link from "next/link";



export default function UserScreen(this: any) {

  const [search_str, set_search_str] = React.useState("");

  const books = [
    { author: "Marcel Proust", title: "In Search of Lost Time", pageNumber: 123 },
    { author: "James Joyce", title: "Ulysses", pageNumber: 123 },
    { author: "Miguel de Cervantes", title: "Quixote", pageNumber: 123 },
    { author: "Herman Melville", title: "Moby Dick", pageNumber: 123 },
    { author: "William Shakespeare", title: "Hamlet", pageNumber: 123 },
  ];

  const filteredBooks = books.filter(
    ({ author, title }) =>
      author.toLowerCase().includes(search_str.toLowerCase()) ||
      title.toLowerCase().includes(search_str.toLowerCase())
    );


  return (
    <div className="flex flex-col w-full h-[100vh] bg-green-200 justify-center items-center">
    
      <div className="text-black">Filter your query</div>
      <input type="text" 
             name="str" 
             placeholder="Please enter your filer" 
             className="text-black border-solid border"
             //onChange= { set_search_str( this.str.value ) }  
             onChange={({ target }) => set_search_str(target.value)}
      />
      <div className="text-black border-solid border">
       <ul>
        {filteredBooks.map(({ author, title }) => (
          <li key={title}>
            Title: <strong>{title}</strong> by Author: {author}
          </li>
        ))}
       </ul>
      </div>
    
    </div>
  );

};
