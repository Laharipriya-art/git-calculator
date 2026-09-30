# Git Calculator

Hello! This project is a simple calculator that adds, subtracts, multiplies and divides two
numbers.

It comes in **two versions**:

1. **A web calculator** — opens in your browser with buttons you click.
2. **A Python calculator** — runs in a black terminal window and asks you to type numbers.

You can run either one on your own computer. Nothing needs to be installed for the web one.

Where the code lives online: <https://github.com/Laharipriya-art/git-calculator>

---

## What you need

* For the **web calculator**: just a browser (Chrome, Edge or Firefox). That's it.
* For the **Python calculator**: Python 3 on your computer.
  To check if you have it, open a terminal and type `py --version`.
  If it prints something like `Python 3.13.15`, you're ready.

---

## Part 1 — Running the web calculator

This is the easy one.

1. Open the `git-calculator` folder.
2. **Double-click `index.html`.**
3. It opens in your browser. Done!

### How to use it

1. Click the **First number** box and type a number, for example `6`.
2. Click the **Second number** box and type another number, for example `3`.
3. Click the button for what you want to do — **Addition +**, **Subtraction −**,
   **Multiplication ×**, **Division ÷** or **Modulus %**.
4. The answer appears at the bottom of the page, like this: `Result: 9`
5. The red **Clear** button empties both boxes so you can start again.

> **What is Modulus %?** It gives you the remainder after dividing.
> For example 7 % 3 = 1, because 3 goes into 7 twice with 1 left over.

