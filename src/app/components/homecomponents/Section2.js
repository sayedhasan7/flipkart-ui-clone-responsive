'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
function Section2() {

    let data = [
        {
            id: 1,
            src: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4eed11b0faee9cec.jpg?q=20",
            srcs: "https://rukminim2.flixcart.com/fk-p-flap/800/350/image/0f6d5bc2e0f904b2.jpg?q=20"
        },
        {
            id: 2,
            src: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b21b5be304d115cd.jpg?q=20",
            srcs: "https://rukminim2.flixcart.com/fk-p-flap/800/350/image/2daba539cda3c4a6.jpg?q=20"
        },
        {
            id: 3,
            src: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2d532e1aaa8cc8e7.jpg?q=20",
            srcs: "https://rukminim2.flixcart.com/fk-p-flap/800/350/image/85e84561e7a99cf5.jpg?q=20"
        },
        {
            id: 4,
            src: "https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/ed12b7707a04473c.jpg?q=20",
            srcs: "https://rukminim2.flixcart.com/fk-p-flap/800/350/image/f012c28aead7f626.jpeg?q=20"
        },
        {
            id: 5,
            src: "https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/9f2d8a698cd97710.jpg?q=20",
            srcs: "https://rukminim2.flixcart.com/fk-p-flap/800/350/image/cd246a098e1d54cf.jpeg?q=20"
        }
    ]

    return (
        <>
        <div className="mx-3">

        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            loop={true}
            keyboard={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Mousewheel, Autoplay, Keyboard]}
            className="Swiper1 h-[250px] md:h-[221px] w-full"
        >
            {
                data.map((item) => {
                    return <SwiperSlide key={item.id} className='relative'>
                        <div className="h-full w-full ">
                            <picture>
                                <source media="(max-width: 799px)" srcSet={item.srcs} />
                                <source media="(min-width: 800px)" srcSet={item.src} />
                                <img className='h-full w-full absolute' src={item.src} alt="Responsive Image" />
                            </picture>
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
        </div>
        </>
    )
}

export default Section2