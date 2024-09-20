import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
// import 'swiper/swiper.css' // простой импорт не сработал
import '../../../node_modules/swiper/swiper.css'


import Slide from './Slide';

const StickySlider = (props) => {
    const [swiper, updateSwiper] = useState(null);
    const [translate, updateTranslate] = useState(0);
    const [transition, updateTransition] = useState(0);

    const params = {
        slidesPerView: 4
    };

    useEffect(() => {
        if (swiper) {
          swiper.on('setTranslate', (t) => {
            console.log(t, 'translate');
            updateTranslate(t);
          });
          swiper.on('setTransition', (t) => {
            console.log(t, 'transition');
            updateTransition(t);
          });
        }
      }, [swiper]);

    return (
        <Swiper getSwiper={updateSwiper} {...params}>
            {
                props.data.map((item, idx) => (
                    <div key={idx}>
                        <Slide translate={translate} transition={transition} source={item.poster} movieId={item.id}>
                            {item.title}
                        </Slide>
                    </div>
                ))
            }
        </Swiper>
    );

}

export default StickySlider;