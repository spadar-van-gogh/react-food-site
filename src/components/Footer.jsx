function Footer() {
    return (
      <footer className="bg-red-600 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} FoodSite. Все права защищены.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Telegram</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  