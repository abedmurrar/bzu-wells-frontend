import React from "react";
import { withFirestore } from "react-firestore";

import ReadingGraph from "./Well";
import PersistentDrawerLeft from "./Drawer";
import { Typography } from "@material-ui/core";

class App extends React.Component {
  state = {
    wells: []
  };

  componentDidMount() {
    const { firestore } = this.props;

    firestore.collection("Well-Nodes").onSnapshot(snapshot => {
      this.setState({ wells: snapshot.docs });
    });
  }

  async getReadings(well) {
    const readingsSnapshot = await this.props.firestore
      .collection("Well-nodes")
      .limit(1)
      .get();
    return readingsSnapshot;
  }

  render() {
    const { wells } = this.state;
    return (
      <PersistentDrawerLeft>
        <Typography variant="h3">Wells</Typography>

        <ul>
          {wells &&
            wells.map(well => {
              const wellData = well.data();
              return (
                <li key={well.id}>
                  {well.id} - {wellData.Name} - {wellData.Area}
                  {wellData.Height}
                  <ReadingGraph well={well} />
                </li>
              );
            })}
        </ul>
      </PersistentDrawerLeft>
    );
  }
}

export default withFirestore(App);
