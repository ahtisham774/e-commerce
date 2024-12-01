import { LineChart as RechartsLineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

export function LineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RechartsLineChart data={data} margin={{top:0, right:0, left:0, bottom:0}}>
        <XAxis dataKey="day" />
        <YAxis hide />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#FF1493"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="value2"
          stroke="#ffff"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#FF1493"
          strokeWidth={2}
          dot={false}
        />

      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

