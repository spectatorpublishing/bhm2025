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

  @media (max-width: 768px) {
    font-size: 36px;
    margin: 21px auto;
    height: 20px;
  }
`;

const Title = () => {
  return (
      <BHM>Black History Month</BHM>
  );
};

export default Title;
