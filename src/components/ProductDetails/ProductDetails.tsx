import { Button } from '../Button/Button';
import { IconFavour } from '../IconFavour';
import './ProductDetails.scss';
import cn from 'classnames';

export const ProductDetails = () => {
  // I guess we are getting product ID with search params and then filtering all items to receive requested. No context needed, just json with all products.
  const buttonText = true ? 'Add to cart' : 'Added to cart';
  return (
    <section className="productDetails">
      <h2 className="productDetails__title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2>

      <div className="productDetails__images-container">
        <div className="productDetails__smallImages-container">
          {/* mapping through all existing images here and on click will set exact img as a big one*/}
          <img
            className="productDetails__smallImage"
            src="img/phones/apple-iphone-11/black/00.webp"
            alt=""
          />
          <img
            className="productDetails__smallImage"
            src="img/phones/apple-iphone-11/black/01.webp"
            alt=""
          />
          <img
            className="productDetails__smallImage"
            src="img/phones/apple-iphone-11/black/02.webp"
            alt=""
          />
          <img
            className="productDetails__smallImage"
            src="img/phones/apple-iphone-11/black/03.webp"
            alt=""
          />
          <img
            className="productDetails__smallImage"
            src="img/phones/apple-iphone-11/black/04.webp"
            alt=""
          />
        </div>
        <div className="productDetails__bigImage-container">
          {/* here is choosen image */}
          <img src="img/phones/apple-iphone-11/black/00.webp" alt="" />
        </div>
      </div>

      <div className="productDetails__optionable">
        <div className="productDetails__pairs">
          <p className="productDetails__params">Available colors</p>
          {/* mapping through available corols here */}
          <div className="params-wrapper">
            <p
              className={cn('productDetails__availableColor', {
                'productDetails__availableColor--active': true,
              })}
            ></p>

            <p
              className={cn('productDetails__availableColor', {
                'productDetails__availableColor--active': false,
              })}
            ></p>

            <p
              className={cn('productDetails__availableColor', {
                'productDetails__availableColor--active': false,
              })}
            ></p>

            <p
              className={cn('productDetails__availableColor', {
                'productDetails__availableColor--active': false,
              })}
            ></p>
          </div>
        </div>

        <div className="productDetails__pairs">
          <p className="productDetails__params">Select capacity</p>
          {/* mapping through available capacity here */}
          <div className="params-wrapper">
            <div
              className={cn('productDetails__availableCapacity', {
                'productDetails__availableCapacity--active': true,
              })}
            >
              64 GB
            </div>
            <div
              className={cn('productDetails__availableCapacity', {
                'productDetails__availableCapacity--active': false,
              })}
            >
              128 GB
            </div>
          </div>
        </div>

        <div className="productDetails__ordering">
          <div className="ordering-wrapper">
            <div className="productDetails__prices">
              <span className="productDetails__prices-discount">$700</span>
              <span className="productDetails__prices-full">$799</span>
            </div>

            <div className="productDetails__ordering-buttons">
              <Button>{buttonText}</Button>
              <IconFavour />
              {/* треба видалити зміни, що я вніс в компоненти */}
            </div>
          </div>
          <div className="productDetails__basic-params">
            <div className="productDetails__params-pair">
              <p className="productDetails__param">Screen</p>
              <p className="productDetails__value">5.8” OLED</p>
            </div>

            <div className="productDetails__params-pair">
              <p className="productDetails__param">Resolution</p>
              <p className="productDetails__value">2688x1242</p>
            </div>

            <div className="productDetails__params-pair">
              <p className="productDetails__param">Processor</p>
              <p className="productDetails__value">Apple A12 Bionic</p>
            </div>

            <div className="productDetails__params-pair">
              <p className="productDetails__param">RAM</p>
              <p className="productDetails__value">4 GB</p>
            </div>
          </div>
        </div>
      </div>
      <span className="productDetails__product-id">ID: 802390</span>

      <article className="description">
        <h3 className="description__title">About</h3>
        {/* here we will be mapping trough description arr elements */}
        <div className="description-container">
          {/* each product has n-amount of paragraphs. We will map through them */}
          <h4 className="description__paragraph-title">
            And then there was Pro
          </h4>
          <p className="description__paragraph-body">
            A transformative triple‑camera system that adds tons of capability
            without complexity.
          </p>

          <h4 className="description__paragraph-title">Camera</h4>
          <p className="description__paragraph-body">
            Meet the first triple‑camera system to combine cutting‑edge
            technology with the legendary simplicity of iPhone. Capture up to
            four times more scene. Get beautiful images in drastically lower
            light. Shoot the highest‑quality video in a smartphone — then edit
            with the same tools you love for photos. You’ve never shot with
            anything like it.
          </p>

          <h4 className="description__paragraph-title">
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
            Love it.
          </h4>
          <p className="description__paragraph-body">
            iPhone 11 Pro lets you capture videos that are beautifully true to
            life, with greater detail and smoother motion. Epic processing power
            means it can shoot 4K video with extended dynamic range and
            cinematic video stabilization — all at 60 fps. You get more creative
            control, too, with four times more scene and powerful new editing
            tools to play with.
          </p>
        </div>
      </article>

      <article className="detailedParams">
        <h3 className="detailedParams__title">Tech specs</h3>
        <div className="detailedParams__params-container">
          {/* here we will be mapping through all existing params  */}
          <div className="detailedParams__params-pair">
            <p className="detailedParams__param">Screen</p>
            <p className="detailedParams__value">6.5” OLED</p>
          </div>

          <div className="detailedParams__params-pair">
            <p className="detailedParams__param">Screen</p>
            <p className="detailedParams__value">6.5” OLED</p>
          </div>
        </div>
      </article>
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
