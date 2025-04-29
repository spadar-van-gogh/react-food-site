function Contact() {
    return (
      <section className="bg-amber-50 py-16 px-4" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-8">Контакты</h2>
  
          <div className="mb-10 text-left">
            <p className="text-lg text-gray-800"><strong>Адрес:</strong> ул. Вкусная, 7, Гомель</p>
            <p className="text-lg text-gray-800"><strong>Телефон:</strong> +375 (29) 123-45-67</p>
            <p className="text-lg text-gray-800"><strong>Email:</strong> info@foodsite.by</p>
          </div>
  
          <form className="bg-white p-6 rounded-lg shadow-md text-left max-w-xl mx-auto">
            <label className="block mb-4">
              <span className="text-gray-700">Ваше имя</span>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
            </label>
  
            <label className="block mb-4">
              <span className="text-gray-700">Сообщение</span>
              <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" rows="4"></textarea>
            </label>
  
            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full">
              Отправить
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  