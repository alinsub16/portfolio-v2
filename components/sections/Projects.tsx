import React from 'react'
import Cards from '@/components/ui/Cards'
import { PROJECTS } from '@/data/projects'
import { Briefcase } from 'lucide-react'

const Projects: React.FC = () => {
  return (
    <>
      <section id="projects" className="py-32 px-6 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div className='text-center w-full'>
                <h2 className="text-4xl font-bold mb-2">Selected Works</h2>
                <p className="text-slate-500">Products built with passion and precision.</p>
              </div>
              {/* <button className="hidden sm:flex items-center gap-2 text-cyan-400 font-bold hover:underline">
                View All <Briefcase size={18} />
              </button> */}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                <Cards
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    tags={project.tags}
                    isLatest={project.isLatest}
                />
                ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default Projects
