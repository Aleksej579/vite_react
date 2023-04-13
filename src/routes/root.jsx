import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Switch_component from "../components/Switch_component"

export default function Root() {
  const { t, i18n } = useTranslation();
  return (
    <section className="flex h-screen mb-0">
      <nav className="w-1/6 flex flex-col items-center border-r-4 bg-slate-800 dark:bg-violet-950 text-violet-200 dark:text-violet-400">
        <motion.figure className='mb-[30px]' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <img 
            className="rounded mx-auto h-[100px]"  
            src="https://i.imgur.com/5hbLSJb.jpeg" 
            alt="Tony Stark" 
            />
          <figcaption className="text-center italic">Iron Man</figcaption>
        </motion.figure>

        <ul className="w-full text-center">
          <li className="hover:bg-fuchsia-900">
            <Link className="block" to={`/about`}>{t('about')}</Link>
          </li>
          <li className="hover:bg-fuchsia-900">
            <Link className="block" to={`/contact`}>{t('contact')}</Link>
          </li>
          <li className="hover:bg-fuchsia-900">
            <Link className="block" to={`/test`}>{t('test_p')}</Link>
          </li>
          <li className="hover:bg-fuchsia-900">
            <Link className="block" to={`/recharts`}>{t('recharts_p')}</Link>
          </li>
        </ul>

        <div className="flex justify-center">
          <button onClick={() => i18n.changeLanguage('en')} className="border m-2 px-3 rounded hover:bg-fuchsia-950">ENGLISH</button>
          <button onClick={() => i18n.changeLanguage('kr')} className="border m-2 px-3 rounded hover:bg-fuchsia-950">KOREAN</button>
        </div>

        <Switch_component />
      </nav>


      <div className="w-full bg-pink-100 dark:bg-violet-900 dark:text-violet-400 overflow-auto">
        <Outlet />
      </div>
    </section>
  );
}