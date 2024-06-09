import './ProductDetails.scss';

export const ProductDetails = () => {
  return (
    <section className="ProductDetails">
      <h2 className="ProductDetails__title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2>

      <div className="images">
        <div className="smallImages">
          <img
            className="smallImage"
            src="img/phones/apple-iphone-11/black/00.webp"
            alt=""
          />
          <img
            className="smallImage"
            src="img/phones/apple-iphone-11/black/01.webp"
            alt=""
          />
          <img
            className="smallImage"
            src="img/phones/apple-iphone-11/black/02.webp"
            alt=""
          />
          <img
            className="smallImage"
            src="img/phones/apple-iphone-11/black/03.webp"
            alt=""
          />
          <img
            className="smallImage"
            src="img/phones/apple-iphone-11/black/04.webp"
            alt=""
          />
        </div>
        <div className="bigImage">
          <img
            className="bigImage__image"
            src="img/phones/apple-iphone-11/black/00.webp"
            alt=""
          />
        </div>
      </div>

      {/* here is choosen image */}
      <div className="ProductDetails__optionable">
        <div className="ProductDetails__available-colors"></div>
        <div className="ProductDetails__capacity-selection"></div>
      </div>
      <div className="ProductDetails__default">
        <div className="ProductDetails__ordering-product"></div>
        <div className="ProductDetails__default-params"></div>
      </div>

      <div className="ProductDetails__bot"></div>
    </section>
  );
};

// "images": [
//       "img/phones/apple-iphone-11/black/00.webp",
//       "img/phones/apple-iphone-11/black/01.webp",
//       "img/phones/apple-iphone-11/black/02.webp",
//       "img/phones/apple-iphone-11/black/03.webp",
//       "img/phones/apple-iphone-11/black/04.webp"
//     ]
