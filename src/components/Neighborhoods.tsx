import React from 'react';

const neighborhoods = [
    { name: "Tacony", description: "Home to the historic Disston Saw Works and a model industrial community built for workers." },
    { name: "Holmesburg", description: "Named after Thomas Holme, the surveyor who designed Philadelphia's grid system." },
    { name: "Frankford", description: "One of Philadelphia's oldest communities, with roots dating back to the 1600s." },
    { name: "Torresdale", description: "Site of the Drexel family estate where St. Katharine Drexel spent her summers." },
    { name: "Fox Chase", description: "A historic area known for its beautiful parks and residential character." },
    { name: "Bustleton", description: "Where the first airmail flight from New York to Washington D.C. made a stop in 1918." },
    { name: "Rhawnhurst", description: "A tight-knit community that produced community champions like Ed Kelly." },
    { name: "Mayfair", description: "A vibrant neighborhood with rich commercial and residential history." },
];

export function Neighborhoods() {
    return (
        <section className="hof-section bg-white">
            <div className="hof-container">
                <div className="hof-text-stack text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold hof-heading text-center">
                        Our Neighborhoods
                    </h2>
                    <p className="text-lg text-gray-600">
                        Northeast Philadelphia is a tapestry of distinct neighborhoods, each with its own unique history and character.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {neighborhoods.map((neighborhood, index) => (
                        <div key={index} className="hof-card p-6 hof-text-stack text-left">
                            <h3 className="text-xl font-bold hof-heading">
                                {neighborhood.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {neighborhood.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

