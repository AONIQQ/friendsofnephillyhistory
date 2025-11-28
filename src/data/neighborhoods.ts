export interface Neighborhood {
    slug: string
    name: string
    description: string
    content?: string
    imageBasePath?: string
    images?: Array<{
        src: string
        caption: string
    }>
}

export const neighborhoodsData: Record<string, Neighborhood> = {
    bridesburg: {
        slug: "bridesburg",
        name: "Bridesburg",
        description: "A historic riverfront community with deep industrial roots.",
        images: [
            {
                src: "mapbridesburg.jpg",
                caption: "Bridesburg map"
            },
            {
                src: "bridesburg-1.jpg",
                caption: "The Steamboat Columbia at the Bridge Street Wharf on the Delaware River, 1923."
            },
            {
                src: "bridesburg-2.jpg",
                caption: "Skating on the Delaware River at Buskius Street, January, 1918."
            },
            {
                src: "bridesburg-3.jpg",
                caption: "The Delaware Riverfront between Reynolds Street and Bridge Street, 1923."
            },
            {
                src: "bridesburg-4.jpg",
                caption: "Bridge Street looking west from the Delaware River, showing the White House Hotel."
            },
            {
                src: "bridesburg-5.jpg",
                caption: "The Isaac Hunter Farmhouse, home of Viola Chalfont's uncle. Richmond and Berkshire Streets, 1896."
            },
            {
                src: "bridesburg-6.jpg",
                caption: "From the site of the Reynolds Mansion looking to Richmond Street, block now occupied by the Bridesburg Recreation Center."
            },
            {
                src: "bridesburg-7.jpg",
                caption: "Houses that once stood at 4472-76 Richmond Street."
            },
            {
                src: "bridesburg-8.jpg",
                caption: "Pratt Street looking west from Richmond Street showing the Presbyterian Church with steeple. Standing on the corner is Theodore Fuss, boy on step is Charles Harris."
            },
            {
                src: "bridesburg-9.jpg",
                caption: "July 4th celebration, Thompson Street looking north to Bridge Street."
            }
        ],
        content: `<p>Mr. O'Hanlon feels the two greatest things that ever happened to Bridesburg were the opening of the Bridesburg Recreation Center and the Bridesburg Boys and Girls Club. The Rec and the Club give children a chance to get off the streets and make something of their lives.</p>

<p>Bridesburg has contributed to the growth of Philadelphia through its industry and supply of jobs. It's three most notable companies, Rohm and Haas, Allied Chemical and the Frankford Arsenal, have not only supplied employment and products, but have helped Bridesburg to grow as a community.</p>

<h2>Interview with John Whittle</h2>
<p><em>by Mary Rooney, Keith Averswald and Ziggy Krajewski</em></p>

<p>John Whittle has been in Bridesburg for sixty-five years. His fondest memories of this are centered around sports.</p>

<p>He played all sports. Mr. Whittle loved to play baseball, soccer, and football. He also liked to box. He began playing football in the fifth grade at All Saints School. Mr. George Bellos, his coach, taught him everything he knew. After football in eighth grade, he went to Champlin Park, now called Bridesburg Park, and on to the Allen Recreation Center. The Allen Recreation Center was started by a group of men around Allen and Overington Streets. At that time, there were baseball fields everywhere.</p>

<p>Later, a gentleman named Harry Ward formed a football team and called it Ward AA. It was known as the greatest team in the Warner Conference. In fact, Whittle was named the most outstanding player in the Warner Conference in the 1930's and the 1940's. If you're wondering what the Warner Conference is, it was and still is a football league. Teams joined and played other teams in the league.</p>

<p>Another sport that Whittle participated in was baseball. He told us when they played baseball the ball didn't have a white cover they used old baseballs because they couldn't afford new ones. When baseball first began in Bridesburg, some of the players went to Coppers Coke Company to ask for hats and shirts. They obtained them and called themselves the Copper's Cubs. Ward AA also started a baseball team of which Whittle was a member. Whittle was nicknamed "Hack" because his middle name is Stanley and his favorite third baseman was Stanley Hack of the Chicago Cubs. To this day that is what people call him.</p>

<p>When I asked about his memorable time in Bridesburg, he said, 'When Ward AA baseball team were the champions of the world." He explained that the policemen had a baseball team of all professional players and they were to play the St. Louis Cardinals, who won the World Series. When Mr. Whittle's team played the policemen, his team won. The next day the policemen beat St. Louis, so that meant they were better than the world champions, which meant Ward AA was better than both teams.</p>

<h2>Interview with Florence Green</h2>
<p><em>by Brian Smith, Daniel Devine and Anne Marie Camac</em></p>

<p>Florence Green was born on January 30, 1902. When she was young she went to All Saints Convent for Schooling. There were eight nuns in all who taught the children. At the time she attended All Saints there were no uniforms. When the girls would make their Holy Communion they had to wear a white dress, white veil, black stockings and black shoes. The procedure of Confirmation was the same as now.</p>

<p>Florence father owned a store called Herman Heims. It was located on Ash and Salmon Streets and was connected to the house in which she lived. There once were farms in Bridesburg and once in a while you would see an escaped cow walking down the street.</p>

<p>When Florence was little there were no televisions, phones, radios, washing machines or dryers. She had to make her own entertainment and fun. Some games she really enjoyed playing were marbles, jacks, old maid and hide and go seek.</p>

<p>Also when she was very young there weren't any cars. Her family's source of transportation was a horse and carriage. When she was around twelve years old the Ford car was manufactured and a short time later her family purchased one.</p>

<p>Florence remembers All Saints' beautiful May Processions. All of the children dressed up in their nicest clothes. The Procession was partly inside and partly outside. Holidays were always special too. At Christmas the church would have a decked out ceremony and the children would get candy from All Saints. The church would also make Easter a fun and prayerful holiday.</p>

<p>When Florence was a teenager the girls would wear shirts or dresses below their knees. The shirts were fancy and some had raffles on them. The girls would never wear pants. The boys would often wear suits. For entertainment the girls would go to dance classes; then when a dance came around, a girl would know what to do.</p>

<p>She remembers the parties she and her friends went to when they were teenagers. They were usually cake and ice cream parties. They would also have Halloween parties. Everyone would get dressed in costumes and have fun.</p>

<p>When Florence was younger the cost of milk was about ten cents a quart. A loaf of bread cost fifteen cents. A good pair of sneakers cost one dollar and you could buy a nice dress for ten dollars. A really big Christmas tree cost just five dollars.</p>

<p>She recalls when the Bridesburg Park and Recreation Center was at one time Reynold's mansion. It was given to the state, which turned it into a park and recreation center. It was never there when she was a child, but her children used it. We had asked Florence Green what was her most memorable time in Bridesburg. She had told us when she was married, at All Saints.</p>

<p>When the Depression began, it was terrible. People had to use Food Stamps. At Easter there couldn't be Easter eggs because of a shortage of sugar. You were only allowed a certain amount of Food Stamps a year, a lot of people were losing their homes and starving. Cars would come around collecting donations of canned goods for people who needed it badly.</p>

<p>Florence Green is now 91 years old. She had nine children. She is very happy, and is still living in Bridesburg.</p>`
    },
    bustleton: {
        slug: "bustleton",
        name: "Bustleton,Byberry, and Somerton",
        description: "Known for its rich history and the annual 4th of July parade.",
        images: [
            {
                src: "mapbbs.jpg",
                caption: "Bustleton map"
            },
            {
                src: "bustleton-1.jpg",
                caption: "First mechanized fire truck at Bustleton Firehouse in 1913. John Moser driving. Firehouse started in 1901 and used until 1956. First equipment was horse drawn. Located west side of Bustleton Pike, north of Fulmer Street. Above is a 1913 Alco Truck."
            },
            {
                src: "bustleton-2 .jpg",
                caption: "Looking north where Bustleton Pike and Welsh Road overlap for a block. Union Hotel before 1900 was the Eagle Hotel from early or middle 1800s. Only 2 old buildings in this block remain."
            },
            {
                src: "bustleton-3.jpg",
                caption: "An early auto accident in Bustleton. Car is a 1906 or 1907 model. Location is uncertain."
            },
            {
                src: "bustleton-4.jpg",
                caption: "These beautiful homes still standing on west Welsh Road, just east of where Grant Avenue now meets Welsh Road. Notice early electric street lights from before 1900."
            },
            {
                src: "bustleton-5.jpg",
                caption: "A pre-revolutionary war building became an arsenal during the same war. In 1870 it became the Pennsylvania RR Station for the Bustleton/Holmesburg line. Demolished 1968."
            },
            {
                src: "bustleton-6.jpg",
                caption: "R. A. Erwin's first Chevrolet Showroom in 1918. This photo was taken sometime after 1922."
            },
            {
                src: "bustleton-7.jpg",
                caption: "Fayette Consolidated School taken in 1900. Second building at the site of oldest school site in Philadelphia in continuous use for over 200 years, 1790-Present. In 1916 it became W.C. Jacobs Public School. East side Old Bustleton Avenue, south of Welsh Road. Now N.E. Hebrew Academy."
            },
            {
                src: "bustleton-8.jpg",
                caption: "Hayride for young children from Lower Dublin Baptist Church. Sometime between 1911-1918. This was one of the many social activities of that time. Stopping in the 9500 block of Bustleton Pike."
            },
            {
                src: "bustleton-9.jpg",
                caption: "This is the third school in Somerton—Built 1892, Watson Comly Public School."
            },
            {
                src: "bustleton-10.jpg",
                caption: "This local Somerton General Store has had seven proprietors in over 100 years. Depue's, S. T. Erwin, Adam McLean, William Quigley, CoIIin's, Baer's and now Brittingham's. Many good memories are told about this store on Maple Avenue east of Bustleton Pike."
            },
            {
                src: "bustleton-11.jpg",
                caption: "Patriotic Order Sons of America—A lodge—The Somerton group had a band. Many enjoyed their concerts."
            },
            {
                src: "bustleton-12.jpg",
                caption: "Taylor's Barn was a central part of Somerton from late 1800s into the 1940s. Two local churches started here—St. Andrew's and St. Christopher's. A sub-Police Station 1898 to 1945. Dances were held here for the young people. A library and debating club used it too."
            },
            {
                src: "bustleton-13.jpg",
                caption: "Houseman's Pond was enjoyed by the local Somerton people, even overnight camping. Located on the south side of Byberry Road between Bustleton Pike and Worthington Road. Now the site of the Fraternal Order of Police House."
            },
            {
                src: "bustleton-14.jpg",
                caption: "This log house was built in 1734 and stood until about 1918. Indians lived here in the early days. W. D. Bubeck, builder in Somerton, built his daughter a house, also gone. East side of Bustleton Pike, north of Trevose Road. Now apartments and condos."
            },
            {
                src: "bustleton-15.jpg",
                caption: "Washington House Hotel—First seen on a 1887 Atlas map. People have good memories of this hotel even into the 1950s when they held auctions under the horse sheds. On November 21,1937 you could get a Roast Young Turkey Dinner for .75 cents with appetizer and dessert included."
            },
            {
                src: "bustleton-16.jpg",
                caption: "Philadelphia County Fair at Byberry started 1912 till late 1920s. Located on south side of Byberry Road, west of the Boulevard and the Short Line Railroad behind old Somerton Fire house. Sulky horse racing, judging of farm animals, produce, canning and preserves and bake goods were all part of the County Fair. Fair ran until the late 1920s. There was a 1/2 mile race track, two large buildings, and grandstands on 100 acres."
            },
            {
                src: "bustleton-17.jpg",
                caption: "Most neighborhoods in the 1900's had baseball teams. This is Somerton Team 1908. Neighborhood teams are still popular today."
            },
            {
                src: "bustleton-18.jpg",
                caption: "A social function of the early days, teens into late 1930s. This was a Tom Thumb Wedding held at Somerton Methodist Church in March 1918. Church dates back to 1834. Children took on identities of the local residents."
            },
            {
                src: "bustleton-19.jpg",
                caption: "Knight's Mill on Poquessing Creek was the oldest mill on the creek dating back to 1750. It was rebuilt in 1815 and today is near the site of Creek Edge Nurseries. Picture taken 1899."
            },
            {
                src: "bustleton-20.jpg",
                caption: "Byberry Farms were on the east side of Roosevelt Boulevard, north of Southampton Road. Farms were part of Byberry since the Hospital was started in 1908 by the city. Farms supplied food to all city institutions even into the early 1950's."
            },
            {
                src: "bustleton-21.jpg",
                caption: "Carmicheal Presbyterian Church built in Mechanicsville in 1886. It is now a residence. Church is now located on Street Road, Bucks County."
            },
            {
                src: "bustleton-22.jpg",
                caption: "\"Thornton Abbey\" Home of James Thornton, 1750 minister of the Society of Friends. Home was on west side of Thornton Road south of Byberry Road. Now site of Holy Redeemer Nazareth Home Care Hospice Service. This house was used for the first patients that came to Byberry Hospital."
            }
        ],
        content: `<p>Bustleton and Somerton have a rich history spanning over 200 years, from revolutionary war buildings to early 20th century community landmarks.</p>

<p>The area features some of Philadelphia's oldest continuously operating institutions, including school sites dating back to 1790. Many historic buildings served multiple purposes throughout the years, adapting to the community's changing needs.</p>

<p>The neighborhood was home to important transportation history, including the Pennsylvania Railroad Station for the Bustleton/Holmesburg line, and witnessed the transition from horse-drawn equipment to mechanized vehicles in the early 1900s.</p>

<p>Community life thrived through churches, schools, general stores, hotels, and social organizations. The Somerton area was particularly known for its active community groups, including the Patriotic Order Sons of America band and various social functions at local churches.</p>

<p>Agriculture played a significant role in the area's history, with Byberry Farms supplying food to all city institutions from 1908 into the early 1950s. The Philadelphia County Fair at Byberry, which ran from 1912 to the late 1920s, featured sulky horse racing, livestock judging, and agricultural displays on 100 acres of land.</p>`
    },
    frankford: {
        slug: "frankford",
        name: "Frankford",
        description: "One of Philadelphia's oldest communities, dating back to the 1600s.",
        images: [
            {
                src: "mapfrk.jpg",
                caption: "Frankford map"
            },
            {
                src: "frankford-1.jpg",
                caption: "Millsdale - Powdermill Lane. Home of Stephen Decatur, Father of Commodore Stephen Decatur."
            },
            {
                src: "frankford-2.jpg",
                caption: "Port Royal Mansion—circa 1761, Tacony Street."
            },
            {
                src: "frankford-3.jpg",
                caption: "Waln Street Meeting - circa 1775, Waln and Unity Streets. The meeting was established in 1683. The present building dating from 1775 is the oldest meeting house in Philadelphia."
            },
            {
                src: "frankford-4.jpg",
                caption: "West side of Frankford Avenue at Sellers Street looking south - circa 1907. The church is St. Mark Church. Designed by Watson and Huckel."
            },
            {
                src: "frankford-6.jpg",
                caption: "Frankford Bath House - interior. Located on Hedge Street."
            },
            {
                src: "frankford-7.jpg",
                caption: "W.W. Foulkrod House, Leiper Street below Foulkrod Street. The adjoining house similar in design was the home of John Greenwood."
            },
            {
                src: "frankford-8.jpg",
                caption: "Trinity A.M.E. Zion Chapel - circa 1877, Willow Street."
            },
            {
                src: "frankford-9.jpg",
                caption: "Duffield Grist Mill - circa 1870, Frankford Avenue and Nicetown Lane. Replaced the Swedish Grist Mill built in the same vicinity in the 1660's."
            },
            {
                src: "frankford-10.jpg",
                caption: "Frankford Elevated reaches Oxford Pike."
            },
            {
                src: "frankford-11.jpg",
                caption: "Frankford Avenue and Orthodox Street looking west toward Central Methodist Church. Left, Fulton House."
            }
        ],
        content: `<p>After interviewing Aunt Margaret there was one thing that stood out. She is a person who lived her whole life on one street: Griscom Street. How many people can claim that anymore? Not very many. Just for that, I think that Aunt Margaret's quiet life is unique.</p>

<h2>Interview with Dorsha Mason</h2>
<p><em>by Stephen Robinson, Harding Middle School</em></p>

<p>Hi, my name is Stephen Robinson. I am listening to my Aunt Dorsha talk about Frankford when she was a young girl, in the 1930s. My Great-Aunt Dorsha was born in 1918 on Mulberry Street in Frankford. Frankford was a community where blacks and whites lived together in harmony and peace. The black and working class whites lived in houses in East Frankford. Many of these worked for the rich white families who lived across Frankford Avenue on the west side.</p>

<p>In East Frankford during that time there were many old black families who resided there. Some of the old families were the Epps, the Smiths, the Blacks, the Brooks, the Grays, the Barretts, the Fletchers, the Millers, the Turpins, the Stewarts, and many more. Many of the families came from North Carolina, Virginia, Maryland, South Carolina and West Virginia.</p>

<p>During that time, there were several black-owned businesses. There was also an all-black school were children were taught by excellent teachers. There was also three Afro-American doctors as my aunt was growing up — Doctor Levy, Tollivar and Pressley.</p>

<p>During those years Frankford was a very safe place to live. People left their doors unlocked and opened all night. There was very little crime. The people had a great deal of fun.</p>

<p>My Aunt Dorsha enjoyed her childhood and youth in Frankford.</p>

<h2>Interview with Dr. Leon Johnston</h2>
<p><em>by Cassie Avington, Frankford High School</em></p>

<p>Dr. Leon Johnston was born in South Philadelphia. He moved to Frankford in 1925. He was the only African-American graduate, out of a class of 276, of Frankford High School in February 1929.</p>

<p>Dr. Johnston attended Virginia State University, graduating in 1933. There he met Mary Boothe. They were married in 1941.</p>

<p>During World War II, Dr. Johnston worked at the old Yale and Towne plant on Tacony Street and at Sun Ship Company. After the war, he was a teacher and administrator in several Philadelphia schools, retiring in 1980.</p>

<p>Dr. Johnston is very proud of his association with the Campbell A.M.E. Church on Kinsey Street, the second oldest A.M.E. Church in the country. He has been active with the Frankford Optimists and was a founder of the Frankford Human Relations Coalition.</p>

<p>In his interview, Dr. Johnston described a place, many years ago, where people of all ages came to shop, eat or spend their evenings. This place, Frankford Avenue, still exists today although it has been through many changes. The Frankford community was lucky to have such a delightful and attractive place just around their corner. Frankford Avenue was full of wonderful stores and its movie theaters attracted people from all neighborhoods. Some enjoyed just walking up and down the Avenue.</p>

<p>The neighborhood offered an opportunity for people to get involved in sports. High school sports teams were popular for teenagers and semi-pro baseball teams were put together for athletes who were out of school. These baseball games were very popular and many people spent their evenings watching them.</p>

<p>Jobs were abundant in the Frankford neighborhood. Factories were open along the Delaware River and workers were needed. Workers were especially needed during wartime. The Frankford Arsenal employed many people in the neighborhood.</p>

<h2>Interview with Annamae Hohenstein</h2>
<p><em>by Brian Huetgen, St. Joachim School</em></p>

<p>Annamae Hohenstein was born July 27, 1903. Annamae went to St. Joachim School. She didn't go to high school because "money was tight."</p>

<p>Annamae went to work as a weaver at the age of 14. She worked at several factories in Kensington and Frankford. To this day, she still thanks President Roosevelt for bringing the eight hour day. In 1940, she lost her finger in a cogwheel accident. From the ages 14 to 65 she worked with Catherine, her sister. Catherine didn't retire when she was 65 because she didn't want Annamae to go to work by herself.</p>

<p>When Annamae decided to retire, her boss asked her to stay and said, "You still have many good years left." "Yes," Annamae answered, "but you're not going to get them."</p>

<p>Annamae was one of eight children. They used to sit around the table and sing songs together. She remembers getting a model coach in 1928. She still has it now. She also remembers playing games with her friends when she was younger. She always went to the library on Frankford Avenue near Unity Street. She would go to the library for her neighbor who couldn't get out. In those days, it was common that when people got sick the community would throw a block party to help them pay for medicine.</p>

<p>Annamae also loved dancing, bowling and crocheting. During World War I, she went to dances at the Navy Yard, but "when you met them, they get shipped out."</p>

<p>Her sister Catherine died in 1990 at the age of 90, leaving Annamae the last of eight. Many of Catherine's paintings are on her wall.</p>`
    },
    holmesburg: {
        slug: "holmesburg",
        name: "Holmesburg",
        description: "Named after Thomas Holme, surveyor of Philadelphia.",
        images: [
            {
                src: "mapholm.jpg",
                caption: "Holmesburg map"
            },
            {
                src: "holmesburg-1.jpg",
                caption: "Holmesburg Quarry on Solly Avenue, produced the finest granite building stone in the state of Pennsylvania and its unusual dimensions made it the largest quarry in the state. At its peak in 1896-1925, it employed 200 workers. The recreation field on Solly Avenue occupies the site now. Photo courtesy of Jack Williams"
            },
            {
                src: "holmesburg-2.jpg",
                caption: "Memorial Day 1920. Parade with G.A.R Veteran Michel G. Ayers, in the saddle, ready to step off in a style befitting the occasion from the library at Hartel Street enroute to Emmanuel Episcopal Church Cemetery for graveside services. Photo courtesy of the late Mr. & Mrs. Roy H. Lintz"
            },
            {
                src: "holmesburg-3.jpg",
                caption: "This circa 1915 picture of the store owned and operated by Fred Berrien, Grocer and Butcher, gives an idea of the flourishing business he enjoyed at the northwest corner of Frankford Avenue and Rhawn Street in a building erected by Mrs. Joseph Brown a half-century earlier. The last years of the business were under the ownership of genial Mr. Frank Sutphin, Mr. Berrien's \"right-hand\" man for many years."
            },
            {
                src: "holmesburg-4.jpg",
                caption: "Holmesburg Seminary for Young Ladies, a highly regarded boarding and day school conducted by Miss Matilda Chapman and her two sisters from 1831 to 1881 in this handsome property on the Bristol Pike (now Frankford Avenue) across from Emmanuel Episcopal Church. Photo courtesy of Rev. Herman Doh slide show collection."
            },
            {
                src: "holmesburg-5.jpg",
                caption: "Stonyhurst - Built in 1880 for the Hon. George Castor as a family residence, this 18-bedroom mansion crowned his 75 acre tract on Solly Avenue overlooking the Pennypack. Today, the Roman Catholic Order of Trinitarians maintains it as a retirement home for the Order. Photo courtesy of Jack Williams"
            },
            {
                src: "holmesburg-6.jpg",
                caption: "Doorway of the Griffith-Peale House, 8100 Frankford Avenue. Note: Speaking tube right panel, the visible part of an amplifying system for the convenience of Dr. James Burd Peale's patients before the telephone was invented. Photo courtesy of Robert P. Storks"
            },
            {
                src: "holmesburg-7.jpg",
                caption: "Frankford Avenue, west side between Rhawn Street and Welsh Road looking north toward Welsh Road, circa 1906. Photo courtesy of Mr. & Mrs. Roy H. Lintz"
            },
            {
                src: "holmesburg-8.jpg",
                caption: "The Old House on Walker Street, so referred to the past hundred years. Though exact date is unknown, its construction and location suggest late 18th century. Members of John Holme's family resided there for many years. Identified at this time as 8047 Walker Street, it is privately owned. Photo courtesy of the late Mr. & Mrs. Roy H. Lintz."
            },
            {
                src: "holmesburg-9.jpg",
                caption: "Athenaeum built in 1850 to satisfy a growing need for a cultural and social center for Holmesburg. In its span of years, it has served a variety of purposes - community and private. Note: The street lamp, first one installed by the city, 1867; the iron watering fountain, a 20th century comfort for man and beast. Photo courtesy of the Mystic Lodge 100F, 100th Anniversary Program."
            }
        ],
        content: `<p>It was interesting to learn that students used to dance during recess, but now students do other activities.</p>

<p>When Mrs. MacIntyre was our age, her favorite game was Red Light, Green Light. She also enjoyed picking flowers near her home. Mrs. MacIntyre played with wooden dolls that her dad made. She was expected to dust as a chore for her family. Mrs. MacIntyre told us that when she was a youngster, the movies (silent, black and white) only cost 10 cents. It was interesting to learn about "cliff hangers" and how exciting it must have been. They were shown in an outdoor movie on Frankford Avenue near Rhawn Street. The movies were on Saturday night only. If it had rained during the day, local boys were "hired" to wipe water from the benches before the movie began. For their pay, they saw the movie for free.</p>

<h2>Interview with Miss Anna Hall and Miss Eleanor Hall</h2>
<p><em>by Zachary Craig, Jason Ernberger, Matthew Jurldewicz, Richard Anderson, Stephen Bates, Najah Mumin and Meagan Voss</em></p>

<p>We had a rare treat on May 25, 1993 when Miss Anna Hall and her sister, Miss Eleanor Hall, visited our MG3 class for an interview. They brought a collection of snapshots taken in Pennypack Park in the 1920s. The pictures showed one of the past times enjoyed in Holmesburg - boating on Pennypack Creek. There was plenty of water in the creek at that time. A few residents had boat houses for storing the boats and gear.</p>

<p>The Hall sisters live in the house they have lived in all of their lives and where other members of their family lived before them. The house is on one of the most famous streets in Holmesburg, Crispin Street named for descendants of Thomas Holme, William Penn's Surveyor-General. Crispin Street kept its rural quality for many years. Until recently there were no sidewalks and across from the Hall house there was a working farm from Rhawn to Welsh Road and from Crispin to Craig Street now there are rows of houses.</p>

<p>The Hall sisters attended the old J. H. Brown School that did not have the conveniences of the present building. They mentioned that the bath rooms were in a separate building. The school was built of Holmesburg granite but the inside was not fire proof. The wooden stairs creaked when walked upon.</p>

<p>Girls wore dresses to school and there were made at home by an aunt of the Hall girls. "Designer" clothes were not known then.</p>

<p>Both sisters are retired now and enjoy taking care of their property, which includes some gardening. Any digging they do is done with a spade manufactured at the famous Rowland Shovel and Spade Works on Pennypack Creek. They're lucky to have one of those shovels.</p>`
    },
    mayfair: {
        slug: "mayfair",
        name: "Mayfair",
        description: "A vibrant neighborhood known for its strong community spirit.",
        images: [
            {
                src: "mapmayf.jpg",
                caption: "Mayfair map"
            },
            {
                src: "mayfair-1.jpg",
                caption: "Looking north on Frankford Avenue from Cottman, circa 1913. Note: Absence of sidewalks, iron fence on the right marking the expanse of the Edwin Forrest Home for the Retired Actors and Actresses, the trolley with the \"cow-catcher\", the approaching horse and wagon enjoying the middle of the road. Photograph courtesy of St. John's Lutheran Church Member."
            },
            {
                src: "mayfair-2.jpg",
                caption: "Edwin Adams, Superintendent of Schools, speaking at the dedication of the laying of the cornerstone of Lincoln High School, October 1949. Note: unfinished school in background. This was the long awaited first High School in Northeast, first request came in 1926. Photo Urban Archives, Temple University."
            },
            {
                src: "mayfair-3.jpg",
                caption: "Edwin Forrest Home for the retired actors established by Edwin Forrest in 1874. In 1926 the home was sold to a building developer and moved to Overbrook."
            },
            {
                src: "mayfair-4.jpg",
                caption: "St Dominic's Church celebration, circa 1900. Photo courtesy of the Philadelphia Archdiocesan Historical Research Center."
            },
            {
                src: "mayfair-5.jpg",
                caption: "Commercial Class of St. Dominic's, 1922. Photo courtesy of the Philadelphia Archdiocesan Historical Research Center."
            }
        ],
        content: `<p>"The dropout rate was minimal when I attended high school," stated Dr. Potts. "When I was in high school there was a large student body. However, not many students went to college, college was considered only for the rich kids."</p>

<p>As a child, Dr. Potts enjoyed playing in Pennypack Park and on the Lincoln High School grounds. At that time, a poor house was located on the grounds where Lincoln stands today. The poor house was built where the amplification system for the football field is currently found, and it extended on through the soccer fields. The poor house was a place for the less fortunate, people who had lost there homes, jobs, and/or family. Some lived there for their entire lives. Mr. Kelly, a friend of Dr. Potts' grandfather was the administrator.</p>

<p>As a teenager, Dr. Potts would often hang out with his friends on the corner of Rhawn and Frankford, near a large pharmacy. Before meeting there, he and his friends would go to Brown School and play baseball. Afterwards, they would all go to Russel's ice cream parlor. At Frankford and Cottman, there was a large movie theater, called Mayfair Movies, or the Holmes Theater: later this became the Pennypack Theater.</p>

<p>"When I was young, there was a lot of open space," said Dr. Potts. "I often visited swimming holes, the boat house behind Lincoln, Smidties on Welsh Road and Kings', near fishing, and ice skating. It was possible to do all this because the water was deeper then. The dams held back the water. Now the creek is neglected and the water has become more shallow."</p>

<p>Many people also went horseback riding. The park had many bridle paths and stables. Children, including a very young Dr. Potts, would chase pheasants and rabbits in the open fields. Although hunting was prohibited, sometimes he would hunt in the part.</p>

<p>There were few playgrounds then, so children had to find other ways to occupy themselves. Behind what is now Austin Meehan Middle School, there were once corn fields, and Jeans Pizza was once a baseball field where Dr. Potts and his friends would play.</p>

<p>According to Dr. Potts, an average day for him as a child would be to "go to school, play football, eat dinner, and then do my homework." He also stated that he thinks "children then made do with less."</p>

<p>Most people living in the community worked at the Disston Saw Company since manual labor was usually the only available work. Some also were employed at Stetson Hats, Nesbitt, Janey Cylinder, individual stores, the prison on Torresdale, and by either the police or fire stations. "I think industry has decreased somewhat in this community, though what we do have now is a lot nicer." Many children had to take over the family businesses. There were not many jobs for high school students. Many students had small jobs as paper boys or as delivery boys for the local stores.</p>

<p>Some of the buildings from the past have survived this changing community. These include Acme, the libraries (Holmesburg and Tacony), and the fire house on Frankford Avenue and Hartel Street. There were even stores on Frankford Avenue fifty years ago. The stores then were individually owned. The largest food chain at that time was called the Unity Food Markets.</p>

<p>Years ago the family unit was much stronger. Family loyalty was important; tradition was a high factor among family members. Due to so many single parents working and leaving their children with babysitters, today's family has little time together. "Today, children have less guidance and less respect for their elders," remarked Dr. Potts.</p>

<p>"The community has changed. There is more vandalism today. Years ago, you would never see graffiti on walls of buildings. You would never see cars being stolen.</p>

<p>"The Holmesburg community is mainly a middle class community. When I was growing up, people usually had one car!"</p>

<p>We enjoyed this interview very much and learned many new things about the community in which we live. Dr. Potts was very pleasant to talk with. This assignment helped us to change the way in which we look at the things around us. Since the interview, we have become more observant of our surroundings and its history.</p>`
    },
    pennypack: {
        slug: "pennypack",
        name: "Pennypack",
        description: "Home to the beautiful Pennypack Park and historic mills.",
        imageBasePath: "Pennypack",
        images: [
            {
                src: "mappny.jpg",
                caption: "Pennypack map"
            },
            {
                src: "Pennypack-1.jpg",
                caption: "Wheatsheaf Tavern, Bustleton and Cottman Avenue in 1960."
            },
            {
                src: "Pennypack-2.jpg",
                caption: "Construction of the Bustleton Trolley Line on Castor Avenue at Rhawn Street in 1919 with Bell's Corner in the distance."
            },
            {
                src: "Pennypack-3.jpg",
                caption: "South view of Bustleton Avenue Bridge over the Pennypack Creek south of Maternity Blessed Virgin Mary Roman Catholic Church on December 8, 1903. Ruins of the La Grange Print Works to the left."
            },
            {
                src: "Pennypack-4.jpg",
                caption: "Workers Village at Pennypack Print Works with Rhawn Street Bridge in 1901. Current site of Rhawn Street Parking Lot in Pennypack Park known as \"Little City\"."
            },
            {
                src: "Pennypack-5.jpg",
                caption: "The Pennypack Print Works ruins, with the old wooden Rhawn Street Bridge in 1900."
            },
            {
                src: "Pennypack-6.jpg",
                caption: "The 1893 widening of the \"King's Highway Bridge\" (Frankford Avenue). Built in 1697, it is the oldest stone arch bridge in America. Still used to carry a major highway. Designated a National Civil Engineering Landmark."
            },
            {
                src: "Pennypack-7.jpg",
                caption: "Construction Photo of \"Bensalem Bridge\" over Pennypack Creek. Ruins of the Old Axe Factory Bridge at bottom. Taken October, 1917."
            },
            {
                src: "Pennypack-8.jpg",
                caption: "The Bensalem Bridge carrying Roosevelt Boulevard over Pennypack Creek looking east. Ruins of Carpet Mill left foreground. Taken April 19, 1920."
            },
            {
                src: "Pennypack-9.jpg",
                caption: "Tenant Farm atop the Pennypack Creek at Krewstown Road, November, 1949."
            },
            {
                src: "Pennypack-10.jpg",
                caption: "Pine Road Bridge over the Pennypack Creek. Built in 1900. This was the first concrete cast bridge in America. It stood until 1976 when the present bridge was built."
            },
            {
                src: "Pennypack-11.jpg",
                caption: "A summer's day at one of the \"Ole Swimming Holes\" that were popular along the Pennypack Creek."
            }
        ],
        content: `<p>Mrs. Bernstein moved to Ashton Road in the 1970s and when she bought her home it was the last house in the development. Everything behind her was either open land or wooded lots. Slowly and gradually the scene began to fill with houses, stores and roads. With the growth and development has come traffic, noise and pollution. Conveniences are paid for with inconveniences.</p>

<h2>Interview with Mrs. Kinniburth, age 70+</h2>
<p><em>by Jesse Kowal, age 10</em></p>

<p>Mrs. Kinniburth has lived in this area over twenty years and has seen many many changes. When she first bought her home she could look out and see land everywhere. That has really changed. People have much less land now and that means less work and responsibility but also less pleasure from nature.</p>

<p>Mrs. Kinniburth is not happy about the increase in violence and crime in the streets. People used to be able to trust each other more and help came from strangers and friends alike. Violence has made public facilities less helpful for her and other seniors. Public transportation does not seem as good and people seem less willing to support others in the community.</p>

<p>Mrs. Kinniburth does not remember things she did for leisure. Her early years in this community seem to have been filled with work and responsibility. Housework was actually sometimes thought of as recreation. Keeping a home and family organized and happy was reason enough for everything.</p>

<p>Mrs. Kinniburth's children went to school at Nazareth Academy and St. Catherine's.</p>

<p>She remembers her early years in this community as being hard and busy.</p>`
    },
    tacony: {
        slug: "tacony",
        name: "Tacony",
        description: "A planned industrial community by the Delaware River.",
        images: [
            {
                src: "maptac.jpg",
                caption: "Tacony map"
            },
            {
                src: "tacony-1.jpg",
                caption: "Merz Brothers Hotel, State Road and Longshore Street, later the Tacony Athletic Association Club. Demolished for I-95."
            },
            {
                src: "tacony-2.jpg",
                caption: "6600 Block Torresdale Avenue. Picture taken in 1926."
            },
            {
                src: "tacony-3.jpg",
                caption: "St. Vincent's Orphan Asylum, Milnor Street and Princeton Avenue. Still standing."
            },
            {
                src: "tacony-4.jpg",
                caption: "Disston Memorial Presbyterian Church and Parsonage. Tyson Avenue and Glenloch Street."
            },
            {
                src: "tacony-5.jpg",
                caption: "Disston Park - viewed from intersection of Disston and Keystone Streets."
            },
            {
                src: "tacony-6.jpg",
                caption: "Original Tacony Trust Building. Tulip Street and Longshore Avenue. Still standing."
            },
            {
                src: "tacony-7.jpg",
                caption: "St. Petri's German Lutheran Church, Jackson Street between Longshore Avenue and Knorr Street. Still standing."
            },
            {
                src: "tacony-8.jpg",
                caption: "Spring flower garden in Disston Park."
            },
            {
                src: "tacony-9.jpg",
                caption: "Tyson Avenue looking west from Torresdale Avenue."
            }
        ],
        content: `<h2>Interview with Joseph Collins</h2>
<p><em>by Danielle DeLuca</em></p>

<p><strong>Q: What is your date of birth?</strong><br/>
A: My date of birth is November 25, 1908.</p>

<p><strong>Q: What is your present address?</strong><br/>
A: 4621 Princeton Avenue.</p>

<p><strong>Q: What were your previous addresses?</strong><br/>
A: I lived at 7023 Hegerman Street, 6822 Hegerman Street and 6308 Marsden Street.</p>

<p><strong>Q: What schools in Tacony have you attended?</strong><br/>
A: I have attended St. Leo's.</p>

<p><strong>Q: What is your first memory of Tacony?</strong><br/>
A: I came to Tacony on the El with my father. He said he had something to show me. This was when he purchased the house on 7023 Hegerman Street in 1921. I'll never forget it, there was a peach tree in the yard. There was so much open space I felt like I was in the country.</p>

<p><strong>Q: Did any historical things happen in Tacony while you lived there?</strong><br/>
A: The only thing I can think of is World War I and II. There were eight trees planted in Disston Park for eight soldiers that were killed in World War I. They were all from Tacony. Later a monument was built in honor of them, it had a plaque with their names on it. The monument is no longer there, but I believe the eight trees are still there.</p>

<p><strong>Q: Are there any important buildings in the area in which something important may have happened there?</strong><br/>
A: The most important building I can think of is The Music Hall at Edmund Street and Longshore Street. It has just been refurbished. Long ago it was used as the library. Many organizations used it as a meeting place. I believe it was also used as a meeting place for the community.</p>

<p>There is another building — it was across from St. Josephat's — now there are garages there. A man named Frank Schuman invented safety glass. Built in 1896, Schuman's workshop laboratory was used as a classroom in the 1930s when Mary Disston School became overcrowded and needed space.</p>

<p><strong>Q: Do you remember any ponds or creeks that may have been here long ago?</strong><br/>
A: There was a creek that started near Charles Street. It ran down Torresdale Avenue across Levick Street and to the river. I can't remember the name of it. There was a hill right near it all, Hellerman and Levick. We called it Skeleton hill. We use to sled down it when we were kids.</p>

<p><strong>Q: What do you like about living in Tacony?</strong><br/>
A: Tacony was a great place to live. There were a lot of places for kids to play. When I bought this home, there were not many homes here. It was open space.</p>`
    },
    torresdale: {
        slug: "torresdale",
        name: "Torresdale",
        description: "A historic area known for its grand estates and river views.",
        images: [
            {
                src: "maptor.jpg",
                caption: "Torresdale map"
            },
            {
                src: "torresdale-1.jpg",
                caption: "Amusement Park at Frankford Avenue and Poquessing Creek. 1880 to 1906."
            },
            {
                src: "torresdale-2.jpg",
                caption: "Nelson Brown's Barn. State Road and Convent Lane, 1946. Photo courtesy of Bernard Stiffel."
            },
            {
                src: "torresdale-3.jpg",
                caption: "Torresdale Railroad Station at Grant Avenue and James Street."
            },
            {
                src: "torresdale-4.jpg",
                caption: "All Saints Church at Frankford Avenue south of Grant Avenue. Photo courtesy of Elaine Malinowski."
            },
            {
                src: "torresdale-5.jpg",
                caption: "Delaware River at Delaware Avenue and Linden Avenue, 1920. Photo courtesy of William English."
            },
            {
                src: "torresdale-6.jpg",
                caption: "Torresdale Railroad Station. Photo - 1946. Photo courtesy of Bernard Stiffel."
            },
            {
                src: "torresdale-7.jpg",
                caption: "Pleasant Hill Beach, a Sunday afternoon August 8, 1921. During the summer season, Pleasant Hill was an early recreation area in Northeast Philadelphia. Today it is the Linden Avenue boat launching area. Photo courtesy Urban Archives, Temple University"
            },
            {
                src: "torresdale-8.jpg",
                caption: "Frankford Avenue (Bristol Pike) at City Line. Note the Red Lion Inn. Roadway and bridge were rebuilt in 1904. Photo - 1902."
            }
        ],
        content: `<p>The name Torresdale comes from Torrisdale, the ancestral Scottish home of Charles Macalester, the man who originally owned the land now in use by Glen Foerd Mansion. In 1850, Macalaster bought this land and had a small summer home built on it. An important figure in American History, Macalaster was a banker and a diplomat with a home in Washington, D.C. (which is now the Russian Embassy) and an elder in the Presbyterian Church. He had a home in downtown Philadelphia at 10th and Spruce Streets. His daughter, Lily, was a debutante who lived for the most part in Europe close to Paris. Macalester was involved with Biddle in the Second Bank of the United States located at 2nd and Chestnut Streets which lost its charter because President Andrew Jackson felt that banks had too much influence in the country.</p>

<p>Located at the Torresdale Train Station and Grant Avenue was the estate of Captain Barry. In 1847 the Sisters of the Sacred Heart, based at Logan Circle, purchased this 40 acres which is now known as Eden Hall. They planned a boarding school for Catholic girls of wealthy backgrounds; instead, they built a European-style chapel which still stands. The Sisters' had many diplomats' daughters and actors' daughters (Boris Karloff's and Basil Rathbone's to name a few). Their alumni are loyal to this day. The area has been renamed Fluehr Park in honor of Joseph Fluehr, Poquessing Real Estate's founder, in the hope that the ground would not be sold to developers. The land was "dedicated" with the intentions that Fairmount Park very seldom lets "dedicated" land be sold. The Friends of Fluehr Park have $32,000 in their treasury and hope to start repairs to the Chapel soon.</p>

<p>An addition to the chapel was built at the turn of the century when Elizabeth Drexel (the eldest of the three Drexel girls), added a crypt to the North side of the chapel with a room called the "Lady Chapel on top of the Crypt." In the crypt she planned to inter her family and other loved ones. She buried her mother, Emma Bouvier Drexel, her father, Francis Drexel, her own child, a girl who was stillborn and Helen Grace Smith, her husband's sister. Elizabeth's husband was the son of Kirby Smith, a Civil War General who lived at the now famous Smith-Wallace house at Milnor and Fitler Streets.</p>

<p>Francis Drexel's summer home can be found where the new Frankford Hospital now stands. The original home still stands near the Emergency Room. There was a chapel also built by Louise Drexel (the youngest). It is known as the Chapel of the True Cross, which was used to house the Drexel Family for a time. In the Drexel's townhome at 15th and Walnut Streets, Emma opened her home to the poor on a weekly basis. She gave food, clothing, and shoes. They were a very religious and generous family.</p>

<p>Jacqueline Kennedy Onassis was a Bouvier, which was Drexel's wife's family. She is linked with the Sacred Heart Chapel through her father's ancestry. When she went to the White House she took the Bouvier chairs with her which she was invited to take from the chapel. Her great-grandfather Bouvier was a carver of chairs. Saint Katherine of Siena Church, 9600 Frankford Avenue, originally was located on Eden Hall grounds. The small school was set up by the Sacred Heart nuns to accommodate the children of the neighborhood whose parents wanted their children to have an education equal to the boarding school. Eden Hall's property extends all the way back to the rear of All Saints' Episcopal property.</p>

<p>All Saints' Episcopal church is one of the oldest churches in Philadelphia and is the mother church of the Church of the Redeemer in Andulusia. "All Saints" is noted for its eight (8) Tiffany windows, it's lovely architecture and its beautiful bells which can be heard at lunch time everyday. In its little churchyard are buried some of the most prominent people in this area, such as Risdon who started the Morelton Inn, the Washington House and other hotel-type accommodations.</p>

<p>The Morelton Inn, between Glen Foerd and Baker's Bay was a wonderful vacation place in the 1890's. Many of the wealthy residents came from town to escape the summer heat and the intolerable fumes of the city. This entire area became enveloped by homes used as gambling casinos and rental homes and was soon considered a resort area. Macalester in 1850 became an entrepreneur in real estate as this area was adjacent to his Glen Foerd property (then known as Glen Garry). Macalester had a church built, one on Grant Avenue. The Macalester Church on Grant Avenue was razed and a new church was built at West Crown and Morrell Avenue at a later date.</p>

<p>The Torresdale Country Club was founded in 1898, with an appendage of the club located at Oxford Avenue and Harrison Street (the old Wistar Farm). A decision was made to move the club to Torresdale, at the present location of Frankford High School. The old area of the club included from an early time, a nine-hole golf course.</p>

<p>Colonel Edward Deveaux Morrell (1863-1917) owned extensive land in Torresdale. Not only did he own the land on which the Morelton Inn was located (Virginia Knauer's property), but he owned land in the vicinity of Frankford and Morrell Avenues as well. Morrell came from a family of Quakers who owned a home known as the Powell House on 2nd and Pine Streets. Morrell was a lawyer by profession and earned his title "Colonel" through his association with the First City Troop, an Elitist Calvary Troop that could be seen at most Thanksgiving Day Parades in Philadelphia. He married Louise Drexel, and they maintained one of their five homes at Morrell Avenue and Frankford Avenue near Louise's father's family home. Colonel Morrell entertained military men on his grounds, had a horse track, and an amusement park for children and adults in the vicinity. "Torresdale Park" as it was called was located in back of the trolley car barn at Frankford Avenue and Knights Road. Torresdale Park donated many of its rides to Willow Grove Park after closing.</p>`
    },
    vereeville: {
        slug: "vereeville",
        name: "Veree/Eville",
        description: "Exploring the history of Verreeville and surrounding areas.",
        imageBasePath: "Vereeville",
        images: [
            {
                src: "map.jpg",
                caption: "Vereeville map"
            },
            {
                src: "Vereeville-1.jpg",
                caption: "Klein House, Last of some 25 houses for workers at Verreeville."
            },
            {
                src: "Vereeville-2.jpg",
                caption: "Verree House, before road cut across terrace. Built in 1767, it is now a Park House. Photo 1910."
            },
            {
                src: "Vereeville-3.jpg",
                caption: "The Undertaker, John W. Dean, founded the company on Oxford Avenue in 1881. The above location at 7900 Oxford Avenue was built in 1898."
            },
            {
                src: "Vereeville-4.jpg",
                caption: "Same Dean Funeral Directors today."
            },
            {
                src: "Vereeville-5.jpg",
                caption: "Rhawn-Green \"Knowlton Mansion\", 1883. Frank Furness - Architect."
            },
            {
                src: "Vereeville-6.jpg",
                caption: "Ryers' Burholme Mansion and Library, 1859."
            },
            {
                src: "Vereeville-7.jpg",
                caption: "Fox Chase Octagonal Schoolhouse, 1805. Rhawn St. Same site as St. Cecillia Church parking lot today."
            },
            {
                src: "Vereeville-8.jpg",
                caption: "Circa 1910 - Oldest known existing building in Fox Chase, built 1683. Originally an Inn, later Overpeck's & Wright General Merchandise."
            },
            {
                src: "Vereeville-9.jpg",
                caption: "Same view today - Rehabilitated - Old Brauhaus Restaurant. 7982 Oxford Avenue, at Rhawn Street & Pine Road."
            },
            {
                src: "Vereeville-10.jpg",
                caption: "Van Sant Farm, now the site of the Baldi Middle School."
            },
            {
                src: "Vereeville-11.jpg",
                caption: "Old Fox Chase Inn. Heart of Fox Chase. Now Dunkin' Donuts."
            },
            {
                src: "Vereeville-12.jpg",
                caption: "Photo 1915 - 8403 Pine Road, Historic Ury House. The original structure was built by early settlers before William Penn arrived in 1682. Additions made a total of 23 rooms, razed in 1973. Many notables visited here. Crawford Family 1814-1945."
            }
        ],
        content: `<h2>Verree Mills</h2>

<p>Verree Mills were built on what today would be the west side of Verree Road between Susquehanna and Bloomfield Roads. The estate was owned by the Verree family during the 18th and 19th centuries. The Verree family is of French descent, the original name being Verrier.</p>

<p>The grist mill of Verree Mills was located on the north side of the Pennypack Creek near to the south wall of the Verree House. This grist mill replaced Gwin's Mill, the second oldest mill in Pennsylvania. The oldest mill was Swedish Governor Printz's Mill built on Cobbs Creek in Southwest Philadelphia in 1645. Welsh settlers, who settled North Wales, used to bring their grain to Gwin and Verree Mills to be ground into flour. They brought it by way of the path that became "Welsh Road." Gwin's Mill then fell into disrepair before the site was bought by Robert Verree, who then rebuilt the mill. In 1814, a bridge over the Pennypack Creek at Verree Road connected the grist mill on one side of the creek to the tool factory on the other side.</p>

<p>When the British occupied Philadelphia in 1777, they sent out foraging troops which raided and destroyed the Verree grist mill. The British forces were led by Major Simcoe's Queen's Rangers. They passed over Welsh Road on their way to the Crooked Billet which is now Hatboro. The Rangers met and defeated the Pennsylvania militia under General John Lacey. The British were interested in Verree mill because the mill had been supplying flour to Continental soldiers at Valley Forge. Ironically, Lacey was actually engaged in preventing supplies from reaching the British who were then in Philadelphia.</p>

<p>John Paul Verree was born in 1816. He inherited the entire mill complex from his father, James Verree, son of Robert Verree. John Paul Verree also inherited the Verree House, which was the center of the farming land and mills. Houses were built to provide shelter for workers. The Klein House, next to the Verree House, is a surviving example of workers homes. The owner of the building constructed a "spring" house 20 feet below ground to provide a means of refrigeration.</p>

<p>Early in his life, John Paul Verree entered business as a manufacturer of iron and steel. He was successful in his career and for years was the senior partner in the firm of John P. Verree & Co., and of the firm of Verree & Mitchell (iron and steel). In politics, Verree was a Whig, but he later became active in the new Republican Party. For six years he was a member of Select Council, and for four years he was president of the Council. From 1858 to 1862 Mr. Verree was a U.S. Congressman. He was a friend of Abraham Lincoln, and was quite active in the abolitionist movement. In 1873, Verree was appointed by the Constitutional Convention of Pennsylvania as a member of the Commission to supervise the vote on the new Constitution. In 1880, Verree resigned from all of his work and spent the rest of his life at the Verree House.</p>

<h2>Ye Olde Pennepack Church</h2>

<p>By the edge of Pennypack Park, on Krewstown Road, stands the oldest existing Baptist church in the state of Pennsylvania. Three hundred years ago, the small Baptist congregation held services in the homes of congregants. These first members were European immigrants from Wales, England, and Ireland. They sought the freedom to practice their Baptist faith in the New World. The congregation's earliest meetings were solemn and quiet. As the population expanded, new members were baptized and gladly welcomed into the congregation. The growing number of worshipers, however, made it increasingly difficult to continue holding services in the small homes of the congregants.</p>

<p>It was decided that a separate church was needed and so the Pennepack Church was created in 1707. The first pastor was a man named Elias Keech. The church lacked an indoor baptistery, so a cold, hard rock in the frigid Pennypack Creek had to suffice. Often times those gathered for a baptism in the winter would have to break the ice of the stream first before beginning a service. The natural baptistery became known as "Baptismal Rock."</p>

<p>Pennepack Church was not actually the earliest Baptist church to be founded in Pennsylvania. Another church had been started by Reverend Thomas Dungan at Cold Springs in 1864, four years before the birth of the Pennepack Church. This church, however, is no longer in existence, thus Pennepack Church has taken on the role as "mother" to all the Baptist churches in Pennsylvania, Delaware, Maryland, and New Jersey.</p>`
    },
    wissinoming: {
        slug: "wissinoming",
        name: "Wissinoming",
        description: "A neighborhood with a rich history along the Delaware.",
        imageBasePath: "Wissinoming",
        images: [
            {
                src: "mapwis.jpg",
                caption: ""
            },
            {
                src: "Wissinoming-1.jpg",
                caption: ""
            },
            {
                src: "Wissinoming-2.jpg",
                caption: ""
            },
            {
                src: "Wissinoming-3.jpg",
                caption: ""
            },
            {
                src: "Wissinoming-4.jpg",
                caption: ""
            },
            {
                src: "Wissinoming-5.jpg",
                caption: ""
            },
            {
                src: "Wissinoming-6.jpg",
                caption: ""
            },
            {
                src: "Wissinoming-7.jpg",
                caption: ""
            },
            {
                src: "Wissinoming-8",
                caption: ""
            },
            {
                src: "Wissinoming-9.jpg",
                caption: ""
            },
            {
                src: "Wissinoming-10.jpg",
                caption: ""
            },
            {
                src: "Wissinoming-11.jpg",
                caption: ""
            },
            {
                src: "Wissinoming-12.jpg",
                caption: ""
            }
        ],
        content: `<p>In the fall of 1991, John Altomari invited an acquaintance, Dr. Harry Silcox, to the Senior Citizens' meeting at Hope Lutheran Church, Benner and Ditman Streets. Here he showed his slide presentation of Old Tacony which was excellent and well received. One of the Seniors was actually seen on one of his historic slides.</p>

<p>The added comments and questions impressed Dr. Silcox and he suggested that something similar be initiated in the Wissinoming area.</p>

<p>John Altomari contacted several people who expressed interest in the project and possibility of forming the Wissinoming Historical Society was discussed. John advised Dr. Silcox of this project and learned he was organizing a Northeast coalition of neighborhood historical groups. A meeting was scheduled for October 9, 1991 at the Tacony Music Hall, 4815-19 Longshore Avenue. John Altomari, Marie McHeran, and Ann Peltz attended and thus began our affiliation with Northeast Historical Affiliates.</p>

<p>The founding members are John Altomari (President), Alberta Chase (Vice President), Ann Peltz (Secretary), Elsie Barnes (Treasurer), Marie McHeran (Chairman of the Board), Edward Fink, Al Irvine, Naomi Mellar, George Schule, Dorothy Weidemann and Walter Stock.</p>

<p>Admiral William Penn, father of William Penn the Quaker, was given a land grant from the King of England that encompassed what became Pennsylvania (Penn's Woods). This area included Philadelphia and what was then Oxford Township. It was named by the Seary family, the first settlers in this area, who were Quakers from Oxfordshire, England. Wissinoming was part of Oxford Township prior to the consolidation of Philadelphia City and County in 1854, wherein twenty-eight (28) boroughs and districts were brought together. The name Wissinoming first appeared on a property deed in 1723 but was never listed as an official subdivision or township of Philadelphia county.</p>

<p>Wissinoming takes its name from Wissinoming Creek, which is a patent for land granted by Edmund Andros, Governor of the Province of New York, on March 25, 1676, and was spelled, "Sissowokissinek," Indian for "long, slender fish." Wissinoming Creek was a large stream years ago. Many rare birds were to be found in the woods that lined its banks, as well as foxes, squirrels, rabbits, and other wild animals. This was especially true during the Civil War, when many farms were deserted. Wolves were known to have crossed the Delaware River on the ice from New Jersey as late as 1870.</p>

<p>The first inhabitants of Wissinoming were the Delawares of the Lenni-Lenape Tribe until about 1755, which gives credence to the Indian origin of the name. Various explanations of the name have been offered, the most credible being "place where the grapes grow," probably from the wild grapes growing in the wooded areas. "Where the waters run" may have been referring to the Delaware River or the creeks existing in the early days. "Long, slender fish" perhaps originates from the eels caught in the Delaware River.</p>

<p>The first grant to a white man in this area, a Swedish settler named Peter Cock, in 1675, was named "Quessmacemink." The alternate spelling of this name is Kwissinomink, which would be pronounced "Wissinoming" in English and would possibly mean "Duck Creek."</p>

<p>In 1805, a survey was made of the Howell Farm, upon which Wissinoming is built. Howell Farm comprised 200 acres of land bounded on the east by Torresdale Avenue, the west by Wissinoming Park, the north by Wissinoming Creek (approximately the Robbins Avenue area), and the south by Dark Run Lane (Cheltenham Avenue). It was purchased by the Wissinoming Land Association in 1885.</p>

<p>Matthias W. Baldwin (1795-1866), the locomotive pioneer, named his country home "Wissinoming." It was opposite the railroad station about 1853. A settlement grew up around this depot north of Bridesburg. Early families included Castor, Lardner, Penrose, Foster, Hannan, Salter, Cornelius, Lukens, and Bradner.</p>

<p>The Castor family was well known from the earliest days of Wissinoming. The George Johnson Castor house is still located at Howell and Tulip Street, which were originally known as Dark Run Lane and Tacony Road. Howard Paul Castor, a nephew of Barton Castor, was instrumental in having a road cut through from Frankford to Tacony on the north side of the railroad tracks. It was completed on July 3, 1894, and is presently known as Torresdale Avenue.</p>

<p>Professor T. Worcester Worrell wrote the following regarding "a remarkable occurrence in the location of Wissinoming":</p>

<p>The year 1816 is spoken of as 'the year without a Summer.' In that year the whole country suffered from abnormally low temperatures, and this was especially true of the northern states. In June, snow fell in New York to the depth of five inches, and Massachusetts experienced a fall of ten inches. In Pennsylvania, frost, snow and ice prevailed throughout the summer months. In May, ponds were covered with ice one-half inch thick. Buds were frozen and crops destroyed. Farmers, despairing of a corn crop, cut down the stunted shoots and used them as fodder. In the whole state Wissinoming was particularly fortunate in raising a few perfect stalks bearing full ears. These were grown in fields with southern exposure in an angle between two woods and shielded from the northern and eastern storms.</p>`
    }
}
