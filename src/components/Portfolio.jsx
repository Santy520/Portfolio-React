import image0 from "../assets/large image.jpeg";
import image1 from "../assets/AI-e1628527067120.webp";
import image2 from "../assets/annevb_a_computer_with_green_plants_growing_out_of_it_or_aroun_34756494-fc43-4af9-aa33-3ded589fabc9.webp";
import image3 from "../assets/annevb_The_gamification_of_work_and_reality_gaming_and_work_bus_744feabb-1bb2-4b8f-ba3b-fb1cdab09eae.webp";
import image4 from "../assets/authentication-biometrics-400x200.jpg";

function Portfolio() {
    return (
        <div>
            <div className="about-me-section">
                <h1 className="body1">Work</h1>
                <div className="body-image">
                    <div className="main-image">
                        <img id="image-edit" src={image0} alt="img for project 0" />
                        <p className="image-text-0">
                            <a href="https://github.com/Santy520/Portfolio-React">Project 0</a>
                        </p>
                    </div>
                    <div id="sub-images">
                        <div className="sub-image">
                            <img className="image-edit" src={image1} alt="img for project 1" />
                            <p className="image-text-1">
                                <a href="https://santy520.github.io/Picsure-game/">Project 1</a>
                            </p>
                        </div>
                        <div className="sub-image">
                            <img className="image-edit" src={image2} alt="img for project 2" />
                            <p className="image-text-1">
                                <a href="https://note-taker520-479a9a1899dc.herokuapp.com/">Project 2</a>
                            </p>
                        </div>
                        <div className="sub-image">
                            <img className="image-edit" src={image3} alt="img for project 3" />
                            <p className="image-text-1">
                                <a href="https://limitless-scrubland-89760-c5cfabe4f1c5.herokuapp.com/login">Project 3</a>
                            </p>
                        </div>
                        <div className="sub-image">
                            <img className="image-edit" src={image4} alt="img for project 4" />
                            <p className="image-text-1">
                                <a href="https://santy520.github.io/Weather-Dashboard/">Project 4</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
