"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AcademicCapIcon, BookOpenIcon, BriefcaseIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

interface Publication {
  title: string;
  authors: string[];
  year: string;
  citations: number;
  venue: string;
  url: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch('/api/publications');
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        console.error('Error fetching publications:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPublications();
    // Refresh publications every hour
    const intervalId = setInterval(fetchPublications, 3600000);
    return () => clearInterval(intervalId);
  }, []);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-lg font-semibold">AB</span>
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16" id="about">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto">
              <Image
                src="/images/profile.jpg"
                alt="Abhishek Bhandari"
                fill
                className="rounded-full object-cover shadow-lg"
                priority
                sizes="(max-width: 768px) 100vw, 192px"
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Abhishek Bhandari
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Pursuing Ph.D., Indian Institute of Technology Jodhpur
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 dark:text-gray-400 mt-2"
          >
            <a href="mailto:bhandari.1@iitj.ac.in" className="hover:text-blue-600 dark:hover:text-blue-400">
              bhandari.1@iitj.ac.in
            </a>
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="prose dark:prose-invert max-w-none mb-16"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I am currently pursuing PhD in Computer Science from the Department of Computer Science and Engineering, 
            Indian Institute of Technology Jodhpur under the supervision of{" "}
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Prof. Gaurav Harit</a>. 
            I completed my M.Tech from the School of Computer and Information Sciences, University of Hyderabad. 
            Project work carried out at IDRBT, Hyderabad under the supervision of Dr. Rajarshi Pal.
          </p>
        </motion.div>

        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
          id="research"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <BookOpenIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="font-semibold">Natural Language Processing</h3>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <AcademicCapIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="font-semibold">Computer Vision</h3>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
          id="publications"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Publications</h2>
          <div className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
              </div>
            ) : publications.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                No publications found. Please check back later.
              </p>
            ) : (
              publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <div className="flex gap-4">
                    <DocumentTextIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{pub.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {pub.authors.join(', ')}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 mt-1">
                        {pub.venue}, {pub.year}
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0L0 9.5l12 9.5 12-9.5L12 0zm0 19l-12-9.5 12 9.5z"/>
                          </svg>
                          View Publication
                        </a>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          {pub.citations} citations
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.section>

        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          id="education"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <BriefcaseIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Ph.D. Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-400">Indian Institute of Technology Jodhpur</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2020 - present</p>
              </div>
            </div>
            <div className="flex gap-4">
              <BriefcaseIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">M.Tech. Information Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">University of Hyderabad</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2017 - 2019</p>
              </div>
            </div>
            <div className="flex gap-4">
              <BriefcaseIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">B.Tech. Information Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">Govt. Engineering College Ajmer</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2012 - 2016</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ab26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <span className="sr-only">Google Scholar</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
              </svg>
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
