import React from 'react'
import { Mail, Send } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900/50 rounded-[40px] p-8 md:p-20 border border-slate-800 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Send size={300} />
              </div>

              <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                <div className="space-y-8">
                  <h2 className="text-5xl font-black text-white leading-tight">
                    Let's build <br/> something <span className="text-cyan-400 underline decoration-cyan-400/30 underline-offset-8">epic</span>.
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Have a concept or a problem you want to solve? My inbox is always open for fresh ideas and collaborations.
                  </p>
                  
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-black uppercase tracking-widest">Email Me</p>
                        <a className='text-white text-lg font-medium group-hover:text-cyan-400 transition-colors block' href="mailto:alinsubtopher16@gmail.com">alinsubtopher16@gmail.com</a>
                      </div>
                    </div>  
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Contact
