import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"

function Header() {
  return (
    <header>
        <Link href="/">
            <Image
                src="/disneylogo.png"
                alt="Disney Logo"
                width={120}
                height={100}
                className="cursor-pointer invert-0 dark:invert"
            />
        </Link>

        <div className="flex space-x-2">
            {/* GenreDropdown */}
            {/* SearchInput */}
            <ThemeToggler />
        </div>
    </header>
  )
}

export default Header
