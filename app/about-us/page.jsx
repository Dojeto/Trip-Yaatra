import About from "@app/pages/AboutUS/About-us";
import LowerFooter from "@components/LowerFooter";
import UpperFooter from "@components/UpperFooter";

export default function about() {
    return (
        <div className="pt-[140px]">
            <About />
            <UpperFooter/>
            <LowerFooter/>
        </div>
    );
}