import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
  padding: 10px 0px;
  background: #1D1A1A;
`;

export const FooterLink = styled.a`
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

export const FooterName = styled.a`
  background: #1D1A1A;
  color: #DCDCDE;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #A4A4AA;
    transition: 0.2s ease-out;
  }
`;