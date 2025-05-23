import Image from 'next/image'

import royal from '../../../public/royal.png'
import golden from '../../../public/golden.png'
import primier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Link from 'next/link'
import {v4 as uuidV4} from 'uuid'
import { FacebookLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
    { id: uuidV4(), name: "Royal Canin", logo: royal },
    { id: uuidV4(), name: "Golden", logo: golden },
    { id: uuidV4(), name: "Primier", logo: primier },
    { id: uuidV4(), name: "Formula Natural", logo: natural },
    { id: uuidV4(), name: "Whiskas", logo: whiskas },
    { id: uuidV4(), name: "Golden", logo: golden },
  ]

export function Footer() {
    return (
        <section className='bg-[#E84c3d] py-16 text-white'>
            <div className='contaner mx-auto px-4'>

                <div className='border-b border border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Nossos parceiros</h4>

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item) => (
                            <div key={item.id} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image 
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    className='object-contain'
                                />
                            </div>
                        ))}
                    </div>

                </div>

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Pet Shop</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação</p>
                        <Link 
                            href="#"
                            className='bg-green-500 px-4 py-2 rounded-md flex items-center justify-center gap-2 w-fit'
                        >
                            <WhatsappLogo className='w-5 h-5'/>
                            Contacto via Whatsapp
                        </Link>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contactos</h3>
                        <p>Email: teste@teste.com</p>
                        <p>Tel: (xxx) 999999999</p>
                        <p>Rua X, centro, Luanda | Ms</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
                       <div className='flex gap-4'>
                        <Link href="#">
                            <FacebookLogo className='w-8 h-8'/>
                        </Link>
                        <Link href="#">
                            <InstagramLogo className='w-8 h-8'/>
                        </Link>
                       </div>
                    </div>
                </footer>
                        <div>desenvolvido por João Sacala</div>
            </div>
        </section>
    )
}