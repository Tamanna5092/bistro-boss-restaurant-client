import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoWallet } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaVanShuttle } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Pie, PieChart, ResponsiveContainer, Legend } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const AdminHome = () => {
  const { user } = useAuth();
  const axiousSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiousSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ['order-stats'],
    queryFn: async () => {
      const res = await axiousSecure.get('/order-stats');
      return res.data
    }
  })

  // custom shape for the bar chart
  const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// custom shape for the pie chart
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

const pieChartData = chartData.map(data => {
  return {name: data.category, value: data.quantity}
})

  return (
    <div className="p-2 md:p-6">
      <h1 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}!
      </h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <div className="stats shadow">
        <div className="stat bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white">
          <div className="flex justify-center items-center gap-2">
            <div className="h-2/3 flex justify-center items-center">
              <IoWallet className="inline-block h-full w-full stroke-current"></IoWallet>
            </div>
            <div>
              <h2 className="stat-value font-bold text-3xl">{stats?.revenue}</h2>
              <h2 className="stat-value text-2xl font-medium">Revenue</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white">
          <div className="flex justify-center items-center gap-2">
            <div className="h-2/3 flex justify-center items-center">
              <HiUserGroup className="inline-block h-full w-full stroke-current"></HiUserGroup>
            </div>
            <div>
              <h2 className="stat-value font-bold text-3xl">{stats?.users}</h2>
              <h2 className="stat-value text-2xl font-medium">Customers</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white">
          <div className="flex justify-center items-center gap-2">
            <div className="h-2/3 flex justify-center items-center">
              <MdProductionQuantityLimits className="inline-block h-full w-full stroke-current"></MdProductionQuantityLimits>
            </div>
            <div>
              <h2 className="stat-value font-bold text-3xl">{stats?.products}</h2>
              <h2 className="stat-value text-2xl font-medium">Products</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white">
          <div className="flex justify-center items-center gap-2">
            <div className="h-2/3 flex justify-center items-center">
              <FaVanShuttle className="inline-block h-full w-full stroke-current"></FaVanShuttle>
            </div>
            <div>
              <h2 className="stat-value font-bold text-3xl">{stats?.orders}</h2>
              <h2 className="stat-value text-2xl font-medium">Orders</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* chart */}
      <div className="flex mt-20">
        {/* chart 1 */}
        <div className="w-1/2">
          <BarChart
      width={600}
      height={400}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
        </div>
        {/* chart 2 */}
        <div className="w-1/2">
        <PieChart width={500} height={400}>
        <Pie
          data={pieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend></Legend>
      </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
