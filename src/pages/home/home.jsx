import AboutUs from "../../components/about";
import BlogCard from "../../components/blogcard";
import Content from "../../components/content";
import Footer from "../../components/footer";
import Header from "../../components/header";


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