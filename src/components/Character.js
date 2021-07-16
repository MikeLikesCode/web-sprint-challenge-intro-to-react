import React, { useState } from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
  width: 60%;
  background-color: rgba(0, 0, 0, 0.25);
  margin: 1.5vh;
  padding: 1vh 35px;
  border-radius: 3px;
  box-shadow: 1px 1px 15px #2e2e2e;

  &:hover {
    cursor: pointer;
  }
`;

const PreviewContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.25rem;
  }

  p:last-child {
    background-color: gray;
    padding: 2px 20px;
    border-radius: 50px;
  }
`;

const DetailContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Character(props) {
  const { name, birth_year, gender, height, mass } = props.data;

  const [cardToggled, setCardToggled] = useState(false);

  const toggleCard = () => {
    cardToggled !== true ? setCardToggled(true) : setCardToggled(false);
  };

  return (
    <CharacterCard onClick={() => toggleCard()}>
      <PreviewContent>
        <p>{name}</p>
        <p>{birth_year}</p>
      </PreviewContent>
      {cardToggled ? (
        <DetailContent>
          <p> Gender: {gender}</p>
          <p> Height: {height}</p>
          <p> Mass: {mass}</p>
        </DetailContent>
      ) : null}
    </CharacterCard>
  );
}

export default Character;
