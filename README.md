# Password Strength Checker

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Made with](https://img.shields.io/badge/Tech-Python%20%7C%20HTML%20%7C%20JavaScript%20%7C%20CSS-orange)

A dual-version Password Strength Checker that helps users evaluate the complexity of their passwords in real-time. Built using both Python (Tkinter GUI) and a responsive web interface using HTML, CSS, and JavaScript.

---

## 🔐 Features

- ✅ Real-time feedback on password strength
- ✅ Two versions:
  - Python desktop app with GUI (Tkinter)
  - Browser-based web app
- ✅ Checks for:
  - Minimum length (8+ characters)
  - Uppercase/lowercase mix
  - Numeric digits
  - Special characters
- ✅ Visual feedback: Very Weak → Very Strong

---

## 🛠️ Tech Stack

| Interface  | Technologies                |
|------------|-----------------------------|
| GUI App    | Python, Tkinter             |
| Web App    | HTML, CSS, JavaScript       |
| Other      | Responsive Design, Regex    |

---

## 📂 File Structure

```
password-strength-checker/
├── gui/
│   └── password_checker_gui.py         # Python GUI app
├── web/
│   ├── index.html                      # Web interface
│   ├── style.css                       # Styling
│   └── script.js                       # Logic
├── requirements.txt                    # For Python app
├── LICENSE                             # MIT License
├── .gitignore                          # Ignore compiled files, system files
└── README.md                           # This documentation
```

---

## 🖥️ How to Run

### ▶ Python GUI App

```bash
pip install tk
cd gui
python password_checker_gui.py
```

### 🌐 Web Version

Simply open the file:

```bash
cd web
start index.html  # or double-click it
```

---

## 📊 Strength Categories

| Score        | Criteria Met                                   | Label         |
|--------------|------------------------------------------------|---------------|
| 0            | None                                            | Very Weak     |
| 1            | 1 of 4                                          | Weak          |
| 2            | 2 of 4                                          | Moderate      |
| 3            | 3 of 4                                          | Strong        |
| 4            | All 4 (length + cases + number + special char) | Very Strong   |

---

## 📸 Demo Screenshots *(Optional)*

> Add screenshots here (e.g., `docs/gui-demo.png`, `docs/web-demo.png`)  
> Example:

```
docs/
├── gui-demo.png
├── web-demo.png
```

---

## 📌 Future Enhancements

- Add password strength bar with animation
- Export strength report or feedback
- Add password visibility toggle
- Use zxcvbn or entropy-based checker
- Deploy live version with GitHub Pages or Netlify

---

## 👤 Author

**Hridey Dalal**  
📧 [hrideydalal1@gmail.com](mailto:hrideydalal1@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/hridey-/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

