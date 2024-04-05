'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import Nav from './Nav';
import NavMobile from './NavMobile';
import { Button } from './ui/button';

const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Verificar a posição atual da rolagem
            const scrollPosition = window.scrollY;

            // Se a posição de rolagem for maior que 0, definir active como true, caso contrário, definir como false
            setActive(scrollPosition > 0);
        };

        // Adicionar event listener para scroll
        window.addEventListener('scroll', handleScroll);

        // Remover event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header 
            className={`${ 
                active ? 'bg-black/90 py-4' : 'bg-none py-8'
                } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
        >
        <div className='container mx-auto'>
                {/* logo, nav, btn */}
            <div className='flex items-center justify-between'>
                {/* logo */}
                <Link href='/'>
                    <Image src='/logo.svg' width={75} height={30} alt='' />
                </Link>
                {/* nav */}
                    <Nav 
                        containerStyles='hidden xl:flex gap-x-12 text-white'
                        linkStyles='capitalize' 
                    />
                {/* btn */}
                <ScrollLink to='reservation' smooth={true}>
                    <Button variant='orange' size='sm'>
                        Book a table
                    </Button>
                </ScrollLink>
                {/* mobile nav */}
                <NavMobile 
                    containerStyles='xl:hidden'
                    iconStyles='text-3xl'
                    linkStyles='uppercase' 
                />
            </div>
        </div>
    </header>
    );
};

export default Header;