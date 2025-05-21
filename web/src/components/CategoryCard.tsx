import React from "react";

type Item = {
    label: string;
    icon: React.ReactNode | string; // ReactNode (SVG) or URL (string)
};

type CategoryCardProps = {
    categoryName: string;
    price: string;
    items: Item[];
};

export default function CategoryCard({ categoryName, price, items }: CategoryCardProps) {
    return (
        <div className="p-4 rounded shadow">
            <h2 className="text-xl text-center font-bold">{categoryName}</h2>
            <h3 className="text-lg text-center text-gray-600 my-4">{price}</h3>
            <ul className="min-h-48">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                        <span className="ml-3">
                            {typeof item.icon === "string" ? (
                                <img src={item.icon} alt="" className="w-5 h-5" />
                            ) : (
                                item.icon
                            )}
                        </span>
                        <span className="ml-3">{item.label}</span>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center mt-4">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <button className="p-4 w-fit bg-lime-500 text-gray-800 text-lg font-bold py-2 hover:bg-lime-600/50 hover:cursor-pointer rounded-full transition duration-200">
                        Register
                    </button>
                </a>
            </div>
        </div>
    );
}