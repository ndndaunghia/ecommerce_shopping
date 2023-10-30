import styled from "@emotion/styled";
import React, { useCallback } from "react";
import {
  MEDIUM_BANNER_DATA,
  SIGN_UP_BANNER_DATA,
  SMALL_BANNER_DATA,
} from "../../constant/constant";
import { Grid } from "@mui/material";

const BannerBoxWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 4rem;
`;

const GridBannerWrapper = styled(Grid)`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

const GridSignUpBanner = styled(Grid)`
  background-image: url(${(props) => props.url});
  margin: 2rem 0;
  height: 30vh;
`;

const MediumBannerBox = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  background-image: url(${(props) => props.url});
  /* min-width: 36.25rem; */
  /* height: 40vh; */
  background-size: cover;
  background-position: center;
  padding: 2rem;
  h4 {
    color: #fff;
    font-size: 1.75rem;
    font-weight: 400;
  }
  h2 {
    color: #fff;
    font-weight: 800;
    font-size: 2.2rem;
  }
  span {
    color: #fff;
    margin: 1rem 0;
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    font-weight: 600;
    transition: 0.2s linear;
    :hover {
      background-color: #088178;
    }
  }
`;

const SmallBannerBox = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  height: 30vh;
  background-size: cover;
  background-position: top;
  padding: 2rem;

  h2 {
    color: #fff;
    font-size: 1.375rem;
    font-weight: 900;
  }

  h3 {
    color: #ec544e;
    font-size: 1rem;
    font-weight: 800;
  }
`;

const SignUpLeftBanner = styled(Grid)`
  padding: 2rem 6rem;
  h2 {
    color: #fff;
    opacity: 0.9;
    margin: 0.8rem 0;
  }

  h4 {
    color: #7485a3;
    font-weight: 500;
  }

  span {
    color: #f0a927;
  }
`;

const SignUpRightBanner = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 16rem;
    height: 2rem;
    border-top-left-radius: .4rem;
    border-bottom-left-radius: .4rem;
    padding: 0 1rem;
  }

  button {
    padding: .5rem 1.4rem;
    cursor: pointer;
    background-color: #088178;
    color: #fff;
    border-top-right-radius: .4rem;
    border-bottom-right-radius: .4rem;
  }
`;

export default function MediumBanner() {
  const renderMediumBanner = useCallback(() => {
    return MEDIUM_BANNER_DATA.map((data) => {
      return (
        <MediumBannerBox
          item
          url={data.image}
          key={data.id}
          xs={12}
          sm={12}
          md={5.5}
        >
          <h4>{data.title}</h4>
          <h2>{data.subTitle}</h2>
          <span>{data.content}</span>
          <button>{data.btnTitle}</button>
        </MediumBannerBox>
      );
    });
  }, []);

  const renderSmallBanner = useCallback(() => {
    return SMALL_BANNER_DATA.map((data) => {
      return (
        <SmallBannerBox
          item
          url={data.image}
          key={data.id}
          xs={12}
          sm={12}
          md={3.8}
        >
          <h2>{data.title}</h2>
          <h3>{data.content}</h3>
        </SmallBannerBox>
      );
    });
  }, []);

  const renderSignUpBanner = useCallback(() => {
    return SIGN_UP_BANNER_DATA.map((data) => {
      return (
        <GridSignUpBanner url={data.image} container key={data.id}>
          <SignUpLeftBanner xs={12} sm={12} md={6}>
            <h2>{data.title}</h2>
            <h4>
              {data.content} <span>{data.subContent}</span>
            </h4>
          </SignUpLeftBanner>
          <SignUpRightBanner xs={12} sm={12} md={6}>
            <input type="text" />
            <button>Sign Up</button>
          </SignUpRightBanner>
        </GridSignUpBanner>
      );
    });
  });
  return (
    <>
      <GridBannerWrapper container>{renderMediumBanner()}</GridBannerWrapper>
      <GridBannerWrapper container>{renderSmallBanner()}</GridBannerWrapper>
      <GridSignUpBanner container>{renderSignUpBanner()}</GridSignUpBanner>
    </>
  );
}
