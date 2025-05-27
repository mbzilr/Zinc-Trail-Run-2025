import SwiperComponent from './Swiper/Swiper';

export default function InfoBoard() {
    // Example images array for the Swiper
    const images = [
        '/assets/Poster1.jpg',
        '/assets/ZINC_hq.png',
        '/assets/ZINC_lq.png',
        '/assets/brandKit/LOGO_ZTR-01.png',
    ];
    return (
        <div
            id="infoboard"
            className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-7.5 w-full md:scale-60 md:-my-32"
        >
            <div className="flex flex-col h-fit gap-2 border border-gray-400 font-[400] text-[32px] text-black rounded-xl shadow-lg p-4">
                Slider Component
                <div className="w-full p-4 rounded-lg shadow-md border-2 border-zinc-100">
                    <SwiperComponent images={images} loop={true} />
                </div>
            </div>
            <div className="flex flex-col gap-2 border border-gray-400 text-[32px] font-[400] text-black rounded-xl shadow-lg p-4">
                Video & Info Poster
                <div className="w-full p-4 rounded-lg shadow-md border-2 border-zinc-100">
                    <video className="md:w-1/2 h-auto justify-self-center border-black border rounded-lg mb-16" autoPlay loop muted>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <img src="/assets/Poster1.jpg" alt="Placeholder" className="justify-self-center w-96 h-128 border-black border rounded-lg mt-2" />
                </div>
            </div>
        </div>
    );
}
