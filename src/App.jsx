import { Outlet } from 'react-router-dom'
import './App.css'
import NavItem from './components/NavItems'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavItem></NavItem>
      <Outlet />
      <Footer />
    </>
  )
}
