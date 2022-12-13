import React from "react";
import emojipedia from "../emojipedia";
import Card from "./props";

function createEmoji(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      emoji={contact.emoji}
      name={contact.name}
      meaning={contact.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEmoji)}

      <dl className="dictionary"></dl>
    </div>
  );
}

export default App;
