import React from 'react'

import { AdminNavbar, Navbar, Navbar_, Sidebar } from '../components';
import { Register, Login, LandingPage, Packs, Wallet, Simulateur, User, Finance, Pointvente, Offres, Users, Pdvs, PdvRequests, Dashboard } from '../containers';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
//import axios from 'axios';
import PrivetRoute from './PrivetRoute';
import Test from '../containers/simulateur/Test';
//import Offres from '../containers/PDV/Offres';

const MainRoutes = () => {
  const location = useLocation();
  const cookies = new Cookies();

  //const [data, setData] = useState([]);

  let user;
  user = cookies.get('user');

  //if (user === true) { traitement_01 } else { traitement_02 }
  //{user === true ? traitement_01  : traitement_02 }

  return (
    <div className={`w-screen h-screen flex bg-LightBGColor `}>


      {['/login', '/register'].includes(location.pathname) ? null :
        <>
          {user && user.role === 'admin' ?
            <Sidebar />
            : null}
        </>
      }
      <div className='w-full pt-4 px-6' >

        {['/login', '/register'].includes(location.pathname) ? null :
          <>
            {user ?
              <>
                {user && user.role === 'admin' ?
                  <AdminNavbar />
                  :
                  <Navbar />
                }
              </>
              :
              <Navbar />
            }


          </>
        }
        <Routes>

          <Route index element={user && user.role === 'admin' ? <Dashboard /> : <LandingPage />}

          />

          <Route path='login' element={
            <Login />
          } />
          <Route path='pdvs' element={
            // <PrivetRoute permissions={['admin', 'pdv', 'micro_finance']} >
            <Pdvs />
            // </PrivetRoute>
          } />
          <Route path='requests' element={
            // <PrivetRoute permissions={['admin', 'pdv', 'micro_finance']} >
            <PdvRequests />
            // </PrivetRoute>
          } />
          <Route path='packs' element={
            // <PrivetRoute permissions={['admin', 'pdv', 'micro_finance']} >
            <Packs />
            // </PrivetRoute>
          } />
          <Route path='wallet' element={

            <Wallet />

          } />
          <Route path='register' element={
            <Register />
          } />
          <Route path='simulateur' element={

            <Simulateur />

          } />
          <Route path='users' element={
            // <PrivetRoute permissions={['admin', 'pdv', 'micro_finance']} >
            <Users />
            // </PrivetRoute>
          } />
          <Route path='finance' element={
            // <PrivetRoute permissions={['admin', 'pdv', 'micro_finance']} >
            <Finance />
            // </PrivetRoute>
          } />
          <Route path='pdv' element={
            // <PrivetRoute permissions={['admin', 'pdv', 'micro_finance']} >
            <Pointvente />
            // </PrivetRoute>
          } />
          <Route path='offres' element={
            // <PrivetRoute permissions={['admin', 'pdv', 'micro_finance']} >
            <Offres />
            // </PrivetRoute>
          } />
          <Route path='test' element={
            <Test />
          } />


        </Routes>
      </div>
    </div >
  )
}

export default MainRoutes