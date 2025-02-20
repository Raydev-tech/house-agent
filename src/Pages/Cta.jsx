import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS styles are imported

const ReadyToFindHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative py-20 bg-blue-500">
      <div className="container p-8 rounded-lg">
        <div
          className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12"
          data-aos="fade-up" // Adding the AOS fade-up animation
        >
          <h2 className="text-2xl font-bold md:text-3xl text-white">Ready to Find Your Dream Home?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white">
            Let us help you find the perfect property. Our expert agents are ready to assist you every step of the
            way.
          </p>
          <button className="mt-6 border-2 border-white text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToFindHome;
