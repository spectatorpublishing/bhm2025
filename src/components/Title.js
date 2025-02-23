import React from "react";
import styled from "styled-components";

const BHM = styled.div`
  width: 100%;
  height: 145px;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "IM FELL Double Pica SC";
  font-size: 88px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 38px auto;

  @media (max-width: 1024px) { //ipad air
    font-size: 70px;
    margin-top: 35px;
    margin-bottom: 0px;
    height: 110px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-top: 21px;
    margin-bottom: 0px;
    height: 60px;
  }

  @media (max-width: 375px) {
    font-size: 30px;
    margin-top: 21px;
    margin-bottom: 0px;
  }
`;

const Title = () => {
  return (
      <BHM>hello Black History Month</BHM>
  );
};

export default Title;
