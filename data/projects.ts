import { Project } from "@/types/index";
import todoImg from "@/assets/todo-img.jpg";
import movieSearchImg from "@/assets/movie-search-img.jpg";
import circlesChatImg from "@/assets/circles-chat-img.jpg";


export const PROJECTS: Project[] = [
  {
    title: "Circles Chat",
    description: "A real-time, fully responsive chat application featuring an integrated AI assistant for message proofreading and improvement",
    tags: ["React JS", "TypeScript", "Tailwind CSS", "Socket.IO", "Express JS", "MongoDB", "Groq LLM API", "Cloudinary"],
    liveUrl: "https://chat-app-eta-two-31.vercel.app/chat",
    githubUrl: "https://github.com/alinsub16/chat-app",
    image: circlesChatImg,
    isLatest: true
  },
  {
    title: "To-DO App",
    description: "Modern design with weather updates and inspirational quotes",
    tags: ["React JS", "Tailwind CSS","Express JS", "MongoDB", "Axios"],
    liveUrl: "https://alinsub16.github.io/todolist-UI/",
    githubUrl: "https://github.com/alinsub16/todolist-UI",
    image: todoImg,
    isLatest: false
  },
  {
    title: "Movie Search",
    description: "Responsive web app with real-time search up to latest movies",
    tags: ["React JS", "Tailwind CSS","Axios"],
    liveUrl: "https://alinsub16.github.io/movie-search/#/",
    githubUrl: "https://github.com/alinsub16/movie-search",
    image: movieSearchImg,
    isLatest: false
  },
  
];