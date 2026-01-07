# Temperature Converter

A basic web app that converts between Celsius and Fahrenheit. Built for my coursework using HTML, CSS, and vanilla JavaScript. This project was created for the formative coursework task. The aim was to build a small interactive web app, deploy it online, and document the whole process including the Kanban board and testing. I chose a temperature converter because it was simple enough to focus on practising the workflow rather than building something complex.

**Live App**: [https://dhi-verma.github.io/temperature-converter/](https://dhi-verma.github.io/temperature-converter/)

---

## What It Does

The user types in a temperature in either Celsius or Fahrenheit and it automatically converts to the other. No buttons to press, it just updates as you type.

### Main Features
- Real-time conversion between C° and F°
- Clean interface with a purple gradient background
- Works on mobile and desktop
- Quick reference section for common temperatures (freezing, boiling, etc.)
- Clear button to reset everything

---

## User Documentation

### How to Use It

1. Open the app using the link
2. Type a number in either the Celsius or Fahrenheit box
3. The other box updates automatically which removes the need of a button to press
4. Hit "Clear" if you want to start over

**Examples:**
- Type `0` in Celsius → you'll see `32` in Fahrenheit
- Type `100` in Celsius → converts to `212` in Fahrenheit
- Works both ways, so you can type in either box

The app works in any modern browser such as Chrome, Edge, etc. I tested it on my phone too and it looks fine.

---

## Technical Documentation

### Tech Stack
- HTML5 for structure
- CSS3 for styling using flexbox
- Vanilla JavaScript for the conversion logic
- Hosted on GitHub Pages

### Project Files

```
temperature-converter/
├── index.html      # Main page
├── styles.css      # All the styling
├── script.js       # Conversion logic
└── README.md       # This file
```

### How It Works

The app uses two simple formulas:

**Celsius to Fahrenheit:** `F = (C × 9/5) + 32`  
**Fahrenheit to Celsius:** `C = (F - 32) × 5/9`

I set up event listeners on both input fields that trigger whenever you type. The JavaScript grabs the value, runs it through the conversion formula, rounds it to 2 decimal places, and displays it in the other box.

Here's the main conversion function:
```javascript
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
```

And the event listener that makes it work in real-time:
```javascript
celsiusInput.addEventListener('input', function() {
    const celsiusValue = parseFloat(this.value);
    
    if (this.value === '' || isNaN(celsiusValue)) {
        fahrenheitInput.value = '';
        return;
    }
    
    const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
    fahrenheitInput.value = roundToTwo(fahrenheitValue);
});
```

### Styling Choices

I went with a purple gradient background (`#667eea` to `#764ba2`) because it looks modern without being too distracting. The white card in the center keeps the focus on the actual converter. Added some hover effects on the clear button to make it feel more interactive.

The CSS uses flexbox to keep everything centered and responsive. There's a media query at 600px that adjusts spacing and font sizes for mobile devices.

---

## Testing

### Google Lighthouse Audit

I ran a Lighthouse audit through Chrome DevTools to check performance.

**Results:**
- Performance: 100/100
- Accessibility: 100/100
- Best Practices: 100/100
- SEO: 100/100

I am happy with these scores. The page loads instantly since it's just static files with no external dependencies.

**What I tested:**
- Load speed (super fast, no images or external libraries)
- Accessibility (added ARIA labels for screen readers)
- Mobile responsiveness (tested on different screen sizes)
- Browser compatibility (works in Chrome, Firefox, Safari, Edge)

### Manual Testing

I manually tested all the basic functionality:

| What I Tested | Expected | Result |
|--------------|----------|--------|
| 0°C input | Should show 32°F | Works |
| 100°C input | Should show 212°F | Works |
| 32°F input | Should show 0°C | Works |
| Decimal numbers | Should round to 2 places | Works |
| Clear button | Should empty both fields | Works |
| Empty field | Other field should clear | Works |

Also tested on different devices such as laptop, phone and browsers. Everything works as expected.

---

## Evaluation

### What Went Well

**Code quality:** Kept the JavaScript really simple - just three main functions. Everything is readable and I added comments.

**User experience:** The real-time conversion is smooth and you don't have to click anything. It just works, which is what I was going for.

**Design:** The gradient looks professional and the layout is clean. I'm happy with how it turned out visually.

**Lighthouse scores:** Getting 100 across the board was a nice validation that I did things properly.

### Challenges

**Rounding decimals:** At first, I was getting long numbers like 37.77777777. Fixed it by adding a `roundToTwo()` function that limits everything to 2 decimal places.

**Empty input handling:** When you cleared a field, it would show "NaN" in the other field. Had to add validation to check for empty strings and handle them properly.

**CSS gradient:** Took a few tries to find colors that looked good together and had enough contrast with white text. Ended up using a color picker tool online.

### What I'd Do Differently

If I had more time, I'd add:
- Some color coding - maybe blue for cold temps, red for hot
- Unit tests to automate the testing

### What I Learned

This was my first time properly using GitHub Projects and the Kanban board, which helped me stay organized. Breaking everything into issues made the project feel less overwhelming.

I also got more comfortable with event listeners and DOM manipulation. Before this, I'd mostly done projects where you click a button to get results, so having it update in real-time was a good learning experience.

The Lighthouse audit taught me about accessibility features I hadn't really thought about before. I'll definitely keep that in mind for future projects.

---

## Project Management

I used GitHub Projects to manage tasks, with a Kanban board split into "To Do," "In Progress," and "Done."

### Workflow

1. Create a feature branch that references the issue number (example: `feature/12-quick-reference`).
2. Open a PR and include a closing keyword in the PR description, such as `Closes #12`, to link and auto-close the issue.
3. After merging, verify the issue is closed and confirm the project board card moved to "Done."

**Main tasks:**
1. Set up project structure
2. Build HTML structure
3. Style with CSS
4. Write JavaScript logic
5. Add event listeners
6. Test everything
7. Run Lighthouse audit
8. Write documentation
9. Deploy to GitHub Pages

**Kanban Board:**

![Mid-development Kanban board](https://github.com/user-attachments/assets/0cb13c34-21fe-4d31-81fa-cf6085cc9fc1)

I broke the project down into 10 issues and moved them across the board as I completed each one. Really helped keep track of what still needed doing.

---

## Resources I Used

- MDN Web Docs for JavaScript reference
- CSS Gradient generator for the background colors
- Google Lighthouse documentation
- GitHub Pages docs for deployment
