'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const LogoRedigo = (props) => {
    const router = useRouter();
    return (
        <div onClick={() => { router.push("/") }}>
            <Image
                src="/images/logo.webp"
                alt="Logo Redigo"
                width={props.width}
                height={props.height}
                className={props.className}
            />
        </div>
    )
}
export default LogoRedigo;