import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts';



const Dashboard = () => {
  const { user } = useAuth();
  // console.log(user);

  const axiosSecure = useAxiosSecure();

  // Pagination & Search states

  const { refetch, data: adminStats = [] } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/adminStats`);
      return res.data;
    },
  });

  // console.log(adminStats);


  const { data: chartOrderData = [] } = useQuery({
    queryKey: ["orderStats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orderStats`);
      return res.data;
    },
  });
// console.log(chartOrderData);

// pie chart data
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  // pie chart data mapping
  const PieChartData = chartOrderData?.map((data) => {
    return { name: data?.category, value: data?.revenue}
  })

  console.log(PieChartData);

  return (
    <>
      <div className="w-full md:w-[870px] mx-auto px-4">
        <h2 className="text-2xl font-semibold my-4">Hi, {user?.displayName}</h2>
        {/* Stats */}

        <div className="stats stats-vertical w-full lg:stats-horizontal shadow">
          <div className="stat bg-emerald-200">
            <div className="stat-figure text-secondary text-3xl">
              <FaDollarSign />
            </div>

            <div className="stat-title">Revenue</div>
            <div className="stat-value">{adminStats.revenue}</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat bg-orange-200">
            <div className="stat-figure text-secondary text-3xl">
              <FaUsers />
            </div>

            <div className="stat-title">Users</div>
            <div className="stat-value">{adminStats.users}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat bg-indigo-400">
            <div className="stat-figure text-secondary text-3xl">
              <FaBook />
            </div>

            <div className="stat-title">Menu Items</div>
            <div className="stat-value">{adminStats.menuItems}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>

          <div className="stat bg-purple-300">
            <div className="stat-figure text-secondary text-3xl">
              <FaShoppingCart />
            </div>

            <div className="stat-title">Orders</div>
            <div className="stat-value">{adminStats.orders}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>

        {/* Charts and graphs*/}
        <div className="mt-16 flex flex-col sm:flex-row ">
          {/* bar chart */}
          <div className="sm:w-1/2 w-full">
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <AreaChart
                  data={chartOrderData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* pie chart */}
          <div className="sm:w-1/2 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={PieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {PieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  
                    <Legend />
                  
                </PieChart>
              </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
