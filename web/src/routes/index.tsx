import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

export function Index() {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  const navItems = [
    { label: 'Register', path: '/' },
    { label: 'Participants', path: '/' },
    { label: 'Trackmap', path: '/' },
    { label: 'Volunteering Opportunities', path: '/' },
    { label: 'Gallery', path: '/' },
    { label: 'FAQ', path: '/' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const path = e.target.value;
    setSelected(path);
    if (path) navigate(path);
  };

  return (
    <div id="index-body" className="w-full">
      {/* Hero Section */}
      <div className="w-full bg-cyan-400 flex flex-col items-center text-center py-6 px-2 sm:px-4">
        <h4 className="text-xs sm:text-sm md:text-lg text-white text-shadow-black/60 text-shadow-md">
          Become one, become...
        </h4>
        <h2 className="text-5xl sm:text-7xl md:text-[256px] text-amber-300 castorice leading-none">
          INVINCIBLE
        </h2>
        <p className="text-xs sm:text-sm md:text-lg text-yellow-200 drop-shadow-md mt-2">
          ORIGINAL CHARACTERS BASED ON THE COMIC BOOK BY <br />
          Robert Kirkman, Cory Walker & Ryan Ottley
        </p>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden px-4 py-6">
        <select
          value={selected}
          onChange={handleChange}
          className="w-full p-2 border border-cyan-300 rounded-lg text-cyan-900"
        >
          <option value="">Navigate to...</option>
          {navItems.map((item, idx) => (
            <option key={idx} value={item.path}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4 px-4 py-8">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="text-center sm:text-md md:text-lg lg:text-xl font-semibold hover:text-cyan-400 hover:drop-shadow-md transition-all"
          >
            <NavLink to={item.path}>{item.label}</NavLink>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="flex w-screen h-screen bg-black text-white mb-6 justify-center-safe items-center-safe flex-col">
        <h3 className="text-white text-4xl font-bold">Insert Key Visual Here</h3>
        <h4 className="my-4">Supercharge your senses.</h4>

        {/* Line breaks */}
        <div className="my-2"></div> {/* or use <br /> if you want a simpler approach */}

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 text-white p-2 h-16 w-32 rounded-4xl hover:cursor-pointer">Button 1</button>
          <button className="bg-red-500 text-white p-2 h-16 w-32 rounded-4xl hover:cursor-pointer">Button 2</button>
        </div>
      </div>

      {/* Bento Grid at the bottom*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-8">
        <div className="col-span-2 sm:col-span-3 lg:col-span-2 row-span-2 bg-gray-800 rounded-2xl p-6 flex items-center justify-center text-white text-center">
          <a href="/registration" target="_blank" rel="noreferrer noopener">
            <h2 className="text-xl sm:text-3xl md:text-[64px] italic font-medium">
              Registration
            </h2>
          </a>
        </div>
        {/* */}
        <div className="col-span-1 bg-gray-700 rounded-2xl p-4 text-white flex items-center justify-center">
          <a href="/categories/10k" target="_blank" rel="noreferrer noopener">
            <h2 className="text-lg md:text-2xl font-semibold">
              10K
            </h2>
          </a>
        </div>
        {/* */}
        <div className="col-span-1 sm:col-span-1 row-span-2 bg-gray-600 rounded-2xl p-4 text-white flex items-center justify-center">
          <a href="/venue" target="_blank" rel="noreferrer noopener">
            <h2 className="text-xl sm:text-3xl md:text-[72px] italic font-semibold">
              Venue
            </h2>
          </a>
        </div>
        {/* */}
        <div className="bg-gray-500 rounded-2xl p-4 text-white flex items-center justify-center">
          <a href="/categories/5K" target="_blank" rel="noreferrer noopener">
            <h2 className="text-lg md:text-2xl font-semibold">
              5K
            </h2>
          </a>
        </div>
        {/* */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-4 bg-gray-400 rounded-2xl p-4 text-white text-center">
          <h2 className="font-medium text-4xl">Other Information</h2>
        </div>
        {/* */}
      </div>
    </div>
  );
}
