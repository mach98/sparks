const quizzes = [
  {
    id: 1,
    title: 'Math Quiz',
    description: 'Test your knowledge of basic math equations.',
    questions: [
      {
        id: 1,
        question: 'Solve the equation: (2x + 3 = 7).',
        options: ['2', '3', '4'],
        correctOption: '2',
        image: 'https://example.com/equation_image.png', // Image URL or local path
      },
      {
        id: 2,
        question: 'What is the area of a circle with radius (r)?',
        options: ['(pi r^2)', '(\frac{2pi r}{h})', '(\frac{pi r^2}{2})'],
        correctOption: '(pi r^2)',
        image: 'https://example.com/circle_area.png', // Image URL or local path
      },
    ],
  },
  {
    id: 2,
    title: 'Chemistry Quiz',
    description: 'Test your knowledge of chemical formulas.',
    questions: [
      {
        id: 1,
        question: 'What is the chemical formula for water?',
        options: ['H2O', 'O2', 'CO2'],
        correctOption: 'H2O',
        image: 'https://example.com/water_formula.png', // Image URL or local path
      },
      {
        id: 2,
        question: 'Which formula represents hydrochloric acid?',
        options: ['HCl', 'NaCl', 'H2SO4'],
        correctOption: 'HCl',
        image: 'https://example.com/hcl_formula.png', // Image URL or local path
      },
    ],
  },
];
