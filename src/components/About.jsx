function About() {
    return (
      <section className="bg-amber-100 py-16 px-4" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-6">О нас</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Мы — команда, влюблённая в еду. С 2015 года мы готовим для вас блюда, вдохновлённые
            традициями и инновациями. В каждой порции — тепло, забота и вкус, проверенный временем.
          </p>
  
          <div className="mt-10">
            <img
              src="https://via.placeholder.com/600x300?text=Наша+кухня"
              alt="Наша кухня"
              className="rounded-xl shadow-md mx-auto"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  