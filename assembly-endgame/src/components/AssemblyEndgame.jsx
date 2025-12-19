import { useState } from "react";

export const AssemblyEndgame = () => {
  const words = [
    "chair",
    "hat",
    "umbrella",
    "spoon",
    "car",
    "memes",
    "guitar",
    "money",
    "horses",
    "honey",
  ];

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetter, setGuessedLetter] = useState([]);

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
      backgroundColor: "#0396c2ff",
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
    {
      name: "Assembly",
      backgroundColor: "#140ca5ff",
      color: "#F9F4DA",
    },
  ];

  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  function startGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetter([]);
  }

  //check for wrong guessed count
  const wrongGuessCount = guessedLetter.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  //return true if game won using every
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetter.includes(letter));

  //check for game lost
  const isGameLost = wrongGuessCount >= languages.length - 1;

  const isGameOver = isGameWon || isGameLost;
  //add the guessed letter to the array
  function addGuessedLetter(letter) {
    setGuessedLetter((prevLetter) =>
      prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
    );
  }

  //return language chips
  const langElement = languages.map((lang, index) => {
    const isLangLost = index < wrongGuessCount;
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span
        className={`chip ${isLangLost ? "lost" : ""}`}
        style={styles}
        key={lang.name}
      >
        {lang.name}
      </span>
    );
  });

  //display guessed letter if it is correct
  const letterElement = currentWord.split("").map((letter, index) => {
    const revealLetter = isGameLost || guessedLetter.includes(letter);
    return (
      <span
        key={index}
        className={
          isGameLost && !guessedLetter.includes(letter) && "missed-letter"
        }
      >
        {revealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  // return keyboard element with the correct styles based on guesses
  const keyboardElement = alphabets.split("").map((letter) => {
    const isGuessed = guessedLetter.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    return (
      <button
        className={isCorrect ? "correct" : isWrong ? "wrong" : ""}
        disabled={isGameOver}
        onClick={() => addGuessedLetter(letter)}
        key={letter}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className={`game-status ${isGameWon ? "won" : "lost"} `}>
        {isGameOver ? (
          isGameWon ? (
            <>
              <h2>You Win🎉</h2>
              <p>Good Job🎉</p>
            </>
          ) : (
            <>
              <h2>Game Over!!</h2>
              <p>You lose! Better start learning Assembly!</p>
            </>
          )
        ) : null}
      </section>
      <section className="lang-chips">{langElement}</section>
      <section className="word">{letterElement}</section>
      <section className="keyboard">{keyboardElement}</section>
      {isGameOver && (
        <button onClick={startGame} className="start-button">
          New Game
        </button>
      )}
    </main>
  );
};
