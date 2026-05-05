import React from 'react'
import Hero from '../Hero/Hero'
import Challenge from '../Challenge/Challenge'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import WhyEgypt from '../WhyEgypt/WhyEgypt'
import Services from '../Services/Services'
import Industries from '../Industries/Industries'
import Numbers from '../Numbers/Numbers'
import Pilot from '../Pilot/Pilot'
import Contact from '../Contact/Contact'

export default function Home() {
  return (
    <>

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
