import { useState } from 'react'
import { Search, Mail, Phone, MapPin, Calendar, Edit, Trash2, Plus, Briefcase } from 'lucide-react'

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)

  const employees = [
    { 
      id: 1,
      name: 'James Kamau',
      email: 'james.kamau@anchoredhives.com',
      phone: '+254 711 234 567',
      role: 'Manager',
      department: 'Operations',
      location: 'Nairobi',
      joinDate: '2023-06-15',
      salary: 85000,
      status: 'Active'
    },
    { 
      id: 2,
      name: 'Mary Wanjiku',
      email: 'mary.wanjiku@anchoredhives.com',
      phone: '+254 722 345 678',
      role: 'Sales Representative',
      department: 'Sales',
      location: 'Nairobi',
      joinDate: '2023-08-01',
      salary: 55000,
      status: 'Active'
    },
    { 
      id: 3,
      name: 'Peter Ochieng',
      email: 'peter.ochieng@anchoredhives.com',
      phone: '+254 733 456 789',
      role: 'Warehouse Manager',
      department: 'Logistics',
      location: 'Mombasa',
      joinDate: '2023-07-20',
      salary: 65000,
      status: 'Active'
    },
    { 
      id: 4,
      name: 'Grace Njeri',
      email: 'grace.njeri@anchoredhives.com',
      phone: '+254 744 567 890',
      role: 'Customer Service',
      department: 'Support',
      location: 'Nairobi',
      joinDate: '2023-09-10',
      salary: 45000,
      status: 'Active'
    },
    { 
      id: 5,
      name: 'Samuel Kipkorir',
      email: 'samuel.kipkorir@anchoredhives.com',
      phone: '+254 755 678 901',
      role: 'Delivery Driver',
      department: 'Logistics',
      location: 'Kisumu',
      joinDate: '2023-10-05',
      salary: 40000,
      status: 'Active'
    },
    { 
      id: 6,
      name: 'Esther Akinyi',
      email: 'esther.akinyi@anchoredhives.com',
      phone: '+254 766 789 012',
      role: 'Accountant',
      department: 'Finance',
      location: 'Nairobi',
      joinDate: '2023-05-01',
      salary: 70000,
      status: 'Active'
    },
  ]

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
          <p className="text-gray-600">Manage your workforce</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary inline-flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Employee</span>
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search employees by name, email, role, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-honey-500"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-gray-600 text-sm font-medium">Total Employees</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{employees.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-gray-600 text-sm font-medium">Active Employees</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {employees.filter(e => e.status === 'Active').length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-gray-600 text-sm font-medium">Departments</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {[...new Set(employees.map(e => e.department))].length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-gray-600 text-sm font-medium">Monthly Payroll</h3>
          <p className="text-3xl font-bold text-honey-600 mt-2">
            KES {employees.reduce((sum, e) => sum + e.salary, 0).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Employees Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Salary
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-honey-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">👤</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{employee.name}</p>
                        <p className="text-sm text-gray-600">ID: EMP-{employee.id.toString().padStart(4, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-900">{employee.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{employee.department}</td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                        {employee.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                        {employee.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {employee.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    KES {employee.salary.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(employee.status)}`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {employee.joinDate}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredEmployees.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No employees found matching your search.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {filteredEmployees.length} of {employees.length} employees
        </p>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-4 py-2 bg-honey-600 text-white rounded-lg hover:bg-honey-700">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>

      {/* Add Employee Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Add New Employee</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="input-field" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="input-field" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="input-field" placeholder="john.doe@anchoredhives.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="input-field" placeholder="+254 7XX XXX XXX" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select className="input-field">
                    <option>Manager</option>
                    <option>Sales Representative</option>
                    <option>Warehouse Manager</option>
                    <option>Customer Service</option>
                    <option>Delivery Driver</option>
                    <option>Accountant</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select className="input-field">
                    <option>Operations</option>
                    <option>Sales</option>
                    <option>Logistics</option>
                    <option>Support</option>
                    <option>Finance</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input type="text" className="input-field" placeholder="Nairobi" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Salary (KES)</label>
                  <input type="number" className="input-field" placeholder="50000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea className="input-field" rows="2" placeholder="Enter employee address" />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button className="btn-primary">
                Add Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Employees
