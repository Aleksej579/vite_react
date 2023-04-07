import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Root() {
  const { t, i18n } = useTranslation();
  return (
    <section className="flex h-screen mb-0">
      <nav className="w-1/6 border-r-4 bg-slate-800 text-white">
        <motion.figure className='mb-[30px]' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <img 
            className="rounded mx-auto h-[100px]"  
            src="https://i.imgur.com/5hbLSJb.jpeg" 
            alt="Tony Stark" 
            />
          <figcaption className="text-center italic">Iron Man</figcaption>
        </motion.figure>

        <ul className="divide-y">
          <li className="pl-2 hover:bg-fuchsia-950">
            <Link className="block" to={`/about`}>{t('about')}</Link>
          </li>
          <li className="pl-2 hover:bg-fuchsia-950">
            <Link className="block" to={`/contact`}>{t('contact')}</Link>
          </li>
        </ul>

        <div className="flex justify-center">
          <button onClick={() => i18n.changeLanguage('en')} className="border m-2 px-3 rounded hover:bg-fuchsia-950">ENGLISH</button>
          <button onClick={() => i18n.changeLanguage('kr')} className="border m-2 px-3 rounded hover:bg-fuchsia-950">KOREAN</button>
        </div>
      </nav>


      <div className="w-full bg-pink-100 overflow-auto">
        <Outlet />
      </div>
    </section>
  );
}