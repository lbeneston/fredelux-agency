import React from "react";
import styled from "styled-components";
import { FREDELUX_AGENCY_EMAIL } from "../../constants/constants";

const BoldLink = styled.a`
  font-size: 1.1rem;
  font-weight: bolder;
  text-transform: uppercase;
  line-height: 2.2rem;
  letter-spacing: 0.2rem;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
    line-height: 2.5rem;
    font-weight: bolder;
  }
`;

type ContactLinkProps = {
  subject: string;
};

export const ContactLink: React.FC<ContactLinkProps> = ({ subject }) => {
  const mailToFredeluxAgency = `mailto:${FREDELUX_AGENCY_EMAIL}?subject=${encodeURIComponent(subject)}`;

  return (
    <BoldLink href={mailToFredeluxAgency}>{FREDELUX_AGENCY_EMAIL}</BoldLink>
  );
};
