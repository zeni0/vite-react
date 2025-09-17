import About from "../components/BusinessCard/About";
import Info from "../components/BusinessCard/Info";

export default function BusinessCard(){
    return (
        <section className="business-card">
            <Info />
            <About />
        </section>
    )
}