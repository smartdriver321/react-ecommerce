import { Outlet } from 'react-router-dom'
import './App.css'
import NavItem from './components/NavItems'

export default function App() {
  return (
    <>
      <NavItem></NavItem>
      <Outlet />
    </>
  )
}
