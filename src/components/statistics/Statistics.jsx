
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from "react"
import { getDonation } from "../../localStorage"




const Statistics = () => {

    const [pi, setPi] = useState([])
    const [allData, setAllData] = useState([])
    useEffect(()=>{
        const getTitle = getDonation()
        setPi(getTitle)

        fetch("./donationData.json")
        .then(res=>res.json())
        .then(d=>setAllData(d))
    },[])

    const yourDonation = pi.length
    const totalDonation = allData.length
    
const data = [
    { name: 'Total Donation', value: totalDonation},
    { name: 'Your Donation', value: yourDonation},

  ];
  
  const COLORS = ['#FF444A', '#00C49F'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };


  return (
    <div>
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
        >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
    </PieChart>

    </ResponsiveContainer>
    <div className='flex justify-center'>
        <div className='flex justify-center gap-10'>
            {
                data.map((donate,id)=>{
                    return(
                        <>
                        <span key={id}>{donate.name} <div className="w-16 h-2 ml-1 inline-block rounded-sm"  style={{ backgroundColor: COLORS[id]}}></div> </span>
                        </>
                    )
                })
            }
        </div>
    </div>
</div>
  )
}

export default Statistics;


