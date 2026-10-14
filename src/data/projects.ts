export interface Project {
  id: string;
  title: string;
  description: string;
  category: "web" | "ml" | "tools";
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A fully responsive e-commerce web application with product filtering, cart management, and checkout flow. Built with vanilla JavaScript and modern CSS.",
    category: "web",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/assets/images/projects/ecom.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: "2",
    title: "Iris Classification ML Model",
    description:
      "Machine learning model using scikit-learn for iris flower classification. Implemented with data preprocessing, feature scaling, and model evaluation techniques.",
    category: "ml",
    tech: ["Python", "Scikit-learn", "Pandas"],
    image: "/assets/images/projects/iris.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "Interactive weather application fetching real-time data from API. Features include location search, forecast display, and local storage for favorites.",
    category: "web",
    tech: ["JavaScript", "REST API", "CSS Grid"],
    image: "/assets/images/projects/weather.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: "4",
    title: "CLI Productivity Tool",
    description:
      "Command-line tool built in Python for task management and productivity tracking. Features data persistence and Markdown-based reporting.",
    category: "tools",
    tech: ["Python", "CLI", "File I/O"],
    image: "/assets/images/projects/cli.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: "5",
    title: "Stock Price Predictor",
    description:
      "Time series prediction model using LSTM neural networks. Implemented data normalization, train-test split, and model performance evaluation.",
    category: "ml",
    tech: ["Python", "TensorFlow", "LSTM"],
    image: "/assets/images/projects/stock.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: "6",
    title: "Task Management App",
    description:
      "Full-featured task management application with add, edit, delete functionality. Implements local storage for data persistence and category filtering.",
    category: "web",
    tech: ["JavaScript", "LocalStorage", "CSS Flexbox"],
    image: "/assets/images/projects/tasks.jpg",
    github: "#",
    demo: "#",
  },
];
