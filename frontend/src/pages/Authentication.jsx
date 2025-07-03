import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState(0); // 0 = login, 1 = register
  const [showAlert, setShowAlert] = useState(false);

  const { handleRegister, handleLogin } = useContext(AuthContext);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setUsername("");
        setPassword("");
        setName("");
        setMessage(result);
        setShowAlert(true);
        setFormState(0);
        setError("");
        setTimeout(() => setShowAlert(false), 4000);
      }
    } catch (err) {
      console.log(err);
      const msg = err?.response?.data?.message || "Something went wrong.";
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1614850523011-8f49ffc73908?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Right Auth Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <div className="flex flex-col items-center mb-4">
            <div className="bg-purple-600 text-white rounded-full p-3 mb-2">
              🔒
            </div>
            <div className="flex gap-4 mb-4">
              <button
                className={`px-4 py-2 rounded ${
                  formState === 0
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setFormState(0)}
              >
                Sign In
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  formState === 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setFormState(1)}
              >
                Sign Up
              </button>
            </div>
          </div>

          <form className="space-y-4">
            {formState === 1 && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="button"
              onClick={handleAuth}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              {formState === 0 ? "Login" : "Register"}
            </button>
          </form>
        </div>
      </div>

      {/* Snackbar-like Message */}
      {showAlert && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg">
          {message}
        </div>
      )}
    </div>
  );
}
