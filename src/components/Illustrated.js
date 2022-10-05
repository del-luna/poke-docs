import React, {useState, useEffect} from "react";
import { PokemonContext } from "../hooks/PokemonContext.js";
import styled from "styled-components";
import axios from "axios";

const Base = styled.div`
  margin-top: 24px;
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.21);
  border-radius: 12px;
  & + & {
    margin-top: 18px;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Image = styled.img``;

const Name = styled.p`
  margin: 0;
  padding: 0 0 0 12px;
  flex: 1 1 100%;
  color: #374151;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
`;

const Index = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  right: 16px;
  bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #d1d5db;
`;


function Illustrated(){

  const [pokemons, setPokemons] = useState([]);

  axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((response)=>{ setPokemons(response.data.results)})
    .catch((e)=>{
      console.log(e)
    })
  return(
    <Base>
      <List>
        {
          pokemons.map((pokemon, i)=>{
            const pokemonIndex = 
            pokemon.url.split("/")[pokemon.url.split("/").length - 2]
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
            return(
              <ListItem>
                <Image src={image}/>
                <Name>{pokemon.name}</Name>
                <Index>{pokemonIndex}</Index>
              </ListItem>
            );
          })
        }
      </List>
    </Base>
  );
}

export default Illustrated;