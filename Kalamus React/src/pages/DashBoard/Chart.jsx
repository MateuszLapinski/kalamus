import { PieChart, Pie, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ComposedChart, Cell, Legend } from 'recharts';

export default function Chart() {

    const getLastFiveMonths = () => {
        const months = [];
        const now = new Date();
        for (let i = 0; i < 5; i++) {
            const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
            months.push(month.toLocaleString('default', { month: 'long' }));
        }
        return months.reverse();
    };
    const months = getLastFiveMonths();
    const data = [
        { name: months[0], uv: 212234, pv: 2400, amt: 2400 },
        { name: months[1], uv: 184341, pv: 2400, amt: 2400 },
        { name: months[2], uv: 192450, pv: 2400, amt: 2400 },
        { name: months[3], uv: 174104, pv: 2400, amt: 2400 },
        { name: months[4], uv: 230123, pv: 2400, amt: 2400 }];


    return (
        <div className="chartWrapper">
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Bar dataKey="uv" fill="#9235ff" />
                    <Line type="monotone" dataKey="uv" stroke="#ffc11f" strokeWidth={2} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
    export function CircleChart() {
        const data = [
            { name: 'Target realisation', value: 230123 },
            { name: 'Left', value: 304123 }
            
        ];

        const COLORS = ['#5fa2ff', '#f07a7a'];
        const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, index }) => {
            const RADIAN = Math.PI / 180;
            const offset = 20
            const radius = outerRadius+30;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            const fill = COLORS[index % COLORS.length];

            return (
                <text x={x} y={y} fill={fill} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontWeight="bold">
                    {`${name}: ${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };

        return (
            <div className="chartWrapper">
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={150}
                            fill="#8884d8"
                            label={renderCustomLabel }
                            dataKey="value"
                            fontWeight="bold"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                     
                    </PieChart>
                </ResponsiveContainer>
               
            </div>
        );
    }
