// AuthContext.js
import { createContext, useState, useContext, useEffect } from 'react'

// Create the context
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('webToken') || null)
  const [loading, setLoading] = useState(true)

  // Check localStorage for user token and role
  useEffect(() => {
    const role = localStorage.getItem('webRole')

    // Fetch the current user if token exists
    // const fetchUser = async () => {

    //   try {
    //     const response = await fetch(`${AUTH}/user/me`, {
    //       method: "POST",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ role }),
    //     });

    //     if (response.ok) {
    //       const userData = await response.json();
    //       setUser({
    //         _id: userData._id,
    //         email: userData.email,
    //         username: `${userData.firstName} ${userData.lastName}`,
    //         role: userData.role,
    //       });
    //       setLoading(false)
    //     } else {
    //       setUser(null);
    //       setLoading(false)
    //     }
    //   } catch (error) {
    //     console.error('Failed to fetch user:', error);
    //     setUser(null);
    //     setLoading(false)
    //   }
    // };

    // fetchUser();

    setTimeout(() => {
      setUser({
        _id: '123456',
        email: 'test@example.com',
        username: 'John Doe',
        role: 'buyer'
      })
      setLoading(false)
    }, 1500)
  }, [token])

  // Login function

  // Logout function to clear the user
  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('webToken')
    localStorage.removeItem('webRole')
  }

  if (loading) {
    return (
      <div className='fixed w-screen min-h-screen h-full grid place-items-center'>
        <div className='animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-[#ed1270]'></div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user, token, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext)
}
