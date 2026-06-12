import { useState } from "react";

const languages = [
  { name: "JavaScript", founder: "Brendan Eich" },
  { name: "Python", founder: "Guido van Rossum" },
  { name: "Java", founder: "James Gosling" },
  { name: "C++", founder: "Bjarne Stroustrup" },
  { name: "Ruby", founder: "Yukihiro Matsumoto" },
];

export default function LanguageList() {
  const handleClick = (lang) => {
    alert(`${lang.name} - Founder: ${lang.founder}`);
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>GeeksForGeeks</h1>
      <h2 style={styles.subtitle}>Rendering List using map method</h2>

      {languages.map((lang, index) => (
        <div
          key={index}
          style={styles.item}
          onClick={() => handleClick(lang)}
        >
          <strong>{lang.name}</strong> - Founder: {lang.founder}
        </div>
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "40px auto",
    padding: "0 20px",
    textAlign: "center",
  },
  title: {
    color: "#2d8a2d",
    fontSize: "2rem",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#111",
  },
  item: {
    backgroundColor: "#f0f0f0",
    padding: "14px 20px",
    marginBottom: "8px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    color: "#222",
    transition: "background-color 0.2s",
  },
};