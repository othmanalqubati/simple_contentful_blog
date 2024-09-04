// components/Header.js
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 rtl" dir='rtl'>
            <div className="container mx-auto flex justify-between items-center rtl">
                <h1 className="text-3xl font-bold">مدونتي</h1>
                <nav>
                    <ul className="flex space-x-4 rtl">
                        <li><Link href="/">الرئيسية</Link></li>
                        <li><Link href="/about" style={{marginRight:'10px'}}>حولنا</Link></li>
                        <li><Link href="/contact">تواصل معنا</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
