import React from "react";
// import { v4 as uuidv4 } from "uuid";
let i = -1;
let j = -1;
export default function CardDetail({ pokemon1, pokemon2 }) {
  return (
    <div className="container flex justify-center items-center min-w-full">
      <div className="border-2 border-green-500 flex p-2">
        <div className="flex flex-col px-4 align-center">
          <p>Name</p>
          <p>Height</p>

          <p className="my-9">Sprite</p>

          <p>Hp</p>
          <p>Attack</p>
          <p>Defense</p>
          <p>S-Attack</p>
          <p>S-Defense</p>
          <p>Speed</p>
        </div>
        <div className="text-center">
          <p className="font-bold">{pokemon1.name}</p>
          <p
            style={{
              color: pokemon1.height > pokemon2.height ? "green" : "red"
            }}
          >
            {pokemon1.height}
          </p>
          <img
            src={pokemon1.sprites.front_default}
            alt=""
            className="w-24 h-24"
          />
          {pokemon1.stats.map((stat, idx) => {
            j = j + 1;
            if (j === 6) {
              j = 0;
            }
            return (
              <h4
                key={idx}
                style={{
                  color:
                    pokemon2.stats[j].base_stat < stat.base_stat
                      ? "green"
                      : "red"
                }}
              >
                {stat.base_stat}
              </h4>
            );
          })}
        </div>
        <div className="text-center">
          <p className="font-bold">{pokemon2.name}</p>
          <p
            style={{
              color: pokemon1.height < pokemon2.height ? "green" : "red"
            }}
          >
            {pokemon2.height}
          </p>
          <img
            src={pokemon2.sprites.front_default}
            alt=""
            className="w-24 h-24"
          />
          {pokemon2.stats.map((stat, idx) => {
            i = i + 1;
            if (i === 6) {
              i = 0;
            }
            return (
              <p
                key={idx}
                style={{
                  color:
                    pokemon1.stats[i].base_stat < stat.base_stat
                      ? "green"
                      : "red"
                }}
              >
                {stat.base_stat}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
