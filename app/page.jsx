// pages/index.js
'use client'
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LogoRedigo from '@/components/images/LogoRedigo';

export default function Home() {
    const copyright = "©2024 Redigon S.R.L."
    const codiceFiscale = "04326480169";
    const partitaIVA = "04326480169";
    const indirizzo = "Via Passaggio dei Canonici Lateranensi 12, 24121 Bergamo (BG), Italia.";

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <div className="bg-white text-gray-800">
            <Head>
                <title>Redigon</title>
                <meta name="description" content="Redigon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="bg-white text-[#cc2420] py-6">
                <div className="container mx-auto flex justify-between items-center">
                    <LogoRedigo width={96} height={24} />
                    <nav>
                        <ul className="flex space-x-4 my-auto align-middle">
                            <li className='py-2'><a href="#home" className="hover:underline transition-all ease-in">Home</a></li>
                            <li className='py-2'><a href="#features" className="hover:underline">Caratteristiche</a></li>
                            <li className='py-2'><a href="#contact" className="hover:underline">Contatti</a></li>
                            <li><button className='bg-[#cc2420] hover:bg-[#f16e6e] text-white my-auto px-8 py-2 rounded-3xl transition-all ease-in'>Login</button></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section id="home" className="h-screen flex items-center justify-center bg-white text-gray-800" data-aos="fade-up">
                    <div className="text-center">
                        <h2 className="text-5xl font-bold mb-4 text-[#cc2420]">Benvenuti su Redigon</h2>
                        <p className="text-xl">Scopri le opportunità che faranno crescere il tuo business.</p>
                    </div>
                </section>

                <section id="overview" className="py-20 bg-gray-50 text-gray-800" data-aos="fade-up">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6 text-[#cc2420]">Scopri Redigon</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Cos'è un Bando?</h3>
                                <p>Un bando è un atto pubblico che permette a un'istituzione di erogare contributi a imprese o persone. La ricerca di finanziamenti è fondamentale per sostenere le proprie attività.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Supporto agli Imprenditori</h3>
                                <p>Redigon aiuta imprenditori e professionisti della finanza agevolata a individuare opportunità, accedere al credito, contenere i costi del lavoro e creare occupazione.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Obiettivo di Redigon</h3>
                                <p>Redigon non si limita a trovare bandi, ma analizza le dinamiche dell'investimento per fornire solo opportunità reali e adatte alla realtà dell'impresa.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Compatibilità e Strategia</h3>
                                <p>Redigon riassume le informazioni dei bandi in due indicatori di prestazione: "compatibility" e "strategy", aiutandoti a valutare e accedere alle migliori opportunità.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">WebApp Innovativa</h3>
                                <p>La nostra WebApp è progettata per tutte le imprese in cerca di finanziamenti, permettendo di identificare gli investimenti migliori e acquisire dati in modo automatico o manuale.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Gestione Progetti</h3>
                                <p>La piattaforma consente di raggruppare le spese in "progetti", analizzando ciascuno singolarmente e fornendo un'analisi dettagliata per ogni intestatario.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="py-20 bg-white text-gray-800" data-aos="fade-up">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6 text-[#cc2420]">Politiche di incentivazione</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Articolo 41.C.3 della Costituzione</h3>
                                <p>Le politiche di incentivazione si basano sull'articolo 41.C.3 della Costituzione, per cui la legge determina i programmi e i controlli opportuni affinché l'attività economica pubblica e privata sia indirizzata a fini sociali.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Fonti giuridiche nazionali</h3>
                                <p>Le fonti giuridiche nazionali alla base della pubblicazione di un bando sono: la legge, il regolamento e la circolare.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Regolamento</h3>
                                <p>Il regolamento indica le finalità dell'aiuto, lo stanziamento riservato, i soggetti beneficiari, l'ambito geografico di applicazione, il programma degli investimenti e delle spese ammissibili.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="info" className="py-20 bg-gray-50 text-gray-800" data-aos="fade-up">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6 text-[#cc2420]">Tipologie di agevolazioni</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Contributi in conto capitale</h3>
                                <p>Contributo a fondo perduto calcolato in percentuale delle spese ammissibili, senza vincolo di restituzione di capitale o pagamento di interessi.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Contributi in conto interessi</h3>
                                <p>Contributo a fondo perduto calcolato sul tasso di interesse passivo pagato su di un finanziamento, sviluppando un piano di ammortamento.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Contributi in conto canoni</h3>
                                <p>Paragonabile al contributo in conto interessi, ma applicato a un contratto di locazione finanziaria stipulato con una società di leasing.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Contributi in conto esercizio</h3>
                                <p>Contributo erogato per integrare i ricavi dell'azienda o ridurre i costi d'esercizio legati all'attività produttiva.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Crediti d'imposta</h3>
                                <p>Agevolazione fiscale utilizzabile in compensazione di eventuali debiti, per il pagamento di imposte.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-in">
                                <h3 className="text-2xl font-semibold mb-2">Finanziamenti a tasso agevolato</h3>
                                <p>Prestito erogato senza interessi o a condizioni più vantaggiose rispetto ai normali tassi di mercato.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-white text-gray-800" data-aos="fade-up">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6 text-[#cc2420]">Contattaci</h2>
                        <p className="text-xl mb-6">Ci piacerebbe sentire da te!</p>
                        <a href="mailto:info@example.com" className="px-6 py-3 bg-[#cc2420] text-white font-semibold rounded-full shadow-lg hover:bg-[#f16e6e] transition-all ease-in">Contattaci</a>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 text-gray-800 py-6">
                <div className="container mx-auto text-center">
                    <p>C.F. {codiceFiscale} - P.IVA {partitaIVA}</p>
                    <p>{indirizzo}</p>
                    <p>{copyright}</p>
                </div>
            </footer>

        </div>
    );
}
