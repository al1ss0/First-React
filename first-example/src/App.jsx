import Footer from "./components/Footer";
import Header from "./components/Header";
import TitleWithText from "./components/TitleWithText"

function App() {
    return (
        <>
            <Header />
            <TitleWithText 
            title="Título do bloco" 
            content ="Contéudo do primeiro bloco"
            />
            <TitleWithText 
            title="Outro Título"
            content = "Outra descrição do bloco"
            />


            <Footer author = "Alisson Bosa" />
        </>
    );
}



export default App
