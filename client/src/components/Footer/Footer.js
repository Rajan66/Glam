import copyrightSign from "../../images/icons/copyright-sign.svg";
import footerLogo from "../../images/logo.png";
import { footerLinks, socialMedia } from "../../constants";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a style={{ textDecoration: 'none', color: 'white' }} href='/'>
            <h2 className="font-montserrat italic">GlamHour</h2>
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm'>
            Get ready to glam up, stand out, and redefine beauty standards. Visit us today and let your beauty shine!
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-end gap-20 lg:gap-10 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white ml-[30px]'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li

                    className='mt-3 font-montserrat text-base leading-normal text-white hover:text-slate-gray'
                    key={link.name}
                  >
                    <a style={{ textDecoration: 'none', color: 'white' }} href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p className='m-0'>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;