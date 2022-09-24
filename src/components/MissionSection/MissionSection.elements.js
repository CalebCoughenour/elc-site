import styled from "styled-components";

export const MissionSec = styled.div`
  padding: 500px 0px;
  background: #383232;
`;

export const MissionTitle = styled.h1`
  position: relative;
  overflow: hidden; 
  font-size: 50px;
  margin-left: 30px;
  color: #DCDCDE;

  &:after {
    display: inline-block;
    content: "";
    height: 2px;
    background: #DCDCDE;
    position: absolute;
    width: 80%;
    top: 50%;
    margin-top: -2px;
    margin-left: 10px;
  }
`;

export const MissionText = styled.h1`
  color: #DCDCDE;
  font-size: 50px;
  font-weight: bold;
`;

export const MissionSecVideo = styled.video`
margin-top: 10px;
margin-right: 20px;
float: right;
background: #dcdcdc;
width: 50%;
height: 50%;
`;

export const MissionTextSec = styled.div`
  padding: 100px 0px;
`;

export const AboutSec = styled.div`
  padding: 100px 0;
  background-color: #dcdcdc;
`;

export const Title = styled.h1`
  font-family: Brush Script MT;
  font-size: 50px;
  text-align: center;
`

export const BannerText = styled.h1`
  margin: auto; 
  padding: 12px 10px;
  background-color: rgba(0, 0, 0, .9);
  color: white;
  width: 40%;
  height: 20%;
  flex-wrap: wrap;
  flex-direction: column;
  @media screen and (max-width: 993px) {
    height: 30%;
  }
  @media screen and (max-width: 768px) {
    height: 50%;
  }
  @media screen and (max-width: 600px) {
    height: 60%;
  }
  @media screen and (max-width: 500px) {
    width: 60%;
    height: 70%
  }
  @media screen and (max-width: 450px) {
    margin: 30px 10px;
  }
  @media screen and (max-width: 350px) {
    font-size: 20px;
  }
  @media screen and (max-width: 300px) {
    font-size: 15px;
  }
`;

export const BannerTextWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  @media screen and (max-width: 770px) {
    height: 80%;
  }
  @media screen and (max-width: 600px) {
    height: 70%;
  }
`;

export const AboutTextSection = styled.div`
  padding: 100px 0px;
`;

export const AboutTextTitle = styled.h1`
  text-align: center;
  text-decoration: underline;
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

export const Img = styled.img`
  margin-right: 20px;
  float: left;
  @media screen and (max-width: 770px) {
    width: 50%;
  }
  @media screen and (max-width: 600px) {
    width: 40%;
  }
`;

export const AboutParagraph = styled.h1`
  margin-left: 5px;
  font-size: 60px;
  text-align: left;
  @media screen and (max-width: 770px) {
    font-size: 20px;
  }
`;

export const Video = styled.video`
  margin-top: 10px;
  margin-right: 20px;
  float: left;
  background: #dcdcdc;
  width: 50%;
  height: 50%;
`;