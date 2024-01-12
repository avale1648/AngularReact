import {Button} from "@chakra-ui/react"
import {routes} from '../../constants/routes'
import { useNavigate } from "react-router-dom"
const CompaniesPage = () => {
    const navigate = useNavigate();
    const goHomePage = () => {
        navigate(routes.home);
    }
return(
    <>
    <Button colorScheme="teal" onClick={goHomePage}>На главную страницу</Button>
    <h1>Компании</h1>
    </>
    
)
}
export default CompaniesPage;