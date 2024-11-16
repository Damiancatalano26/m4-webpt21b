"use client"; 

const SearchBar = () => {
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
};

export default SearchBar;
