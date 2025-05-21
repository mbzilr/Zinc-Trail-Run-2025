import CategoryCard from "@/components/CategoryCard";
import Schedule from "@/components/Schedule";
import categoriesData from "@/staticData/categories.json";
import scheduleDataRaw from "@/staticData/schedule.json";
import {
  FlagTriangleRight,
  Medal,
  Shirt,
  ShoppingBag,
  TicketCheck,
} from "lucide-react";
import React from "react";

// Update Item type to allow icon to be string or ReactNode
type Item = { label: string; icon: string | React.ReactNode; iconType: string };

type Category = {
  categoryName: string;
  price: string;
  items: Item[];
};

const categories: Category[] = categoriesData as Category[];

// Lucide icon mapping
const lucideIconMap = {
  FlagTriangleRight,
  Shirt,
  ShoppingBag,
  TicketCheck,
  Medal,
};

// Helper to map icon string to Lucide component or keep as URL
function mapIcon(item: Item) {
  if (item.iconType === "lucide" && typeof item.icon === "string") {
    const LucideIcon = lucideIconMap[item.icon as keyof typeof lucideIconMap];
    if (LucideIcon) {
      return {
        ...item,
        icon: <LucideIcon size={20} />,
        iconType: item.iconType,
      };
    }
  }
  // For URLs, just return as is
  return item;
}

// Fix: Normalize schedule data so all day fields are present and always strings
const scheduleData = (scheduleDataRaw as any[]).map((item) => ({
  time: item.time || "",
  day1: item.day1 || "",
  day2: item.day2 || "",
  day3: item.day3 || "",
}));

export function Index() {
  return (
    <div>
      <section>
        <h2 className="my-4 font-bold text-3xl md:text-[48px] text-center text-zinc-800">
          ZINC TRAIL RUN 2025
          <div className="mx-auto mt-2 h-2 w-24 md:w-128 bg-cyan-400 rounded transition-all duration-300" />
        </h2>
      </section>
      <section>
        <h2 className="my-4 font-bold text-3xl md:text-[48px] text-center text-zinc-800">
          SCHEDULE
        </h2>
        <div className="my-4 text-sm font-light text-black text-center">
        </div>
        <div className="mx-auto mt-2 h-2 w-24 md:w-48 bg-cyan-400 rounded transition-all duration-300" />
        <Schedule data={scheduleData} days={["Kamis", "Jumat", "Sabtu"]} />
      </section>
      <section>
        <h2 className="my-4 font-bold text-3xl md:text-[48px] text-center text-zinc-800">
          RACE CATEGORIES
        </h2>
        <div className="mx-auto mt-2 h-2 w-24 md:w-111 bg-cyan-400 rounded transition-all duration-300" />
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category: Category, index: number) => (
            <div
              key={index}
              className="rounded-2xl shadow-md bg-white p-4 md:p-6 flex flex-col h-full"
            >
              <CategoryCard
                categoryName={category.categoryName}
                price={category.price}
                items={category.items.map(mapIcon)}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="my-4 font-bold text-3xl md:text-[48px] text-center text-zinc-800">
          LOCATION
          <div className="mx-auto mt-2 h-2 w-24 md:w-48 bg-cyan-400 rounded transition-all duration-300" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-5 mt-8 items-center">
            {/* Left: Image */}
            <div className="flex justify-center md:h-128 md:w-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pandawa_Beach%2C_Kuta_Selatan_-_Bali.jpg/250px-Pandawa_Beach%2C_Kuta_Selatan_-_Bali.jpg"
                alt="Zinc Trail Run Location Map"
                className="rounded-lg shadow-md w-full md:h-full md:w-4xl"
              />
            </div>
            {/* Right: Info */}
            <div className="bg-gray-800 flex flex-col p-8 md:p-35 rounded-2xl items-center md:items-start text-center md:text-left">
              <h3 className="text-2xl md:text-[48px] font-semibold mb-2 md:mb-8 text-white">
                Pantai Pandawa Bali
              </h3>
              <p className="mb-4 text-zinc-300 text-lg font-medium">
                Rasakan pemandangan indah Pantai Pandawa yang menakjubkan,
                dengan pasir putih dan air laut yang jernih. Nikmati keindahan
                alam sambil berlari di sepanjang pantai yang menawan ini.
              </p>
              <a
                href="https://www.google.com/maps/place/Pantai+Pandawa/@-8.8448028,115.1839506,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd25b7cd8ba1f31:0x41b8785dd055b2a4!8m2!3d-8.8452802!4d115.1870679!16s%2Fg%2F1ygbcghrt?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full inline-flex items-center px-4 py-2 bg-[#4285F4] hover:bg-[#4285F4]/60 text-white text-sm font-semibold transition-colors duration-200 shadow"
              >
                <svg
                  className="size-5 mr-2"
                  fill="white"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Google Maps</title>
                  <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" />
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>
        </h2>
      </section>
      <section className="hidden">
        <h2 className="my-4 font-bold text-3xl md:text-[48px] text-center text-zinc-800">
          RESULTS
          <div className="mx-auto mt-2 h-2 w-24 md:w-32 bg-cyan-400 rounded transition-all duration-300" />
          <div className="my-4 text-sm font-light text-black">
            No results available yet. Please check back after the event.
          </div>
        </h2>
      </section>
      <section>
        <h2 className="my-4 font-bold text-3xl md:text-[48px] text-center text-zinc-800">
          SUPPORTED BY
          <div className="mx-auto mt-2 h-2 w-24 md:w-72 bg-cyan-400 rounded transition-all duration-300" />
          <div className="my-4 text-sm font-light text-black">
            No sponsors announced yet. Please check back at a later time.
          </div>
        </h2>
      </section>
      <section>
        <h2 className="my-4 font-bold text-3xl md:text-[48px] text-center text-zinc-800">
          CONTACT US
          <div className="mx-auto mt-2 h-2 w-24 md:w-64 bg-cyan-400 rounded transition-all duration-300" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-12 bg-white rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg shadow-gray-800/30 border-2"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 mb-2"
                fill="#25D366"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="font-semibold text-zinc-800 text-xl">
                WhatsApp
              </span>
              <span className="text-xs font-bold text-zinc-500">
                +62 812-3456-7890
              </span>
            </a>
            {/* Email */}
            <a
              href="mailto:info@zinctrailrun.com"
              className="flex flex-col items-center p-12 bg-white rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg shadow-gray-800/30 border-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5865F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-icon lucide-mail size-10 mb-2"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <span className="font-semibold text-zinc-800 text-xl">Email</span>
              <span className="text-xs font-black text-zinc-500">
                info@zinctrailrun.com
              </span>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/zinc_id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-12 bg-white rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg shadow-gray-800/30 border-2"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 mb-2"
                fill="#FF0069"
              >
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
              <span className="font-semibold text-zinc-800 text-xl">
                Instagram
              </span>
              <span className="text-xs font-black text-zinc-500">@zinc_id</span>
            </a>
          </div>
        </h2>
      </section>
    </div>
  );
}
