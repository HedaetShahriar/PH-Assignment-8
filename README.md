# DocBook - Medical Appointment Booking System

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://assignment-8-phudu.netlify.app/)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.1-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.4-06B6D4.svg)](https://tailwindcss.com/)

**🔗 Live Demo:** [https://assignment-8-phudu.netlify.app/](https://assignment-8-phudu.netlify.app/)

A modern, responsive medical appointment booking system built with React, designed to connect patients with healthcare professionals seamlessly.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [License](#license)

## 🌟 Overview

DocBook is a comprehensive medical appointment booking platform that enables patients to:
- Browse and search for qualified doctors
- View detailed doctor profiles with specializations
- Book appointments with preferred healthcare providers
- Manage their bookings efficiently
- Read educational medical blogs and articles

## ✨ Features

### 🏥 Core Features
- **Doctor Directory**: Browse comprehensive list of medical professionals
- **Advanced Search**: Filter doctors by specialty, availability, and location
- **Detailed Profiles**: View doctor credentials, experience, and fees
- **Appointment Booking**: Schedule appointments with real-time availability
- **Booking Management**: View and manage personal appointments
- **Educational Blog**: Access medical articles and health information

### 🎨 UI/UX Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Interface**: Clean, intuitive design using Tailwind CSS and DaisyUI
- **Interactive Elements**: Smooth animations and user feedback
- **Loading States**: Professional loading indicators throughout the app
- **Error Handling**: Comprehensive error pages and user notifications

### 🔧 Technical Features
- **React Router**: Client-side routing with lazy loading
- **State Management**: Efficient state handling with React hooks
- **Local Storage**: Persistent data storage for user preferences
- **Toast Notifications**: Real-time user feedback system
- **Performance Optimized**: Fast loading with Vite bundler

## 🛠️ Tech Stack

### Frontend
- **[React 19.0.0](https://reactjs.org/)** - UI library with latest features
- **[React Router 7.5.1](https://reactrouter.com/)** - Client-side routing
- **[Vite 6.3.1](https://vitejs.dev/)** - Build tool and development server
- **[Tailwind CSS 4.1.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[DaisyUI 5.0.27](https://daisyui.com/)** - Tailwind CSS component library

### Libraries & Tools
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Icon components
- **[React CountUp 6.5.3](https://www.npmjs.com/package/react-countup)** - Number animations
- **[React Toastify 11.0.5](https://fkhadra.github.io/react-toastify/)** - Toast notifications
- **[Recharts 2.15.3](https://recharts.org/)** - Data visualization charts
- **[ESLint 9.22.0](https://eslint.org/)** - Code linting and formatting

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
  - Download from [https://nodejs.org/](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm** (version 9.0.0 or higher) or **yarn** (version 1.22.0 or higher)
  - npm comes with Node.js
  - For yarn: [https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)

- **Git** (for cloning the repository)
  - Download from [https://git-scm.com/](https://git-scm.com/)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/HedaetShahriar/DocBook.git
cd DocBook
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### 3. Verify Installation

Check if all dependencies are installed correctly:
```bash
npm list --depth=0
```

## 🎯 Usage

### Development Server

Start the development server with hot reload:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create a production-ready build:

```bash
# Using npm
npm run build

# Using yarn
yarn build
```

The build files will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
# Using npm
npm run preview

# Using yarn
yarn preview
```

### Code Linting

Run ESLint to check code quality:

```bash
# Using npm
npm run lint

# Using yarn
yarn lint
```

## 📁 Project Structure

```
DocBook/
├── public/                     # Static assets
│   ├── doctorsData.json       # Doctor profiles data
│   ├── blogsData.json         # Blog articles data
│   ├── logo.png              # Application logo
│   └── _redirects            # Netlify redirect rules
├── src/
│   ├── assets/               # Images and static files
│   ├── Components/           # Reusable React components
│   │   ├── Appointment/      # Appointment booking component
│   │   ├── Banner/           # Hero/banner section
│   │   ├── Blog/             # Blog article component
│   │   ├── Doctor/           # Individual doctor card
│   │   ├── Doctor Details/   # Detailed doctor profile
│   │   ├── Doctors/          # Doctor listing component
│   │   ├── Footer/           # Site footer
│   │   ├── Navbar/           # Navigation component
│   │   └── ProvideServices/  # Services showcase
│   ├── Pages/                # Page-level components
│   │   ├── Blogs/            # Blog listing page
│   │   ├── ErrorPage/        # 404 error page
│   │   ├── Home/             # Landing page
│   │   ├── My Bookings/      # User bookings page
│   │   └── Root/             # Layout wrapper
│   ├── Routes/               # Routing configuration
│   ├── utilities/            # Helper functions
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── eslint.config.js          # ESLint configuration
├── vite.config.js            # Vite configuration
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

### Key Directories

- **`/Components`**: Reusable UI components organized by feature
- **`/Pages`**: Top-level page components with routing
- **`/utilities`**: Helper functions and utility modules
- **`/assets`**: Images, icons, and static media files
- **`/public`**: Static files served directly by the web server

## 🔌 API Integration

### Data Sources

The application uses JSON files as a mock API:

#### Doctors Data (`/public/doctorsData.json`)
```json
{
  "id": 1,
  "name": "Dr. John Doe",
  "speciality": "Cardiologist",
  "experience": "10 years",
  "fee": 1000,
  "availability": ["Sunday", "Tuesday", "Thursday"]
}
```

#### Blog Data (`/public/blogsData.json`)
```json
{
  "question": "What is React?",
  "answer": "React is a JavaScript library..."
}
```

### Extending with Real APIs

To integrate with real APIs, modify the loader functions in `src/Routes/Routes.jsx`:

```javascript
// Replace JSON file fetches with API calls
loader: () => fetch('https://your-api.com/doctors'),
loader: () => fetch('https://your-api.com/blogs'),
```

## 🌐 Deployment

### Netlify Deployment (Recommended)

1. **Connect Repository**:
   - Visit [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables** (if needed):
   - Add any required environment variables in Netlify dashboard

4. **Custom Redirects**:
   - The `_redirects` file handles client-side routing

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting service

### Other Hosting Options

- **Vercel**: [https://vercel.com/docs/deployments/git](https://vercel.com/docs/deployments/git)
- **GitHub Pages**: [https://pages.github.com/](https://pages.github.com/)
- **Firebase Hosting**: [https://firebase.google.com/docs/hosting](https://firebase.google.com/docs/hosting)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation when necessary
- Test your changes thoroughly

## 📚 Documentation

### React Documentation
- **React Official Docs**: [https://react.dev/](https://react.dev/)
- **React Router**: [https://reactrouter.com/en/main](https://reactrouter.com/en/main)
- **React Hooks**: [https://react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)

### Styling Documentation
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **DaisyUI Components**: [https://daisyui.com/components/](https://daisyui.com/components/)

### Build Tools
- **Vite Documentation**: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
- **ESLint Rules**: [https://eslint.org/docs/latest/rules/](https://eslint.org/docs/latest/rules/)

### Deployment Guides
- **Netlify Docs**: [https://docs.netlify.com/](https://docs.netlify.com/)
- **Vite Deployment**: [https://vitejs.dev/guide/static-deploy.html](https://vitejs.dev/guide/static-deploy.html)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the excellent framework
- **Vite Team** for the lightning-fast build tool
- **Tailwind CSS** for the utility-first CSS framework
- **DaisyUI** for beautiful component designs
- **Netlify** for seamless deployment experience

---

**Made with ❤️ by [HedaetShahriar](https://github.com/HedaetShahriar)**

For support or questions, please open an issue on [GitHub](https://github.com/HedaetShahriar/DocBook/issues).
