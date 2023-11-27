'use client'
import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Link from 'next/link';

const Navbar = () => {
  const [sidebartoggle, setsidebartoggle] = useState(true)
  const sidebardata = [{
    name: " Super Coin Zone",
    src: "https://rukminim2.flixcart.com/www/200/28/promos/05/07/2019/37c19766-0af6-45c8-866a-720adfa534e2.png?q=60"
  },
  {
    name: "Flipkart Plus Zone",
    src: "https://rukminim2.flixcart.com/www/200/28/promos/11/07/2018/70e5346e-fce4-4718-8e56-27be8492faa5.png?q=60"
  }, {
    name: "All Categories",
    src: "https://rukminim2.flixcart.com/www/200/28/promos/13/11/2019/d19caf2b-e593-4e6b-93e5-a6c388210736.png?q=60"
  },{
    name:"Trending Stores",
    src:"https://rukminim2.flixcart.com/www/200/28/promos/26/01/2022/4495e6c3-7a67-4e74-b754-31aa3bd64272.png?q=60"
  },{
    name:"More on Flipkart",
    src:"https://rukminim2.flixcart.com/www/200/28/promos/15/06/2020/3c2eff2c-685f-4002-b3c9-d6942563af76.jpg?q=60"
  },{
    name:"Choose Language",
    src:"https://rukminim2.flixcart.com/www/200/28/promos/01/08/2019/23d1528b-d57d-440e-a21f-f374f518b6ed.png?q=60"
  },{
    name:"Offer Zone",
    src:"https://rukminim2.flixcart.com/www/200/28/promos/08/04/2016/a12880b1-9c2b-4b4b-9029-31ba9ff666bf.png?q=60"
  },{
    name:"Sell on Flipkart",
    src:"https://rukminim2.flixcart.com/www/200/28/promos/18/01/2019/c79d21c6-b201-42a7-b37c-6405c6c4fbf5.png?q=60"
  },{
    name:"My Orders",
    src:"https://rukminim2.flixcart.com/www/200/28/promos/10/03/2017/b7a79d1a-e088-4c4b-951f-9b8214719cc9.png?q=60"
  },{
    name:"Coupons",
    src:"https://rukminim2.flixcart.com/www/200/28/promos/31/08/2016/3afaefd4-3961-4cac-921c-b9517c96ad47.png?q=60"
  },{
    name:"My Cart",
    src:"https://rukminim2.flixcart.com/www/200/28/promos/10/03/2017/920f4fcd-8977-43a9-9014-abcad558de8d.png?q=60"
  },{
    name:"My Wishlist",
    src:"https://rukminim2.flixcart.com/www/200/28/promos/10/03/2017/1f81361d-9a8e-494a-bd15-6d647c9bd8a7.png?q=60"
  },{
    name:"My Account",
    src:"https://rukminim2.flixcart.com/www/200/28/promos/07/04/2016/c35cca9e-2d7a-4583-9770-32a97ddf1c9b.png?q=60"
  },{
    name:"My Notifications",
    src:"https://rukminim2.flixcart.com/www/200/28/promos/10/03/2017/f93182c9-5b3e-4f06-950d-c41745611f00.png?q=60"
  }
]

  return (
    <>
      <div className={`sidebarcontainer h-screen z-10 w-screen absolute  ${sidebartoggle ? "hidden" : "block"}`}>
        <div onClick={() => { setsidebartoggle(!sidebartoggle) }} className={`sidebar h-screen lg:hidden w-screen -z-10 absolute ${sidebartoggle ? "hidden" : "block"} bg-opacity-25 bg-black `}>
        </div>
        <div className={`sidebarmain w-[72vw] lg:hidden h-full bg-white z-20 flex-col ${sidebartoggle ? "hidden" : "block"}`}>
          <div className="flex w-full p-4 bg-primary">
            <div className="flex h-[24px] w-full">
              <img className='h-[20px] w-[20px]' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+CiAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNyAwYTMuNSAzLjUgMCAxIDEgMCA3IDMuNSAzLjUgMCAwIDEgMC03em0wIDguNzVjMy44NjcgMCA3IDEuNTY2IDcgMy41VjE0SDB2LTEuNzVjMC0xLjkzNCAzLjEzMi0zLjUgNy0zLjV6Ii8+Cjwvc3ZnPgo=" alt="" />
              <span className='ml-4 text-white'> Flipkart Customer</span>
              <img className='ml-auto' src="/favicon.ico" alt="" />
            </div>
          </div>
          {
            sidebardata.map((item) => {
              return  <div id={item.name} className="flex w-full px-4 py-3 bg-white">
              <div className="flex h-[17px] w-full">
                <img className='h-[20px] w-[20px]' src={item.src} alt="" />
                <span className='ml-4 font-medium text-gray-500'>{item.name}</span>
              </div>
            </div>
            })
          }
          <div className="divide-2"></div>
           <div  className="flex w-full px-4 py-3 bg-white">
              <div className="flex h-[17px] w-full">
                <span className='font-medium text-gray-500'>Notification Preferences</span>
              </div>
            </div>
           <div  className="flex w-full px-4 py-3 bg-white">
              <div className="flex h-[17px] w-full">
                <span className='font-medium text-gray-500'>Help centre</span>
              </div>
            </div>
           <div  className="flex w-full px-4 py-3 bg-white">
              <div className="flex h-[17px] w-full">
                <span className='font-medium text-gray-500'>Legal</span>
              </div>
            </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative h-28 lg:h-[67px] bg-primary lg:bg-white shadow dark:bg-gray-800">
        <div className="hidden justify-center lg:block h-full px-5 py-1.5 mx-auto" id='desktop'>
          <div className="flex w-full h-full" >
            <div className="flex h-full w-3/5 justify-center max-[1160px]:w-full">
              <Link className='ml-[4.5rem]' href="/">
                <img className=" h-full" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg" alt="" />
              </Link>
              <Searchbar />
            </div>
            <div className="flex w-2/5 h-full max-[1160px]:w-1/4 max-[1160px]:justify-between">
              <div className="flex flipkart relative text-gray-600 hover:bg-gray-50 px-3 hover:rounded border border-transparent cursor-pointer hover:border-gray-400 hover:border my-2 justify-start items-center w-2/3 max-[1160px]:w-fit max-[1160px]:pr-2"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" className='mr-2' alt="" /><span>Flipkart</span>
                <div className="absolute lg:w-[200px] 2xl:w-[300px ] z-10 w-full left-0 flipkartmenu hidden hover:block top-10">
                  <ul className='block text-sm text-gray-500 font-medium  rounded-md bg-white'>
                    <a className='flex hover:bg-gray-100 py-2.5 px-4 items-center' href="">
                      <img className='h-5 mr-2' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" />
                      <li className='w-full hover:bg-gray-100'>My Profile</li>
                    </a>
                    <a className='flex hover:bg-gray-100 py-2.5 px-4 items-center' href="">
                      <img className='h-5 mr-2' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/supercoin-ce8408.svg" alt="" />
                      <li className='w-full hover:bg-gray-100'>SuperCoin Zone</li>
                    </a>
                    <a className='flex hover:bg-gray-100 py-2.5 px-4 items-center' href="">
                      <img className='h-5 mr-2' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="" />
                      <li className='w-full hover:bg-gray-100'>Flipkart Plus</li>
                    </a>
                    <a className='flex hover:bg-gray-100 py-2.5 px-4 items-center' href="">
                      <img className='h-5 mr-2' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="" />
                      <li className='w-full hover:bg-gray-100'>Order</li>
                    </a>
                    <a className='flex hover:bg-gray-100 py-2.5 px-4 items-center' href="">
                      <img className='h-5 mr-2' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="" />
                      <li className='w-full hover:bg-gray-100'>Wishlist</li>
                    </a>
                    <a className='flex hover:bg-gray-100 py-2.5 px-4 items-center' href="">
                      <img className='h-5 mr-2' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" alt="" />
                      <li className='w-full hover:bg-gray-100'>Gift Cards</li>
                    </a>
                    <a className='flex hover:bg-gray-100 py-2.5 px-4 items-center' href="">
                      <img className='h-5 mr-2' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" alt="" />
                      <li className='w-full hover:bg-gray-100'>Notification</li>
                    </a>
                    <a className='flex rounded-md hover:bg-gray-100 py-2.5 px-4 items-center' href="">
                      <img className='h-5 mr-2' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logout-e63ddf.svg" alt="" />
                      <li className='w-full hover:bg-gray-100'>logout</li>
                    </a>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center border border-transparent my-2 w-1/2 max-[1160px]:w-fit "><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" className='mr-2' alt="" /><span className='max-[1160px]:hidden'>Cart</span></div>
              <div className="flex justify-center items-center border border-transparent my-2 w-full  max-[1160px]:w-fit "><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="" /><span className='ml-1 max-[1160px]:hidden'>Become a Seller</span></div>
              <div className="flex hover:bg-gray-50 mx-5 hover:rounded hover:border-gray-400 hover-border justify-center items-center border border-transparent cursor-pointer my-2 w-1/5 max-[1160px]:w-fit max-[1160px]:mx-0"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" className='m-auto' alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden px-2 mx-auto" id='mobile'>
          <div className="flex-col h-full flex gap-1 w-full">
            <div className='h-[52px] flex'>
              <div className="flex py-2 h-[52px]">
                <button className='ml-2' onClick={() => { setsidebartoggle(!sidebartoggle) }}><svg fill="#fff" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></button>
                <Link className='my-auto' href="/">
                  <img className="h-[30px] w-[85px] ml-2" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-explorePlus-c5de64.png" alt="" />
                </Link>
              </div>
              <div className="h-[52px] ml-auto flex">
                {/* First div */}
                <div className="w-1/3 py-4 px-2">
                  <img className=" h-[20px] w-[20px]" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMiAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0yNTQuMTIgNTMuNjE3Yy4wMjkgMS4wMS4xMDEgMi4zODIuMTUgMi42OC4wMjUuMTUyLjE1Ni4yNjMuMzEuMjYzbC42NzIuMDIxYy4xNTQgMCAuMTc1LS4xMTEuMTk5LS4yNjQuMDQ5LS4zMDQuMTIyLTEuNjkyLjE1MS0yLjY5NyAxLS4wMjkgMi4zOTItLjEwMiAyLjY5Ny0uMTUxLjE1My0uMDI0LjI2NC0uMDQ1LjI2NC0uMTk5bC0uMDIxLS42NzJjMC0uMTU0LS4xMTEtLjI4NS0uMjYzLS4zMS0uMjk4LS4wNDktMS42NjktLjEyMS0yLjY4LS4xNS0uMDMxLS45ODYtLjEwMi0yLjMxMi0uMTQ5LTIuNjE1LS4wMjQtLjE1My0uMDQ0LS4yNjYtLjItLjI2NmwtLjY2OS0uMDIxYy0uMTU1IDAtLjI4Ni4xMTItLjMxLjI2NC0uMDQ4LjI5OS0uMTE5IDEuNjQxLS4xNDkgMi42NC0uOTk4LjAzLTIuMzQuMTAyLTIuNjQuMTQ5LS4xNTMuMDI0LS4yNjQuMTU2LS4yNjQuMzFsLjAyMS42NjljMCAuMTU1LjExMy4xNzYuMjY2LjIuMzAzLjA0NyAxLjYyOS4xMTggMi42MTUuMTQ5bTUuNzY1IDYuMzgzaC05LjYyMWMtLjQxMyAwLS43NjUtLjI2Ny0uODMxLS42MzMtLjE2Ni0uOTEzLS40MzUtNC43MDEtLjQzNS02Ljg2NyAwLTIuMTA0LjI3My01LjkzMi40MzgtNi44NjQuMDY1LS4zNjcuNDE4LS42MzYuODMyLS42MzZoOS42MTNjLjQxNiAwIC40NzEuMjcxLjUzNS42NC4xNjUuOTU2LjQ0MiA0LjgzNS40NDIgNi44NiAwIDIuMTEzLS4yNzIgNS45MzUtLjQzOCA2Ljg2NS0uMDY1LjM2Ny0uMTIuNjM1LS41MzQuNjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LTQ1KSIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=" alt="Image 1" />
                </div>

                {/* Second div */}
                <div className="w-1/3 py-4 px-2">
                  <svg width="20px" height="20px" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd"><path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804"></path><path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245"></path><path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066"></path><path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503"></path><path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516"></path></g></svg>
                </div>

                {/* Third div */}
                <div className="w-1/3 py-4 px-2">
                  <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd"><path d="m5.948 6.447c0 1.861 1.552 3.369 3.467 3.369 1.914 0 3.466-1.509 3.466-3.369 0-1.862-1.552-3.37-3.466-3.37-1.915 0-3.467 1.509-3.467 3.37m8.289 5.682c-.121-.041-.245-.075-.37-.102 0 0-1.153-.456-4.367-.456-3.214 0-4.367.456-4.367.456-1.735.343-3.133 2.108-3.133 3.878v2.095h9.357c-.229-.525-.357-1.105-.357-1.714 0-2.01 1.377-3.689 3.237-4.157m.215 5.623l.55.555.532-.573 2.973-3.2c.282-.303.264-.778-.039-1.06-.303-.282-.778-.264-1.06.039l-2.406 2.486-.698-.528c-.292-.294-.766-.297-1.061-.005-.294.292-.297.766-.005 1.061l1.213 1.225" fill="#fff"></path></g></svg>
                </div>
              </div>
            </div>
            <div className='h-[52px]'>
              <div className="h-full ">
                <Searchbar />
              </div>
            </div>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
