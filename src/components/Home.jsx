import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
        // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id={123}
          title="The Psychology of Money Paperback – 1 September 2020"
          price={6.54}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41cWqh0OeQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
        <Product
          id={123}
          title="The Psychology of Money Paperback – 1 September 2020"
          price={6.54}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41cWqh0OeQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
      </div>
      <div className="home__row">
      <Product
        id={123}
        title="The Psychology of Money Paperback – 1 September 2020"
        price={6.54}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/I/41cWqh0OeQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
      />
       <Product
        id={123}
        title="The Psychology of Money Paperback – 1 September 2020"
        price={6.54}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/I/41cWqh0OeQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
      />
       <Product
        id={123}
        title="The Psychology of Money Paperback – 1 September 2020"
        price={6.54}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/I/41cWqh0OeQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
      />
      </div>
    </div>
  );
}

export default Home;
