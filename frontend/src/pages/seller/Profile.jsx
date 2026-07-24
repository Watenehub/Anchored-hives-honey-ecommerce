import { useState } from 'react'
import { User, Mail, Phone, MapPin, Calendar, Briefcase, Save, Lock, Camera } from 'lucide-react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600">Manage your seller account information</p>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-honey-200 rounded-full flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-honey-600 rounded-full flex items-center justify-center text-white hover:bg-honey-700 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">James Kamau</h2>
            <p className="text-gray-600">Honey Supplier</p>
            <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                james.kamau@anchoredhives.com
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                +254 711 234 567
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn-secondary"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <User className="w-5 h-5 mr-2 text-honey-600" />
            Personal Information
          </h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                defaultValue="James"
                disabled={!isEditing}
                className="input-field disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                defaultValue="Kamau"
                disabled={!isEditing}
                className="input-field disabled:bg-gray-100"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue="james.kamau@anchoredhives.com"
              disabled={!isEditing}
              className="input-field disabled:bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue="+254 711 234 567"
              disabled={!isEditing}
              className="input-field disabled:bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea
              defaultValue="123 Honey Lane, Nairobi, Kenya"
              rows="2"
              disabled={!isEditing}
              className="input-field disabled:bg-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Business Information */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Briefcase className="w-5 h-5 mr-2 text-honey-600" />
            Business Information
          </h3>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
            <input
              type="text"
              defaultValue="Kamau Honey Farms"
              disabled={!isEditing}
              className="input-field disabled:bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Registration Number</label>
            <input
              type="text"
              defaultValue="BRN-2023-45678"
              disabled={!isEditing}
              className="input-field disabled:bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID / PIN</label>
            <input
              type="text"
              defaultValue="A001234567B"
              disabled={!isEditing}
              className="input-field disabled:bg-gray-100"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                defaultValue="Nairobi"
                disabled={!isEditing}
                className="input-field disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                <input
                  type="text"
                  defaultValue="June 15, 2023"
                  disabled
                  className="input-field disabled:bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Lock className="w-5 h-5 mr-2 text-honey-600" />
            Change Password
          </h3>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <input type="password" className="input-field" placeholder="Enter current password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input type="password" className="input-field" placeholder="Enter new password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <input type="password" className="input-field" placeholder="Confirm new password" />
          </div>
        </div>
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="flex justify-end">
          <button className="btn-primary inline-flex items-center space-x-2">
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Profile
