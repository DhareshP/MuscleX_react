// import React, {useState} from 'react';
// import Footer from "../footer/footer"; // Adjust the import path as necessary
// import Header from "../header/header";
// import { AuthService } from '../HttpAuthService/AuthService';
// import e from 'express';

// const SignupForm = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try{
//       const response = await AuthService.signup(username,password,email);
//       setMessage(response); //success message
//     }catch(error){
//       setMessage('signup issue: ' + (error.response?.data || 'An error occurred'));
//     }
//   };


//   return (
//     <div>
//         <header>
//                 <Header/>
//         </header>
    
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

//         <form className="space-y-4" onSubmit={handleSignup}>
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
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
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
//             type="submit"
//             className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Sign Up
//           </button>

//           {message && <p className="text-center text-red-500">{message}</p>}

//           <div className="flex justify-between items-center mt-4">
//             <a href="/login" className="text-blue-500 hover:underline">
//               Already have an account? Login
//             {/* </a>
//             {/* <a href="#" className="text-gray-600 hover:underline">
//               Forgot Password? */}
//             </a>
//           </div> 
//         </form>
//       </div>
//       </div>
//       <footer>
//         <Footer />
//       </footer>
//    </div>
//   );
// };

// export default SignupForm;
