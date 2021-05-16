import { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import HeadingComponent from "../../Components/HeadingComponent";
import SocialIcons from "../../Components/SocialIcons";
import useWindowDimensions from "../../helper";

export default function ContactMeScreen() {
  const [smScreen, setSmScreen] = useState(false);

  let w, h;
  if (typeof window !== "undefined") {
    const { width, height } = useWindowDimensions();
    w = width;
    h = height;
  }

  useEffect(() => {
    if (w >= 320 && w < 639) {
      setSmScreen(true);
    } else if (w >= 640 && w < 767) {
      setSmScreen(false);
    } else if (w >= 768 && w < 1023) {
      setSmScreen(false);
    } else if (w >= 1024 && w < 1279) {
      setSmScreen(false);
    } else if (w >= 1280 && w < 1535) {
      setSmScreen(false);
    }
  }, [w]);
  return (
    <div
      className="relative "
      id="contact"
      style={{ height: smScreen ? "80vh" : "100vh" }}
    >
      {/* p-16 ssm:pl-0 pt-28 ssm:p-5 */}
      <div className="p-16 pt-28 ssm:pl-0 ssm:p-5 small:pl-5 ">
        <HeadingComponent heading="Get In Touch" />
        <div className="p-16 ssm:p-0 ">
          <p className="text-Slate cursor-pointer mb-5 text-base ssm:mt-10 ">
            Feel free to drop a mail at{" "}
            <span className="text-Green hover:underline">
              <a href="mailto:jatin.akash@gmail.com">jatin.akash@gmail.com</a>
            </span>{" "}
            .
          </p>
          <p className="text-Slate cursor-pointer text-base ">
            Also, have a look at my{" "}
            <span className="text-Green hover:underline">
              <a href="/resume/resume.pdf" download>
                résumé
              </a>
            </span>{" "}
            .
          </p>
        </div>
        <div
          className="hidden ssm:block ssm:flex justify-around absolute w-full "
          style={{
            alignItems: "center",
            bottom: 100,
            height: 50,
          }}
        >
          <SocialIcons />
        </div>
        <div
          className="flex justify-center items-center transform bottom-0 absolute ssm:mt-5"
          style={{
            width: smScreen ? "300px" : "90%",
            bottom: smScreen ? 30 : 10,
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}
