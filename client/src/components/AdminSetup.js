import React, { useEffect, useState } from 'react';
import '../styles/Admin.css';

const AdminSetup = ({ token }) => {
  const [serverState, setServerState] = useState(null);
  let [posts, setPosts] = useState([]);
  let [products, setProducts] = useState([]);
  let [messages, setMessages] = useState([]);
  let [animals, setAnimals] = useState([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imagePost, setImagePost] = useState('');
  const [movie, setMovie] = useState('');

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [miniImage, setMiniImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const [nameDog, setNameDog] = useState('');
  const [imageDog, setImageDog] = useState('');


  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then((state) => {
        setServerState(state.status);
      });

    fetch('/api/posts')
      .then((r) => r.json())
      .then((r) => {
        setPosts(r.posts);
      });

    fetch('/api/products')
      .then((r) => r.json())
      .then((r) => {
        setProducts(r.products);
      });

    fetch('/api/messages')
      .then((r) => r.json())
      .then((r) => {
        setMessages(r.messages);
      });

    fetch('/api/animals')
      .then((r) => r.json())
      .then((r) => {
        setAnimals(r.animals);
      });


    fetch('api/posts/gIt6mVlTqGonw7J8', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Moj nowy tytul po update',
        content: 'Nowe lorem ipsum',
      }),
    })
      .then((r) => r.json())
      .then(console.warn);
  }, []);

  const handlePostAdd = () => {
    fetch('api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify({ title, content, imagePost, movie }),
    })
      .then((r) => r.json())
      .then(console.warn);
  };

  const handleProductAdd = () => {
    fetch('api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image, miniImage, name, description, price, quantity }),
    })
      .then((r) => r.json())
      .then(console.warn);
  };

  const handleAnimalAdd = () => {
    fetch('api/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nameDog, imageDog }),
    })
      .then((r) => r.json())
      .then(console.warn);
  };

  const handlePostDelete = (id) => {
    fetch(`api/posts/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(console.warn);
  };

  const handleProductDelete = (id) => {
    fetch(`api/products/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(console.warn);
  };

  const handleMessagetDelete = (id) => {
    fetch(`api/messages/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(console.warn);
  };

  const handleAnimalDelete = (id) => {
    fetch(`api/animals/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(console.warn);
  };

  return (
    <section>
      <div>Status serwera: {serverState}</div>
      <div>
        Dodawanie postów:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tytuł"
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Treść"
        />
        <input
          type="text"
          value={imagePost}
          onChange={(e) => setImagePost(e.target.value)}
          placeholder="Zdjęcie"
        />
        <input
          type="text"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          placeholder="Film"
        />
        <button onClick={handlePostAdd}>dodaj</button>
      </div>
      <div>
        Dodawanie produktów:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Zdjęcie"
        />
        <input
          type="text"
          value={miniImage}
          onChange={(e) => setMiniImage(e.target.value)}
          placeholder="miniZdjęcie"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nazwa"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Opis"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Cena"
        />
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Ilość"
        />
        <button onClick={handleProductAdd}>dodaj</button>
      </div>
      <div>
        Dodawanie piesków:
        <input
          type="text"
          value={nameDog}
          onChange={(e) => setNameDog(e.target.value)}
          placeholder="Imię"
        />

        <input
          type="text"
          value={imageDog}
          onChange={(e) => setImageDog(e.target.value)}
          placeholder="Zdjęcie"
        />
        <button onClick={handleAnimalAdd}>dodaj</button>
      </div>

      <div className="post-delete">
        <p>Wiadomości:</p>
        <ul>
          {messages.map((message) => (
            <li className="message-container" key={message._id}>
              <p>Wiadomość: {message._id}</p>
              <p>Od: {message.name}</p>
              <p>E-mail: {message.email}</p>
              <p>Temat: {message.messageTheme}</p>
              <p>Treść wiadomości: {message.messageContent}</p>
            </li>))}
        </ul>
      </div>

      <div>
        <p>Usuwanie wiadomości - kliknij w wiadomość</p>
        <ul>
          {messages.map((message) => (
            <li className="message-delete" key={message._id} onClick={() => {
              let id = message._id;
              handleMessagetDelete(message._id);
              alert(`Usunięto wiadomość od ${message.name}, temat: ${message.messageTheme}`);
              messages = messages.filter((message) => message._id !== id);
              setMessages(messages);
            }}>
              <p>{message.name}</p>
              <p>{message.email}</p>
              <p>{message.messageTheme}</p>
            </li>))}
        </ul>
      </div>

      <div className="post-delete">
        <p>Usuwanie postów - kliknij w tytuł:</p>
        <ul>
          {posts.map((post) => (
            <li key={post._id} onClick={() => {
              let id = post._id;
              handlePostDelete(post._id);
              alert(`Usunięto: ${post.title}`);
              posts = posts.filter((post) => post._id !== id);
              setPosts(posts);
            }}>
              {post.title}
            </li>))}
        </ul>
      </div>

      <div className="post-delete">
        <p>Usuwanie produktów - kliknij w nazwę:</p>
        <ul>
          {products.map((product) => (
            <li key={product._id} onClick={() => {
              let id = product._id;
              handleProductDelete(product._id);
              alert(`Usunięto: ${product.name}`);
              products = products.filter((product) => product._id !== id);
              setProducts(products);
            }}>
              {product.name}
            </li>))}
        </ul>
      </div>

      <div className="animal-remove">
        <p>Pieski - kliknij w nazwę aby zdjąć ze strony:</p>
        <ul>
          {animals.map((animal) => (
            <li key={animal._id} onClick={() => {
              let id = animal._id;
              handleAnimalDelete(animal._id);
              alert(`Usunięto: ${animal.nameDog}`);
              animals = animals.filter((animal) => animal._id !== id);
              setAnimals(animals);
            }}>
              {animal.nameDog}
            </li>))}
        </ul>
      </div>
    </section>
  );
};

export { AdminSetup };

