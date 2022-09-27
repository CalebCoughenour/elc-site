import styled from "styled-components";

export const MissionSec = styled.div`
  background: #383232;
`;

export const MissionTextSection = styled.div`
  padding: 100px 0px;
`;

export const MissionText = styled.h1`
  margin-right: 20px;
  position: absolute;
  top: 50%;
  right: 50%;
  font-size: 55px;
  text-align: left;
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
`;

export const Media = styled.img`
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
  float: right;
  background: #dcdcdc;
  width: 50%;
  height: 50%;
`;