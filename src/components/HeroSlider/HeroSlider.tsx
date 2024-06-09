import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './HeroSlider.scss';

const heroSliderData = [
  {
    imgUrl: 'promo/banner-iphone-14-pro.png',
    linkUrl: '/phones/iphone-14',
  },
  {
    imgUrl: 'promo/banner-phones.png',
    linkUrl: '/phones',
  },
  {
    imgUrl: 'promo/banner-tablets.png',
    linkUrl: '/tablets',
  },
  {
    imgUrl: 'promo/banner-accessories.png',
    linkUrl: '/accessories',
  },
];

export const HeroSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const nextSliderImage = useCallback(() => {
    setSliderIndex(prevIndex => (prevIndex + 1) % heroSliderData.length);
  }, []);

  const prevSliderImage = useCallback(() => {
    setSliderIndex(prevIndex =>
      prevIndex === 0 ? heroSliderData.length - 1 : prevIndex - 1,
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSliderImage, 5000);
    return () => clearInterval(interval);
  }, [nextSliderImage]);

  return (
    <div className="hero-slider">
      <div className="hero-slider__top">
        <button
          className="hero-slider__slide-btn"
          type="button"
          onClick={prevSliderImage}
          aria-label="Previous slide"
        >
          <i className="ico ico-left-dark" />
        </button>

        <div className="hero-slider__images">
          {heroSliderData.map((slide, index) => (
            <Link
              to={slide.linkUrl}
              key={slide.linkUrl}
              className="hero-slider__link"
            >
              <img
                src={slide.imgUrl}
                alt={`Slide ${index + 1}`}
                className={cn('hero-slider__image', {
                  active: sliderIndex === index,
                })}
                style={{
                  translate: ` ${-100 * sliderIndex}%`,
                }}
              />
            </Link>
          ))}
        </div>

        <button
          className="hero-slider__slide-btn"
          type="button"
          onClick={nextSliderImage}
          aria-label="Next slide"
        >
          <i className="ico ico-right-dark" />
        </button>
      </div>

      <div className="hero-slider__buttons">
        {heroSliderData.map((slide, index) => (
          <button
            key={slide.linkUrl}
            type="button"
            className={cn('hero-slider__button', {
              active: sliderIndex === index,
            })}
            onClick={() => setSliderIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
