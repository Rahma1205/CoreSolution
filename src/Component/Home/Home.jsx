import React from 'react'
import { useTranslation } from "react-i18next";

import Hero from '../Hero/Hero'
import Challenge from '../Challenge/Challenge'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import WhyEgypt from '../WhyEgypt/WhyEgypt'
import Services from '../Services/Services'
import Industries from '../Industries/Industries'
import Numbers from '../Numbers/Numbers'
import Pilot from '../Pilot/Pilot'
import Contact from '../Contact/Contact'
import { Helmet } from 'react-helmet-async'


export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
   <Helmet>
      <title>{t("company")}</title>
    </Helmet>
      
     <div className="flex flex-col">
     <Hero />  

      <Challenge/>
      <WhoWeAre/>
      <WhyEgypt/>
      <Services/>
      <Industries/>
      <Numbers/>
      <Pilot/>
      <Contact/>  

     
     </div>
    </>
   
      )
}
