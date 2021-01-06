const express = require('express');
const http = require('http');
const path = require('path');
const { Datastore } = require('nedb-async-await');

const PORT = process.env.PORT || 3000;
const app = express();
const httpServer = http.Server(app);

// base64 helpers
const btoa = (string) => Buffer.from(string).toString('base64');
const atob = (encoded) => Buffer.from(encoded, 'base64').toString();

// database

const db = {};
db.posts = Datastore({
  filename: path.resolve(path.dirname(''), './database/posts.db'),
  autoload: true,
});

db.products = Datastore({
  filename: path.resolve(path.dirname(''), './database/products.db'),
  autoload: true,
})

db.animals = Datastore({
  filename: path.resolve(path.dirname(''), './database/animals.db'),
  autoload: true,
})

db.messages = Datastore({
  filename: path.resolve(path.dirname(''), './database/messages.db'),
  autoload: true,
})

db.users = Datastore({
  filename: path.resolve(path.dirname(''), './database/users.db'),
  autoload: true,
});

app.get('/api/db', async (req, res) => {
  const token = 'THVjYXNNb2Q6cXdlaW9w';
  const user = await db.users.findOne({ token });
  if (user !== null) {
    res.json({ authorized: true });
  } else {
    res.status(401).json({ authorized: false });
  }
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.replace('Basic ', '');
  if (token) {
    const user = await db.users.findOne({ token });
    if (user === null) {
      res.status(401).json({ authorized: false });
    } else {
      next();
    }
  } else {
    res.status(401).json({ authorized: false });
  }
};


app.get('/api', (req, res) => {
  res.json({ status: 'Server works' });
});

// user authentication
app.post('/api/login', async (req, res) => {
  const { token } = req.body;
  const user = await db.users.findOne({ token });
  if (user !== null) {
    res.json({ authorized: true });
  } else {
    res.status(401).json({ authorized: false });
  }
});

// create

app.post('/api/posts', async (req, res) => {
  const { title, content, imagePost, movie } = req.body;
  const status = await db.posts.insert({ title, content, imagePost, movie });
  res.json(status);
});

app.post('/api/products', async (req, res) => {
  const { name, description, quantity, image, miniImage, price } = req.body;
  const status = await db.products.insert({ name, description, quantity, image, miniImage, price });
  res.json(status);
});

app.post('/api/animals', async (req, res) => {
  const { nameDog, imageDog } = req.body;
  const status = await db.animals.insert({ nameDog, imageDog });
  res.json(status);
})

app.post('/api/messages', async (req, res) => {
  const { name, email, messageTheme, messageContent } = req.body;
  const status = await db.messages.insert({ name, email, messageTheme, messageContent });
  res.json(status);
});

// get list

app.get('/api/posts', async (req, res) => {
  const posts = await db.posts.find({});
  res.json({ posts });
});

app.get('/api/products', async (req, res) => {
  const products = await db.products.find({});
  res.json({ products });
});

app.get('/api/animals', async (req, res) => {
  const animals = await db.animals.find({});
  res.json({ animals });
});

app.get('/api/messages', async (req, res) => {
  const messages = await db.messages.find({});
  res.json({ messages });
});

// get single entry

app.get('/api/posts/:id', async (req, res) => {
  const post = await db.posts.find({ _id: req.params.id });
  res.json({ post });
});

app.get('/api/products/:id', async (req, res) => {
  const product = await db.products.find({ _id: req.params.id });
  res.json({ product });
});

app.get('/api/animals/:id', async (req, res) => {
  const animal = await db.animals.find({ _id: req.params.id });
  res.json({ animal });
});

app.get('/api/messages/:id', async (req, res) => {
  const message = await db.messages.find({ _id: req.params.id });
  res.json({ messsage });
});

// update

app.put('/api/posts/:id', async (req, res) => {
  const { title, content, imagePost, movie } = req.body;
  const status = await db.posts.update(
    { _id: req.params.id },
    { title, content, imagePost, movie }
  );
  res.json(status);
});

app.put('api/products/:id', async (req, res) => {
  const { name, description, quantity, image, miniImage, price } = req.body;
  const status = await db.products.update(
    { _id: req.params.id },
    { name, description, quantity, image, miniImage, price }
  );
  res.json(status);
});

app.put('api/animals/:id', async (req, res) => {
  const { nameDog, imageDog } = req.body;
  const status = await db.animals.update(
    { _id: req.params.id },
    { nameDog, imageDog }
  );
  res.json(status);
});

// delete

app.delete('/api/posts/:id', async (req, res) => {
  const status = await db.posts.remove({ _id: req.params.id });
  res.json(status);
});

app.delete('/api/products/:id', async (req, res) => {
  const status = await db.products.remove({ _id: req.params.id });
  res.json(status);
});

app.delete('/api/animals/:id', async (req, res) => {
  const status = await db.animals.remove({ _id: req.params.id });
  res.json(status);
});

app.delete('/api/messages/:id', async (req, res) => {
  const status = await db.messages.remove({ _id: req.params.id });
  res.json(status);
});

// database backup
app.get('/api/db-backup', authMiddleware, (req, res) => {
  res.download(
    path.resolve(path.dirname(''), './database/posts.db'),
    'posts.db'
  );
});

// serve static react app

app.use('/', express.static(path.resolve(path.dirname(''), './client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.dirname(''), './client/build/index.html'));
});

httpServer.listen(PORT, () => console.warn(`Listening on port: ${PORT}`));
