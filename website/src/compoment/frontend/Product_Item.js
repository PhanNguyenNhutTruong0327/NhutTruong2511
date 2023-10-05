import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { urlImage } from '../../config';

function Product_Item(props) {
    const rowpro = props.product;
    const { addItem } = useCart();
    const addToCart = () => {
        addItem(props.product);
    }
    if(rowpro.price_sale === 0){
        return(
            <div class="showcase">

            <div class="showcase-banner">

                <img src={urlImage + `Product/`+rowpro.image} alt="Bánh" style={{height:"150px"}} class="product-img default" />
                <img src={urlImage + `Product/`+rowpro.image} alt="Bánh" style={{height:"150px"}} class="product-img hover" />

                {/* <p class="showcase-badge">15%</p> */}

                <div class="showcase-actions">

                    <button class="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <Link to={"/pages/san-pham/chi-tiet-san-pham/"+ rowpro.id} class="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                    </Link>

                    {/* <button class="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                    </button> */}

                    <button class="btn-action" onClick={() => addToCart()}>
                        <ion-icon name="bag-add-outline"></ion-icon>
                    </button>

                </div>

            </div>

            <div class="showcase-content">

                <a href="#" class="showcase-category">{rowpro.name}</a>

                <a href="#">
                    <h3 class="showcase-title">{rowpro.name}</h3>
                </a>

                <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                </div>

                <div class="price-box">
                    <p class="price">{rowpro.price}.000 đ</p>
                </div>

            </div>
        </div>

        );
    }
    else{
        return (
            <div class="showcase">
    
                <div class="showcase-banner">
    
                    <img src={urlImage + `Product/`+rowpro.image} alt="Bánh" style={{height:"150px"}} class="product-img default" />
                    <img src={urlImage + `Product/`+rowpro.image} alt="Bánh" style={{height:"150px"}} class="product-img hover" />
    
                    {/* <p class="showcase-badge">15%</p> */}
    
                    <div class="showcase-actions">
    
                        <button class="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>
    
                        <Link to={`/pages/san-pham/chi-tiet-san-pham/${rowpro.id}`} class="btn-action">
                            <ion-icon name="eye-outline"></ion-icon>
                        </Link>
    
                        {/* <button class="btn-action">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </button> */}
    
                        <button class="btn-action" onClick={() => addToCart()}>
                            <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
    
                    </div>
    
                </div>
    
                <div class="showcase-content">
    
                    <a href="#" class="showcase-category">{rowpro.name}</a>
    
                    <a href="#">
                        <h3 class="showcase-title">{rowpro.name}</h3>
                    </a>
    
                    <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
    
                    <div class="price-box">
                        <p class="price">{rowpro.price_sale}.000 đ</p>
                        <del>{rowpro.price}.000 đ</del>
                    </div>
    
                </div>
            </div>
    
        );
    }

}

export default Product_Item;