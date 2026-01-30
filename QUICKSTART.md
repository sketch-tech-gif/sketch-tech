# Quick Start Guide - Sketch Tech Solutions

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js v14+ and npm installed
- Terminal/Command Prompt

## Step 1: Install Frontend Dependencies
```bash
cd client
npm install
```

## Step 2: Install Backend Dependencies
```bash
cd ../server
npm install
```

## Step 3: Start the Backend Server
```bash
npm start
```
Server will run on `http://localhost:5000`

## Step 4: Start the Frontend (in a new terminal)
```bash
cd client
npm run dev
```
Application will open on `http://localhost:5173`

## 📋 What's Included

### ✅ 5 Full Pages
- **Home** - Landing page with hero, services preview, and testimonials
- **Services** - All 8 services with pricing packages
- **Portfolio** - 8 project examples with category filtering
- **About** - Company story, mission, and 4-person team
- **Contact** - Contact form with 6 FAQ items

### ✅ Responsive Design
- Mobile optimized (tested on 320px and up)
- Tablet layouts
- Desktop experience
- No external dependencies for styling

### ✅ Backend API
- Contact form submission endpoint
- Services listing endpoints
- Error handling and validation
- CORS enabled

## 🎨 Design System

**Colors:**
- Primary: Purple-to-Blue gradient (#667eea → #764ba2)
- Background: Light gray (#f8f9fa)
- Text: Dark gray (#333)

**Typography:**
- Font: Segoe UI, Tahoma, Geneva, sans-serif
- Heading sizes: 2.5rem, 2rem, 1.5rem, 1.3rem
- Line height: 1.6

## 📝 Common Customizations

### Change Colors
Open any `.css` file and replace:
- `#667eea` with your primary color
- `#764ba2` with your secondary color

### Update Business Info
- **Email**: Update in Footer.jsx and Contact.jsx
- **Phone**: Update in Footer.jsx and Contact.jsx
- **Address**: Update in Contact.jsx
- **Hours**: Update in Contact.jsx

### Add More Services
1. Edit `client/src/pages/Services.jsx`
2. Add object to `allServices` array
3. Update `server/src/controllers/servicesController.js` with same data

### Modify Portfolio Projects
1. Edit `client/src/pages/Portfolio.jsx`
2. Update `projects` array
3. Modify categories as needed

## 🔧 Available Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server
- `npm start` - Start production server
- `npm run dev` - Start with auto-reload (nodemon)

## 📦 Dependencies

### Client
- react@18.2.0
- react-dom@18.2.0
- react-router-dom@6.8.0
- axios@1.3.0
- vite@4.1.0

### Server
- express@4.18.2
- cors@2.8.5
- dotenv@16.0.3
- axios@1.3.0

## 🐛 Troubleshooting

### Port Already in Use
**Frontend:** Change port in vite.config.js or run on different port
**Backend:** Change PORT in .env file

### CORS Errors
Make sure both client and server are running. Frontend on 5173, backend on 5000

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 5000 in Use
```bash
# Change PORT in server/.env
PORT=3001
```

## 🚀 Deployment

### Deploy Frontend to Vercel
```bash
cd client
npm run build
# Push to GitHub and connect to Vercel
```

### Deploy Backend to Heroku
```bash
# Create Procfile with: web: node src/server.js
# Push to Heroku remote
git push heroku main
```

## 📚 Project Structure

```
sketch-tech-solutions/
├── client/
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── pages/              # Page components
│   │   ├── App.jsx             # Main app component
│   │   ├── App.css             # App styles
│   │   ├── index.css           # Global styles
│   │   └── main.jsx            # Entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/
│   ├── src/
│   │   ├── controllers/        # Request handlers
│   │   ├── routes/             # API routes
│   │   └── server.js           # Server entry point
│   ├── .env                    # Environment variables
│   └── package.json
└── README.md
```

## ✨ Next Steps

1. **Customize Content** - Update company info, services, and projects
2. **Add Your Logo** - Replace the ✨ emoji in navbar
3. **Setup Database** - Connect MongoDB or PostgreSQL for persistence
4. **Add Email** - Integrate email service for contact forms
5. **Deploy** - Push to Vercel (frontend) and Heroku (backend)

## 💡 Tips

- Use browser DevTools to test responsive design
- Check the console for any errors during development
- Test the contact form submission before deploying
- Update all internal links if you change page routes
- Optimize images before deploying to production

## 📞 Support

Need help? Check the main README.md for more details or contact:
hello@sketchtechsolutions.com

---

Happy coding! 🎉
