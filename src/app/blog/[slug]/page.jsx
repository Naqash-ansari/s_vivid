import React from "react";

// Slugify function (same as used in BlogPage)
const slugify = (text) =>
    text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-");

// Simulated blog data (same as in BlogPage)
const blogs = [
    {
        title: "Clever ways to invest in branding to organize your business identity",
        img: "https://pagedone.io/asset/uploads/1696244059.png",
        desc: "Discover smart branding strategies that streamline your business presentation. Explore creative design, signage, and digital tools to optimize your visual presence and customer engagement.",
        content:
            "Branding is more than just a logo. It's the story your business tells. In this blog, we explore practical strategies for defining your brand voice, choosing the right design language, and using digital and physical assets (like signage) to ensure your brand is memorable and consistent.",
    },
    {
        title: "How to grow your profit through systematic investment in business solutions",
        img: "https://pagedone.io/asset/uploads/1696244074.png",
        desc: "Unlock the full potential of your business with systematic investment in our wide range of tailored services including signage, branding, and website development.",
        content:
            "To grow your profit, you need to invest smartly. This article breaks down proven business solutions like optimized web presence, intelligent branding, and strong digital tools that not only enhance customer engagement but also build long-term profitability.",
    },
];

const BlogDetailPage = ({ params }) => {
    const { slug } = params;

    // Find the matching blog by slugified title
    const blog = blogs.find((blog) => slugify(blog.title) === slug);

    if (!blog) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-red-50 text-red-600">
                <h1 className="text-3xl font-extrabold mb-2">404 - Blog Not Found</h1>
                <p className="text-lg max-w-md text-center">We couldn’t find the blog you're looking for. Please check the URL or go back to the blog list.</p>
            </div>
        );
    }

    return (
        <div className="pt-20 pb-28 px-4 sm:px-6 md:px-10 lg:px-20">

            <main className="max-w-5xl py-20 mx-auto  px-6 sm:px-10 lg:px-20 bg-white rounded-lg shadow-lg border border-amber-300">
                {/* Blog Image */}
                <div className="overflow-hidden rounded-lg shadow-md mb-8">
                    <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-72 sm:h-96 object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                    />
                </div>

                {/* Blog Title */}
                <h1 className="text-5xl font-extrabold text-amber-700 mb-6 tracking-tight leading-tight">
                    {blog.title}
                </h1>

                {/* Blog Description */}
                <p className="text-xl text-amber-900 mb-8 italic">{blog.desc}</p>

                {/* Blog Content */}
                <article className="prose prose-amber max-w-none text-gray-800 leading-relaxed text-lg">
                    {blog.content.split("\n").map((para, idx) => (
                        <p key={idx} className="mb-6">
                            {para}
                        </p>
                    ))}
                </article>

                {/* Footer / Branding */}
                <footer className="mt-16 border-t border-amber-300 pt-6 text-center text-amber-600 font-semibold">
                    Powered by <span className="text-amber-800 font-bold">Sign Vivid</span> — Crafting Stunning Signs for Every Business
                </footer>
            </main>
        </div>
    );
};

export default BlogDetailPage;
