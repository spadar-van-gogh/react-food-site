function Header() {
    return (
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-red-600">🍴 FoodSite</h1>
          <nav className="space-x-6">
            <a href="#menu" className="text-gray-700 hover:text-red-500">Меню</a>
            <a href="#about" className="text-gray-700 hover:text-red-500">О нас</a>
            <a href="#blog" className="text-gray-700 hover:text-red-500">Блог</a>
            <a href="#contact" className="text-gray-700 hover:text-red-500">Контакты</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  