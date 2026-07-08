import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
            <div className="text-lg font-bold"> MyApp </div>
            <div className="flex gap-6">
                <Link href="/" className="hover:text-blue-400 transition-colors"> Home </Link>
                <Link href="/tasks" className="hover:text-blue-400 transition-colors"> Tasks </Link>
            </div>

        </nav>
    );
}