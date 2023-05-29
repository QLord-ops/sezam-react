import Header from "./assets/components/header/Header.jsx";
import 'bootstrap/dist/css/bootstrap.css'
import "./assets/styles/style.scss"
import {BrowserRouter} from "react-router-dom";
import IndexContent from "./assets/components/IndexContent/IndexContent.jsx";



const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <IndexContent />
            </BrowserRouter>
        </>
    )
}

export default App;
