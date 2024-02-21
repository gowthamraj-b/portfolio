/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import Insta from "../assets/socials/insta.svg"
import GitHub from "../assets/socials/github.svg";
import { TypeAnimation } from "react-type-animation";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// scroll
import { Link } from "react-scroll";


const Home = () => {
  let Links = [
    { name: "Projects", link: "projects" },
  ];

  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
      {/* hero info */}
      <div className="h-screen flex items-center justify-center">
        <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center md:w-1/2">
          <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
            HEY, I'M <br /> GOWTHAM RAJ
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "If you think math is hard, try web design",
              1000,
              "Have no fear of perfection—you'll never reach it." ,
              1000,
              "You don't have to be 'a creative' to be creative.",
              1000,
              "I strive for two things in design: simplicity and clarity.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          {/* hero info */}
          <p className="text-light text-xl my-8">
          A Web Developer building the Websites and
           <br /> 
           Step into the carear of AI and ML
          </p>
          
          {Links.map((link) => (
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
              >
          <button className="btn py-4 px-16" 
          >PROJECTS</button>
              </Link>
          ))}
          
          

        </motion.div>
      </div>
      {/* hero socials */}
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={LinkedIn} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="https://www.instagram.com/gowthamrajlegend/"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Insta} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="https://github.com/gowthamrajlegend/" 
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="" className="w-10 h-10" />
          </a>
        </div>
      </div>

 
    </div>
  );
};

export default Home;
