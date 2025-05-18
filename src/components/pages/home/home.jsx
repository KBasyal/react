import AboutUs from "../../about";
import BlogCard from "../../blogcard";
import Content from "../../content";
import Footer from "../../footer";
import Header from "../../header";


const Home = () => {
    return (
        <>
            <Header />
            <BlogCard/>
            <Content/>
            <AboutUs/>
            <Footer />
        </>
    )
}

export default Home;