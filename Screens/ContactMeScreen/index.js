import Footer from "../../Components/Footer";
import HeadingComponent from "../../Components/HeadingComponent";
import SocialIcons from "../../Components/SocialIcons";

export default function ContactMeScreen() {
  return (
    <div className="h-screen ssm:h-96 relative"  id="contact">
      <div className="p-16 pt-24 ssm:p-0 ssm:mb-10 ssm:mt-10 small:pl-5">
        <HeadingComponent heading="Get In Touch" />
        <div className="p-16 ssm:p-5">
          <p className="text-Slate cursor-pointer mb-5 text-base">
            Feel free to drop a mail at{" "}
            <span className="text-Green hover:underline">
              <a href="mailto:jatin.akash@gmail.com">jatin.akash@gmail.com</a>
            </span>{" "}
            .
          </p>
          <p className="text-Slate cursor-pointer text-base">
            Also, have a look at my{" "}
            <span className="text-Green hover:underline">
              <a href="/resume/resume.pdf" download>
                résumé
              </a>
            </span>{" "}
            .
          </p>
        </div>
        <div className="hidden ssm:block ssm:flex justify-around  items-center absolute bottom-28 w-full ssm:mb-0">
          <SocialIcons />
        </div>
        <Footer />
      </div>
    </div>
  );
}
