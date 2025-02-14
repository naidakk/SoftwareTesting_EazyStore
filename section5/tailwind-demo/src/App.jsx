import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg underline font-bold mt-4 text-blue-600">
        Tailwind makes styling easy!
      </p>
      <div className="bg-gray-200 p-4 m-4">Background color demo</div>
      <div className="bg-green-300 border border-green-600 p-4 rounded-lg m-4">
        Border demo
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-blue-200 p-4 text-red-700">1</div>
        <div className="bg-blue-400 p-4">2</div>
        <div className="bg-blue-600 p-4 text-white">3</div>
      </div>
      <div className="flex justify-center items-center gap-4  bg-gray-300 mt-4 p-4 flex-col">
        <p className="text-xl font-bold">Text 1</p>
        <p className="text-xl font-bold">Text 2</p>
        <p className="text-xl font-bold">Text 3</p>
      </div>
      <table className="table-auto w-full border-collapse border mt-4 border-gray-300 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="border border-gray-300 px-6 py-3 text-center">
              Song
            </th>
            <th className="border border-gray-300 px-6 py-3 text-center">
              Artist
            </th>
            <th className="border border-gray-300 px-6 py-3 text-center">
              Year
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-6 py-3 border border-gray-300">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="px-6 py-3 border border-gray-300">
              Malcolm Lockyer
            </td>
            <td className="px-6 py-3 border border-gray-300">1961</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition">
            <td className="px-6 py-3 border border-gray-300">Witchy Woman</td>
            <td className="px-6 py-3 border border-gray-300">The Eagles</td>
            <td className="px-6 py-3 border border-gray-300">1972</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-6 py-3 border border-gray-300">Shining Star</td>
            <td className="px-6 py-3 border border-gray-300">
              Earth, Wind, and Fire
            </td>
            <td className="px-6 py-3 border border-gray-300">1975</td>
          </tr>
        </tbody>
      </table>
      <button
        className="px-6 py-2 m-4 bg-blue-400 text-white rounded-lg hover:bg-blue-700 
      transition duration-300"
      >
        Click me
      </button>
      <button
        className="px-6 py-2 m-4 bg-red-500 text-white rounded-lg hover:bg-red-700 
      transition duration-500 ease-in-out transform hover:scale-110"
      >
        Hover me
      </button>
      <div className="max-w-sm rounded-lg shadow-lg bg-indigo-100 p-6">
        <h2 className="text-2xl font-bold mb-4">Tailwind Card</h2>
        <p className="text-gray-700">
          This is a simple card built with Tailwind CSS
        </p>
        <button
          className="px-6 py-2 m-4 bg-blue-400 text-white rounded-lg hover:bg-blue-700 
      transition duration-300"
        >
          Read More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        <div className="bg-blue-300 p-4">1</div>
        <div className="bg-blue-300 p-4">2</div>
        <div className="bg-blue-300 p-4">3</div>
        <div className="bg-blue-300 p-4">4</div>
      </div>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl m-4">
        I scale on different screens!
      </p>
      <p className="text-red-600 sm:text-blue-600 md:text-emerald-600 lg:text-yellow-500 xl:text-purple-600 m-4">
        Resize the screen to see changes!
      </p>
      <div className="bg-[#ff5733] h-[165px] w-[300px] border-green-600 p-4 rounded-lg m-4 flex items-center justify-center">
        Custom Width, Height and Color
      </div>
      <div className="bg-madan-500 h-[165px] w-[300px] border-green-600 p-4 rounded-lg m-4 flex items-center justify-center">
        Theme variables
      </div>
      <div className="bg-primary font-display h-[165px] w-[300px] border-green-600 p-4 rounded-lg m-4 flex items-center justify-center">
        Font Family and Color variables
      </div>
    </>
  );
}

export default App;
