import React from "react";
import { Link } from "react-router-dom";
const Sum = ({ id, name, tags, stats, info }) => {
  return (
    <Link to={`/${name}`}>
    <div className="champion">
      <div className="champion-content">
        <img
          // src={`https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/${name}.png`}
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`}
          alt=""
        />
        <h2 className="champion-name">{name}</h2>
        <div className="champion-info">
            <h4>Roles</h4>

          {tags.map((tag) => (
            <div className="tags">
              
              <p>{tag}</p>
            </div>
          ))}
          <h4 className="difficulty" style={{color:info.difficulty <= 4 ? '#588157' : info.difficulty <= 7 ?'#fcbf49' :'#ef233c'} }>Difficulty: {info.difficulty}</h4>
       
        </div>
      </div>
    </div>
    </Link>

  );
};

export default Sum;
