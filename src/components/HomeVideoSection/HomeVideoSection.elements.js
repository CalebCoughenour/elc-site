import styled from "styled-components";

export const VideoSec = styled.div`
  padding: 50px 0px;
  background: #383232;
`;

export const YoutubeVideo = styled.iframe`
height: 415px;
width: 660px;

@media screen and (max-width: 800px) {
  height: 300px;
  width: 500px;
}

@media screen and (max-width: 550px) {
  height: 200px;
  width: 400px;
}

@media screen and (max-width: 456px) {
  height: 150px;
  width: 330px;
}

@media screen and (max-width: 370px) {
  height: 130px;
  width: 280px;
}

@media screen and (max-width: 325px) {
  height: 100px;
  width: 235px;
}
`;

export const VideoButton = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: 1px solid white;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: #fff;
  width: 30%;


  @media screen and (max-width: 960px) {
  width: 100%;
  }
`;

export const VideoTitle = styled.h1`
  margin-top:20px;
  margin-bottom: 20px;
  color: #DCDCDE;
`;