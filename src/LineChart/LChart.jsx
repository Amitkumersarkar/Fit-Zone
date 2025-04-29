import { LineChart, Line, XAxis, YAxis } from 'recharts';
const LChart = () => {
    const students = [
        { id: 1, name: 'Alice', math: 80, physics: 82, chemistry: 75 },
        { id: 2, name: 'Bob', math: 85, physics: 80, chemistry: 88 },
        { id: 3, name: 'Charlie', math: 90, physics: 92, chemistry: 85 },
        { id: 4, name: 'Diana', math: 66, physics: 70, chemistry: 68 },
        { id: 5, name: 'Ethan', math: 72, physics: 75, chemistry: 70 },
    ];


    return (
        <div className='flex justify-center  mt-10 p-4'>
            <LineChart width={700} height={900} data={students}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="math" stroke='green'></Line>
                <Line dataKey={'physics'} stroke='white'></Line>
                <Line type="monotone" dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default LChart;