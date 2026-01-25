import React from "react";

const Header = () => (
    <header className="hidden fixed top-0 left-0 w-full bg-gray-50 h-12">
        <div className="container flex items-center justify-center h-full">
            <ul className="flex items-center justify-center gap-4">
                <li className="flex">
                    <a href="#" title="واتس اپ" className="cursor-pointer flex">
                        <svg className="size-6 text-white">
                            <use href="#svg-whatsapp" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </header>
)

export default Header;