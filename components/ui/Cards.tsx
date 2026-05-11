'use client'

import React from 'react'
import {  ExternalLink, GitFork } from 'lucide-react';
import { LargeCardProps } from "@/types/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Cards: React.FC<LargeCardProps> = ({image, title, description, tags}) => {
    return (
        <div className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/30 transition-all">
            <div className="relative h-56 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform"><ExternalLink size={20} /></button>
                    <button className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform"><FontAwesomeIcon icon={faGithub} size="lg" /></button>
                </div>
            </div>
            <div className="p-8">
                <div className="flex gap-2 mb-4">
                    {tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">{tag}</span>
                    ))}
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

export default Cards
