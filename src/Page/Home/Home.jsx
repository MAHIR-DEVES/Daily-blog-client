import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  console.log(blogs);

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  const recentPosts = [
    {
      id: 4,
      title: 'JavaScript ES6 Features You Should Know',
      excerpt:
        'Explore the most useful ES6 features that will improve your JavaScript coding.',
      category: 'JavaScript',
      date: 'July 5, 2023',
    },
    {
      id: 5,
      title: 'Optimizing React Performance',
      excerpt:
        'Techniques to make your React applications faster and more efficient.',
      category: 'React',
      date: 'July 12, 2023',
    },
    {
      id: 6,
      title: 'CSS Grid vs Flexbox',
      excerpt:
        'When to use each layout system for the best results in your designs.',
      category: 'CSS',
      date: 'July 18, 2023',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}

      <header className="relative h-[400px] md:h-[500px] lg:h-[500px] bg-gradient-to-r from-blue-600/90 to-indigo-800/90 text-white overflow-hidden flex justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
            alt="Coding background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content - rest remains the same */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Welcome to DailyBlog
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
            A place to share knowledge and ideas about web development,
            programming, and more.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 shadow-lg">
            Start Reading
          </button>
        </div>
      </header>

      {/* Featured Posts */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-blue-600">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Link to={`/blog-details/${post.id}`}>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Posts & Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Recent Posts */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
              <div className="space-y-8">
                {recentPosts.map(post => (
                  <div
                    key={post.id}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-blue-600">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                View All Posts
              </button>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex justify-between text-gray-700 hover:text-blue-600"
                    >
                      <span>React</span>{' '}
                      <span className="bg-gray-100 px-2 rounded-full text-sm">
                        12
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between text-gray-700 hover:text-blue-600"
                    >
                      <span>JavaScript</span>{' '}
                      <span className="bg-gray-100 px-2 rounded-full text-sm">
                        8
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between text-gray-700 hover:text-blue-600"
                    >
                      <span>CSS</span>{' '}
                      <span className="bg-gray-100 px-2 rounded-full text-sm">
                        5
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between text-gray-700 hover:text-blue-600"
                    >
                      <span>Node.js</span>{' '}
                      <span className="bg-gray-100 px-2 rounded-full text-sm">
                        7
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between text-gray-700 hover:text-blue-600"
                    >
                      <span>Full-Stack</span>{' '}
                      <span className="bg-gray-100 px-2 rounded-full text-sm">
                        4
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold mb-4">
                  Subscribe to Newsletter
                </h3>
                <p className="text-gray-600 mb-4">
                  Get the latest posts delivered right to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to join our community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start sharing your knowledge and connect with other developers
            today.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300">
              Sign Up
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
