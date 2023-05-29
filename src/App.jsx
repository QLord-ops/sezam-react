import Header from "./assets/components/header/Header.jsx";
import 'bootstrap/dist/css/bootstrap.css'
import "./assets/styles/style.scss"
import {BrowserRouter} from "react-router-dom";
import Main from "./assets/components/main/Main.jsx";
import IndexContent from "./assets/components/IndexContent/IndexContent.jsx";



const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <IndeContent />
            </BrowserRouter>
        </>
    )
}

export default App;
