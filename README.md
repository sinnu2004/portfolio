
---

## 🛠️ How to Use

1. Clone or download the repository.  
2. Place all images inside the `/assets` folder (update image paths if needed).  
3. Open `index.html` in any browser — no build tools required!  
4. Customize your personal info, skills, and project list inside:
   - `index.html` (for static content)
   - `script.js` (for project cards)

---

## 💡 Known Issues / Fixes To-Do

You can improve or fix these later:

### ⚙️ Functionality
- [ ] **Incomplete JS block:** The last section of `script.js` (where project cards are appended) ends abruptly — needs proper closing backticks and `appendChild` call.
- [ ] **Reveal animation logic:** CSS `.reveal` is defined, but JS needs a scroll listener or `IntersectionObserver` to trigger it.
- [ ] **Theme toggle emoji:** The icon sometimes doesn’t match the theme state on page load — adjust initial toggle text.
- [ ] **Redundant code:** The line `text.style.setProperty, edutext.style.setProperty, ...` doesn’t perform any action — can be removed.

### 🎨 Design
- [ ] **Responsive tuning:** Some sections (especially About/Projects) can use extra padding or rearranged grids for small screens.
- [ ] **Add hover states:** Buttons and links could use subtle hover transitions.
- [ ] **Consistent fonts:** Define global font-family and fallback in `:root`.
- [ ] **Scroll-to-top button:** Add a floating button for better UX.
- [ ] **Loading animation:** Optional splash logo or “enter” transition.

### 🧹 Optimization
- [ ] **Use IntersectionObserver** for better scroll reveal performance.
- [ ] **Minify CSS/JS** for production.
- [ ] **Replace local image paths** with relative or CDN links before deployment.

---

## 🧰 Tech Stack

| Category      | Tools / Languages |
|----------------|------------------|
| Frontend       | HTML5, CSS3, JavaScript (Vanilla) |
| Styling / UI   | Flexbox, Grid, Animations, Media Queries |
| Animations     | CSS transitions, JS scroll reveals |
| Theme Handling | Local Storage, CSS Variables |

---

## 🧑‍💻 Author

**Saurabh Prajapat**  
Frontend Developer & Designer  
📧 prajapatsaurabh190@gmail.com  
🌐 [https://sinnu2004.github.io ](https://sinnu2004.github.io/portfolio/) 
🐙 [GitHub Profile](https://github.com/sinnu2004/portfolio)  

---

## 🪄 Future Improvements

- Add **project filtering** or **search bar**.
- Integrate a **contact form** with email service (e.g., EmailJS).
- Add **skills visualization** (progress bars or icons).

---

## 🖼️ Preview

You can view the live demo after deployment or use VSCode’s Live Server to preview locally.

---

⭐ *If you like this portfolio, consider giving it a star or forking it to build your own!*
