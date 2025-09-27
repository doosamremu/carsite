import { Routes, Route } from 'react-router'
import Homepage from './components/homepage'
import Createpage from './components/createpage'
import Login from './components/hcomponents/loginpage'
import SignUp from './components/hcomponents/signuppage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>

      
  )
}

export default App

