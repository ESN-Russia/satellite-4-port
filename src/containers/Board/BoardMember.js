import React from "react";
import { Card, Image } from "semantic-ui-react";

const BoardMember = ({ member }) => (
  <Card
    image={member.image}
    description={`Loves: ${member.loves}`}
    // description={
    //   <Fragment>
    //   </Fragment>
    // }
  >
    <Image src={member.image} />
    <Card.Content header={member.name} meta={member.section} description={member.position} />
    <Card.Content>
      <p>
        <b>Loves: </b> {member.loves}
      </p>
      <p>
        <b>Hates: </b> {member.hates}
      </p>
      <p>
        <b>Speaks: </b> {member.speaks}
      </p>
    </Card.Content>
  </Card>
);

export default BoardMember;
