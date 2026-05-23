import { useEffect, useState } from "react";
import axios from "axios";

function Employees() {
  const [employees, setEmployees] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employees");

      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://your-render-url.onrender.com/api/employees",
        formData
      );

      fetchEmployees();

      setFormData({
        name: "",
        email: "",
        department: "",
        salary: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/employees/${id}`
      );

      fetchEmployees();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 text-white">

      <h1 className="text-3xl font-bold mb-6">
        Employee Management
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 mb-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
        />

        <input
          type="email"
          name="email"
          placeholder="Employee Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
        />

        <button
          className="bg-blue-600 p-3 rounded col-span-2"
        >
          Add Employee
        </button>
      </form>

      <table className="w-full bg-gray-900 rounded">

        <thead>
          <tr className="bg-gray-800">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Department</th>
            <th className="p-3">Salary</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id} className="text-center border-b border-gray-700">

              <td className="p-3">{emp.name}</td>

              <td className="p-3">{emp.email}</td>

              <td className="p-3">{emp.department}</td>

              <td className="p-3">₹{emp.salary}</td>

              <td className="p-3">
                <button
                  onClick={() => deleteEmployee(emp._id)}
                  className="bg-red-600 px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Employees;