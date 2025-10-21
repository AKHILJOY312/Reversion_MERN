import { useState, useEffect } from "react";
import "./App.css";

//incrementing counter in React;

//how to get that structer first . make is simple

function Profile({ name, imageId, profession, awards, discovered }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <div className="avatr-placeholder" title={name}></div>
      <ul>
        <li>
          <b>profestion:</b>
          {profession}
        </li>
        <li>
          <b>Awardes:{awards.length}</b>
          ({awards.join(" ,")})
        </li>
        <li>
          <b>Discovered:</b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="physicist and chemist"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovered="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="geochemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
