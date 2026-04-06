export default function About() {
  return (
    <main className="mt-8 flex justify-center">
      {/* Profile Card Container using Flexbox */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 max-w-lg w-full flex flex-col md:flex-row items-center gap-8">
        
        {/* Avatar Circle */}
        <div className="w-32 h-32 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex-shrink-0 shadow-inner">
        </div>
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">Kanomgenez</h2>
          <p className="text-blue-600 font-medium mb-4">Software Engineering Intern</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Currently interning at PEA, learning Next.js, React, and Tailwind CSS. 
            Passionate about building clean, responsive web applications and mastering modern front-end tools.
          </p>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
            {/* GitHub Link */}
            <a 
                href="https://github.com/Kanomgenez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition inline-block text-center"
            >
                GitHub
            </a>
            {/* Email Link */}
            <a 
                href="mailto:your.email@example.com?subject=Hello from PEA Intern Portfolio" 
                className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition inline-block text-center"
            >
                Contact
            </a>
            </div>
        </div>

      </div>
    </main>
  );
}