
import  { useState } from 'react';

function App() {
  const [Showpassword, setShowPassword] = useState(false);

  const HideNshow = () => {
    setShowPassword(!Showpassword);  // Toggles the Showpassword value
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-white p-6 rounded-lg  w-1/3  h-1/3 items-center shadow-cyan-500/50  shadow-2xl">
        <h1 className="text-2xl font-bold mb-4 mt-4 text-center text-cyan-950">Password Hide & Show</h1>

        <div className="relative mb-4">
          <input
            type={Showpassword ? 'text' : 'password'}
            placeholder="Enter password"
            className="w-full p-3 border font-semibold border-gray-300 rounded focus:outline-none focus:border-green-600"
          />
          <button
            onClick={HideNshow}
            className=" font-semibold absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none text-lg"
          >
            {Showpassword ? '🙈' : '👁️'}
          </button>
        </div>

      
      </div>
    </div>
  );
}

export default App;
