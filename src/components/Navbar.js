function Navbar() {
  return (
    <div className="flex justify-between items-baseline py-12">
      <h1 className="text-purple-500 text-2xl">Whisper's Latest</h1>
      <button className="bg-purple-500 rounded p-2 hover:bg-purple-700 transition duration-200">
        <i class="fas fa-sync-alt text-white text-xl"></i>
      </button>
    </div>
  );
}

export default Navbar;
