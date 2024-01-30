import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Head from 'next/head';
import { MainContainer } from './style'

interface LayoutProps {
    children: ReactNode;
}


export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>Centro Pokémon </title>
            </Head>
            <Navbar />
            <MainContainer> {children} </MainContainer>
            <Footer />
        </>
    );
}