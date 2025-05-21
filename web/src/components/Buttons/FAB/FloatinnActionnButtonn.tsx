import React, { useEffect, useState, ReactNode } from "react";

interface FloatingActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode | string;
    alt?: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
    icon,
    alt = "FAB Icon",
    children,
    ...props
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolledPercent = docHeight > 0 ? scrollY / docHeight : 0;
            setVisible(scrolledPercent >= 0.25);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button
            type="button"
            className={`fixed z-50 bottom-4 right-4 md:bottom-10 md:right-10 transition-opacity duration-300
                bg-cyan-400 hover:bg-cyan-400/45 hover:cursor-pointer text-white rounded-full shadow-lg p-4
                flex items-center justify-center scale-70 md:scale-100
                ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
            {...props}
        >
            {typeof icon === "string" ? (
                <img src={icon} alt={alt} className="size-6" />
            ) : (
                // Lucide icons are React components, so just render them
                <span className="size-6 flex items-center justify-center">{icon}</span>
            )}
            {children}
        </button>
    );
};

export default FloatingActionButton;