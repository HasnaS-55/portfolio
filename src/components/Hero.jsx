import {ScrollVelocity} from './Text-carousel';
import NavBar from './NavBar'
export default function Hero() {
  return (
    <>
      <section className="min-h-screen w-full flex flex-col relative bg-[url('/src/assets/image.png')] bg-cover bg-center items-center justify-end">
        <div className=" w-[95%] flex items-start justify-between absolute top-8  z-10">
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_17_513)">
                <path
                  d="M27.7793 0H2.21484C0.990234 0 0 0.966797 0 2.16211V27.832C0 29.0273 0.990234 30 2.21484 30H27.7793C29.0039 30 30 29.0273 30 27.8379V2.16211C30 0.966797 29.0039 0 27.7793 0ZM8.90039 25.5645H4.44727V11.2441H8.90039V25.5645ZM6.67383 9.29297C5.24414 9.29297 4.08984 8.13867 4.08984 6.71484C4.08984 5.29102 5.24414 4.13672 6.67383 4.13672C8.09766 4.13672 9.25195 5.29102 9.25195 6.71484C9.25195 8.13281 8.09766 9.29297 6.67383 9.29297ZM25.5645 25.5645H21.1172V18.6035C21.1172 16.9453 21.0879 14.8066 18.8027 14.8066C16.4883 14.8066 16.1367 16.6172 16.1367 18.4863V25.5645H11.6953V11.2441H15.9609V13.2012H16.0195C16.6113 12.0762 18.0645 10.8867 20.2266 10.8867C24.7324 10.8867 25.5645 13.8516 25.5645 17.707V25.5645Z"
                  fill="#FCFDFB"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_513">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-[40%] text-right text-[#F4F4F4]">
            <p>
              Passionate Creative Designer and Developer, dedicated to crafting
              innovative solutions and exceptional digital experiences through
              modern technologies
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-26">
            <div className="w-[95%] flex justify-center pl-150">
                <svg width="121" height="121" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.8209 50.2264C56.2709 50.1764 55.7845 50.5817 55.7345 51.1318C55.6845 51.6818 56.0898 52.1682 56.6398 52.2182L56.7304 51.2223L56.8209 50.2264ZM87.0236 53.9762L88.0194 53.8857C87.9757 53.4049 87.5948 53.024 87.1141 52.9803L87.0236 53.9762ZM88.7816 84.3599C88.8316 84.91 89.318 85.3153 89.868 85.2653C90.418 85.2153 90.8234 84.7289 90.7734 84.1789L89.7775 84.2694L88.7816 84.3599ZM53.2693 86.3162C52.8788 86.7067 52.8788 87.3399 53.2693 87.7304C53.6599 88.121 54.293 88.121 54.6836 87.7304L53.9764 87.0233L53.2693 86.3162ZM56.7304 51.2223L56.6398 52.2182L86.933 54.9721L87.0236 53.9762L87.1141 52.9803L56.8209 50.2264L56.7304 51.2223ZM87.0236 53.9762L86.0277 54.0667L88.7816 84.3599L89.7775 84.2694L90.7734 84.1789L88.0194 53.8857L87.0236 53.9762ZM87.0236 53.9762L86.3165 53.2691L53.2693 86.3162L53.9764 87.0233L54.6836 87.7304L87.7307 54.6833L87.0236 53.9762ZM123.375 70.5H122.375C122.375 99.1498 99.1498 122.375 70.5 122.375V123.375V124.375C100.254 124.375 124.375 100.254 124.375 70.5H123.375ZM70.5 123.375V122.375C41.8502 122.375 18.625 99.1498 18.625 70.5H17.625H16.625C16.625 100.254 40.7457 124.375 70.5 124.375V123.375ZM17.625 70.5H18.625C18.625 41.8502 41.8502 18.625 70.5 18.625V17.625V16.625C40.7457 16.625 16.625 40.7457 16.625 70.5H17.625ZM70.5 17.625V18.625C99.1498 18.625 122.375 41.8502 122.375 70.5H123.375H124.375C124.375 40.7457 100.254 16.625 70.5 16.625V17.625Z" fill="#C6C6C6"/>
</svg>

            </div>
            <div className='w-full'>
                
  
<ScrollVelocity
  texts={['Full Stuck Developer ✦ ']} 
  
  className=" text-9xl text-white custom-scroll-text"
/>
            </div>
            <div className='mb-6'>
                <NavBar />
            </div>

        </div>
      </section>
    </>
  );
}
