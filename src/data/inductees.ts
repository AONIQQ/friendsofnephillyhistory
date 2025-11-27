export interface Inductee {
    id: string;
    name: string;
    years: string;
    category: "Individual" | "Organization" | "Historic House of Worship" | "Posthumous";
    inductionYear: number;
    shortBio: string;
    fullBio: string;
    achievements: string[];
    imageUrl?: string;
    wikipediaUrl?: string;
}

export const inductees: Inductee[] = [
    // 2009 INAUGURAL CLASS
    {
        id: "thomas-holme",
        name: "Thomas Holme",
        years: "1624-1695",
        category: "Posthumous",
        inductionYear: 2009,
        shortBio: "First Surveyor General of Pennsylvania who designed the original plan for Philadelphia.",
        fullBio: "Thomas Holme was the first Surveyor General of the colonial-era Province of Pennsylvania. Appointed by William Penn, Holme laid out the first and original plan for the city of Philadelphia in 1682. He was a member of the Valiant Sixty, a group of early leaders in the Religious Society of Friends (Quakers). Holme established his home, Wellspring, in what is now Holmesburg. He served as a councilor to Penn, justice of the peace, and commissioner of property until his death in 1695.",
        achievements: [
            "Designed the original grid plan for Philadelphia",
            "First Surveyor General of Pennsylvania",
            "Produced the first detailed map of Pennsylvania (c. 1687)",
            "Member of William Penn's Provincial Council",
            "Namesake of Holmesburg, Holme Avenue, and Holme Circle"
        ],
        imageUrl: "/inductees/thomas-holme.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Thomas_Holme"
    },
    {
        id: "henry-mary-disston",
        name: "Henry & Mary Disston",
        years: "1819-1878 / 1822-1895",
        category: "Posthumous",
        inductionYear: 2009,
        shortBio: "Founders of Disston Saw Works who built the community of Tacony for their workers.",
        fullBio: "Henry Disston founded Disston Saw Works in Northern Liberties in the 1840s, which grew to become one of the largest saw manufacturers in the world. In the 1870s, he relocated the business to Tacony with a revolutionary vision: building a family-centric community for his employees. His wife Mary created the Mary Disston Estate, which provided land, homes, and amenities for Saw Works employees. The Disstons transformed Tacony into a model industrial community with worker housing, schools, and recreational facilities.",
        achievements: [
            "Founded Disston Saw Works, a global manufacturing leader",
            "Built the planned community of Tacony for workers",
            "Created worker housing and community amenities",
            "Pioneered corporate social responsibility",
            "Employed thousands of Northeast Philadelphia residents"
        ],
        imageUrl: "/inductees/disston.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Disston_Saw_Works"
    },
    {
        id: "katharine-drexel",
        name: "St. Katharine Drexel",
        years: "1858-1955",
        category: "Posthumous",
        inductionYear: 2009,
        shortBio: "Philadelphia-born saint who devoted her life and fortune to helping Native Americans and African Americans.",
        fullBio: "Katharine Drexel was born into one of Philadelphia's wealthiest families and spent summers at the family estate in Torresdale. Rather than live a life of privilege, she devoted her life and her $20 million inheritance to helping impoverished Native Americans and African Americans. In 1891, she founded the Sisters of the Blessed Sacrament, establishing over 60 missions and schools across the United States, including Xavier University of Louisiana—the only historically Black Catholic university in America. She was canonized by Pope John Paul II in 2000, becoming only the second American-born saint.",
        achievements: [
            "Canonized as a Saint by Pope John Paul II (2000)",
            "Founded the Sisters of the Blessed Sacrament (1891)",
            "Established Xavier University of Louisiana",
            "Built over 60 missions and schools nationwide",
            "Patron saint of racial justice and philanthropists",
            "Second American-born person declared a saint"
        ],
        imageUrl: "/inductees/katharine-drexel.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Katharine_Drexel"
    },
    {
        id: "tom-gola",
        name: "Tom Gola",
        years: "1933-2014",
        category: "Individual",
        inductionYear: 2009,
        shortBio: "Basketball Hall of Famer, La Salle legend, and Philadelphia city controller.",
        fullBio: "Tom Gola is widely considered one of the greatest NCAA basketball players of all time. A Philadelphia native, he led La Salle College High School to a Catholic League Championship, then starred at La Salle University where he won both NIT (1952) and NCAA (1954) championships. He remains the NCAA all-time rebounding leader with 2,201 career rebounds. As a professional, he won an NBA championship with the Philadelphia Warriors in 1956 and was a five-time NBA All-Star. After his playing career, he coached at La Salle and served in Pennsylvania politics, including as Philadelphia City Controller from 1970-1974.",
        achievements: [
            "Naismith Memorial Basketball Hall of Fame (1976)",
            "NCAA all-time rebounding leader (2,201)",
            "NCAA Champion and Tournament MVP (1954)",
            "NIT Champion and MVP (1952)",
            "NBA Champion with Philadelphia Warriors (1956)",
            "5-time NBA All-Star",
            "Philadelphia City Controller (1970-1974)",
            "Only player to win NIT, NCAA, and NBA championships"
        ],
        imageUrl: "/inductees/tom-gola.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Tom_Gola"
    },
    {
        id: "joan-krajewski",
        name: "Joan Krajewski",
        years: "Born 1938",
        category: "Individual",
        inductionYear: 2009,
        shortBio: "Trailblazing Philadelphia City Councilwoman who served the 6th District for 30 years.",
        fullBio: "Joan Krajewski represented the 6th District on Philadelphia City Council for 30 years, becoming one of the most influential voices for Northeast Philadelphia. She made history as the first woman to serve as Majority Leader of Philadelphia City Council. Krajewski established the Community Life Improvement Program and was named Best Councilperson by Philadelphia Magazine in 1987, 1990, and 1991. Known for her tenacity and dedication to constituents, she was called 'the toughest politician next to Frank Rizzo' by fellow legislators.",
        achievements: [
            "First female Majority Leader of Philadelphia City Council",
            "Served 6th District for 30 years",
            "Established Community Life Improvement Program",
            "Best Councilperson - Philadelphia Magazine (1987, 1990, 1991)",
            "Pioneering advocate for Northeast Philadelphia"
        ],
        imageUrl: "/inductees/joan-krajewski.jpg"
    },
    {
        id: "harry-silcox",
        name: "Harry C. Silcox",
        years: "Born 1930s",
        category: "Individual",
        inductionYear: 2009,
        shortBio: "Foremost historian of Northeast Philadelphia and former Lincoln High School principal.",
        fullBio: "Harry C. Silcox is recognized as the foremost historian of Northeast Philadelphia. A star basketball player for Temple University in the 1950s, he went on to coach at Lincoln High School, where he later served as assistant principal and principal. Upon his retirement in 1992, Silcox established and directed the Pennsylvania Institute for Environmental and Community Service Learning at Philadelphia University. He has devoted his post-retirement years to researching and writing about Northeast Philadelphia history, becoming a noted author, lecturer, and scholar.",
        achievements: [
            "Foremost historian of Northeast Philadelphia",
            "Temple University basketball star (1950s)",
            "Principal of Lincoln High School",
            "Founded PA Institute for Environmental and Community Service Learning",
            "Prolific author on Northeast Philadelphia history"
        ],
        imageUrl: "/inductees/harry-silcox.jpg"
    },
    {
        id: "aid-for-friends",
        name: "Aid for Friends",
        years: "Founded 1974",
        category: "Organization",
        inductionYear: 2009,
        shortBio: "Northeast Philadelphia organization that has served millions of meals to homebound neighbors.",
        fullBio: "Aid for Friends was started by Rita Ungar-Schiavone in 1974 in her own home. What began as a small effort to help neighbors grew steadily, first filling a trailer behind St. Jerome's Church, then expanding to a storefront on Holme Avenue, before becoming a large operation in the Far Northeast. The organization has served over 14 million meals to more than 11,700 shut-ins across the Philadelphia region. Aid for Friends pioneered the concept of home-delivered meal services and continues to provide vital nutrition and companionship to isolated seniors.",
        achievements: [
            "Served over 14 million meals to shut-ins",
            "Helped more than 11,700 homebound individuals",
            "Pioneered in-home meal delivery services",
            "Founded by Rita Ungar-Schiavone in 1974",
            "Model for senior meal programs nationwide"
        ],
        imageUrl: "/inductees/aid-for-friends.jpg"
    },

    // 2012 CLASS
    {
        id: "frank-shuman",
        name: "Frank Shuman",
        years: "1862-1918",
        category: "Posthumous",
        inductionYear: 2012,
        shortBio: "Tacony inventor who built the world's first solar thermal power station.",
        fullBio: "Frank Shuman was an inventor and engineer who lived and worked in Tacony. He is best known globally for helping build the world's first solar thermal power station in Maadi, Egypt in 1913. Locally, as part of the Tacony Iron Works, Shuman helped build the iconic William Penn statue that still stands atop Philadelphia's City Hall. He held numerous patents and was a pioneer in solar energy technology, envisioning a future powered by the sun over a century before it became mainstream.",
        achievements: [
            "Built world's first solar thermal power station (Egypt, 1913)",
            "Helped construct William Penn statue on City Hall",
            "Pioneer of solar energy technology",
            "Prolific inventor with numerous patents",
            "Tacony Iron Works engineer"
        ],
        imageUrl: "/inductees/frank-shuman.jpg"
    },
    {
        id: "leon-sullivan",
        name: "Rev. Leon Sullivan",
        years: "1922-2001",
        category: "Posthumous",
        inductionYear: 2012,
        shortBio: "Civil rights leader who founded Opportunities Industrialization Centers.",
        fullBio: "Reverend Leon Sullivan and his family were among the first residents of Greenbelt Knoll, Philadelphia's first planned interracial community. A Baptist minister and civil rights leader, Sullivan founded the Opportunities Industrialization Centers (OIC) in 1964, which grew into an international organization providing job and life skills training to those who need it most. He also created the Sullivan Principles, a code of corporate conduct regarding South African apartheid that influenced global business ethics. OIC has trained millions of people worldwide.",
        achievements: [
            "Founded Opportunities Industrialization Centers (1964)",
            "Created the Sullivan Principles for corporate ethics",
            "Early resident of Greenbelt Knoll (first interracial community)",
            "OIC has trained millions worldwide",
            "Influential civil rights leader"
        ],
        imageUrl: "/inductees/leon-sullivan.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Leon_Sullivan"
    },
    {
        id: "ed-kelly",
        name: "Ed Kelly",
        years: "1926-2012",
        category: "Posthumous",
        inductionYear: 2012,
        shortBio: "Community leader who founded the beloved Pennypack Park summer concert series.",
        fullBio: "Ed Kelly grew up in Rhawnhurst and devoted his life to Northeast Philadelphia after serving in World War II. As executive director of the Greater Northeast Philadelphia Chamber of Commerce, he worked tirelessly to promote local businesses and community development. His most beloved legacy is founding the Pennypack Park summer concert series, which has provided an estimated $1 million in free entertainment to the community. Kelly passed away just two months before his induction, and his son Ted accepted the honor on his behalf in an emotional ceremony.",
        achievements: [
            "Founded Pennypack Park Summer Concert Series",
            "Executive Director, Greater NE Philadelphia Chamber of Commerce",
            "World War II veteran",
            "Provided ~$1 million in free community entertainment",
            "Lifelong advocate for Northeast Philadelphia"
        ],
        imageUrl: "/inductees/ed-kelly.jpg"
    },
    {
        id: "chris-ferguson",
        name: "Chris Ferguson",
        years: "Born 1961",
        category: "Individual",
        inductionYear: 2012,
        shortBio: "NASA astronaut and Far Northeast Philadelphia native who commanded the final Space Shuttle mission.",
        fullBio: "Chris Ferguson grew up in the Far Northeast, where he would watch planes at the Northeast Philadelphia Airport and dream of flying. That dream took him further than he ever imagined. After attending Archbishop Ryan High School, he studied engineering at Drexel University, then joined the Navy where he became a test pilot. Ferguson was selected as a NASA astronaut in 1998 and flew three Space Shuttle missions, commanding both STS-126 and the historic STS-135—the final Space Shuttle mission in 2011. He later worked on Boeing's Starliner spacecraft program.",
        achievements: [
            "Commander of STS-135, final Space Shuttle mission (2011)",
            "Three Space Shuttle missions",
            "NASA astronaut (1998-2011)",
            "Archbishop Ryan High School graduate",
            "Drexel University engineering alumnus",
            "U.S. Navy Captain and test pilot"
        ],
        imageUrl: "/inductees/chris-ferguson.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Christopher_Ferguson"
    },
    {
        id: "benjamin-rush",
        name: "Benjamin Rush",
        years: "1746-1813",
        category: "Posthumous",
        inductionYear: 2010,
        shortBio: "Founding Father, physician, and signer of the Declaration of Independence.",
        fullBio: "Benjamin Rush was a Founding Father of the United States and a civic leader in Philadelphia, where he was a physician, politician, social reformer, humanitarian, and educator. He signed the Declaration of Independence and attended the Continental Congress. Rush was a pioneer in the study of mental illness and is considered the 'Father of American Psychiatry'. He lived at his ancestral home, Morven, in what is now the Torresdale section of Northeast Philadelphia.",
        achievements: [
            "Signer of the Declaration of Independence",
            "Surgeon General of the Continental Army",
            "Father of American Psychiatry",
            "Founder of Dickinson College",
            "Advocate for public education and abolition"
        ],
        imageUrl: "/inductees/benjamin-rush.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Benjamin_Rush"
    },
    {
        id: "robert-purvis",
        name: "Robert Purvis",
        years: "1810-1898",
        category: "Posthumous",
        inductionYear: 2016,
        shortBio: "Abolitionist leader and President of the Underground Railroad.",
        fullBio: "Robert Purvis was a prominent abolitionist in the United States. He lived for many years in Byberry, Northeast Philadelphia. Purvis was of mixed race and chose to identify as black and fight for the abolition of slavery. He was a founder of the American Anti-Slavery Society and served as President of the Pennsylvania Anti-Slavery Society. He is often referred to as the 'President of the Underground Railroad' for his work helping thousands of enslaved people escape to freedom.",
        achievements: [
            "President of the Underground Railroad",
            "Founder of the American Anti-Slavery Society",
            "President of the Pennsylvania Anti-Slavery Society",
            "Helped thousands escape slavery",
            "Byberry resident and community leader"
        ],
        imageUrl: "/inductees/robert-purvis.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Robert_Purvis"
    },
    {
        id: "butch-ballard",
        name: "Butch Ballard",
        years: "1918-2011",
        category: "Posthumous",
        inductionYear: 2016,
        shortBio: "Legendary jazz drummer who played with Duke Ellington and Count Basie.",
        fullBio: "George 'Butch' Ballard was a renowned jazz drummer who grew up in Frankford. He played with some of the greatest names in jazz history, including Duke Ellington, Count Basie, and Louis Armstrong. Ballard was a mentor to many young musicians in Philadelphia and continued to perform and teach well into his 90s. He was a fixture of the Philadelphia jazz scene and a proud resident of Northeast Philadelphia.",
        achievements: [
            "Performed with Duke Ellington and Count Basie",
            "Renowned jazz drummer and educator",
            "Mentor to Philadelphia musicians",
            "Frankford native",
            "Career spanning over seven decades"
        ],
        imageUrl: "/inductees/butch-ballard.jpg"
    },
    {
        id: "sister-mary-scullion",
        name: "Sister Mary Scullion",
        years: "Born 1953",
        category: "Individual",
        inductionYear: 2010,
        shortBio: "Co-founder of Project HOME and advocate for the homeless.",
        fullBio: "Sister Mary Scullion, a member of the Sisters of Mercy, is a nationally recognized advocate for the homeless and mentally ill. A native of Northeast Philadelphia and graduate of Little Flower High School, she co-founded Project HOME in 1989. The organization provides housing, employment, medical care, and education to homeless and low-income persons in Philadelphia. In 2009, Time magazine named her one of the '100 Most Influential People in the World'.",
        achievements: [
            "Co-founder of Project HOME",
            "Time 100 Most Influential People (2009)",
            "Little Flower High School graduate",
            "Nationally recognized advocate for the homeless",
            "Recipient of the Laetare Medal"
        ],
        imageUrl: "/inductees/sister-mary-scullion.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Mary_Scullion"
    },
    {
        id: "spin",
        name: "SPIN",
        years: "Founded 1970",
        category: "Organization",
        inductionYear: 2010,
        shortBio: "Special People In Northeast, providing services for children and adults with autism and intellectual disabilities.",
        fullBio: "SPIN (Special People In Northeast) was founded in 1970 by a group of parents in Northeast Philadelphia who wanted better lives for their children with intellectual disabilities. Today, SPIN is a leading provider of services for children and adults with autism and intellectual disabilities, serving over 3,500 people annually. The organization provides early intervention, behavioral health, residential, and employment services, embodying a mission of a life of possibilities for everyone.",
        achievements: [
            "Founded by Northeast Philadelphia parents (1970)",
            "Serves over 3,500 individuals annually",
            "Top Workplace in Philadelphia",
            "Leader in autism and disability services",
            "Provides lifelong support and community inclusion"
        ],
        imageUrl: "/inductees/spin.jpg"
    },
    {
        id: "stephen-decatur-sr",
        name: "Stephen Decatur Sr.",
        years: "1751-1808",
        category: "Posthumous",
        inductionYear: 2012,
        shortBio: "Revolutionary War naval hero and original member of the U.S. Navy.",
        fullBio: "Stephen Decatur Sr. was an American naval officer who served in the American Revolution and the Quasi-War with France. He was one of the original captains in the United States Navy. Decatur lived in Frankford and is buried at St. Peter's Church in Philadelphia. He was the father of the famous naval hero Stephen Decatur Jr.",
        achievements: [
            "Captain in the Continental Navy",
            "Original officer of the U.S. Navy",
            "Revolutionary War veteran",
            "Frankford resident",
            "Father of Stephen Decatur Jr."
        ],
        imageUrl: "/inductees/stephen-decatur-sr.jpg"
    },
    {
        id: "stephen-decatur-jr",
        name: "Stephen Decatur Jr.",
        years: "1779-1820",
        category: "Posthumous",
        inductionYear: 2012,
        shortBio: "Naval hero of the Barbary Wars and War of 1812.",
        fullBio: "Stephen Decatur Jr. was a United States naval officer and commodore. He was born in Maryland but raised in Philadelphia. He became a national hero for his daring raid to burn the captured frigate USS Philadelphia in Tripoli harbor during the First Barbary War, an act Lord Nelson called 'the most bold and daring act of the age'. He also served with distinction in the War of 1812. Decatur lived in Frankford and his home, Decatur House, stood for many years.",
        achievements: [
            "Hero of the Barbary Wars",
            "Youngest captain in U.S. Navy history",
            "War of 1812 commander",
            "Congressional Gold Medal recipient",
            "Frankford resident"
        ],
        imageUrl: "/inductees/stephen-decatur-jr.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Stephen_Decatur"
    },
    {
        id: "virginia-knauer",
        name: "Virginia Knauer",
        years: "1915-2011",
        category: "Posthumous",
        inductionYear: 2012,
        shortBio: "First Director of the U.S. Office of Consumer Affairs.",
        fullBio: "Virginia Knauer was a pioneering politician and consumer advocate. A lifelong resident of Northeast Philadelphia (Torresdale), she served on Philadelphia City Council before being appointed by President Richard Nixon as the first Special Assistant to the President for Consumer Affairs. She served under presidents Nixon, Ford, and Reagan. Knauer was instrumental in the passage of consumer protection laws and was known as the 'First Lady of Consumer Affairs'.",
        achievements: [
            "First Special Assistant to the President for Consumer Affairs",
            "Served under Presidents Nixon, Ford, and Reagan",
            "Philadelphia City Councilwoman",
            "Pioneer for consumer protection laws",
            "Torresdale resident"
        ],
        imageUrl: "/inductees/virginia-knauer.jpg"
    },
    {
        id: "chris-matthews",
        name: "Chris Matthews",
        years: "Born 1945",
        category: "Individual",
        inductionYear: 2012,
        shortBio: "Political commentator and host of 'Hardball with Chris Matthews'.",
        fullBio: "Chris Matthews is a political commentator, author, and former television host. He was born in Philadelphia and grew up in Somerton. Matthews hosted the nightly talk show 'Hardball with Chris Matthews' on MSNBC for over 20 years. Before his media career, he served as a speechwriter for President Jimmy Carter and top aide to Speaker of the House Tip O'Neill. He often speaks fondly of his upbringing in Northeast Philadelphia.",
        achievements: [
            "Host of MSNBC's 'Hardball' (1997-2020)",
            "Speechwriter for President Jimmy Carter",
            "Best-selling author of political history books",
            "La Salle College High School graduate",
            "Somerton native"
        ],
        imageUrl: "/inductees/chris-matthews.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Chris_Matthews"
    },
    {
        id: "pat-stopper",
        name: "Pat Stopper",
        years: "Community Leader",
        category: "Individual",
        inductionYear: 2016,
        shortBio: "Founder of the cancer support organization 'Soft Mart'.",
        fullBio: "Pat Stopper is a dedicated community activist and founder of the cancer support group. After surviving breast cancer, she dedicated her life to helping others fighting the disease. She has been a tireless advocate for cancer patients in Northeast Philadelphia, organizing support groups, fundraisers, and awareness campaigns. Her work has provided comfort and resources to countless families in the region.",
        achievements: [
            "Founder of cancer support initiatives",
            "Breast cancer survivor and advocate",
            "Community activist in Northeast Philadelphia",
            "Organizer of local fundraisers and support groups",
            "Champion for patient care"
        ],
        imageUrl: "/inductees/pat-stopper.jpg"
    },
    {
        id: "klein-jcc",
        name: "Klein JCC",
        years: "Founded 1975",
        category: "Organization",
        inductionYear: 2016,
        shortBio: "Community center providing social, educational, and cultural programs.",
        fullBio: "The Klein JCC (now KleinLife) has been a cornerstone of the Northeast Philadelphia community for decades. Located on Jamison Avenue, it provides vital social, educational, and cultural programs for seniors, children, and families. The center is particularly known for its extensive senior services, including meal programs, health and wellness activities, and lifelong learning opportunities. It serves as a gathering place for the Jewish community and the broader Northeast Philadelphia population.",
        achievements: [
            "Vital community hub for over 40 years",
            "Largest provider of senior services in the area",
            "Provides meals, education, and wellness programs",
            "Serves thousands of residents annually",
            "Promotes community connection and well-being"
        ],
        imageUrl: "/inductees/klein-jcc.jpg"
    },
    {
        id: "bill-boggs",
        name: "Bill Boggs",
        years: "Born 1941",
        category: "Individual",
        inductionYear: 2016,
        shortBio: "Emmy Award-winning television host and author.",
        fullBio: "Bill Boggs is an Emmy Award-winning television host, author, and professional speaker. He grew up in Northeast Philadelphia and attended Lincoln High School. Boggs has interviewed many of the most famous people in the world during his long career in television, including Frank Sinatra and Sammy Davis Jr. He hosted 'Midday Live' in New York and numerous other shows. He remains connected to his roots and often shares stories of his time in the Northeast.",
        achievements: [
            "Emmy Award-winning TV host",
            "Interviewer of cultural icons",
            "Lincoln High School graduate",
            "Author and professional speaker",
            "Philadelphia Music Alliance Walk of Fame inductee"
        ],
        imageUrl: "/inductees/bill-boggs.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Bill_Boggs"
    },
    {
        id: "friends-pennypack-park",
        name: "Friends of Pennypack Park",
        years: "Founded 1987",
        category: "Organization",
        inductionYear: 2016,
        shortBio: "Volunteer organization dedicated to preserving Pennypack Park.",
        fullBio: "Friends of Pennypack Park (FOPP) is a volunteer organization dedicated to the preservation and protection of Pennypack Park, one of the largest urban parks in the country. Founded in 1987, the group organizes monthly cleanups, removes invasive species, and advocates for the park's maintenance and improvement. Their tireless efforts ensure that this natural treasure remains a clean, safe, and beautiful resource for all residents of Northeast Philadelphia.",
        achievements: [
            "Dedicated to preserving Pennypack Park since 1987",
            "Organizes monthly park cleanups",
            "Removes invasive species and maintains trails",
            "Advocates for park resources and protection",
            "Volunteer-driven community stewardship"
        ],
        imageUrl: "/inductees/friends-pennypack-park.jpg"
    },
    {
        id: "al-schmid",
        name: "Al Schmid",
        years: "1920-1982",
        category: "Posthumous",
        inductionYear: 2016,
        shortBio: "World War II hero and Navy Cross recipient.",
        fullBio: "Al Schmid was a United States Marine who became a national hero during World War II. During the Battle of Guadalcanal, he manned a machine gun post against an overwhelming Japanese assault, continuing to fire even after being blinded by a grenade blast. He was awarded the Navy Cross for his extraordinary heroism. His story was told in the book and film 'Pride of the Marines'. Schmid lived in Northeast Philadelphia after the war and was active in veterans' affairs.",
        achievements: [
            "Navy Cross recipient for heroism at Guadalcanal",
            "Subject of the film 'Pride of the Marines'",
            "World War II Marine Corps veteran",
            "Symbol of courage and sacrifice",
            "Northeast Philadelphia resident"
        ],
        imageUrl: "/inductees/al-schmid.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Al_Schmid"
    },
    {
        id: "edward-duffield",
        name: "Edward Duffield",
        years: "1730-1803",
        category: "Posthumous",
        inductionYear: 2016,
        shortBio: "Clockmaker and executor of Benjamin Franklin's estate.",
        fullBio: "Edward Duffield was a master clockmaker and a close friend of Benjamin Franklin. He lived at his family estate, Benfield, in what is now the Morrell Park section of Northeast Philadelphia. Duffield made the first standard clock for Philadelphia, which hung outside his shop. He served as one of the executors of Franklin's estate and was a member of the American Philosophical Society. His contributions to horology and civic life were significant in 18th-century Philadelphia.",
        achievements: [
            "Master clockmaker of colonial Philadelphia",
            "Close friend and executor of Benjamin Franklin",
            "Member of the American Philosophical Society",
            "Created Philadelphia's first public standard clock",
            "Resident of Morrell Park area"
        ],
        imageUrl: "/inductees/edward-duffield.jpg"
    },
    {
        id: "robert-nc-nix-sr",
        name: "Robert N.C. Nix Sr.",
        years: "1898-1987",
        category: "Posthumous",
        inductionYear: 2016,
        shortBio: "First African American to represent Pennsylvania in Congress.",
        fullBio: "Robert N.C. Nix Sr. was a trailblazing politician who became the first African American to represent Pennsylvania in the United States House of Representatives, serving from 1958 to 1979. He was a powerful voice for civil rights and urban issues. Nix lived in Northeast Philadelphia and was the father of Robert N.C. Nix Jr., the first African American Chief Justice of the Pennsylvania Supreme Court.",
        achievements: [
            "First African American Congressman from Pennsylvania",
            "Served in U.S. House of Representatives (1958-1979)",
            "Civil rights advocate",
            "Father of Chief Justice Robert N.C. Nix Jr.",
            "Northeast Philadelphia resident"
        ],
        imageUrl: "/inductees/robert-nc-nix-sr.jpg",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Robert_N._C._Nix_Sr."
    },
    {
        id: "historic-houses-worship",
        name: "Historic Houses of Worship",
        years: "Founded 1688-1810",
        category: "Historic House of Worship",
        inductionYear: 2012,
        shortBio: "Historic congregations that have served the community through centuries of history.",
        fullBio: "These historic houses of worship were honored for carrying Northeast Philadelphia through many important events throughout American history. They include: Unity Monthly Meeting Frankford, Byberry Monthly Meeting, Pennepack Baptist Church, Trinity Church Oxford, Presbyterian Church of Frankford, and Campbell African Methodist Episcopal Church.",
        achievements: [
            "Unity Monthly Meeting Frankford",
            "Byberry Monthly Meeting",
            "Pennepack Baptist Church",
            "Trinity Church Oxford",
            "Presbyterian Church of Frankford",
            "Campbell African Methodist Episcopal Church"
        ],
        imageUrl: "/inductees/historic-churches.jpg"
    }
];

