import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import bgvideo from "../assets/mlsc.mp4";
import Background from "../components/Background/Background";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const ctnPreloader = document.getElementById("ctn-preloader");

    setTimeout(() => {
      ctnPreloader.classList.add("loaded");
      document.body.classList.remove("no-scroll-y");

      if (ctnPreloader.classList.contains("loaded")) {
        setTimeout(() => {
          preloader.parentNode.removeChild(preloader);
          setLoading(false);
        }, 1000);
      }
    }, 4000);
  }, []);

  return (
    <>
      <Background />
      {loading ? (
        <section>
          <div id="preloader">
            <div id="ctn-preloader" className="ctn-preloader">
              <div className="animation-preloader">
                <video src={bgvideo} autoPlay muted></video>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="app-container">
          <ScrollToTop />
          <Navbar />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default Root;
