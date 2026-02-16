# ✨ Infinite Nested Accordion

A modern, interactive React application featuring infinitely nested accordions with smooth animations and infinite scroll functionality. Built with React 19 and Vite for optimal performance.

## 🚀 Features

- **Deep Nesting Support**: Accordions nested up to 10 levels deep
- **Infinite Scroll**: Automatically loads more content as you scroll down
- **Smooth Animations**: Elegant expand/collapse transitions
- **Custom Hooks**: Reusable `useInfiniteScroll` hook using Intersection Observer API
- **Performance Optimized**: Lazy loading of accordion items for better performance
- **Responsive Design**: Works seamlessly across different screen sizes
- **Loading States**: Visual feedback with loading indicators
- **End Message**: Clear indication when all content is loaded

## 🛠️ Tech Stack

- **React 19.2.0** - Modern React with latest features
- **Vite 7.3.1** - Lightning-fast build tool and dev server
- **CSS3** - Custom styling with smooth animations
- **Intersection Observer API** - Native browser API for infinite scroll

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js installed, run:
```bash
node --version
npm --version
```

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd nested-accordian
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

## 🚀 Running the Application

### Development Mode

To start the development server with hot reload:

```bash
npm run dev
```

The application will open at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is busy)


## 📁 Project Structure

```
nested-accordian/
├── src/
│   ├── Components/
│   │   ├── Accordion/
│   │   │   ├── Accordion.jsx          # Main accordion container with infinite scroll
│   │   │   ├── AccordionItem.jsx      # Individual accordion item component
│   │   │   └── accordion.css          # Accordion styling
│   │   ├── LoadingIndicator/
│   │   │   ├── LoadingIndicator.jsx   # Loading spinner component
│   │   │   └── LoadingIndicator.css   # Loading indicator styles
│   │   └── EndMessage/
│   │       ├── EndMessage.jsx         # End of content message
│   │       └── EndMessage.css         # End message styles
│   ├── hooks/
│   │   └── useInfiniteScroll.js       # Custom hook for infinite scroll
│   ├── Data/
│   │   └── data.js                    # Mock accordion data generator
│   ├── App.jsx                        # Main App component
│   ├── App.css                        # App-level styles
│   ├── main.jsx                       # Application entry point
│   └── index.css                      # Global styles
├── public/                            # Static assets
├── index.html                         # HTML template
├── package.json                       # Dependencies and scripts
├── vite.config.js                     # Vite configuration
├── eslint.config.js                   # ESLint configuration
└── README.md                          # This file
```

## 🎯 How It Works

### Accordion System
- **30 Total Accordions**: 10 nested accordions (with 10 levels deep) + 20 simple accordions
- Each nested accordion can be expanded to reveal child accordions
- Smooth CSS transitions for expand/collapse animations

### Infinite Scroll
- Initial load shows 10 accordions
- Automatically loads 5 more accordions when you scroll near the bottom
- Uses Intersection Observer API for efficient scroll detection
- Loading indicator appears while fetching more content

### Custom Hook
The `useInfiniteScroll` hook encapsulates the Intersection Observer logic:
- Monitors a trigger element at the bottom of the list
- Calls the callback function when the trigger enters the viewport
- Handles cleanup to prevent memory leaks

## 🎨 Customization

### Change Number of Nested Levels
Edit [`src/Data/data.js`](src/Data/data.js):
```javascript
children: generateNestedLevels(id, 1, 10) // Change 10 to your desired depth
```

### Adjust Load Amount
Edit [`src/Components/Accordion/Accordion.jsx`](src/Components/Accordion/Accordion.jsx):
```javascript
const ITEMS_PER_LOAD = 5; // Change to load more/fewer items
```

### Initial Display Count
Edit [`src/Components/Accordion/Accordion.jsx`](src/Components/Accordion/Accordion.jsx):
```javascript
const [displayedItems, setDisplayedItems] = useState(10); // Change initial count
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Your Name**
- GitHub: [@anshikaawasthi0607](https://github.com/anshikaawasthi0607)

## 🙏 Acknowledgments

- Built with React and Vite
- Inspired by modern UI/UX patterns
- Uses Intersection Observer API for performance

---

Made with ❤️ using React and Vite
