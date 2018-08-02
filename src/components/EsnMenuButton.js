import React from "react";
import styled from "styled-components";

const EsnMenuButton = ({ title }) => <ButtonContainer>{title}</ButtonContainer>;

const ButtonContainer = styled.div`
  color: #bbb;
  padding: 0 12px;
  font-size: 16px;
  line-height: 34px;
  height: auto;
  cursor: pointer;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #f57b20;
    color: white;
  }
`;

export default EsnMenuButton;
