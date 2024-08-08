# Spark! E-Learning Quiz Feature

This project enhances the Spark! e-learning platform by creating an interactive quiz feature. The quizzes support mathematical equations, chemical formulas, images, and diagrams.

## Features

- **Quiz List Screen**: Displays a list of available quizzes with titles and brief descriptions, including optional thumbnail images.
- **Quiz Details Screen**: Shows multiple-choice questions with support for:
  - Mathematical Equations: Rendered using KaTeX.
  - Chemical Formulas: Rendered using appropriate libraries.
  - Images and Diagrams: Included as relevant to the questions.
- **Result Screen**: Displays the user's score with a summary of correct answers and explanations.

## Tech Stack

- **React Native**: For building the mobile application.
- **TypeScript**: For type safety and better development experience.
- **Zustand**: For state management.
- **React Navigation**: For screen transitions.
- **KaTeX**: For rendering mathematical equations.
- **Nativewind**: For styling.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- Yarn

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/mach98/sparks.git
    cd sparks
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    ```

3. **Run the application:**
    ```bash
    yarn start
    ```

4. **Run on Android:**
    ```bash
    yarn start --android
    ```
