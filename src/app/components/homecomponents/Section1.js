import React from 'react'

function Section1() {
    const category = [
        {
            name: "Grocery",
            src: "https://rukminim1.flixcart.com/flap/58/58/image/29327f40e9c4d26b.png?q=100"
        }, {
            name: "Mobiles",
            src: "https://rukminim1.flixcart.com/flap/58/58/image/22fddf3c7da4c4f4.png?q=100"
        }, {
            name: "fashion",
            src: "https://rukminim1.flixcart.com/fk-p-flap/58/58/image/0d75b34f7d8fbcb3.png?q=100"
        }, {
            name: "Electronic",
            src: "https://rukminim1.flixcart.com/flap/58/58/image/69c6589653afdb9a.png?q=100"
        }, {
            name: "Furniture",
            src: "https://rukminim1.flixcart.com/flap/58/58/image/ab7e2b022a4587dd.jpg?q=100"
        }, {
            name: "Appliances",
            src: "https://rukminim1.flixcart.com/fk-p-flap/58/58/image/0139228b2f7eb413.jpg?q=100"
        }, {
            name: "Travel",
            src: "https://rukminim1.flixcart.com/flap/58/58/image/71050627a56b4693.png?q=100"
        }, {
            name: "Beauty,Toys",
            src: "https://rukminim1.flixcart.com/flap/58/58/image/dff3f7adcf3a90c6.png?q=100"
        }, {
            name: "Two Wheelers",
            src: "https://rukminim1.flixcart.com/fk-p-flap/58/58/image/05d708653beff580.png?q=100"
        }
    ]
    return (
        <section className='bg-gray-200'>
            <div className="mx-3 my-2 lg:px-8 px-5 py-2 pb-5 bg-white flex lg:flex-wrap h-[130px] overflow-x-auto overflow-y-hidden lg:justify-evenly justify-between scroll-smooth category">
                {/* Nine equally distributed divs */}
                {category.map((item) => {
                    return <div key={item.name} className="w-[100px] lg:mx-0 mx-5 lg:px-0 h-fit cursor-pointer ">
                        <div className=" h-[7.5rem] flex flex-col items-center justify-center">
                            {/* Content for each div */}
                            <img className='h-[64px] w-[64px]' src={item.src} alt="" />
                            <p className="text-sm py-2 font-semibold">{item.name}</p>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Section1