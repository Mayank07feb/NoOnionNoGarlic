const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const seoData = require('./seoData'); // centralized meta data

const app = express();
const PORT = process.env.PORT || 3000; // <-- Use Render's assigned port

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout'); // default layout

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// ---------------------
// Routes
// ---------------------

// Home
app.get('/', (req, res) =>
  res.render('index', {
    meta_title: seoData.home.meta_title,
    meta_description: seoData.home.meta_description
  })
);

// About
app.get('/about', (req, res) =>
  res.render('about', {
    meta_title: seoData.about.meta_title,
    meta_description: seoData.about.meta_description
  })
);

// Contact
app.get('/contact', (req, res) =>
  res.render('contact', {
    meta_title: seoData.contact.meta_title,
    meta_description: seoData.contact.meta_description
  })
);

// Product Page
app.get('/products', (req, res) =>
  res.render('products', {
    meta_title: 'Our Products',
    meta_description: 'Browse our amazing range of products.'
  })
);

// Product Details
app.get('/product-details', (req, res) =>
  res.render('product-details', {
    meta_title: 'Sample Product',
    meta_description: 'This is a detailed description of the sample product.'
  })
);

// Register Page
app.get('/register', (req, res) =>
  res.render('register', {
    meta_title: 'Register - No Onion No Garlic',
    meta_description: 'Create your account and join No Onion No Garlic.'
  })
);

// Login Page
app.get('/login', (req, res) =>
  res.render('login', {
    meta_title: 'Login - No Onion No Garlic',
    meta_description: 'Log in to access your account.'
  })
);

// ---------------------
// User Dashboard & Related Pages
// ---------------------

app.get('/dashboard', (req, res) =>
  res.render('users/profile', { ...seoData.profile, layout: 'users/dashlayout' })
);


app.get('/profile', (req, res) =>
  res.render('users/profile', { ...seoData.profile, layout: 'users/dashlayout' })
);

app.get('/settings', (req, res) =>
  res.render('users/settings', { ...seoData.settings, layout: 'users/dashlayout' })
);

// ---------------------
// 404 fallback (must be last)
// ---------------------
app.use((req, res) =>
  res.status(404).render('404', {
    meta_title: 'Page Not Found',
    meta_description: 'Oops! The page you are looking for does not exist.'
  })
);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
