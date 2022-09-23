import styled from "styled-components";

export const MissionSec = styled.div`
  padding: 100px 0px;
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

export const MissionText = styled.p`

`;