import { useRouter } from 'next/router'
import { useEffect } from 'react'

//this hook created for fix bug from NEXT
//BUG: Route change when pages have smooth scroll enabled causes disorienting motion.
export default function useNormalScrollRoutes() {
    const router = useRouter()

    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            document.documentElement.classList.add('normal-scroll')
        })
        router.events.on('routeChangeComplete', () => {
            document.documentElement.classList.remove('normal-scroll')
        })
    }, [])
}
