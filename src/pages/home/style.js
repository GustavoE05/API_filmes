import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;

    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
text-align: center; /* Alinha o texto ao centro */
img {
  width: 180px;
  margin-bottom: 2rem;
  margin: 0 auto; /* Centraliza horizontalmente */
}
span {
  font-weight: bold;
  font-size: 120%;
  text-align: center;
}
a {
  transition: all 0.3s;
}
a:hover {
  transform: scale(1.1);
}
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 15px;
    color: #212121;
    background-color: #ffffff;
    font-weight: 1000;
    font-size: 12 px;
    cursor: pointer;
    transition: all 250ms;
`;


export const BannerContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  opacity: 0.8;
  transition: opacity 0.5s; 
`;

export const BannerGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); 
`;

export const BannerText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  z-index: 2;
`;

export const BannerTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const BannerOverview = styled.p`
  font-size: 16px;
`;

