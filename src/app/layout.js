
/* ข้อดี next.js คือ
1.SEO, search engine optimization by sending pre rendered pages so that search engine crawler could better understand the web so that it ranked higher
2. file base Routing system
3. full stack app development is much easier because of "API routes" --> APi endpoint, serverless API
4. Code splitting, only load the javascript code of what's needed
Next.js is literally a react with many built-in features that help automated many functions so that dev could focus on
writing core react code
*/
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'My PEA Project',
  description: 'Built with Next.js and Tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans antialiased">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="font-bold text-xl text-blue-700">PEA Intern</h1>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-500 transition">Products</Link>
              <Link href="/about" className="hover:text-blue-500 transition">About Me</Link>
            </div>
          </div>
        </nav>

        {/* This is where your page content gets injected */}
        <div className="max-w-4xl mx-auto p-6">
          {children}
        </div>
      </body>
    </html>
  );
}