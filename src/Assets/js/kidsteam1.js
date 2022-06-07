import 'animate.css';


export function KidsTeam() {
    window.scrollTo(0, 0);
    return (
        <div>
            <div>
                <img className='img-fluid' src="./img/kidsteam/kidsteam_Title.png" alt="Intergenerational co-design research"/>
            </div>
            <div className='under'></div>
            <br/><br/><br/>

            <div className='container'>
                <div className='row'>
                    <div className="col br">
                        <h3 className='highlight'>
                            <mark>I studied participatory design with children.</mark>
                        </h3>

                        <br/><br/>

                        <p className='lead'>We aim to understand the interactions with and perceptions of technology through co-design sessions, interviews, and qualitative coding of rich data, which further informs our approach to designing technologies with input from (and built for) children.</p>

                    </div>


                    <div className="ms-5 col">
                        <div className="row">
                            <h3>Timeline</h3>
                            <p>2.5 years</p>
                        </div>
                        <br/>
                        <div className="row">
                            <h3>Partner Organizations</h3>
                            <p>Amazon, Google, SunSmart, University of Washington</p>
                        </div>
                        <br/>
                        <div className="row">
                            <h3>My Role</h3>
                            <p>Undergraduate UX Research Assistant</p>
                        </div>
                        <br/>
                        <div className="row">
                            <h3>Methods</h3>
                            <p>Semi-Structured Interviews, Remote Research, Participatory Design, Qualitative Data Analysis, Working With Minors</p>
                        </div>
                        <br/>
                        <div className="row">
                            <h3>Mentors</h3>
                            <p>Jason Yip, Kung Jin Lee, Wendy Roldan</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>


            {/*Amazon*/}
            <div className='under'></div>
            <div className="ucre-problem white">

                <div className='px-5'>
                    <h3 className="big_intro problem-u white">PROJECT 1</h3>
                    <br/>
                    <br/>
                    <h3 className="problem-b white display-5 font-weight-bold">
                        <strong>Reading Sidekick With Alexa</strong>
                    </h3>

                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <div className="px-5">
                <h3 className='highlight'>
                    <mark>How might we complement child reading and build language fluency through Alexa?</mark>
                </h3>
                <br/>
                <br/>
            </div>
            <br/>
            <div className="px-5">
                <p className="lead">
                During the co-design process, we asked the children to bring books from home that they like to read and asked them what aspects of reading they liked and disliked, as well as how Alexa could help them with their reading experience. The idea was to use this as a foundation for creating a technology that makes it easier and more fun for kids to read.
                <br/>
                <br/>
                In one of the sessions, we used <em> Bags of Stuff</em>, a co-design method that involves the use of arts and crafts to create a low-fidelity prototype (see full explanation in <a href="http://bigyipper.com/wp-content/uploads/2010/11/1337_final.pdf"> Walsh et al. (2013)</a>). It took ussome time to help the kids in our group come up with an idea, as we looked at their books and asked them how they read, but we decided to use their idea of a 3D book and manifest it into Alexa reading along with the kid and project videos of the action in the story. Alexa has eyes for reading and a camera that projects text, animations and music videos of the story, along with speakers for sound. One thing the children noted was that when they doesn't understand something they are reading, they don't stop to look it up or ask someone - they just keep reading. We took this information and helped them create something that wouldn't interrupt the kids too much when reading. Our final creation was an Alexa with eyes and speakers projecting a house with a character from the child's book in it, along with some text.
                </p>
            </div>

            <br/> <br/> <br/>
            <div className="px-5">
                <strong>
                    <h3 className='big_intro font-weight-bold'>KEY FINDINGS</h3>
                </strong>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="" src="./img/ucre/Group 8.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">Children need help understanding big words and sounding them out.</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="" src="./img/ucre/Group 16.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">There should be a reward system for child improvement.</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="" src="./img/ucre/Group 16.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">Children should take turns with Alexa while reading.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>



             {/*Would You Rather*/}
            <div className='under'></div>
            <div className="ucre-problem white">

                <div className='px-5'>
                    <h3 className="big_intro problem-u white">PROJECT 2</h3>
                    <br/>
                    <br/>
                    <h3 className="problem-b white display-5 font-weight-bold">
                        <strong>Would You Rather</strong>
                    </h3>

                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <div className="px-5">
                <h3 className='highlight'>
                    <mark>How might we develop a focus group method using line-judging for eliciting and discussing formative design insights with children?</mark>
                </h3>
                <br/>
                <br/>
            </div>
            <br/>
            <div className="px-5">
                <p className="lead">
                This method involves playing the Would You Rather game in order to gain insights on children's perceptions of technology (<em>e.g. Would You Rather play with a cute robot that secretly changes your Wi-Fi password, or play with a scary robot that does not secretly change anything?</em>). Here, we would collect, transcribe, and code data. Data coding and analysis was performed based on factors such as the situation type of the Would You Rather question, how many children chose which option, children's mental models of how technology worked, and what the children value. Our findings were published in at the ACM Interaction Design and Children (IDC) conference in June 2021
                <br/>
                <br/>
                The key stages of WYR are: <strong className="big_intro">scenario generation, voting and discussion, and analysis.</strong>
                <br/>
                <br/>
                To evaluate and refine this method, we conducted seven additional WYR sessions with children through participatory design methods and by following the WYR stages. 

                <br/>
                <br/>
                
                <img className="px-5 center-img img-fluid" src="img/kidsTeam/sessionsTableWYR.png" alt="sessions and examples" />
               
                <br/>
                <br/>

                Different sessions had different focuses, as initially we started off with Creepy Tech, but we also noticed the negativity in the scenarios, which is why we came up with positive ones to see whether the children would react differently. Children also came up with their own scenarios in some of the sessions as part of the co-design process. For each scenario, there were three options: choice 1, choice 2, and I don't know. When KidsTeam went online, we developed a virtual way for everyone to showcase these options by having them place their hand relative to their head to indicate their choice. 
               
                </p>
            </div>
            <br/> <br/> <br/>
            <div className="px-5">
                <strong>
                    <h3 className='big_intro font-weight-bold'>KEY FINDINGS</h3>
                </strong>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="" src="./img/ucre/Group 16.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">Confronting ambiguity generates design insights.</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="" src="./img/ucre/Group 16.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">Children who went with I don't know still conveyed useful insights.</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="" src="./img/ucre/Group 16.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">When explaining their reasoning for choosing a certain option participants tend to verbalize contextual details: resources, habits, routines, and experiences</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="" src="./img/ucre/Group 16.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">Arguments for a WYR choice reveal mental models and participants sense of agency over technology, and choices and hesitations convey participants preferences and values</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>




            {/*KidsTeam Online*/}
            <div className='under'></div>
            <div className="ucre-problem white">

                <div className='px-5'>
                    <h3 className="big_intro problem-u white">PROJECT 3</h3>
                    <br/>
                    <br/>
                    <h3 className="problem-b white display-5 font-weight-bold">
                        <strong>KidsTeam Online</strong>
                    </h3>

                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <div className="px-5">
                <h3 className='highlight'>
                    <mark>What are project logistics considerations when co-designing in a synchronous online space?</mark>
                </h3>
                <br/>
                <h3 className='highlight'>
                    <mark>What are online factors considerations when co-designing in a synchronous online space?</mark>
                </h3>
                <br/>
                <h3 className='highlight'>
                    <mark>What kinds of participant interactions do we need to consider when co-designing in a synchronous online space?</mark>
                </h3>
                <br/>
                <br/>
            </div>
            <br/>
            <div className="px-5">
                <p className="lead">
                    Before COVID-19, KidsTeam UW team members met twice-a week after school for 90 minutes that included snacks, circle time, and co-design time. With the sudden pivot to online learning, we had to change our methods of collecting data, shortening sessions to 75 minutes, and cutting snacktime to allow for circle time and co-design time.
                    <br/><br/>
                    There were 10 co-design sessions conducted from April to June of 2020, all of which were on Zoom.We also conducted 10 semi-structured half-hour interviews with all of our child participants to further understand their environment as a part of KidsTeam online versus in-person. This includes overall structure of the sessions, the co-design methods used, and the virtual tools used. I served as a notetaker for these interviews while other researchers led them and asked follow-up questions when prompted.

                    <br/><br/>

                    To analyze the qualitative data collected, we employed an inductive and grounded method to further understand the emerging themes of moving to an online space. I served as one of the co-authors to annotate, transcribe, and open-code the video recordings of the sessions as well as the interview notes. Our themes for coding involved the co-design participants needs and experiences, the design goals of a session, and the characteristics of design techniques. While coding, we focused on connecting these themes and the themes from our literature review to what was specific to the online space. Furthermore, I helped conduct the literature review on topics such as improvisation and participatory design, and assisted in writing early drafts of the paper
               
                </p>
            </div>

            <br/> <br/> <br/>
            <div className="px-5">
                <strong>
                    <h3 className='big_intro font-weight-bold'>KEY FINDINGS</h3>
                </strong>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="ps-5 col-3">
                            <img className="weary" alt="" src="./img/ucre/Group 16.png"/>
                        </div>
                        <div className="col align-middle align-self-center">
                            <p className="lead">We created a conceptual model for synchronous co-design, which feature factors such as modification of the co-design technique, people interacting with others as well as the technology, the logistics of the project, as well as the settings of the researchers and participants. </p>
                        </div>
                    </div>
                    <br/><br/>
                </div>
            </div>
            <img className="center-img img-fluid" src="img/kidsTeam/conceptualModel.png" alt="the cover for KidsTeam" />
            <br/><br/><br/>



             {/*Master of Human-Computer Interaction + Design (MHCID) and KidsTeam*/}
            <div className='under'></div>
            <div className="ucre-problem white">

                <div className='px-5'>
                    <h3 className="big_intro problem-u white">PROJECT 4</h3>
                    <br/>
                    <br/>
                    <h3 className="problem-b white display-5 font-weight-bold">
                        <strong>Master of Human-Computer Interaction + Design (MHCID) and KidsTeam</strong>
                    </h3>

                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <div className="px-5">
                <h3 className='highlight'>
                    <mark>How do design students experience preparing for, executing, and reflecting on conducting remote usability sessions with end-users?</mark>
                </h3>
                <br/>
                <h3 className='highlight'>
                    <mark>How do students strategies differ from leading in-person design sessions?</mark>
                </h3>
                <br/>
                <h3 className='highlight'>
                    <mark>What are the advantages and disadvantages of conducting remote usability sessions during a project-based human computer interaction and design course?</mark>
                </h3>
                <br/>
                <br/>
            </div>
            <br/>
            <div className="px-5">
                <p className="lead">
                    Led by Wendy Roldan, I was on a team of researchers who worked with the 2020-2021 MHCID cohort taking a prototyping studio course to understand how to employ design practices to foster virtual connection. In this project, MHCID students designed physical or digital products to meet this goal and received two rounds of critiques from the children. Our goal was to understand how novice user experience design students navigated through planning remote co-design sessions, the strategies they came up with to effectively lead their sessions, and the challenges they experienced in leading these sessions.
                    <br/><br/>
                    we leveraged rich descriptions from a range of qualitative sources that we
                    collected before the remote sessions, during the remote sessions, and after students conducted the co-design sessions. Specifically, we video recorded and time stamped all
                    8, 90-min remote co-design sessions along with the breakout rooms within. Additionally, we conducted 12 semi-structured, 60 minute interviews with MHCID students after the course ended. I served as second interviewer for 2 of the interviews, and Wendy
                    let me lead 3 other interviews with the students. As a result of this process, I learned that probing and following up on participant answers is just as important as sticking to the interview protocol because there may be new insights derived that researchers wouldn't get otherwise.
                    <br/><br/>

                    Additionally, we collected 8 pre-reflection surveys from each student team before they attended their sessions and sent students a video clip between their first
                    and second session with a mid-quarter reflection survey. Data analysis involved finding overarching themes throughout the sessions and the interviews, and we were able to organize the findings into three higher level themes related to the data about students preparing for their sessions, how the students led the sessions, and what the
                    students did after the sessions.

                    <br/><br/>

                    Our findings are being currently written in a paper that will be submitted to the Design of Interactive Systems (DIS) 2022 conference, titled <em> Designing at a Distance: Involving Remote Users in HCI/Design Education</em>.
               
                </p>
            </div>
            <br/><br/><br/>

            <h3 className="px-5 big_intro">PUBLICATIONS</h3>
            <br/><br/>
            <div className="px-5">
                <p className="lead">Simko, L., Chin, B., Na, S., <strong className="bolded-words">Saluja, H.K.</strong>, Zhu, T.Q., Hiniker, A., Yip, J.C., &amp; Cobb, C. (2021). Would You Rather: A focus group method for eliciting and discussing formative design insights with children. Proceedings of the 2021 IDC Interaction Design and Children. Association for Computing Machinery.<a href="https://dl.acm.org/doi/abs/10.1145/3459990.3460708">[link]</a></p>
                <br />
                <p className="lead">Lee, K.J., Roldan, W., Zhu, T.Q., <strong className="bolded-words">Saluja, H.K.</strong>, Na, S., Chin, B., Zeng, Y., Lee, J.H., &amp; Yip, J.C., (2021). The Show Must Go On: A conceptual model of conducting synchronous participatory design with children online. Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery. <a href="https://dl.acm.org/doi/abs/10.1145/3411764.3445715?casa_token=LRefEHOGNhUAAAAA:mX3-A8vvhWnXO8Sg7Ppz6Ff_ntmZkQl0olwcwJ4eK_Bzsk3VBmOJ_C7VjC9J-RID6fEIwMpuEfyhGw">[link]</a>
                <br />
                <span className="big_intro">Received Best Paper Award (Top 1% of 2,800 papers)</span></p>
            </div>
            <br/><br/><br/>
            
        </div>
    );
}
