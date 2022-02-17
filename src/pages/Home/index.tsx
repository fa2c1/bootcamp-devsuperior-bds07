import './styles.css';
import { ReactComponent as MainImage } from "assets/images/main-image.svg";
import ButtonIcon from 'components/BtnIcon';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home-container">
            <div className="base-card home-card">
                <div className="home-image-container">
                    <MainImage />
                    <div className="home-text-container">
                        <h1>O carro perfeito para você</h1>
                        <p>
                            Conheça nossos carros e dê mais um passo na realização do seu
                            sonho
                        </p>
                    </div>
                </div>
            </div>
            <div className="home-card-button">
                <div className="home-container-button">
                    <div>
                        <Link to="/products">
                            <ButtonIcon />
                        </Link>
                    </div>
                    <p>Comece agora a navegar</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
