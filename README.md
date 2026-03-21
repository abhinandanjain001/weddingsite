💒 WeddingSite – Your Dream Wedding, Made Easy! 💍✨
Welcome to WeddingSite, a dynamic full-stack web application built to make wedding planning stress-free and elegant! 💑🎉 Powered by HTML, CSS, JavaScript, Node.js, Express.js, EJS, and Firebase, this project connects every piece of your special day in one seamless experience. 🛠️🧠

## 🌟 Features

- **Beautiful UI**: Responsive, modern design for all devices.
- **Venue & Vendor Directory**: Browse venues, photographers, decorators, caterers, and more.
- **Interactive Booking**: Book vendors and venues directly from the site.
- **Budget Planner**: Track and manage your wedding expenses.
- **Real Wedding Stories**: Upload and view real wedding galleries and testimonials.
- **Contact & Feedback**: Integrated contact form for inquiries.
- **User Authentication**: Secure login and signup with hashed passwords.
- **AI & Maps**: Venue ideas and Google Maps integration.
- **Payment Integration**: Crypto and traditional payment gateway demos.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap, GSAP, FontAwesome
- **Backend**: Node.js, Express.js
- **Database**: Firebase Firestore
- **Templating**: EJS
- **Other**: Google Maps API, localStorage, jQuery, Shery.js, Three.js

---

## 📁 Folder Structure

```
maincel/
│
├── index.html                # Main landing page
├── aboutus.html              # About page
├── contact.html              # Contact form
├── login.html                # Login/Signup UI
├── budgetplanner.html        # Budget planner tool
├── planning.html             # Planning dashboard
├── stories.html              # Wedding stories gallery
├── ai.html                   # Venue ideas (AI)
├── vender.html               # Vendor showcase
├── venue.html                # Venue cards
├── gogmap.html               # Google Maps integration
├── script.js                 # Frontend JS logic
├── main.js                   # Additional JS logic
├── language.js               # Language/translation scripts
├── package.json              # Node.js dependencies
│
├── css/
│   └── style.css             # Main CSS
├── images/                   # Image assets
├── public/
│   ├── style.css             # Public-facing CSS
│   └── login.css             # Login page CSS
├── src/
│   ├── index.js              # Express server
│   ├── config.js             # Firebase Firestore config
│   └── script.js             # Login/signup JS
├── views/
│   ├── home.ejs              # EJS home template
│   └── gala.html             # Sample view
├── loading/                  # Loading screens, legacy, and demo pages
│   ├── index0.html, index1.html, index2.html
│   └── madime/
│       ├── View/             # Vendor/venue/food/photo HTMLs
│       ├── assets/           # CSS for food, venue, photo, etc.
│       └── mc/               # MC (Master of Ceremonies) section
└── ...
```

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```sh
git clone https://github.com/abhinandanjain001/weddingsite.git
cd maincel
```

### 2. **Install Dependencies**

Make sure you have [Node.js](https://nodejs.org/) installed.

```sh
npm install
```

### 3. **Configure Environment Variables**

Copy `.env.example` to `.env` inside `maincel/` and set your Firebase values, including Admin SDK credentials.

### 4. **Run the Application**

```sh
node src/index.js
```

The server will run on [http://localhost:5050](http://localhost:5050).

### 5. **Access the App**

- Open your browser and go to [http://localhost:5050](http://localhost:5050)
- Use the navigation bar to explore venues, vendors, planners, and more.

---

## 🔑 Authentication

- **Signup/Login**: Secure authentication with password hashing (bcrypt).
- **Sessions**: Managed via Express.

---

## 🖼️ Adding Content

- **Stories**: Upload images and testimonials in `stories.html` (stored in browser localStorage).
- **Vendors/Venues**: Add new entries by editing the respective HTML files in `loading/madime/View/`.

---

## 💡 Customization

- **Styling**: Modify CSS in `css/style.css`, `public/style.css`, or `loading/madime/assets/commonCSS/`.
- **Images**: Place new images in the `images/` folder.
- **Backend**: Update routes or logic in `src/index.js`.

---

## 🧩 Integrations

- **Google Maps**: Used in `gogmap.html` for venue directions.
- **AI Venue Ideas**: See `ai.html` for theme-based suggestions.
- **Crypto Payment Demo**: See `loading/madime/ethpayment/index.html`.

---

## 📚 License

This project is for educational/demo purposes. For commercial use, please contact the author.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📞 Contact

For questions or support, use the contact form on the site or email the maintainer.

---

Happy Planning! 💖
