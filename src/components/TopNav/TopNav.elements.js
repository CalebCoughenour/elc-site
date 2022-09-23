import styled from "styled-components";

export const TopNavSection = styled.div`
  width: 100%;
  padding: 10px 0px;
  background: #1D1A1A;
`;

export const TopNavLink = styled.a`
  text-decoration: none;
  color: #DCDCDE;
  cursor: pointer;
  margin-left: 20px;
  font-size: 20px;
  background: #1D1A1A;

  &:hover {
    color: #A4A4AA;
    transition: 0.2s ease-out;
  }
`;

export const SocialIconLink = styled.a`
  margin-left: 20px;
  color: #DCDCDE;
  font-size: 24px;
  background: #1D1A1A;

  &:hover {
    color: #A4A4AA;
    transition: 0.2s ease-out;
  }
`;