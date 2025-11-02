import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? 'Login' : 'Signup', formData);
    alert(isLogin ? 'Login successful!' : 'Signup successful!');
  };

  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch min-h-screen">
      <Header />
      
      <main className="self-center flex w-full max-w-[1533px] flex-col items-center px-5 py-20">
        <div className="bg-neutral-50 w-full max-w-[500px] p-10 rounded-xl border border-[rgba(0,0,0,0.1)]">
          <h1 className="text-black text-4xl font-bold mb-8 text-center">
            {isLogin ? 'Login' : 'Sign Up'}
          </h1>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {!isLogin && (
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-black text-lg font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="bg-white border border-[rgba(0,0,0,0.2)] px-4 py-3 rounded-lg text-black"
                  placeholder="Enter your name"
                />
              </div>
            )}
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-black text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white border border-[rgba(0,0,0,0.2)] px-4 py-3 rounded-lg text-black"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-black text-lg font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="bg-white border border-[rgba(0,0,0,0.2)] px-4 py-3 rounded-lg text-black"
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              className="bg-[rgba(252,138,6,1)] text-black text-lg font-medium px-8 py-4 rounded-[120px] hover:opacity-90 transition-opacity mt-4"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[rgba(252,138,6,1)] underline hover:opacity-80"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;