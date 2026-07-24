import { 
  Package, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Sales',
      value: 'KES 125,000',
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'My Orders',
      value: '45',
      change: '+12.1%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Products',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: Package,
      color: 'bg-honey-500'
    },
    {
      title: 'Revenue This Month',
      value: 'KES 45,000',
      change: '+8.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ]

  const recentOrders = [
    { id: 'HNY-0012', customer: 'John Doe', amount: 4500, status: 'Delivered', date: '2024-01-15' },
    { id: 'HNY-0011', customer: 'Sarah Smith', amount: 7200, status: 'Processing', date: '2024-01-15' },
    { id: 'HNY-0010', customer: 'Mike Johnson', amount: 2500, status: 'Shipped', date: '2024-01-14' },
    { id: 'HNY-0009', customer: 'Emily Brown', amount: 5800, status: 'Delivered', date: '2024-01-14' },
    { id: 'HNY-0008', customer: 'David Wilson', amount: 3200, status: 'Pending', date: '2024-01-13' },
  ]

  const myProducts = [
    { name: 'Pure Organic Honey', sales: 25, revenue: 'KES 62,500', stock: 25 },
    { name: 'Wildflower Honey', sales: 15, revenue: 'KES 33,000', stock: 20 },
    { name: 'Clover Honey', sales: 12, revenue: 'KES 24,000', stock: 30 },
    { name: 'Acacia Honey', sales: 8, revenue: 'KES 22,400', stock: 15 },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800'
      case 'Processing': return 'bg-blue-100 text-blue-800'
      case 'Shipped': return 'bg-purple-100 text-purple-800'
      case 'Pending': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  <span className="text-sm font-medium ml-1">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* My Products */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">My Products</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {myProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-honey-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🍯</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.sales} sold • {product.stock} in stock</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900">{product.revenue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-honey-500 hover:bg-honey-50 transition-colors text-center">
            <Package className="w-8 h-8 mx-auto mb-2 text-honey-600" />
            <p className="font-medium text-gray-900">Add New Product</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-honey-500 hover:bg-honey-50 transition-colors text-center">
            <ShoppingCart className="w-8 h-8 mx-auto mb-2 text-honey-600" />
            <p className="font-medium text-gray-900">View Orders</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-honey-500 hover:bg-honey-50 transition-colors text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-honey-600" />
            <p className="font-medium text-gray-900">View Sales Report</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
