import {useState, useEffect} from 'react';
import axios from 'axios';

function PokemonList(){
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20');
 
  return(

 );
}

export default PokemonList;