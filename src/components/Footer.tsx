
import DeviconReact from '~icons/devicon/react'
import LogosVitejs from '~icons/logos/vitejs'
export default function Footer() {
    return (
        <footer className="w-full py-3">
          <span className='flex items-center gap-2 justify-center mb-4 text-sm'>Built with React <DeviconReact /> and Vite <LogosVitejs /></span>
            <p className="w-fit mx-auto text-sm">2024 | Fathur Rahman Nur.</p>
        </footer>
    )
}