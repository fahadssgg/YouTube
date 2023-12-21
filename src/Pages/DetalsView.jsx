import React from "react";
import { useParams } from "react-router-dom";
import Booksinfo from "./Data";

export default function DetalsView() {
  const { id } = useParams();

  const book = Booksinfo.find((book) => book.id == id);

  return (
    <>
      <div key={id}>
        <h1>{book.title}</h1>
        <p>{book.summary}</p>
      </div>
    </>
  );
}
