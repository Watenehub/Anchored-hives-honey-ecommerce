import { useState } from 'react'
import { Search, Filter, Eye, Package, CheckCircle, XCircle, Clock, Truck } from 'lucide-react'

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const orders = [
    { 
      id: 'HNY-0012', 
      customer: 'John Doe',
      email: 'john@example.com',
      phone: '+254 712 345 678',
      amount: 4500, 
      status: 'Delivered',
      paymentMethod: 'M-Pesa',
      date: '2024-01-15',
      items: 3,
      address: '123 Main St, Nairobi'
    },
    { 
      id: 'HNY-0011', 
      customer: 'Sarah Smith',
      email: 'sarah@example.com',
      phone: '+254 723 456 789',
      amount: 7200, 
      status: 'Processing',
      paymentMethod: 'Bank Transfer',
      date: '2024-01-15',
      items: 5,
      address: '456 Oak Ave, Mombasa'
    },
    { 
      id: 'HNY-0010', 
      customer: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+254 734 567 890',
      amount: 2500, 
      status: 'Shipped',
      paymentMethod: 'Cash on Delivery',
      date: '2024-01-14',
      items: 2,
      address: '789 Pine Rd, Kisumu'
    },
    { 
      id: 'HNY-0009', 
      customer: 'Emily Brown',
      email: 'emily@example.com',
      phone: '+254 745 678 901',
      amount: 5800, 
      status: 'Delivered',
      paymentMethod: 'M-Pesa',
      date: '2024-01-14',
      items: 4,
      address: '321 Elm St, Nakuru'
    },
    { 
      id: 'HNY-0008', 
      customer: 'David Wilson',
      email: 'david@example.com',
      phone: '+254 756 789 012',
      amount: 3200, 
      status: 'Pending',
      paymentMethod: 'M-Pesa',
      date: '2024-01-13',
      items: 2,
      address: '654 Maple Dr, Eldoret'
    },
    { 
      id: 'HNY-0007', 
      customer: 'Lisa Anderson',
      email: 'lisa@example.com',
      phone: '+254 767 890 123',
      amount: 9500, 
      status: 'Processing',
      paymentMethod: 'Bank Transfer',
      date: '2024-01-13',
      items: 6,
      address: '987 Cedar Ln, Thika'
    },
  ]

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const getStatusInfo = (status) => {
    switch (status) {
      case 'Delivered':
        return { color: 'bg-green-100 text-green-800', icon: CheckCircle }
      case 'Processing':
        return { color: 'bg-blue-100 text-blue-800', icon: Package }
      case 'Shipped':
        return { color: 'bg-purple-100 text-purple-800', icon: Truck }
      case 'Pending':
        return { color: 'bg-yellow-100 text-yellow-800', icon: Clock }
      case 'Cancelled':
        return { color: 'bg-red-100 text-red-800', icon: XCircle }
      default:
        return { color: 'bg-gray-100 text-gray-800', icon: Package }
    }
  }

  const statusCounts = {
    all: orders.length,
    Pending: orders.filter(o => o.status === 'Pending').length,
    Processing: orders.filter(o => o.status === 'Processing').length,
    Shipped: orders.filter(o => o.status === 'Shipped').length,
    Delivered: orders.filter(o => o.status === 'Delivered').length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-600">Manage your product orders</p>
      </div>

      {/* Status Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-wrap gap-2">
          {['all', 'Pending', 'Processing', 'Shipped', 'Delivered'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                statusFilter === status
                  ? 'bg-honey-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)} ({statusCounts[status]})
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by order ID, customer name, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-honey-500"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5 text-gray-600" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => {
                const statusInfo = getStatusInfo(order.status)
                const StatusIcon = statusInfo.icon
                return (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">{order.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{order.customer}</p>
                        <p className="text-sm text-gray-600">{order.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{order.items} items</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      KES {order.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{order.paymentMethod}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                        <StatusIcon className="w-4 h-4 mr-1" />
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{order.date}</td>
                    <td className="px-6 py-4">
                      <button className="p-2 text-honey-600 hover:bg-honey-50 rounded-lg transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No orders found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {filteredOrders.length} of {orders.length} orders
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
    </div>
  )
}

export default Orders
