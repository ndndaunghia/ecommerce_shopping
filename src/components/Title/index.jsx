import styled from "@emotion/styled";
import React from "react";

const TitleWrapper = styled.div`
  margin-top: 4rem;
  padding: 0 4rem;
`;

const TitleContent = styled.p`
  font-size: 2rem;
  border-bottom: 1px solid #CCC8AA;
  padding: 1rem 0;
`;
export default function TitleCustom({title}) {
  return (
    <TitleWrapper>
      <TitleContent>{title}</TitleContent>
    </TitleWrapper>
  );
}
