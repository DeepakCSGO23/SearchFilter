import { useEffect, useState } from "react";
function App() {
  /* React state updates are asynchronous meaning when i call the setSearchName, the state update may not be applied immediately. So, when i immediately use searchName.toLowercase() on the next
  Line , it might not reflect the updated value */
  const [searchName, setSearchName] = useState("");
  const names = [
    "Aaran",
    "Aaren",
    "Aarez",
    "Aarman",
    "Aaron",
    "Aaron-James",
    "Aarron",
    "Aaryan",
    "Aaryn",
    "Aayan",
    "Aazaan",
    "Abaan",
    "Abbas",
    "Abdallah",
    "Abdalroof",
    "Abdihakim",
    "Abdirahman",
    "Abdisalam",
    "Abdul",
    "Abdul-Aziz",
    "Abdulbasir",
    "Abdulkadir",
    "Brydon",
    "Brydon-Craig",
    "Bryn",
    "Brynmor",
    "Bryson",
    "Buddy",
    "Caedyn",
    "Shaarvin",
    "Shay",
    "Shayaan",
    "Shayan",
    "Shaye",
    "Shayne",
    "Shazil",
    "Shea",
    "Silas",
    "Simon",
    "Sinai",
    "Skye",
    "Sofian",
    "Sohaib",
    "Sohail",
    "Steven-lee",
    "Stevie",
    "Stewart",
    "Stewarty",
    "Strachan",
    "Struan",
    "Stuart",
    "Su",
    "Subhaan",
    "Sudais",
    "Suheyb",
    "Suilven",
    "Sukhi",
    "Sukhpal",
    "Sukhvir",
    "Tai",
    "Tait",
    "Taiwo",
    "Talha",
    "Taliesin",
    "Talon",
    "Talorcan",
    "Tamar",
    "Tamiem",
    "Tammam",
    "Tanay",
    "Tane",
    "Tanner",
    "Tanvir",
    "Tanzeel",
    "Taonga",
    "Tarik",
    "Tariq-Jay",
    "Tate",
    "Taylan",
    "Zhi",
    "Zhong",
    "Zhuo",
    "Zi",
    "Zidane",
    "Zijie",
    "Zinedine",
    "Zion",
    "Zishan",
    "Ziya",
    "Ziyaan",
    "Zohaib",
    "Zohair",
    "Zoubaeir",
    "Zubair",
    "Zubayr",
    "Zuriel",
  ];
  const [filteredName, setFilteredName] = useState(names);
  // State change = Component Re-render
  function handleSearchInputChange(e) {
    const inputValue = e.target.value.toLowerCase();
    setSearchName(e.target.value);
    // We are immediately using the searchName state after updating its state so the searchname is still empty
    setFilteredName(
      names.filter((name) => name.toLowerCase().includes(inputValue))
    );
  }
  return (
    <div className="h-[400vh] w-screen bg-neutral-500 text-2xl font-mono text-black flex flex-col items-center">
      <input
        className="rounded-2xl p-2"
        type="text"
        value={searchName}
        onChange={handleSearchInputChange}
      />
      {filteredName.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </div>
  );
}

export default App;
