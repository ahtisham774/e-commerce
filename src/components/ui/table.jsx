import React from 'react'

export const Table = ({ children }) => {
  return (
    <table className="min-w-full  border-none table">
      {children}
    </table>
  )
}

export const TableHeader = ({ children, bg="bg-[#EEDFE2]" }) => {
  return <thead className={` rounded-xl font-bold ${bg} `}>{children}</thead>
}

export const TableBody = ({ children }) => {
  return <tbody className="bg-white ">{children}</tbody>
}

export const TableRow = ({ children,bg,hover }) => {
  return <tr className={`${hover}`} style={{background:bg}}>{children}</tr>
}

export const TableHead = ({ children, onClick }) => {
  return (
    <th scope="col" onClick={onClick} className="px-6 py-3 text-left text-xs cursor-pointer uppercase whitespace-nowrap tracking-wider">
      {children}
    </th>
  )
}

export const TableCell = ({ children }) => {
  return <td className="px-6 py-4 whitespace-nowrap">{children}</td>
}

