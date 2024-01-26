import coffeeBanner from "../assets/CoffeeBanner.jpg";
import { features } from "../assets/constants";

function BannerSection() {
  return (
    <>
      <section className=" banner-section flex mb-20">
        <div className="">
          <div className="mb-12">
            <h1 className="text-[48px] leading-[1.3] font-extrabold my-4">
              find the perfect coffee for any time of day
            </h1>
            <p className="text-[20px] leading-[1.3]">
              With Coffe Delivery you recieve your coffee wherever you are,
              anytime
            </p>
          </div>
          <div className="list grid  sm:grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-3">
                <div className={`${feature.bg} rounded-full p-2`}>
                  <img src={feature.imgURL} alt={feature.alt} />
                </div>
                <div>
                  <p className="align-middle text-[1rem]">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={coffeeBanner}
          alt=""
          className="coffer-banner hidden lg:block max-w-full h-auto"
        />
      </section>
    </>
  );
}

export default BannerSection;
