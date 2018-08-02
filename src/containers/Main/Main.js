import React from "react";
import { Grid, Label } from "semantic-ui-react";
import _ from "lodash";
import styled from "styled-components";

import tempData from "../../tempData";
import EsnContainer from "../../components/EsnContainer";

const Main = () => (
  <EsnContainer style={{ padding: "20px 0" }}>
    <Grid columns={3}>
      <Grid.Column>
        <Label ribbon color="orange" size="large">
          NEWS
        </Label>
        {_.map(tempData.news, item => (
          <ItemContainer>
            <ItemImage src={item.img} />
            <div>
              <ItemDate>{item.date}</ItemDate>
              <ItemTitle color="orange">{item.title}</ItemTitle>
            </div>
          </ItemContainer>
        ))}
      </Grid.Column>
      <Grid.Column>
        <Label ribbon color="green" size="large">
          PAST EVENTS
        </Label>
        {_.map(tempData.pastEvents, item => (
          <ItemContainer>
            <ItemImage src={item.img} />
            <div>
              <ItemDate>{item.date}</ItemDate>
              <ItemTitle color="green">{item.title}</ItemTitle>
            </div>
          </ItemContainer>
        ))}
      </Grid.Column>
      <Grid.Column>
        <Label ribbon color="blue" size="large">
          PARTNERS
        </Label>
        {_.map(tempData.partners, item => (
          <ItemContainer>
            <ItemImage src={item.img} />
            <div style={{ paddingTop: 25 }}>
              <ItemTitle color="blue">{item.title}</ItemTitle>
              <br />
              <ItemTitle color="blue" style={{ fontSize: 12 }}>
                {item.subtitle}
              </ItemTitle>
            </div>
          </ItemContainer>
        ))}
      </Grid.Column>
    </Grid>
  </EsnContainer>
);

const ItemContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const ItemImage = styled.img`
  margin: 15px;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid #eee;
`;

const ItemTitle = styled.a`
  color: ${props => props.color};
  font-size: 18px;
`;

const ItemDate = styled.div`
  color: #666;
  font-size: 12px;
  padding: 20px 0 5px 0;
`;

export default Main;
