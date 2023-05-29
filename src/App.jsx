import Header from "./assets/components/header/Header.jsx";
import 'bootstrap/dist/css/bootstrap.css'
import "./assets/styles/style.scss"
import {BrowserRouter} from "react-router-dom";
import Main from "./assets/components/main/Main.jsx";
import SimpleSlider from "./assets/components/main/slider/SimpleSlider.jsx";



const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Main/>

            </BrowserRouter>
        </>
    )
}

export default App;
