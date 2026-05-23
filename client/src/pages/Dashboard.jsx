import { FaUsers, FaChartBar, FaTruck, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  return (

    <div className="bg-gray-100 min-h-screen flex">

      {/* Sidebar */}
      <div className="w-[250px] bg-gray-900 text-white p-5">

        <h1 className="text-3xl font-bold mb-10">
          Manufacturing CRM
        </h1>

     <ul className="space-y-5 text-lg">

 <li
  onClick={() => navigate("/employees")}
  className="flex items-center gap-3 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 cursor-pointer"
>
  <FaUsers />
  Employees
</li>

  <li className="flex items-center gap-3 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 cursor-pointer">
    <FaUsers />
    Employees
  </li>

  <li className="flex items-center gap-3 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 cursor-pointer">
    <FaUserTie />
    Leads
  </li>

  <li className="flex items-center gap-3 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 cursor-pointer">
    <FaChartBar />
    Sales
  </li>

  <li className="flex items-center gap-3 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 cursor-pointer">
    <FaTruck />
    Transport
  </li>

</ul>

      </div>


      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-10">
          Dashboard Overview
        </h1>


        {/* Cards */}
        <div className="grid grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-gray-500 text-lg">
              Total Employees
            </h2>

            <p className="text-4xl font-bold mt-3">
              120
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-gray-500 text-lg">
              Active Leads
            </h2>

            <p className="text-4xl font-bold mt-3">
              48
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-gray-500 text-lg">
              Pending Orders
            </h2>

            <p className="text-4xl font-bold mt-3">
              32
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-gray-500 text-lg">
              Revenue
            </h2>

            <p className="text-4xl font-bold mt-3">
              ₹5.2L
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;