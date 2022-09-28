import styled from "styled-components";

export const VideoSec = styled.div`
  padding: 100px 0px;
  background: #383232;
`;

export const YoutubeVideo = styled.iframe`
height: 415px;
width: 660px;

@media screen and (max-width: 800px) {
  height: 300px;
  width: 500px;
}
`