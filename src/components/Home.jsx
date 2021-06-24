import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        // src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/GGD/June/Teaser/Gateway/D23436262_IN_PC_Laptops-Grand-Gaming-Days-May_3000x12000.5x._CB664929386_.jpg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
        // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id={1236343666}
          title="2020 Apple MacBook Air- Space Gray"
          price={1399}
          rating={4}
          image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg"
        />
        <Product
          id={123257637}
          title="
          Apple iPhone 11 Pro Max [512GB, Midnight Green] "
          price={1099}
          rating={5}
          image="https://m.media-amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_11ProMax.png"
        />
      </div>
      <div className="home__row">
        <Product
          id={1237568568}
          title="The Psychology of Money Paperback – 1 September 2020"
          price={6.54}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41cWqh0OeQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
        <Product
          id={12375684532}
          title="Rich Dad Poor Dad"
          price={6.7}
          rating={5}
          image="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY218_.jpg"
        />
        <Product
          id={123264585698}
          title="ASUS TUF Gaming NVIDIA GeForce RTX 3090 OC Edition Graphics Card"
          price={1799}
          rating={5}
          image="https://m.media-amazon.com/images/I/815enMB8B7L._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={1232567489}
          title="New Alienware Aurora R11 Gaming Desktop, Intel i7-10700KF, NVIDIA GeForce RTX 2080 Super 8GB GDDR6, 512GB SSD + 1TB SATA HDD, 16GB DDR4 "
          price={2799}
          rating={5}
          image="https://m.media-amazon.com/images/I/71WG+kXUe0L._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
