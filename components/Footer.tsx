export default function Footer() {
  return (
    <footer className=" text-white py-10 mt-20">

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl  text-black font-bold">Portfolio</h2>
          <p className="text-gray-400 text-sm mt-2">
            © 2024 Digital Gallery. Built with technical precision.
          </p>
        </div>

        {/* Middle - Social */}
        <div className="flex gap-6 text-gray-500 text-sm">
          <a href="#" >LinkedIn</a>
          <a href="#" >GitHub</a>
          <a href="#" >Twitter</a>
        </div>

        {/* Right - Navigation */}
        <div className="flex gap-6 text-gray-600 text-sm">
          <a href="#" >Home</a>
          <a href="#" >Projects</a>
          <a href="#" >Contact</a>
        </div>

      </div>

    </footer>
  );
}