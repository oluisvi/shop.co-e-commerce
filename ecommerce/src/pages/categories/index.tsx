import BeforeNav from "../../views/header/BeforeNav";
import Nav from "../../views/header/Nav";

import CustomerRatings from "../../views/homepage/CustomerRatings";
import Newsletter from "../../views/homepage/Newsletter";
import Footer from "../../views/footer/Footer";
import UnderFooter from "../../views/footer/UnderFooter";


const Categories = () => {
    return ( 

        <>
        <BeforeNav/>
        <Nav/>
        <TopSelling/>
        <CustomerRatings/>
        <Newsletter/>
        <Footer/>
        <UnderFooter/>
        </> 
        
    );
}

export default Categories;