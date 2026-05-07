import React from 'react'
import { Code } from 'lucide-react'

const Hero: React.FC = () => {
    return (
        <>
            <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_50%_50%,_rgba(34,211,238,0.1)_0%,_rgba(15,23,42,0)_50%)]">
                <div className="absolute inset-0 opacity-5 pointer-events-none font-mono text-[10px] sm:text-xs overflow-hidden leading-relaxed select-none">
                    {Array(30).fill(0).map((_, i) => (
                        <div key={i} className="whitespace-nowrap">
                            &lt;div class="container"&gt; &lt;h1&gt;Building the Future&lt;/h1&gt; &lt;p&gt;Responsive, Scalable, Modern&lt;/p&gt; &lt;script&gt;console.log("Hello World");&lt;/script&gt;
                        </div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="font-mono text-cyan-400 font-medium mb-4 tracking-widest uppercase">Available for work</p>
                        <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight mb-6">
                            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital</span> Experiences.
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
                            Full-stack Developer specializing in building high-performance, accessible, and beautiful web applications.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#projects" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/20">
                                View My Work
                            </a>
                            <a href="#contact" className="px-8 py-4 border border-slate-700 hover:border-cyan-400 text-white rounded-lg font-bold transition-all">
                                Let's Talk
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:block relative">
                        <div className="w-full h-112.5 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 shadow-2xl relative overflow-hidden group">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-4 text-xs text-slate-500 font-mono">portfolio.ts</span>
                            </div>
                            <pre className="font-mono text-sm text-cyan-300 leading-relaxed">
                                <span className="text-pink-500">const</span> developer: <span className="text-blue-400">Dev</span> = {'{'}<br />
                                &nbsp;&nbsp;name: <span className="text-yellow-200">'Christopher'</span>,<br />
                                &nbsp;&nbsp;role: <span className="text-yellow-200">'Web Developer'</span>,<br />
                                &nbsp;&nbsp;passions: [<span className="text-yellow-200">'Clean Code'</span>, <span className="text-yellow-200">'UX'</span>],<br />
                                &nbsp;&nbsp;isHardworking: <span className="text-blue-400">true</span>,<br />
                                &nbsp;&nbsp;coffeeLevel: <span className="text-yellow-400">'Infinite'</span><br />
                                {'}'};<br /><br />
                                <span className="text-pink-500">function</span> <span className="text-blue-400">hireMe</span>() {'{'}<br />
                                &nbsp;&nbsp;<span className="text-pink-500">return</span> <span className="text-yellow-200">'Success!'</span>;<br />
                                {'}'}
                            </pre>
                            <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Code size={120} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
