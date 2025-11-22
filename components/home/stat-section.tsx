"use client";

import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, Briefcase, Clock } from 'lucide-react';

const StatSection = () => {
    const stats = [
        { icon: Users, number: 50000, suffix: "+", label: "Students" },
        { icon: GraduationCap, number: 100, suffix: "+", label: "Universities" },
        { icon: Briefcase, number: 300, suffix: "+", label: "Jobs" },
        { icon: Clock, number: 1000, suffix: "+", label: "Hours of Learning" }
    ];

    const [counters, setCounters] = useState(stats.map(() => 0));
    const [isVisible, setIsVisible] = useState(false);

    // Helper function for formatting numbers
    const formatStatNumber = (num: number, suffix: string) => {
        if (num >= 100000) { // For 100,000 and above, use 'L' (Lakh)
            return `${(num / 100000).toFixed(0)}L${suffix}`;
        } else if (num >= 1000) { // For 1,000 and above, use 'K' (Thousand)
            return `${(num / 1000).toFixed(0)}K${suffix}`;
        }
        return `${num.toLocaleString()}${suffix}`;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('stats-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;
        const intervalIds: NodeJS.Timeout[] = [];

        stats.forEach((stat, index) => {
            const increment = stat.number / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.number) {
                    current = stat.number;
                    clearInterval(timer);
                }

                setCounters(prev => {
                    const newCounters = [...prev];
                    newCounters[index] = Math.floor(current);
                    return newCounters;
                });
            }, stepDuration);

            intervalIds.push(timer);
        });

        // Cleanup function to clear all intervals
        return () => {
            intervalIds.forEach(id => clearInterval(id));
        };
    }, [isVisible]);

    return (
        <div id="stats-section" className="w-full bg-primary/5 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center space-y-12">
                    {/* Stats Row - Horizontal layout */}
                    <div className="flex flex-wrap justify-center items-center gap-34">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                                        <Icon className="size-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xl lg:text-2xl font-bold text-primary">
                                            {formatStatNumber(Math.floor(counters[index]), stat.suffix)}
                                        </div>
                                        <div className="text-sm lg:text-base text-muted-foreground font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatSection;