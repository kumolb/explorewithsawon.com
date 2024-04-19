import Footer from "../Footer/Footer";
import Navbars from "../Navbars/Navbars";
import Header from "../Header/Header";
function Layout({children}){
    return(
        <div>
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;