export const inductionYears = [2009, 2010, 2012, 2016];

export const getInducteesByYear = (year: number): Inductee[] => {
    return inductees.filter(i => i.inductionYear === year);
};

export const getInducteeById = (id: string): Inductee | undefined => {
    return inductees.find(i => i.id === id);
};

export const getInducteesByCategory = (category: Inductee["category"]): Inductee[] => {
    return inductees.filter(i => i.category === category);
};

// Historical facts about Northeast Philadelphia
export const historicalFacts = [
    {
        fact: "Thomas Holme, who designed Philadelphia's grid system, is buried near Holme Avenue in what is now Pennypack Park.",
        year: "1695"
    },
    {
        fact: "Robert Cornelius, credited with taking the first photograph, lived in Wissinoming.",
        year: "1839"
    },
    {
        fact: "Disston Saw Works in Tacony was once the largest saw manufacturing plant in the world.",
        year: "1900s"
    },
    {
        fact: "The first airmail trip from New York to Washington D.C. stopped in Bustleton.",
        year: "1918"
    },
    {
        fact: "Philadelphia International Airport was initially planned for the current site of the Kraft factory in Northeast Philadelphia.",
        year: "1940s"
    },
    {
        fact: "Greenbelt Knoll was Philadelphia's first planned interracial community.",
        year: "1950s"
    },
    {
        fact: "Glen Foerd is the last riverfront estate remaining in Philadelphia.",
        year: "Present"
    }
];
