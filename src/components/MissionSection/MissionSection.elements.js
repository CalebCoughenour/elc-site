import styled from "styled-components";

export const MissionSec = styled.div`
  background: #383232;
`;

// export const MissionTitle = styled.h1`
//   position: relative;
//   overflow: hidden; 
//   font-size: 50px;
//   margin-left: 30px;
//   color: #DCDCDE;

//   &:after {
//     display: inline-block;
//     content: "";
//     height: 2px;
//     background: #DCDCDE;
//     position: absolute;
//     width: 80%;
//     top: 50%;
//     margin-top: -2px;
//     margin-left: 10px;
//   }
// `;

export const MissionTextSection = styled.div`
  padding: 100px 0px;
`;

export const MissionText = styled.h1`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 55px;
  text-align: center;
  color: #DCDCDE;
  @media screen and (max-width: 770px) {
    font-size: 20px;
  }
`;

export const Media = styled.video`
  margin-top: 10px;
  margin-right: 20px;
  float: left;
  background: #dcdcdc;
  width: 50%;
  height: 50%;
`;