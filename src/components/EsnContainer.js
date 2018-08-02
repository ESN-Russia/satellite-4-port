import React from "react";
import styled from "styled-components";

const EsnContainer = ({ children, style }) => <Container style={style}>{children}</Container>;

const Container = styled.div`
  width: 960px;
  max-width: 100vw;

  margin: 0 auto;
  padding: 0;
`;

export default EsnContainer;
