import './styles.css';
import { ReactComponent as ProductImage } from "assets/images/product.svg";
import ButtonBuy from 'components/BtnBuy';


function ProductCard() {
    return (
        <div className='base-card product-card'>
            <div className='card-top-container'>
                <ProductImage />
            </div>
            <div className='card-botton-container'>
                <h6>Audi Supra TT</h6>
                <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</i></p>
                <ButtonBuy />
            </div>
        </div>
    );
}

export default ProductCard;