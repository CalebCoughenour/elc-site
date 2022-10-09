import styled from "styled-components";



export const CardLinkSec = styled.div`
  padding: 150px 0;
  background-color: #aeaeae91;
  @media screen and (max-width: 1000px) {
    padding: 120px 0;
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, .6);
`;

export const CardText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Georgia, serif;
  color: #fff;


  @media screen and (min-width: 1200px) {
    &:hover {
      transition: color .3s ease-in-out;
      color: lightgray;
    } 

  
`;

export const CardTitle =  styled.h1`
  font-size: 3em;
  font-weight: 900;

  @media screen and (max-width: 1200px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 285px) {
    font-size: 1.5em;
  }
`;

export const CardButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: 1px solid white;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: #fff;
@media screen and (max-width: 960px) {
  width: 100%;
}

@media screen and (max-width: 335px){
  margin-top: 10px;
}
`;

export const YTVideo = styled.video`

`;