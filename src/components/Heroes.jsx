import { useEffect, useState } from "react";

import Sum from "./Sum";

export default function App() {
  const [champions, setChampions] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const getHeroes = async () => {
      try {
        const res = await fetch(
          "https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"
        );
        const data = await res.json();
        const heroesArray = Object.values(data.data);
        setChampions(heroesArray);
      } catch (error) {
        console.log(error);
      }
    };
    getHeroes();
  }, []);
  function handleInputChange(e){
    e.preventDefault()
    setSearchText(e.target.value)
  }
  const filteredHero = champions.filter((champion) => {
    return champion.name
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase());
  });


  return (
    <div className="cover-container">
      
    <div className="container">

      <input value={searchText} onChange={handleInputChange} type="text" placeholder="Search Hero" />
    


      <div className="champions-container">
        {filteredHero.map((champion) => (
          <Sum key={champion.key} {...champion} />
        ))}
      </div>
    </div>
    </div>

  );
  
}
