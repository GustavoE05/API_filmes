import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;

    h1 {
        text-align: start;
        margin: 1rem 0 0 1.2rem;
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
text-align: center; 
margin-bottom: 2rem;
margin-top: 1rem;
margin-left: 0.3rem;
img {
  width: 180px;
  margin-bottom: 2rem;
  margin: 0 auto; 
  border-radius: 5px;
}
span {
  font-weight: bold;
  font-size: 120%;
  text-align: center;
  width: 170px;
  margin-top: 0.5rem;
}
& {
  transition: all 0.3s;
}
&:hover {
  transform: scale(1.1);
}
`;

export const BannerContainer = styled.div`
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
`;

export const BannerImage = styled.img`
  border-radius: 5px;
  margin-left: 50px;
  width: 45%;
  height: auto;
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
`;

export const BannerText = styled.div`
  position: absolute;
  top: 0px;
  right: 5px; 
  color: #fff;
  z-index: 2;
  max-width: 50%; 
  
`;

export const BannerTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  margin-left: 1.3rem;
`;

export const BannerOverview = styled.p`
  font-size: 16px;
  max-width: 70%; 
  margin-left: 1.3rem;
`;

export const HeaderContainer = styled.header`
background-color: #282c34;
color: white;
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;

.search-container {
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    flex: 1;
    height: 30px;
    width: 300px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #282c34;
    border: 1px solid #fff;
    padding: 0 10px;
  }
}
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  margin-left: 1.2rem;
`;

export const Button = styled.button`
  background-color: #333;
  margin-top: 1rem;
  margin-left: 1.3rem;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;