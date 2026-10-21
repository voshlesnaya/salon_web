import Header from "../components/Header";
import Footer from "../components/Footer";
import NavigationClue from "../components/navigationClue";
import CurrentPageName from "../components/currentPageName";
import About from "./components/about";
import CardsList from "./components/cardsList";

export default function Offers(){
    return(
    <div>
        <Header/>
        <div className="mb-24 ml-24 mr-24">
        <NavigationClue currentPage="Акции"/>
        <CurrentPageName currentPage="Акции"/>
        <About/>
        <CardsList/>
         </div>
        <Footer/>
    </div>
        
    )
}