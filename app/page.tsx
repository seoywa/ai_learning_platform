import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      
      <section className="home-section">
        <CompanionCard 
          id={'123'} name={'Neura the Brainy Explorer'} topic={'Neural network of the brain'}
          subject={'science'}
          duration={45}
          color={'#ffda6e'}
        />
        <CompanionCard 
          id={'456'} name={'Tom the Talker'} topic={'Beauty of the math'}
          subject={'math'}
          duration={30}
          color={'#ffda6e'}
        />
        <CompanionCard 
          id={'789'} name={'Bammy the Number Wizard'} topic={'Neural network of the brain'}
          subject={'language'}
          duration={35}
          color={'#bde7ff'}
        />
      </section>

      <section className="home-section">
        <CompanionList 
          title='Recently completed sessions'
          companions={recentSessions}
          className='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
