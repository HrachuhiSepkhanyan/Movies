import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Item = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  & > div {
    margin: 3px;
  }
`;
const Description = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;
const FilmImage = styled.div`
  margin: 5px;
`;
export const Style = {
  Description,
  FilmImage,
  Container,
  Item,
};
