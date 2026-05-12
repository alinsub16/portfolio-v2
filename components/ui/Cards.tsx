'use client'

import React from 'react'
import Image from "next/image";
import {  ExternalLink } from 'lucide-react';
import { LargeCardProps } from "@/types/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Cards: React.FC<LargeCardProps> = ({image, title, description, tags, isLatest, liveUrl, githubUrl}) => {
    return (
        <div className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/30 transition-all relative">

            {/* Latest Badge */}
            {isLatest && (
                 <div className="absolute top-4 left-[-50px] z-10 rotate-[-45deg]">
                    <span className="bg-cyan-500 text-black text-xs font-bold px-14 py-1 shadow-lg relative">
                    LATEST
                    <span className="absolute -right-2 top-0 h-full w-4 bg-cyan-600 skew-x-[20deg]" />
                    </span>
                </div>
            )}

            <div className="relative h-56 overflow-hidden">
                <Image
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                </div>
            </div>

            <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(tag => (
                    <span
                    key={tag}
                    className="text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded"
                    >
                    {tag}
                    </span>
                ))}
                </div>

                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
            </div>
        );
        };


export default Cards
