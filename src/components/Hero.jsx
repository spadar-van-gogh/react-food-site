function Hero() {
    return (
      <section className="bg-amber-50 py-20 px-4 text-center" id="hero">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-4 text-amber-900">Вкус, который говорит сам за себя</h2>
          <p className="text-lg text-amber-700 mb-8">Наслаждайтесь лучшими блюдами, приготовленными с душой и заботой. Еда — это наше искусство.</p>
          <a href="#menu" className="inline-block bg-red-500 hover:bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-full transition duration-300">
            Смотреть меню
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;  