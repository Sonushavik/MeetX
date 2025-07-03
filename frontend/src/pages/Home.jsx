import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import withAuth from '../utils/withAuth';

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState('');
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className='text-4xl text-shadow-pink-400'>Meet<span className='text-pink-500'>X</span></h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/history')}
            className="text-gray-600 hover:text-blue-600 transition"
            title="View History"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-6.219-8.56"
              />
            </svg>
          </button>
          <p className="text-sm text-gray-700">History</p>

          <button
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/auth');
            }}
            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-12">
        {/* Left Panel */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Providing Quality Video Call Just Like Quality Education
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Meeting Code"
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleJoinVideoCall}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Join
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 flex justify-center">
          <img src="/logo3.png" alt="Logo" className="w-full max-w-sm object-contain" />
        </div>
      </div>
    </div>
  );
}

export default withAuth(HomeComponent);
