import React from "react";
import Grid from "@mui/material/Grid";
import { GUIDANCE, SECTION_TITLE } from "../../constant/constant";
import styled from "@emotion/styled";
import TitleCustom from "../Title";

export const GuidanceSectionGridContainer = styled(Grid)({
  marginTop: "4rem",
  marginBottom: "4rem",
});

export const GuidanceSectionGrid = styled(Grid)(({ index }) => ({
  textAlign: "center",
  borderRight: index !== 3 ? "1px solid #CCC8AA" : "none",
}));

const GuidanceSectionTitle = styled.div`
  margin: 1rem 0;

  h3 {
    font-weight: 500;
  }
`;

const GuidanceSectionContent = styled.div`
  margin-bottom: 1rem;
  p {
    font-size: 10px;
    opacity: 0.8;
    font-weight: 500;
  }
`;

export default function GuidanceSection() {
  return (
    <>
      <TitleCustom
        title={SECTION_TITLE.reason}
        style={{ textAlign: "center" }}
      />
      <GuidanceSectionGridContainer container spacing={2}>
        {GUIDANCE.map((item, index) => {
          return (
            <GuidanceSectionGrid item xs={12} sm={6} md={3} key={item.id}>
              <img src={item.image} alt="" />
              <GuidanceSectionTitle>
                <h3>{item.title}</h3>
              </GuidanceSectionTitle>
              <GuidanceSectionContent>
                <p>{item.content}</p>
              </GuidanceSectionContent>
            </GuidanceSectionGrid>
          );
        })}
      </GuidanceSectionGridContainer>
    </>
  );
}
