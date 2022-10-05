import React from "react";
import styled from "styled-components";

const BackgroundBlock = styled.div`
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('./pokemonlogo.png');
`;

function Background(){
  return(
    <BackgroundBlock></BackgroundBlock>
  );
}

export default Background;