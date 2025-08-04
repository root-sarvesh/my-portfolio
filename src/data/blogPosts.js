// src/data/blogPosts.js
const blogPosts = [
    {
      id: 1,
      title: "My First Blog Post",
      date: "August 4, 2025",
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `
    },

    {
        id: 2,
        title: "Exploring React Router for Blog Navigation",
        date: "August 5, 2025",
        content: `
    In this post, I dive into how to use React Router to build a list/detail flow in a React app.
    We start by installing \`react-router-dom\`, then set up <Routes> and <Route> components.
    
    1. Install: \`npm install react-router-dom\`
    2. Wrap your app in <BrowserRouter>.
    3. Define <Route path="/blog" element={<BlogList />} /> and <Route path="/blog/:id" element={<BlogDetail />} />.
    4. Use \`useParams()\` in <BlogDetail> to grab the \`:id\` and render the right post.
    
    This approach gives neat URLs like \`/blog/2\` and makes it super easy to scale from one post to many.
        `
      }
    // you can add more posts here...
  ];
  
  export default blogPosts;
  