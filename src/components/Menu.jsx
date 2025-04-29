const dishes = [
    {
      name: "Салат Цезарь",
      description: "Классический салат с курицей, пармезаном и сухариками.",
      price: "9.90 BYN",
      image: "https://via.placeholder.com/300x200?text=Цезарь"
    },
    {
      name: "Борщ",
      description: "Традиционный украинский суп со сметаной и чесночными пампушками.",
      price: "7.50 BYN",
      image: "https://via.placeholder.com/300x200?text=Борщ"
    },
    {
      name: "Тирамису",
      description: "Нежнейший десерт с маскарпоне и кофе.",
      price: "6.20 BYN",
      image: "https://via.placeholder.com/300x200?text=Тирамису"
    }
  ];
  
  function Menu() {
    return (
      <section className="py-16 bg-white" id="menu">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-red-600">Наше меню</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish, index) => (
              <div key={index} className="bg-amber-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-amber-900">{dish.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{dish.description}</p>
                  <p className="mt-2 text-red-600 font-bold">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Menu;
  