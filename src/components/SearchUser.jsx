import React, { useEffect, useState } from "react";
import axios from "axios";
const SearchUser = () => {
  const [searchText, setSearchText] = useState("");
  const [profile, setProfile] = useState([]);
  const [matces,setMatches] = useState([])
  const API_KEY = "RGAPI-7d71cb29-3910-4258-ad2e-147f0e72d1cb";



  async function searchForPlayer(e) {
    let APICallString = `    https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${API_KEY}`;

    const res = await fetch(APICallString);
    const data = await res.json();
    setProfile(data);
    console.log(data);

async function getMatches(){
  const response = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${data.puuid}/ids?start=0&count=20&api_key=RGAPI-7d71cb29-3910-4258-ad2e-147f0e72d1cb`)
  const result =await response.json()
setMatches(result)
console.log(result)
}
getMatches()

// async function getMatch(){
//   const mathResponse = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${}?api_key=RGAPI-7d71cb29-3910-4258-ad2e-147f0e72d1cb`)
// }
  }

  useEffect(() => {
searchForPlayer()
  },[]);

  return (
    <div>
      <div className="search-container">
        <h1>Search a Player</h1>
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button onClick={(e) => searchForPlayer(e)}>Search for player</button>
       

       <div className="summoner-profile">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/13.4.1/img/profileicon/${profile.profileIconId}.png`}
          alt=""
          />
          <h1>{profile.name}</h1>
          <h3>{profile.summonerLevel}</h3>
       </div>

       <div>

       </div>
      </div>
    </div>
  );
};

export default SearchUser;
