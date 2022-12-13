import React from 'react'
import Methods from "../assets/imgs/methods.png";
const Copyrights = () => {
  return (
    <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
            <p className="text-white">© TailCommerce - All Right Reserved</p>
            <div>
                <img src={Methods} alt="methods" className="h-5" />
            </div>
        </div>
    </div>
  )
}

export default Copyrights;