import React from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Area,
} from 'recharts';

const CentimeterCubeFormatter = ({ value }) => (
    <p
        style={{
            display: 'inline-block',
        }}
    >
        {value} cm<sup>3</sup>
    </p>
);

const WellGraph = ({ readings }) => (
    <ResponsiveContainer debounce={1} aspect={1}>
        <AreaChart
            data={readings}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                tickCount={readings.length / 5}
                name="Date"
                dataKey="created_at"
            />
            <YAxis name="Volume" />
            <Tooltip
                formatter={value => <CentimeterCubeFormatter value={value} />}
            />
            <Area
                type="monotone"
                dataKey="volume"
                name="Volume"
                stroke="#8884d8"
                fill="#8884d8"
            />
        </AreaChart>
    </ResponsiveContainer>
);

export default WellGraph;
