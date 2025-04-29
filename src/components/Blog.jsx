const posts = [
    {
      title: "5 причин полюбить домашнюю еду",
      excerpt: "Узнайте, почему свежеприготовленные блюда лучше фастфуда.",
      image: "https://via.placeholder.com/400x250?text=Домашняя+еда"
    },
    {
      title: "История нашего ресторана",
      excerpt: "С чего всё начиналось — путь от кухни до любимого заведения.",
      image: "https://via.placeholder.com/400x250?text=Наша+история"
    },
    {
      title: "Секреты идеального борща",
      excerpt: "Традиции, ингредиенты и душа — как готовим борщ у нас.",
      image: "https://via.placeholder.com/400x250?text=Борщ"
    }
  ];
  
  function Blog() {
    return (
      <section className="bg-white py-16 px-4" id="blog">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-10">Блог</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <div key={index} className="bg-amber-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition text-left">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-amber-900">{post.title}</h3>
                  <p className="text-sm text-gray-700 mt-2">{post.excerpt}</p>
                  <button className="mt-4 inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition duration-300">
                    Читать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Blog;
  