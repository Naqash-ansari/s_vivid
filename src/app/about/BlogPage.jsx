"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

// Slugify utility function
const slugify = (text) =>
    text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-");

const BlogPage = () => {
    const blogs = [
        {
            title: "Clever ways to invest in branding to organize your business identity",
            img: "https://pagedone.io/asset/uploads/1696244059.png",
            desc: "Discover smart branding strategies that streamline your business presentation. Explore creative design, signage, and digital tools to optimize your visual presence and customer engagement.",
        },
        {
            title: "How to grow your profit through systematic investment in business solutions",
            img: "https://pagedone.io/asset/uploads/1696244074.png",
            desc: "Unlock the full potential of your business with systematic investment in our wide range of tailored services including signage, branding, and website development.",
        },
    ];

    return (
        <section className="py-24 bg-amber-600">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center flex-wrap lg:flex-nowrap lg:justify-between gap-8">
                    {/* Left Column */}
                    <div className="w-full lg:w-2/5">
                        <h2 className="text-4xl font-bold text-white leading-[3.25rem] mb-5">
                            Stay Updated:{" "}
                            <TypeAnimation
                                sequence={[
                                    "Latest News",
                                    1500,
                                    "Creative Signage Tips",
                                    1500,
                                    "Business Branding Insights",
                                    1500,
                                    "Marketing Strategies",
                                    1500,
                                ]}
                                speed={50}
                                deletionSpeed={30}
                                repeat={Infinity}
                            />
                        </h2>
                        <p className="text-white mb-10 text-base leading-relaxed">
                            Dive into our curated articles packed with tips on signage, branding, marketing, and business growth.
                        </p>
                        {/* Optional View All Button */}
                        {/* <Link href="/blog">
              <button className="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 text-white font-semibold hover:bg-white hover:text-amber-600 transition">
                View All
              </button>
            </Link> */}
                    </div>

                    {/* Right Column - Blog Cards */}
                    <div className="w-full lg:w-3/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {blogs.map((blog, index) => (
                                <div key={index} className="space-y-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                                    <img
                                        src={blog.img}
                                        alt={blog.title}
                                        className="rounded-xl w-full h-40 object-cover"
                                    />
                                    <h3 className="text-xl underline text-white font-semibold">{blog.title}</h3>
                                    <p className="text-white text-sm">{blog.desc}</p>
                                    <Link
                                        href={`/blog/${slugify(blog.title)}`}
                                        className="text-white font-semibold hover:underline"
                                    >
                                        Read more →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