**Can't find `index.html` in your folder?** Jump to the
[Where are my files?](#where-are-my-files) section near the bottom — it's a branch thing and
it's easy to fix.

---

## Part 2 — Running the Python calculator

This one runs in a terminal.

1. Open the `git-calculator` folder.
2. Open a terminal in that folder. On Windows, the quickest way is to click in the address bar
   at the top of the folder window, type `cmd`, and press Enter.
3. Type this and press Enter:

   ```
   py calculator.py
   ```

4. It asks you for a first number. Type one and press Enter.
5. It asks you for a second number. Type one and press Enter.
6. It prints all the answers at once.

Here is what a whole run looks like, using 6 and 3:

```
Simple calculator

Enter first number :6
Enter second number :3

Results:
Addition:  9.0
subtraction:  3.0
multiplication:  18.0
Division:  2.0
done
```

> ### 💡 If you see "Python was not found"
>
> On Windows, typing `python calculator.py` often shows this message:
>
> *"Python was not found; run without arguments to install from the Microsoft Store"*
>
> **Don't worry — nothing is broken and you don't need to install anything.** That message
> comes from a Windows shortcut getting in the way. Just use **`py`** instead of `python`:
>
> ```
> py calculator.py
> ```
>
> (If you're on a Mac, use `python3 calculator.py` instead.)

---

## Part 3 — Testing it yourself

Testing just means *trying things out and checking you get the answer you expected*.

Below are things to try. The last column is what **should** happen. If you see something
different, you've found a bug!

### Normal things to try

These are the everyday cases that should all just work.

| Type this in box 1 | Type this in box 2 | Click this | You should see |
|---|---|---|---|
| 6 | 3 | Addition + | `Result: 9` |
| 6 | 3 | Subtraction − | `Result: 3` |
| 6 | 3 | Multiplication × | `Result: 18` |
| 6 | 3 | Division ÷ | `Result: 2` |
| 7 | 3 | Modulus % | `Result: 1` |
| -5 | 2 | Addition + | `Result: -3` |
| 2.5 | 0.1 | Addition + | `Result: 2.6` |

### Tricky things to try

These are the interesting ones. Good testers try to *break* the program on purpose, because
that's how you find the problems before anyone else does.

| Type this in box 1 | Type this in box 2 | Click this | You should see |
|---|---|---|---|
| *(leave it empty)* | 3 | Addition + | `Result: enter both numbers` |
| 6 | *(leave it empty)* | Addition + | `Result: enter both numbers` |
| 5 | 0 | Division ÷ | `Result: cannot divide by zero` |
| 0 | 5 | Division ÷ | `Result: 0` |
| 7 | 0 | Modulus % | `Result: NaN` ← this one is a bug, see below |
| 0.1 | 0.2 | Addition + | `Result: 0.30000000000000004` ← odd, see below |

### Testing the Clear button

1. Type 6 and 3, and click **Addition +**. You should see `Result: 9`.
2. Now click the red **Clear** button.
3. Both boxes should be empty, and the bottom line should just say `Result:` with nothing
   after it.

### Testing the Python calculator

| Type this first | Type this second | You should see |
|---|---|---|
| 6 | 3 | Addition 9.0, subtraction 3.0, multiplication 18.0, Division 2.0 |
| 5 | 0 | The first three answers, then `Division: Cannot divide by Zero` |
| -4 | 2 | Addition -2.0, subtraction -6.0, multiplication -8.0, Division -2.0 |
| abc | *(it never asks)* | It crashes with a red error ← this is a bug, see below |

---

## Things that don't work properly yet

Every project has these. Writing them down is a good habit — it shows you tested properly
instead of pretending everything is perfect.

**1. Modulus with 0 gives a strange answer**
If you do `7 % 0` the web calculator says `Result: NaN`. `NaN` is short for "not a number" —
it means the calculator got confused. It *should* say something friendly like "cannot divide
by zero", the way the ÷ button does. The code checks for zero when you press ÷, but nobody
added the same check for %.

**2. Letters crash the Python calculator**
If you type `abc` instead of a number, the program stops with a red error message
(`ValueError`). It should politely ask you to try again instead. You just restart it and type
a number.

**3. Decimals sometimes look wrong**
`0.1 + 0.2` shows `0.30000000000000004` instead of `0.3`. This isn't really a mistake in our
code — it's how *all* computers store decimal numbers. It could be tidied up by rounding the
answer before showing it.

**4. Enormous numbers show "Infinity"**
For example `1e308 × 10`. Nothing bad happens, and a small calculator like this doesn't really
need to handle numbers that big.

---

## Where are my files?

If you open the folder and `index.html` isn't there, don't panic — nothing is lost.

This project uses **branches**. A branch is like a separate copy of your project where you can
work on something new without disturbing the original. This project has two:

| Branch name | What's on it |
|---|---|
| `main` | Only `calculator.py` (the Python version) |
| `feature-clear-button` | The Python version **and** the web calculator, including the Clear button |

To see which branch you're on, open a terminal in the folder and type:

```
git branch
```

The one with a `*` next to it is the one you're on. To switch to the branch that has the web
calculator:

```
git checkout feature-clear-button
```

Your files will reappear in the folder. To go back:

```
git checkout main
```

---

## Getting this project on another computer

If you want to download this project somewhere else, open a terminal and type:

```
git clone https://github.com/Laharipriya-art/git-calculator.git
cd git-calculator
git checkout feature-clear-button
```

---

## What's in the folder

```
git-calculator/
├── README.md        ← the file you're reading
├── calculator.py    the Python calculator
├── index.html       the web calculator page
├── script.js        the maths behind the web calculator
└── style.css        makes the web calculator look nice
```

---

## Handy git commands

This project was also practice for learning git. Here are the commands, with what each one
actually does:

| Command | What it does |
|---|---|
| `git status` | Shows what you've changed so far |
| `git add .` | Gets all your changes ready to be saved |
| `git commit -m "what I did"` | Saves your changes with a short note |
| `git push origin feature-clear-button` | Uploads your saved changes to GitHub |
| `git branch` | Lists your branches and shows which one you're on |
| `git checkout -b my-new-idea` | Creates a new branch and switches to it |
| `git log --oneline` | Shows the history of everything you've saved |
