import React, { Component } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default class ReadingGraph extends Component {
  state = {
    readings: null
  };

  componentDidMount() {
    this.props.well.ref
      .collection("Readings")
      .orderBy("Timestamp", "desc")
      .limit(500)
      .onSnapshot(snapshot => {
        this.setState({
          readings: snapshot.docs.map(reading => {
            return { id: reading.id, ...reading.data() };
          })
        });
      });
  }

  render() {
    const { readings } = this.state;

    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={readings} margin={{
              top: 30, right: 0, left: 0, bottom: 0,
            }}>
            <CartesianGrid strokeDasharray="3" stroke="#ccc" />
            <XAxis dataKey="Timestamp" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Level" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
