export default [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library used to build user interfaces, especially single-page applications. It lets you build reusable UI components and update the page efficiently when data changes.",
    color: "#a2d2ff",
    on: true,
  },
  {
    id: 2,
    question: "What is a component in React?",
    answer:
      "A component is a reusable piece of UI. It is a JavaScript function (or class) that returns JSX and controls how part of the screen looks and behaves.",
    color: "#ffc8dd",
    on: true,
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX is a syntax that looks like HTML but runs inside JavaScript. It makes writing React UI easier and more readable. Browsers don’t understand JSX directly—React converts it to normal JavaScript.",
    color: "#cdb4db",
    on: true,
  },
  {
    id: 4,
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight copy of the real DOM. React changes the Virtual DOM first, compares it with the previous version, and updates only what changed in the real DOM. This makes React fast.",
    color: "#a2d2ff",
    on: true,
  },
  {
    id: 5,
    question: "What are props?",
    answer:
      "Props are inputs passed from a parent component to a child component. They are read-only and used to share data between components.",
    color: "#ffc8dd",
    on: true,
  },
  {
    id: 6,
    question: "What is state?",
    answer:
      "State is data that belongs to a component and can change over time. When state changes, React re-renders the component automatically.",
    color: "#cdb4db",
    on: true,
  },
  {
    id: 7,
    question: "Difference between props and state?",
    answer:
      "Props: Passed from parent, read-only. State: Managed inside the component, can change",
    color: "#a2d2ff",
    on: true,
  },
  {
    id: 8,
    question: "What is useState?",
    answer:
      "useState is a React Hook that lets you add state to functional components. Example: const [count, setCount] = useState(0)",
    color: "#ffc8dd",
    on: true,
  },
  {
    id: 9,
    question: "What is useEffect?",
    answer:
      "useEffect is used to run side effects like: Fetching data from an API. Updating the DOM. Subscribing to events. It runs after the component renders.",
    color: "#cdb4db",
    on: true,
  },
  {
    id: 10,
    question: "What is conditional rendering?",
    answer:
      "Conditional rendering means showing different UI based on a condition. Example:  {isLoggedIn ? <Dashboard /> : <Login />}",
    color: "#a2d2ff",
    on: true,
  },
  {
    id: 11,
    question: "What are keys in React?",
    answer:
      "Keys help React identify which items in a list have changed, been added, or removed. They improve performance when rendering lists.",
    color: "#ffc8dd",
    on: true,
  },
  {
    id: 12,
    question: "What is lifting state up?",
    answer:
      "Lifting state up means moving state to the closest common parent component so multiple child components can share the same data.",
    color: "#cdb4db",
    on: true,
  },
  {
    id: 13,
    question: "What is controlled vs uncontrolled component?",
    answer:
      "Controlled: Form data is handled by React state. Uncontrolled: Form data is handled by the DOM itself. Controlled components are preferred in React.",
    color: "#a2d2ff",
    on: true,
  },
  {
    id: 14,
    question: "What is React Router?",
    answer:
      "React Router is a library used to handle navigation in React applications without reloading the page. Example: <Route path='/login' element={<Login />} />",
    color: "#ffc8dd",
    on: true,
  },
  {
    id: 15,
    question: "Why is React fast?",
    answer:
      "React is fast because: It uses the Virtual DOM. It updates only changed components. It efficiently reuses UI components",
    color: "#cdb4db",
    on: true,
  },
];
