import MyFooter from "../components/Footer/MyFooter";

export default function FooterPage() {
    return (
        <div className="footer">
            <h2 style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}></h2>
            <MyFooter author="BaoPG" email="phunggiabao810@gmail.com" linkGithub="https://github.com/baro301/FER202" />
        </div>
    );
}