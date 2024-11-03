import './footer.css'
const Footer = () => {
    return (
        <div className="bg-black text-white mt-52 relative z-0">
            <div className="flex justify-center items-center py-44">
            <img src="https://i.ibb.co.com/QFRJ1xf/logo-footer.png" alt="" />
            </div>
            <div className="flex justify-around items-start pb-24 border-b-2 border-solid border-b-gray-700">
               <div>
                 <p className="font-bold text-xl">About Us</p>
                 <p>We are a passionate team <br></br> dedicated to providing the best<br></br> services to our customers.</p>
               </div>
               <div>
                 <p className="font-bold text-xl">Quick Links</p>
                 <ul>
                     <li>Home</li>
                     <li>Service</li>
                     <li>About</li>
                     <li>Contact</li>
                 </ul>
               </div>
               <div>
                 <p className="font-bold text-xl">Subscribe</p>
                 <p>Subscribe to our newsletter for the latest updates.</p>
                 <form action="" className="h-20">
                    <input type="email" placeholder="Enter Your Email" />
                    <button className="bg-gradient-to-tr from-red-400 to-orange-500 px-2">Subscribe</button>
                 </form>
               </div>
           </div>
           <p className="text-center py-5">@2024 Your Company All Rights Reserved.</p>
           <div className="flex justify-center items-center bg-style absolute z-0 h-64 w-auto -top-32 text-black left-1/3 p-12 rounded-2xl">
            <div>
            <p className='text-2xl font-bold'>Subscribe to our Newsletter</p>
            <p className='font-bold text-gray-600'>Get the latest updates and news right in your inbox!</p>
            <div className='flex gap-2'>
            <input type="email" placeholder="Enter Your Email" />
            <button className="bg-gradient-to-tr from-red-400 to-orange-500 px-2">Subscribe</button>
            </div>
            </div>
           </div>
        </div>
    );
};

export default Footer;