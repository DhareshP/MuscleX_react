// import React, {useState} from 'react';
// import Footer from "../footer/footer";
// import Header from "../header/header"; // Adjust the import path as necessary
// // import { AuthService } from '../HttpAuthService/AuthService';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault(); 
//     try{
//       const response = await AuthService.login(username, password);
//       setMessage(response);
//     }catch(error){
//       setMessage('Login issue' + (error.response?.data || 'An error occurred'))
//     }
//   };
//   return (
//     <div>
//          <header>
//                 <Header/>
//         </header>
    
//     <div>
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

//         <form className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Username</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//               type="submit"
//               className="w-full px-4 py-2 bg-blue-500 text-white rounded text-center hover:bg-blue-600"
//             >
//               Login
//               </button>

//               {message && <p className = "text-center text-red-500 mt-2">{message}</p>}

//           <div className="flex justify-between items-center mt-4">
//             <a href="/signup" className="text-blue-500 hover:underline">
//               Signup
//             </a>
//             <a href="/forgot-password" className="text-gray-600 hover:underline">
//               Forgot Password?
//             </a>
//           </div>
//         </form>
//       </div>
//       </div>
//       <footer>
//         <Footer />
//       </footer>

//     </div>
//     </div>
//   );
// };

// export default LoginForm;
