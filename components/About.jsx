'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Button } from './ui/button';

const About = () => {
  return (
    <section 
        className='grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center'
        id='about'
    >
        {/* text */}
        <motion.div 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}  
            className='xl:pl-[135px]'
        >
            <h1 className='mb-9'>
                Let's talk About W'Food
            </h1>
            <p className='mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu 
                lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. 
                Quisque purus magna, auctor 
                et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
            </p>
            <p className='mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam eget ligula eu lectus lobortis condimentum. 
                Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et 
                netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, 
                auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
            </p>
            <Button>Read more</Button> 
        </motion.div>
        {/* img */}
        <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
        >
            <Image 
                src='/about/img.png'
                width={705}
                height={771}
                alt=''
                className='hidden xl:flex' 
            />
        </motion.div>
    </section>
  );
};

export default About;