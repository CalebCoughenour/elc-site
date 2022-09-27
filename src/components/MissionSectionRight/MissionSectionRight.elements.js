import styled from "styled-components";

export const MissionSec = styled.div`
  background: #383232;
  padding: 50px 0px;

  @media screen and (max-width: 400px) {
    padding: 0px 0px;
  }
`;

export const MissionTextSection = styled.div`
  padding: 100px 0px;

  @media screen and (max-width: 600px) {
    padding: 0px 0px;
  }
`;

export const MissionText = styled.h1`
  margin-right: 20px;
  font-size: 55px;
  text-align: center;
  color: #DCDCDE;

  @media screen and (max-width: 1100px) {
    font-size: 45px;
  }

  @media screen and (max-width: 770px) {
    font-size: 30px;
  }

  @media screen and (max-width: 500px) {
    font-size: 25px;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }

  @media screen and (min-width: 600px) {
    position: absolute;
    top: 50%;
    right: 50%;
  }
`;

export const Media = styled.img`
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
  background: #383232;
  border-radius: 5px;

  @media screen and (min-width: 600px) {
    float: right;
    width: 50%;
   height: 50%; 
  }

  @media screen and (max-width: 600px) {
   width: 70%;
   height: 70%; 
  }
`;