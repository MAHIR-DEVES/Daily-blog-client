import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Header */}
      <header className="bg-white shadow-sm py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">Blog</h1>
          <p className="text-gray-600 mt-2">
            Read our latest articles and tutorials
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts Section */}
          <div className="lg:w-2/3">
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
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
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

            {/* Pagination */}
            <div className="flex justify-between items-center mt-8">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                Previous
              </button>
              <span className="text-gray-600">Page 1 of X</span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Next
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Search Widget */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex justify-between text-gray-700 hover:text-blue-600"
                  >
                    <span>Technology</span>
                    <span>(X)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between text-gray-700 hover:text-blue-600"
                  >
                    <span>Design</span>
                    <span>(X)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between text-gray-700 hover:text-blue-600"
                  >
                    <span>Development</span>
                    <span>(X)</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Recent Posts</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    Recent post title one
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    Recent post title two
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    Recent post title three
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
