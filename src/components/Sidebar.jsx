import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  BarChart2, 
  Users, 
  Settings, 
  LogOut,
  BrainCircuit
} from 'lucide-react';
import ComplaintsList from './ComplaintsList';
import { complaints } from '../data/mockData';
const Sidebar = () => {

  const [active,setActive]=useState({
    "One":true,
    "Two":false,
    "Three":false,
    "Four":false,}
  )

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold text-gray-800">Civic Sense AI</h1>
        </div>
        <p className="text-xs text-gray-500 mt-1">Sentiment Analysis Dashboard</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className={`flex items-center space-x-3 p-3 rounded-lg ${active["one"] ?"bg-primary-light text-primary":"text-gray-700"} font-medium`}>
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <Link to='/complaints' className={`flex items-center space-x-3 p-3 rounded-lg ${active["two"] ?"bg-primary-light text-primary":"text-gray-700"} font-medium`}>
              <MessageSquare className="h-5 w-5" />
              <span>Complaints</span>
            </Link>
          </li>
          <li>
            <a href="#"  className={`flex items-center space-x-3 p-3 rounded-lg ${active["two"] ?"bg-primary-light text-primary":"text-gray-700"} font-medium`}>
              <BarChart2 className="h-5 w-5" />
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a href="#"  className={`flex items-center space-x-3 p-3 rounded-lg ${active["two"] ?"bg-primary-light text-primary":"text-gray-700"} font-medium`}>
              <Users className="h-5 w-5" />
              <span>Officials</span>
            </a>
          </li>
          <li>
            <div className="w-[14rem] flex text-white items-center py-2 mx-auto rounded-xl bg-primary hover:bg-primary-dark cursor-pointer">
                <p className="text-4xl flex items-center justify-center font-bold w-[20%] mt-[-4px]">+</p> New Complaint
            </div>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;