import './App.css'
import {Route, Routes} from "react-router-dom";
import { CompaniesPage, HomePage, UsersPage } from './pages';
import {routes} from './constants/routes'
function App()
{
  return(
    <Routes>
      <Route path={routes.home} element={<HomePage/>} ></Route>
      <Route path={routes.companies} element={<CompaniesPage/>}></Route>
      <Route path={routes.users} element={<UsersPage/>}></Route>
    </Routes>
  )
}
export default App