import linkedinIcon from '../assets/icons-white/linkedin-white.png';
import githubIcon from '../assets/icons-white/github-white.png';
import instaIcon from '../assets/icons-white/insta-ico.png';

const Footer = () => {
  return (
    <div className="bg-black md:h-96 px-7">
      <div className="max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between">
        {/* logo and description */}
        <div className="md:w-2/5 my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide">
            GOWTHAM RAJ
          </h4>
          <p className="mt-5 text-sm leading-7 text-[#eee]">
          A Web Developer building the Websites and 
          <br />
          Step into the carear of AI and ML
          </p>
        </div>
        {/* social icons */}
        <div className='my-3'>
          <h4 className="text-white font-bold text-2xl tracking-wider ml-3">
            SOCIAL
          </h4>
          <div className='mt-5 flex gap-3'>
            <a href="" className=''><img src={linkedinIcon} alt="" className='w-7 h-7'/></a>
            <a href="https://github.com/gowthamrajlegend/" className='ml-1'><img src={githubIcon} alt="" className='w-7 h-7'/></a>
            <a href="https://www.instagram.com/gowthamrajlegend/" className='ml-1'><img src={instaIcon} alt="" className= 'm w-10 h-7'/></a>
          </div>
        </div>
      </div>

      <hr className='text-slate-50 opacity-30 px-7'/>

      {/* copyright text */}
      <div>
        <p className='md:my-10 py-10 md:py-0 text-sm leading-7 text-[#eee] text-center'>Made by <a href="" className='underline'>Gowtham Raj (legend)</a></p>
      </div>
    </div>
  );
};

export default Footer;
