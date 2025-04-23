import React from 'react';
import logo from '../../assets/logo.png';
import fbIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import gitIcon from '../../assets/github.png';
import linkdnIcon from '../../assets/linkdn.png';

const Footer = ({links}) => {
    return (
        <div className='bg-white'>
            <div className='container mx-auto py-10 flex flex-col items-center justify-center'>
                <div className='flex items-center gap-1 mb-4'>
                    <img src={logo} alt="" className='w-10 h-10' />
                    <h1 className='font-extrabold text-3xl'>DocTalk</h1>
                </div>
                <div>
                    <ul className='flex flex-col items-center md:flex-row gap-5 text-lg font-medium'>
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="divider"></div>
                <div className='flex gap-5 items-center' >
                    <a href="https://www.facebook.com/Hedaetshahriarhimon/" target='blank'><img src={fbIcon} alt=""/></a>
                    <a href="https://github.com/HedaetShahriar" target='blank'><img src={gitIcon} alt=""/></a>
                    <a href="https://www.linkedin.com/in/hedaet-shahriar/" target='blank'><img src={linkdnIcon} alt=""/></a>
                    <a href="https://x.com/HedaetShahriar" target='blank'><img src={twitterIcon} alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;