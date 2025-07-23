# Simple Calculator Web App

A clean, functional, and responsive calculator web application built with **HTML**, **CSS**, and **JavaScript**. Features a modern design with CSS Grid layout and comprehensive mathematical operations.

## 🌟 Features

- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **CSS Grid Layout**: Perfectly aligned buttons with professional spacing
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Keyboard Support**: Full keyboard input compatibility
- **Error Handling**: Division by zero protection and input validation
- **Modern UI**: Clean design with hover effects and smooth transitions
- **Decimal Support**: Handle decimal numbers and floating-point calculations

## 📁 Project Structure

```
calculator/
├── index.html          # HTML structure and layout
├── style.css          # Styling with CSS Grid and responsive design
├── script.js          # Calculator logic and event handling
└── README.md          # Project documentation
```

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Ensure all three files** are in the same folder
3. **Open** `index.html` in your web browser
4. **Start calculating** - click buttons or use keyboard input

## 🎯 How to Use

### Mouse Input
- Click **number buttons** (0-9) to input digits
- Click **operator buttons** (+, -, ×, ÷) to select operations
- Click **equals (=)** to calculate the result
- Click **Clear (C)** to reset the calculator
- Click **decimal (.)** to add decimal points

### Keyboard Input
- **Number keys** (0-9): Input digits
- **+, -, *, /**: Mathematical operations
- **Enter or =**: Calculate result
- **Escape, C, or c**: Clear calculator
- **.**: Add decimal point

## 🛠️ Technologies Used

- **HTML5**: Semantic structure with data attributes
- **CSS3**: Grid layout, Flexbox, modern styling, and responsive design
- **JavaScript ES6**: Event handling, DOM manipulation, and mathematical operations

## 📱 Technical Implementation

### HTML Features
- Semantic markup structure
- Data attributes for JavaScript interaction
- Accessible input field for display
- Clean button organization

### CSS Features
- **CSS Grid**: 4-column layout for button alignment
- **Responsive Design**: Mobile-first approach
- **Modern Styling**: Gradients, shadows, and hover effects
- **Button Variants**: Different colors for number, operator, and action buttons

### JavaScript Features
- **Event Listeners**: `addEventListener` for all button interactions
- **State Management**: Tracks current input, operator, and previous values
- **Error Handling**: Division by zero protection
- **Input Validation**: Prevents invalid operations
- **Keyboard Integration**: Full keyboard support

## 🎨 Design Highlights

- **Color Scheme**: Professional blue and gray palette
- **Typography**: Clear, readable fonts with proper sizing
- **Layout**: CSS Grid ensures perfect button alignment
- **Interactions**: Smooth hover and click animations
- **Accessibility**: High contrast and readable text

## 🔧 Customization

To modify the calculator:

### Change Colors
Edit the CSS variables in `style.css`:
```css
.number { background: #f1f3f4; }      /* Number buttons */
.operator { background: #4285f4; }    /* Operator buttons */
.equals { background: #34a853; }      /* Equals button */
.clear { background: #ea4335; }       /* Clear button */
```

### Add New Functions
Extend `script.js` with additional operations:
```javascript
// Add new operators in the calculate function
else if (op === '^') {
    result = Math.pow(firstNum, secondNum);
}
```

### Modify Layout
Adjust the CSS Grid in `style.css`:
```css
.buttons {
    grid-template-columns: repeat(4, 1fr); /* Change column count */
}
```

## 📋 Code Structure

### JavaScript Functions
- `handleButtonClick()`: Main event handler for all button clicks
- `handleNumber()`: Processes number input
- `handleOperator()`: Manages mathematical operators
- `handleEquals()`: Performs calculations
- `handleDecimal()`: Handles decimal point input
- `handleClear()`: Resets calculator state
- `calculate()`: Core mathematical operations
- `updateScreen()`: Updates display screen

## 🐛 Error Handling

- **Division by Zero**: Returns "Error" message
- **Invalid Operations**: Prevents undefined calculations
- **Floating Point Precision**: Rounds results to avoid precision errors
- **Input Validation**: Ensures proper decimal formatting

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements:
- Add scientific calculator functions
- Implement calculation history
- Add themes or color schemes
- Improve accessibility features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with vanilla JavaScript - No frameworks required!** 🚀
