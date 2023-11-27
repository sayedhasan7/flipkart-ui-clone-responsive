import React from 'react'

function Section3() {
  return (
    <section>
      <div className="m-3 bg-white main">
        <div className="flex flex-wrap md:flex-row-reverse flex-col">
          <div className="small side md:w-1/5 border w-full">
            <img className='block mx-auto my-5' src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/c3189f057185c2bc.jpg?q=20" alt="" />
          </div>
          <div className="large md:w-4/5 w-full">
            <h1 className='mx-5 py-5'>Best of Electronics</h1>
            <div className="w-full flex flex-col md:flex-row">
              <div className="flex flex-col mx-4 p-2 border items-center">
                <div className="">
                  <img className="w-full h-full object-cover" src="https://rukminim1.flixcart.com/image/220/220/pendrive/utility-pendrive/y/3/f/sandisk-blade64-original-imadz5em37gghfkd.jpeg?q=80" alt="Your Image" />
                </div>

                <div className="mt-2 px-4 text-center">
                  <p className="text-lg font-semibold">Pendrives & SD Cards</p>
                  <p>from 300$</p>
                </div>
              </div>
              <div className="flex flex-col mx-4 p-2 border items-center">
                <div className="">
                  <img className="w-full h-full object-cover" src="https://rukminim1.flixcart.com/image/280/280/l4pxk7k0/usb-gadget/g/8/v/dlk5526cg-11-philips-original-imagfjxzfsgu7nvu.jpeg?q=80" alt="Your Image" />
                </div>

                <div className="mt-2 px-4 text-center">
                  <p className="text-lg font-semibold">Pendrives & SD Cards</p>
                  <p>from 300$</p>
                </div>
              </div>
              <div className="flex flex-col mx-4 p-2 border items-center">
                <div className="">
                  <img className="w-full h-full object-cover" src="https://rukminim1.flixcart.com/image/280/280/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=80" alt="Your Image" />
                </div>

                <div className="mt-2 px-4 text-center">
                  <p className="text-lg font-semibold">Pendrives & SD Cards</p>
                  <p>from 300$</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3