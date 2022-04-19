import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { rockImages } from "../../assets";
import Carousel from "../../components/Carousel/Carousel";
// import Cart from "./container/Cart/Cart";
// import Home from "./container/Home/Home";
import { getDoc, doc, collection, addDoc, getDocs } from "firebase/firestore";
import IndivProduct from "../../components/IndivProduct/IndivProduct";

const Home = () => {
    //setting state for Products
    const [productsList, setProductsList] = useState([]);
    const [activeProduct, setActiveProduct] = useState(null);

    //getting Products collection - looping through products array - setting
    useEffect(() => {
        const getProducts = async () => {
            const products = await getDocs(collection(db, "Products"));
            products.forEach((product) => {
                setProductsList((e) => [...e, product.data()]); //pushing each product to the array
            });
        };

        getProducts();
    }, []);

    //return to render the components
    return (
        <>
            <div className={styles.HeaderContainer}>
                <h1 className={styles.Header}>ROCK's NFT</h1>
                <h3>
                    Only place on the internet where you can buy images of
                    rocks!
                </h3>
                <Carousel
                    images={rockImages}
                    className={styles.carouselSlider}
                />
            </div>

            {/* if toggled show product, otherwise show nothing */}
            {activeProduct ? (
                <IndivProduct
                    setActiveProduct={setActiveProduct}
                    product={activeProduct}
                />
            ) : null}

            <div className={styles.ProductList}>
                <div className={styles.ProductList__Grid}>
                    {productsList.map((product, index) => {
                        console.log(productsList);
                        return (
                            <>
                                {/* <Link key={index} to={`/${product.title}`}> */}

                                <div
                                    onClick={() => setActiveProduct(product)}
                                    className={styles.ProductList__Product}>
                                    <img src={product.img} alt="image" />
                                    <div>{product.title}</div>
                                    <div>${product.price}</div>
                                </div>
                                {/* </Link> */}
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Home;
