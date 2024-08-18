'use client'
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Import the icon

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300); // Show button after scrolling down 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="h-6 w-6 text-blue-400" />
        </button>
    );
}
