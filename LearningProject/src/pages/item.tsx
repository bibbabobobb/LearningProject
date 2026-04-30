import{
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

function Item(){
    const data = [
        {x: 1, y: 2},
        {x: 2, y: 3},
        {x: 3, y: 5},
        {x: 4, y: 7},
        {x: 5, y: 11},
        {x: 6, y: 7},
    ]
    return(
        <div>
            <h1>Regresi Linear - by kim</h1>
            <ScatterChart width={400} height={300}>
                <CartesianGrid/>
                <XAxis type="number" dataKey="x"/>
                <YAxis type="number" dataKey="y"/>
                
                <Tooltip/>
                <Scatter data={data} fill="#ff0db2"/>
            </ScatterChart>
        </div>
    )
}

export default Item;