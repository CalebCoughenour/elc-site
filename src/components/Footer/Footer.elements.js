import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
  padding: 10px 0px;
  background: #A4A5A5;
  border-bottom: 1px solid #000000;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-left: 20px;
  font-size: 20px;
  background: #A4A5A5;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
    transition: 0.2s ease-out;
  }
`;

export const SocialIconLink = styled.a`
  margin-left: 20px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 24px;
  background: #A4A5A5;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
    transition: 0.2s ease-out;
  }
`;

export const FooterName = styled.a`
  background: #A4A5A5;
  color: rgba(0, 0, 0, 0.6);
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
    transition: 0.2s ease-out;
  }
`;