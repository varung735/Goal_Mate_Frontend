/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Components
    './src/components/Navbar.jsx',
    './src/components/Footer.jsx',
    './src/components/SideNav.jsx',
    './src/components/Error.jsx',
    './src/components/Snackbar.jsx',
    './src/components/home-page/Banner.jsx',
    './src/components/home-page/FeatureOne.jsx',
    './src/components/home-page/FeatureTwo.jsx',
    './src/components/home-page/FeatureThree.jsx',
    './src/components/home-page/AboutUs.jsx',
    './src/components/tasks/TaskGroup.jsx',
    './src/components/tasks/Task.jsx',
    // Pages
    './src/pages/HomePage.jsx',
    './src/pages/Login.jsx',
    './src/pages/Signup.jsx',
    './src/pages/EmailVerification.jsx',
    './src/pages/AdminDashboard.jsx',
    './src/pages/UserDashboard.jsx',
    './src/pages/Tasks.jsx',
    './src/pages/Expenses.jsx',
    './src/pages/Journals.jsx',
    './src/pages/Profile.jsx'
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#F7F7F8',
        'yellow': '#FFD93D',
        'success': '#56AE57',
        'error': '#FF0000'
      },
      fontFamily: {
        nunito: ['Nunito, sans-serif'],
        inter: ['Inter, sans-serif']
      },
      fontWeight: {
        thin: 100,
        'extra-light': 200,
        light: 300,
        medium: 500,
        'semi-bold': 600
      },
      backgroundImage: {
        //icons
        "bars": "url('https://res.cloudinary.com/dr61rg1rq/image/upload/v1706525713/GoalMate/Assets/icons/jlzosfswvwkgvpp1yyd5.png')",
        // Images
        "signup": "url('https://res.cloudinary.com/dr61rg1rq/image/upload/v1706864050/GoalMate/Assets/blellay3aqescjgnb5qr.jpg')",
        "login": "url('https://res.cloudinary.com/dr61rg1rq/image/upload/v1706864049/GoalMate/Assets/wbqhe9sxlwtcsf2i9ytv.jpg')",
        "goals": "url('https://res.cloudinary.com/dr61rg1rq/image/upload/v1706864049/GoalMate/Assets/faqv0hfpwgmaako8m61e.jpg')",
        "banner": "url('https://res.cloudinary.com/dr61rg1rq/image/upload/v1706359936/GoalMate/Assets/qibaswrjdg7oytxbwhau.jpg')",
        "tasks": "url('https://res.cloudinary.com/dr61rg1rq/image/upload/v1706359919/GoalMate/Assets/mv0pzfxgxqvhqklhogdx.jpg')",
        "expenses": "url('https://res.cloudinary.com/dr61rg1rq/image/upload/v1706435819/GoalMate/Assets/tcraggs9rkxjoftj3mhs.jpg')",
        "journals": "url('https://res.cloudinary.com/dr61rg1rq/image/upload/v1706435829/GoalMate/Assets/qza2uptm2x7dcfeaatjg.jpg')"
      }
    },
  },
  plugins: [],
}

