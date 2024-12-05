// AuthContext.js
import { createContext, useState, useContext, useEffect } from 'react'
import { API_URL } from '../components/API'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import showToast from '../utils/showToast'

// Create the context
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('webUser')) || null)
  const [token, setToken] = useState(localStorage.getItem('webToken') || null)
  const [loading, setLoading] = useState(false)

 
  // Check localStorage for user token and role
  useEffect(() => {
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

   
  }, [token])

  // Login function
  const login = (email, password, handleLoading) => {
    try {
      handleLoading(true)
      fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
        .then(response => response.json())
        .then(data => {
          showToast(data.message)
          if (data.token) {
            setToken(data.token)
            localStorage.setItem('webToken', data.token)
            localStorage.setItem('webUser', JSON.stringify(data.user))
            setUser(data.user)

            setTimeout(()=>{
              window.location.href = '/'
            },1500)
           
          } 
        })
        .catch(error => {
          console.error('Error logging in:', error)
         showToast('Error logging in')
        })
        .finally(() => {
          handleLoading(false)
        })
    } catch (error) {
      console.error('Error logging in:', error)
     showToast('Error logging in')
    } 
  }

  const handleGoogle = () => {
    try {
      fetch(`${API_URL}/registerWithGoogle`)
        .then(response => response.json())
        .then(data => {
          console.log(data)

          showToast(data.message)
        })
        .catch(error => {
          console.error('Error:', error)
          showToast('Error logging in')
        })
    } catch (error) {
      console.log(error)
      showToast('Error logging in')
    }
  }
  const handleFacebook = () => {
    try {
      fetch(`${API_URL}/registerWithFacebook`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          showToast(data.message)
        })
        .catch(error => {
          console.log(error)
          showToast('Error logging in')
        })
    } catch (error) {
      console.log(error)
      showToast('Error logging in')
    }
  }

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
    <AuthContext.Provider value={{ user, token,login,handleFacebook, handleGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext)
}
