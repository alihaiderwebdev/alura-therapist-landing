# Alura Therapist

A modern landing page for Alura Therapist — a therapy and mental wellness platform built with React and Vite.

## 🚀 Features

- **Homepage** with Hero, About, Services, Features, How It Works, Testimonials, Pricing, FAQ sections
- **User Authentication** (Sign Up & Login)
- **Responsive Design** for all devices
- **Toast Notifications** for user feedback

## 🛠️ Tech Stack

- **React 19** — UI library
- **Vite** — Fast build tool & dev server
- **React Router DOM** — Client-side routing
- **Axios** — HTTP client
- **React Hot Toast** — Toast notifications

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd alura-therapist
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start development server             |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview production build locally     |
| `npm run lint`    | Run ESLint to check code quality     |

## 📁 Project Structure

```
alura-therapist/
├── public/              # Static assets
├── src/
│   ├── api/             # API configuration
│   ├── assets/          # Images and media
│   ├── Auth/            # Authentication pages (Login, Signup)
│   ├── components/      # UI Components
│   │   ├── About/
│   │   ├── FAQ/
│   │   ├── Features/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── HowItWorks/
│   │   ├── Navbar/
│   │   ├── Plans/
│   │   ├── Pricing/
│   │   ├── Services/
│   │   ├── Testimonials/
│   │   └── ui/
│   ├── context/         # React Context (AuthContext)
│   ├── routes/          # Route configuration
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── global.css       # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Project dependencies
```

## 🌐 Routes

| Path       | Component  | Description       |
|------------|------------|-------------------|
| `/`        | Homepage   | Landing page      |
| `/signup`  | SignUp     | User registration |
| `/login`   | Login      | User login        |

## 📄 License

This project is private and proprietary.
