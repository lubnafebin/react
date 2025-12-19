import { useState } from "react";

export const AssemblyEndgame = () => {
  const [currentWord, setCurrentWord] = useState("react");

  const languages = [
    {
      name: "HTML",
      backgroundColor: "#E2680F",
      color: "#F9F4DA",
    },
    {
      name: "CSS",
      backgroundColor: "#328AF1",
      color: "#F9F4DA",
    },
    {
      name: "Javascript",
      backgroundColor: "#F4EB13",
      color: "#1E1E1E",
    },
    {
      name: "React",
      backgroundColor: "#2ED3E9",
      color: "#1E1E1E",
    },
    {
      name: "TypeScript",
      backgroundColor: "#E2680F",
      color: "#F9F4DA",
    },
    {
      name: "Nodejs",
      backgroundColor: "#28bb15ff",
      color: "#F9F4DA",
    },
    {
      name: "Python",
      backgroundColor: "#e2c90fff",
      color: "#1E1E1E",
    },
    {
      name: "Ruby",
      backgroundColor: "#e22f0fff",
      color: "#F9F4DA",
    },
  ];

  const langElement = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span className="chip" style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElement = currentWord.split("").map((letter, index) => (
    <span key={index} className="letter">
      {letter.toUpperCase()}
    </span>
  ));

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You Win🎉</h2>
        <p>Good Job🎉</p>
      </section>
      <section className="lang-chips">{langElement}</section>
      <section className="word">{letterElement}</section>
    </main>
  );
};
