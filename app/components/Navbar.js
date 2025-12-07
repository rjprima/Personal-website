import Link from 'next/link';
import Nightmode from './Nightmode';

export default function NavBar() {
    return (
        <nav className="top-0 sticky bg-(--colormode2) pt-3 pb-3 border border-black z-10 h-20">
            <ul className="flex justify-end space-x-10 pr-15 relative bottom-[-11]">
                <li className="md:hover:underline text-(--colormode1)"><Link href="/">Home</Link></li>
                <li className="md:hover:underline text-(--colormode1)"><Link href="/projects">Projects</Link></li>
                <li className="md:hover:underline text-(--colormode1)"><Link href="/resume">Resume</Link></li>
                <li className="md:hover:underline text-(--colormode1)"><Link href="/contact">Contact</Link></li>
            </ul>
            <Nightmode />
        </nav>
    )
}