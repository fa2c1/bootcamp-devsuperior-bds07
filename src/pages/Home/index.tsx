import './styles.css';
import { ReactComponent as MainImage } from "assets/images/main-image.svg";
import ButtonIcon from 'components/BtnIcon';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home-container">
            <div className="base-card home-card">
                <div className="home-content-container">
                    <div>
                        <h1>O carro perfeito pra você</h1>
                        <p>
                            Conheça nossos carros e de mais um passo em relação do seu sonho
                        </p>
                    </div>
                </div>
                <div className="home-image-container">
                    <MainImage />
                </div>
            </div>
            <div className='home-container-btn'>
                <div className="home-btn">
                    <div className="home-content-btn">
                        <Link to="/products">
                            <ButtonIcon />
                        </Link>
                        <p>Comece agora a navegar</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
