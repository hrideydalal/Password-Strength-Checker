import tkinter as tk
import string

def check_strength(password):
    strength = 0

    if len(password) >= 8:
        strength += 1
    if any(c.islower() for c in password) and any(c.isupper() for c in password):
        strength += 1
    if any(c.isdigit() for c in password):
        strength += 1
    if any(c in string.punctuation for c in password):
        strength += 1

    levels = {
        0: "Very Weak",
        1: "Weak",
        2: "Moderate",
        3: "Strong",
        4: "Very Strong"
    }

    return levels.get(strength, "Unknown")

def evaluate():
    pwd = entry.get()
    result = check_strength(pwd)
    label_result.config(text=f"Strength: {result}")

# GUI setup
root = tk.Tk()
root.title("Password Strength Checker")
root.geometry("400x200")
root.resizable(False, False)

label = tk.Label(root, text="Enter Password:", font=("Arial", 14))
label.pack(pady=10)

entry = tk.Entry(root, width=30, show="*", font=("Arial", 12))
entry.pack()

btn = tk.Button(root, text="Check Strength", command=evaluate, font=("Arial", 12))
btn.pack(pady=10)

label_result = tk.Label(root, text="", font=("Arial", 14), fg="blue")
label_result.pack(pady=5)

root.mainloop()
