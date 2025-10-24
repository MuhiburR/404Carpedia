# 🚗 404 CarPedia

A responsive car browsing website with real-time search functionality built with vanilla HTML, CSS, and JavaScript.

**[Live Demo →](https://404carpedia.netlify.app/)**

## 📋 Features

- **Dynamic Car Listings**: Browse through available vehicles with images and pricing
- **Real-Time Search**: Filter cars instantly by make, model, year, or price
- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes
- **Interactive Cards**: Hover effects and smooth transitions for better UX
- **Clean UI**: Modern, minimalist interface with intuitive navigation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript (ES6)**: DOM manipulation, event handling, array methods
- **Netlify**: Deployment and hosting

## 🎨 Key Technical Features

### Responsive Grid Layout
- CSS Grid with `auto-fit` for dynamic column adjustment
- Mobile-first responsive design with media queries
- Flexible search form that adapts to screen size

### Search Functionality
- Real-time filtering using JavaScript `filter()` and `includes()` methods
- Searches across multiple fields (make, model, year, price)
- Case-insensitive matching for better user experience

### Dynamic Content Generation
- JavaScript function to create car cards programmatically
- Modular `createCarCard()` function for reusability
- Event-driven updates without page reload

## 🚀 How to Run Locally

### Option 1: Simple HTTP Server
```bash
# Clone the repository
git clone https://github.com/MuhiburR/404CarPedia.git
cd 404CarPedia

# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then open `http://localhost:8000` in your browser.

### Option 2: Direct File Opening
Simply open `index.html` in your web browser (though some features work best with a server).

## 📁 Project Structure

```
404CarPedia/
├── index.html       # Main HTML structure
├── style.css        # Styling and responsive design
├── script.js        # JavaScript logic and search functionality
└── README.md        # Project documentation
```

## 💡 How It Works

1. **Data Source**: Car information is stored in a JavaScript array of objects
2. **Display**: `displayCars()` function dynamically generates HTML cards for each car
3. **Search**: Form submission triggers filtering logic that updates the display
4. **Filtering**: Uses array methods to match search terms against car properties
5. **UI Updates**: DOM manipulation refreshes the car grid without page reload

## 🔮 Potential Enhancements

- [ ] Add sorting options (price, year, alphabetical)
- [ ] Implement price range slider filter
- [ ] Add car detail modal/page with more information
- [ ] Connect to a real car API (e.g., NHTSA Vehicle API)
- [ ] Add favorites/comparison feature
- [ ] Implement pagination for larger datasets
- [ ] Dark mode toggle
- [ ] Add more car makes and models

## 📊 Learning Outcomes

This project demonstrates:
- DOM manipulation and event handling
- Array methods (`filter`, `forEach`, `includes`)
- ES6+ JavaScript features (arrow functions, template literals)
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Form handling and preventing default behavior
- Dynamic content generation

## 📝 Note

This is an educational project created during high school. AI assistance (Replit AI) was used for learning guidance and best practices.

## 🌐 Deployment

Deployed and hosted on [Netlify](https://www.netlify.com/) with continuous deployment from GitHub.

## 👤 Author

**Muhibur Rahman**
- GitHub: [@MuhiburR](https://github.com/MuhiburR)
- Live Site: [404carpedia.netlify.app](https://404carpedia.netlify.app/)

---

*Built with vanilla JavaScript - no frameworks required!*
