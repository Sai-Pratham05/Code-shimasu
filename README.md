# code-shimasu

code-shimasu is a collaborative code sharing and execution platform designed to make it easy for users to write, run, and share code snippets in multiple programming languages. It features a modern, responsive interface and supports real-time collaboration, making it ideal for learning, teaching, and rapid prototyping.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [FAQ](#faq)
- [License](#license)

## Overview
code-shimasu aims to simplify the process of sharing and executing code online. Whether you're a student, educator, or developer, you can use this platform to:
- Experiment with code in a variety of languages without installing anything locally.
- Share code snippets with others via unique links.
- Collaborate in real-time with peers or mentors.
- Manage your own profile and keep track of your shared snippets.

## Features
- **Multi-language Code Editor:** Write code in popular languages such as Python, JavaScript, C++, Java, Go, and more. Syntax highlighting and language-specific icons help you stay organized.
- **Real-time Code Execution:** Instantly run your code and view the output directly in the browser. No setup required.
- **User Profiles:** Create and manage your own profile, view your shared snippets, and see your activity history.
- **Snippet Sharing:** Generate shareable links for your code snippets, making it easy to collaborate or showcase your work.
- **Modern UI:** Enjoy a clean, responsive interface that works seamlessly on both desktop and mobile devices.
- **Collaboration:** Work together with others in real-time, making it perfect for pair programming, code reviews, or teaching.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation
Clone the repository and install dependencies:
```sh
git clone <your-repo-url>
cd code-shimasu
npm install
```

### Running the App
Start the development server:
```sh
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### Environment Variables
If your project requires environment variables (e.g., for authentication or API keys), create a `.env.local` file in the root directory and add the necessary variables. Refer to the documentation or sample files if provided.

## Usage
1. **Select a Language:** Use the language selector to choose your preferred programming language.
2. **Write Code:** Enter your code in the editor panel. Syntax highlighting will adjust based on your selected language.
3. **Run Code:** Click the "Run" button to execute your code. The output will appear in the output panel below.
4. **Share Snippets:** Use the share button to generate a unique link to your code snippet. Share this link with others for collaboration or feedback.
5. **Manage Snippets:** View and manage your saved snippets from your profile page.

## Project Structure
- `src/` - Main application source code, including components, pages, and utilities.
- `convex/` - Backend logic, authentication, and data models.
- `public/` - Static assets such as images and icons.

## Contributing
We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear messages.
4. Push your branch and open a pull request describing your changes.

Please follow the code style and guidelines used in the project. For major changes, open an issue first to discuss what you would like to change.

## FAQ
**Q: What languages are supported?**
A: The platform supports popular languages including Python, JavaScript, TypeScript, C++, Java, Go, Ruby, Rust, Swift, and more.

**Q: Do I need to create an account?**
A: You can try out the editor and run code without an account, but creating an account allows you to save and manage your snippets.

**Q: Is my code private?**
A: Snippets are private by default, but you can share them via unique links. Please avoid sharing sensitive information.

**Q: How is code executed?**
A: Code is executed in secure, isolated environments on the server. Resource limits and security measures are in place to protect users.

## License
This project is licensed under the [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.txt). 