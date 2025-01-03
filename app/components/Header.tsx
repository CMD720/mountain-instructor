import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <strong>Mountain instructor</strong>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    );
};

export default Header;