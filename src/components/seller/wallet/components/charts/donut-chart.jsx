import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts'

export function DonutChart ({ data }) {
  const renderLegendWithPercent = (value, entry) => {
    const percent = Math.round((entry.payload.value / data.reduce((acc, cur) => acc + cur.value, 0))
    * 100)
    return `${value} (${percent}%)`
  }

  return (
    <ResponsiveContainer width='100%' height={200}>
      <PieChart>
        <Tooltip />
        <Legend
          height={20}
          iconType='circle'
          iconSize={10}
     
          formatter={renderLegendWithPercent}
        />
        <Pie data={data} innerRadius={40} outerRadius={80} dataKey='value'>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
