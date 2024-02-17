import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header>
        <Link href="/">
            <Image
                src="/disneylogo.png"
                alt="Disney Logo"
                width={120}
                height={100}
                className="cursor-pointer invert"
            />
        </Link>

        <div className="flex space-x-2">
            {/* GenreDropdown */}
            {/* SearchInput */}
            {/* Themetoggler */}
        </div>
    </header>
  )
}

export default Header
