import BeforeNav from "../../views/header/BeforeNav";
import Nav from "../../views/header/Nav";
import Banner from "../../views/homepage/Banner";
import Brands from "../../views/homepage/Brands";
import Newsletter from "../../views/homepage/Newsletter";
import Footer from "../../views/footer/Footer";

const Home = () => {
    return ( 
        <>
        <BeforeNav/>
        <Nav/>
        <Banner/>
        <Brands/>
        <Newsletter/>
        <Footer/>
        </>
        
        
    );
}

export default Home;