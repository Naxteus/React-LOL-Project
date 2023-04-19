import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GiHealthNormal } from "react-icons/gi";
import { GiAbdominalArmor } from "react-icons/gi";
import { GiDrippingSword } from "react-icons/gi";
import { GiBroadsword } from "react-icons/gi";
import { GiRun } from "react-icons/gi";

const SingleHero = () => {
  const [champion, setChampion] = useState([]);

  const params = useParams();
  useEffect(() => {
    const getHero = async () => {
      try {
        const res = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion/${params.name}.json`
        );
        const data = await res.json();
        const heroesArray = Object.values(data.data);
        setChampion(heroesArray);
        console.log(heroesArray);
      } catch (error) {
        console.log(error);
      }
    };
    getHero();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="single-container">
      {champion.map((item) => (
        <div className="single-box">
          <div className="single-image">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.name}_1.jpg`}
              alt={item.name}
            />
          </div>

          <div className="single-info">
            <div className="single-header">
              <h1>{item.name}</h1>
              <h3>{item.title}</h3>
              <p>{item.lore}</p>
            </div>

            <div className="info-container">
              <h2>{item.name}'s Abilities</h2>

              <div className="keys">
                <p>Q</p>
                <p>W</p>
                <p>E</p>
                <p>R</p>
              </div>
              <div className="spells">
                {item.spells.map((spell) => (
                  <div className="spells-info">
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/${spell.id}.png`}
                      alt=""
                    />
                    <p>{spell.name}</p>
                  </div>
                ))}

              </div>
              <div className="passive">
                <h1>{item.name}'s Passive</h1>
                <img src={`http://ddragon.leagueoflegends.com/cdn/13.4.1/img/passive/${item.name}_P.png`} alt="" />
                <h5>{item.passive.name}</h5>
                <p>{item.passive.description}</p>
              </div>
            </div>
            <div className="stats">
              <div className="stats-info">
                <h1>{item.name}'s Initial Stats</h1>

                <p>
                  <GiHealthNormal /> Health: {item.stats.hp}
                </p>
                <p>
                  <GiAbdominalArmor /> Armor: {item.stats.armor}
                </p>
                <p>
                  <GiBroadsword /> Attack Damage: {item.stats.attackdamage}
                </p>
                <p>
                  {" "}
                  <GiDrippingSword />
                  AttackSpeed: {item.stats.attackspeed}
                </p>
                <p>
                  <GiRun /> Movespeed: {item.stats.movespeed}
                </p>
                <p className="partype">{item.partype}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="skins-header">
            <h1>{item.name}'s Skins</h1>
            <h4>{item.name} has {item.skins.length} skins</h4>

            </div>
            <div className="skins-container">

              {item.skins.map((skin) => (
                
                <div className="skin">
                  
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.name}_${skin.num}.jpg`}
                    alt={skin.name}
                  />
                  <h3>{skin.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleHero;
