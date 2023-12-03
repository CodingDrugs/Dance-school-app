import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./global.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Register from './Components/Register'
import Login from './Components/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminRegister from './Components/AdminRegister'
import ProtectedRoutes from './serviceroutes/ProtectedRoutes'
import AdminDashboard from './Components/AdminControllers/AdminDashboard'
// import AdminAside from './Components/AdminControllers/AdminAside'
// import AddAcademyManger from './Components/AdminControllers/AddAcademyManger'
import ViewManger from './Components/AdminControllers/AcademyManager/ViewManger'
import ViewAcademy from './Components/AdminControllers/AcademyController/ViewAcademy'

import ViewCourse from './Components/AdminControllers/ViewCourse'
import ViewBranches from './Components/AdminControllers/Branches/ViewBranches'
import AcademyController from './Components/AdminControllers/AcademyController/AcademyController'
import AcademyManagerController from './Components/AdminControllers/AcademyManager/AcademyManagerController'
import ViewEachManager from './Components/AdminControllers/AcademyManager/ViewEachManager'
import EditManager from './Components/AdminControllers/AcademyManager/EditManager'
import EditAcademy from './Components/AdminControllers/AcademyController/EditAcademy'
import BranchController from './Components/AdminControllers/Branches/BranchController'

const App = () => {
  return (
    <Router>
      <ToastContainer/>
        <Navbar/>

        <Routes>
            <Route path='/home' element={
              <ProtectedRoutes>
                <Home/>
              </ProtectedRoutes>
            }/>
            

            <Route path='/' element={<Gallery/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/admin-register' element={<AdminRegister/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin-dashboard' element={<ProtectedRoutes><AdminDashboard/></ProtectedRoutes>}>
                {/* <Route path='/admin-dashboard/add-aca-manager' element={<AddAcademyManger/>}/> */}
                <Route path='/admin-dashboard/view-manager' element={<ViewManger/>}/>
                <Route path='/admin-dashboard/view-academy' element={<ViewAcademy/>}/>
                <Route path='/admin-dashboard/view-branch' element={<ViewBranches/>}/>
                <Route path='/admin-dashboard/view-course' element={<ViewCourse/>}/>
                <Route path='/admin-dashboard/academy-controller/:id' element={<AcademyController/>}/>
                <Route path='/admin-dashboard/edit-controller/:id' element={<EditAcademy/>}/>
                <Route path='/admin-dashboard/academy-manager-controller' element={<AcademyManagerController/>}/>
                <Route path='/admin-dashboard/branch-controller/:id' element={<BranchController/>}/>
                <Route path='/admin-dashboard/view-each-manager/:id' element={<ViewEachManager/>}/>
                <Route path='/admin-dashboard/edit-manager/:id' element={<EditManager/>}/>        
            </Route>
        </Routes>
    </Router>
  )
}

export default App