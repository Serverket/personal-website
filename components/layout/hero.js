function Hero() {

    return (
      
      <div className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="min-h-screen flex justify-center items-center">

        <nav id="header" className="fixed w-full top-0 dark:text-gray-100 text-black backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 dark:firefox:bg-opacity-90 dark:bg-opacity-20 z-30">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
            <div className="sm:ml-4 pl-4 flex items-center">
              <div className="dark:text-green-500 text-black no-underline hover:no-underline font-mono text-2xl lg:text-4xl" href="#">
                ┌──[serverket@home]─[/]
                <br/>
                └──╼ $ 
                <div className="inline-block w-4 h-7 dark:bg-green-500 bg-black ml-2 animate-pulse"></div>
              </div>
            </div>
          </div>
          <hr className="border-b dark:border-green-500 border-black opacity-25 my-0 py-0" />
        </nav>

        <div className="flex flex-col">


        <div className="md:flex md:flex-wrap justify-between py-7 px-7 dark:text-green-500 text-black">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-6xl dark:text-green-500 mb-3 md:mt-7 mt-4 mr-3">I'm Manuel Hernandez</h2>
            <p className="mb-6 dark:text-yellow-400 font-mono"><span className="inline-block w-3 h-1 dark:bg-yellow-500 bg-black mr-1 animate-pulse"></span>Computer Engineer</p>
            <button type="button" className="focus:no-underline focus:outline-none bg-gradient-to-r from-yellow-300 to-green-500 dark:from-yellow-300 focus:from-yellow-200 focus:to-yellow-500 p-4 rounded-lg text-black transition duration-300 transform hover:-translate-y-0 hover:scale-110 no-underline">See my work at <span className="font-semibold">Parrot Security</span></button>
          </div>
            <div className="md:w-1/2 filter grayscale blur-md contrast-200">
            <img src="/skt.png" alt="Happy Hacker" className="h-full "/>
          </div>
        </div>


        </div>
        

        </div>
      </div>
    );
  }

  export default Hero;