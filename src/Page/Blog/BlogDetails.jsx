import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import UpdateBlog from './UpdateBlog';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Blog not found');
        }
        return res.json();
      })
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blog:', err.message);
        setLoading(false);
      });
  }, [id]);

  // Delete Blog
  const handleDelete = async id => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
          method: 'DELETE',
        });

        const data = await res.json();

        if (res.ok) {
          Swal.fire('Deleted!', 'Your blog has been deleted.', 'success');
          navigate(-1);
        } else {
          Swal.fire('Failed!', data.message, 'error');
        }
      } catch (error) {
        console.error('Delete error:', error);
        Swal.fire('Error!', 'Something went wrong.', 'error');
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>No blog found.</p>;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 px-10">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4 p-6 bg-white border-r border-gray-200">
        <div className="sticky top-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">
            Popular Categories
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center px-3 py-2 rounded-lg bg-blue-50 text-blue-600"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Web Development
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                UI/UX Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Mobile Apps
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                DevOps
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              Trending Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              <a
                href="#"
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
              >
                #react
              </a>
              <a
                href="#"
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
              >
                #javascript
              </a>
              <a
                href="#"
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
              >
                #tailwind
              </a>
              <a
                href="#"
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
              >
                #webdev
              </a>
              <a
                href="#"
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
              >
                #nodejs
              </a>
              <a
                href="#"
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
              >
                #nextjs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Dynamic content goes here */}
      <div className=" lg:w-2/4 p-6 bg-white">
        <div className="mx-auto">
          {/* Your dynamic blog content will be rendered here */}
          <div className="p-6 mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            {/* Blog Image */}
            {blog.image && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            {/* Blog Header */}
            <div className="flex justify-between items-center">
              <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                      />
                    </svg>
                    {blog.category}
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {blog.date}
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {blog.readTime}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end space-x-3 mt-4">
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                >
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete
                  </div>
                </button>
                <UpdateBlog id={blog.id} blog={blog}></UpdateBlog>
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center space-x-1 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span>Back</span>
                </button>
              </div>
            </div>

            {/* Optional Content Section */}
            <div className="prose max-w-none text-gray-700">
              {/* You could add blog content here if available */}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-1/4 p-6 bg-white border-l border-gray-200">
        <div className="sticky top-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">About Author</h3>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Author"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium">John Doe</h4>
              <p className="text-sm text-gray-500">Senior Developer</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            John has been writing about web technologies for over 5 years and
            specializes in React and Node.js.
          </p>

          <h3 className="text-lg font-bold mb-4 text-gray-800 mt-8">
            Newsletter
          </h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-3">
              Subscribe to get the latest posts delivered to your inbox.
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-2"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Subscribe
            </button>
          </div>

          <h3 className="text-lg font-bold mb-4 text-gray-800 mt-8">
            Popular Posts
          </h3>
          <div className="space-y-4">
            <a href="#" className="block group">
              <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
                Getting Started with React Hooks
              </h4>
              <p className="text-xs text-gray-500">May 15, 2023</p>
            </a>
            <a href="#" className="block group">
              <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
                Tailwind CSS Best Practices
              </h4>
              <p className="text-xs text-gray-500">June 2, 2023</p>
            </a>
            <a href="#" className="block group">
              <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
                Building a Full-Stack App
              </h4>
              <p className="text-xs text-gray-500">June 20, 2023</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
