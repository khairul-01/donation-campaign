
const Banner = () => {
   return (
      <div>
         <div className="hero h-[500px] -mt-0" style={{ backgroundImage: 'url(./people-meeting-community-center.jpg)' }}>
            <div className="hero-overlay bg-blend-multiply bg-white bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="">
                  <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
                  <div className="">
                     <input className="rounded-l-md p-4 w-80" type="text" placeholder="Search here" name="" id="" />
                     <input className="bg-red-600 rounded-r-md py-4 px-7" type="button" value="Search" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;