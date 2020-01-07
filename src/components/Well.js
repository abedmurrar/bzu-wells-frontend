import React, { Component } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';
import {
    Card,
    Grid,
    CardHeader,
    Typography,
    CardContent,
    withStyles,
} from '@material-ui/core';

const styles = theme => ({
    gridRoot: {
        marginTop: '30px',
        marginBottom: '30px',
    },
    halfOpacity: { opacity: 0.5 },
    inlineBlock: {
        display: 'inline-block',
    },
});

export default class Well extends Component {
    render() {
        const { well } = this.props;
        let day = 86400000;
        return (
            <Grid
                item
                xs={12}
                style={{
                    marginTop: '30px',
                    marginBottom: '30px',
                }}
            >
                <Card>
                    <CardHeader
                        title={
                            <Typography variant="h4">
                                {well.id} {well.name}
                            </Typography>
                        }
                    />
                    <CardContent>
                        <Typography
                            variant="caption"
                            style={{ opacity: 0.5 }}
                            color="primary"
                        >
                            Volume = {well.volume} cm<sup>3</sup>
                            <br />
                            Depth = {well.depth} m
                        </Typography>
                        {well.readings.length !== 0 ? (
                            <div>
                                {Date.now() - day >
                                    Date.parse(
                                        well.readings[well.readings.length - 1]
                                            .created_at
                                    ) && (
                                    <Typography
                                        color="error"
                                        variant="subtitle2"
                                    >
                                        HAS NOT RECORDED A READING FOR MORE THAN
                                        ONE DAY, PLEASE CHECK NODE!
                                    </Typography>
                                )}
                                <AreaChart
                                    width={500}
                                    height={400}
                                    data={well.readings}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        tickCount={well.readings.length / 5}
                                        name="Date"
                                        dataKey="created_at"
                                    />
                                    <YAxis name="Volume" />
                                    <Tooltip
                                        formatter={(value, name, props) => (
                                            <p
                                                style={{
                                                    display: 'inline-block',
                                                }}
                                            >
                                                {value} cm<sup>3</sup>
                                            </p>
                                        )}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="volume"
                                        name="Volume"
                                        stroke="#8884d8"
                                        fill="#8884d8"
                                    />
                                </AreaChart>
                            </div>
                        ) : (
                            <Typography variant="body1">
                                No readings yet!
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}
