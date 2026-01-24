# System Setup Instructions

It looks like **Node.js** and **npm** (Node Package Manager) are missing from your system. You need them to run the new React website.

Since I cannot install system-level tools that require a password or interaction, please run the following commands in your terminal manually.

## Option 1: Install via Homebrew (Recommended for Mac)

1.  **Install Homebrew** (if you don't have it):
    Copy and paste this command into your terminal and follow the on-screen instructions (you may need to enter your Mac login password):
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2.  **Add Homebrew to your PATH**:
    After the installation finishes, it might ask you to run some commands to add brew to your path. Look at the "Next steps" output in your terminal. It usually looks like this:
    ```bash
    (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/sunipun/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
    ```

3.  **Install Node.js**:
    Once `brew` is working, run:
    ```bash
    brew install node
    ```

4.  **Verify Installation**:
    ```bash
    node -v
    npm -v
    ```

## Option 2: Install via Installer

1.  Go to [nodejs.org](https://nodejs.org/).
2.  Download the **LTS (Long Term Support)** version for macOS.
3.  Run the downloaded `.pkg` installer.
4.  Restart your terminal.

## After Installing Node.js

Once you have `npm` installed, you can start your website:

```bash
cd /Users/sunipun/Desktop/portfolio-website
npm install
npm run dev
```
