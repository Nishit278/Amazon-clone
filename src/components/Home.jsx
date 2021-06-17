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
          title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
          price={6.7}
          rating={5}
          image="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={123}
          title="
          Apple iPhone 11 Pro Max [512GB, Midnight Green] "
          price={1099}
          rating={5}
          image="https://m.media-amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_11ProMax.png"
        />
        <Product
          id={123}
          title="ASUS TUF Gaming NVIDIA GeForce RTX 3090 OC Edition Graphics Card"
          price={1799}
          rating={5}
          image="https://m.media-amazon.com/images/I/815enMB8B7L._AC_UY218_.jpg"
        />
        <Product
          id={123}
          title="New Alienware Aurora R11 Gaming Desktop, Intel i7-10700KF, NVIDIA GeForce RTX 2080 Super 8GB GDDR6, 512GB SSD + 1TB SATA HDD, 16GB DDR4 "
          price={2799}
          rating={5}
          image="https://m.media-amazon.com/images/I/71WG+kXUe0L._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={123}
          title="2020 Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"
          price={1399}
          rating={4}
          image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
