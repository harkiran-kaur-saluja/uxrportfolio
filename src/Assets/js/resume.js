import 'animate.css';
export function Resume(props) {
    window.scrollTo(0, 0);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {/*name and description*/}
                    <h1>
                        <strong>Harkiran Saluja</strong>
                    </h1>
                    <h4>
                        <strong className="bolded-words">UX Researcher</strong>
                    </h4>
                    <br/>
                    <a className="btn btn-outline-secondary button" href="https://docs.google.com/document/d/1B8t7iwTQ_5t3fz647ygYS9snp5ykDjMZJGQzENwE5jg/edit?usp=sharing">Download Resume</a>&emsp;
                    <a className="btn btn-outline-secondary button" href="https://www.linkedin.com/in/harkiran-kaur-saluja/">LinkedIn</a>
                    <br/>
                </div>
                <div className="col">
                    {/*experience, education, awards*/}
                    <div className='container'>
                        <div className='row'>
                            <h4>
                                <strong className='bolded-words'>Experience</strong>
                            </h4>
                        </div>
                        <div className='row'>
                            <p>
                                <strong>UXR Rolling Researcher
                                </strong> / Duolingo (via UpWork)
                                <ul>
                                    <li>October 2023 - PRESENT / Remote</li>
                                    {/*<li>description</li>*/} </ul>
                            </p>
                        </div>
                        <div className='row'>
                            <p>
                                <strong>UX Researcher II
                                </strong> / Key Lime Interactive
                                <ul>
                                    <li>November 2022 - April 2023 / Remote</li>
                                    {/*<li>Partnered with 2 large-scale clients to identify business goals and objectives, and ensured research studies aligned with client needs while delivering insights to drive actionable design decisions.
                                    </li>
                                    <li>Generated 75+ qualitative and quantitative data points from 500+ survey participants, providing insights into user feature preferences and informing design decisions for future-release products.
                                    </li>
                                    <li> Moderated 16 evaluative sessions to identify key user decision-making points for a proposed app
                                    </li> */} </ul>
                            </p>
                        </div>
                        <div className='row'>
                            <p>
                                <strong>UX Researcher
                                </strong> / Young Adult Survivors United
                                <ul>
                                    <li>January 2022 - August 2022 / Pittsburgh, PA</li>
                                    {/*<li>Streamlining nonprofit operations and tools to enable organizational growth.
                                    </li>
                                    <li>Executing and analyzing 15 interviews and 12 field observations to understand 
and enhance member engagement as well as cancer survivor experiences
                                    </li> */} </ul>
                            </p>
                        </div>
                        <div className='row'>
                            <p>
                                <strong>Design Researcher
                                </strong> / Children, Technology, Research, Learning & Families Lab
                                <ul>
                                    <li>April 2019 - September 2021 / Seattle, WA</li>
                                    {/*<li>DFacilitated co-design activities for 30 children in KidsTeam that focused on 
creating new and inclusive technologies for kids
                                    </li>
                                    <li>Analyzed qualitative data from 75+ interviews and co-design sessions to further 
inform research methods for children.
                                    </li>
                                    <li>
                                    Co-authored 2 papers on participatory design methods with kids
                                    </li> */} </ul>
                            </p>
                        </div>
                        <hr/>
                        <div className='row'>
                            <h4>
                                <strong className='bolded-words'>Education</strong>
                            </h4>
                        </div>
                        <div className='row'>
                            <p>
                                <strong>Master of Human Computer Interaction
                                </strong>
                                <ul>
                                    <li>Carnegie Mellon University</li>
                                </ul>
                            </p>
                        </div>
                        <div className='row'>
                            <p>
                                <strong>Bachelor of Science in Informatics</strong>
                                <i>, cum laude, Phi Beta Kappa</i>
                                <ul>
                                    <li>University of Washington</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col">
                    {/*skills, publications*/}
                    <div className='row'>
                        <h4>
                            <strong className='bolded-words'>Skills</strong>
                        </h4>
                    </div>
                    <div className='row'>
                        <h5>
                            <strong>Research Methods</strong>
                        </h5>
                        <p>
                            In-Depth Interviews
                            <br/>
                            Survey Design
                            <br/>
                            Focus Groups
                            <br/>
                            Usability Testing
                            <br/>
                            Storyboarding
                            <br/>
                            Participatory Design
                            <br/>
                            Card Sorting
                            <br/>
                            Heuristic Evaluations
                            <br/>
                            Persona Creation
                            <br/>
                            Customer Journey Maps
                            <br/>
                            Empathy Maps
                            <br/>
                            Concept Testing
                            <br/>
                            Diary Studies
                            <br/>
                            Reporting
                        </p>
                    </div>
                    <div className='row'>
                        <h5>
                            <strong>Tools</strong>
                        </h5>
                        <p>
                            Figma
                            <br/>
                            Adobe Creative Cloud
                            <br/>
                            InVision
                            <br/>
                            Miro
                            <br/>
                            Qualtrics
                            <br/>
                            SurveyMonkey
                            <br/>
                            UserInterviews
                            <br/>
                            Balsamiq
                            <br/>
                            dScout
                            <br/>
                            Optimal Workshop
                            <br/>
                            InVision
                            <br/>
                            Reduct.video
                        </p>
                    </div>
                    <div className='row'>
                        <h5>
                            <strong>Key Strengths</strong>
                        </h5>
                        <p>
                            Adaptability
                            <br/>
                            Big-Picture Thinking
                            <br/>
                            Active Listening
                            <br/>
                            Self-Directed Learning
                            <br/>
                            Data Storytelling
                        </p>
                    </div>

                    <hr/>
                    {/* <div className='row'>
                        <h4>
                            <strong className='bolded-words'>Publications</strong>
                        </h4>
                    </div>
                    <div className='row'>
                        <p>
                            Simko, L., Chin, B., Na, S.,
                            <strong> Saluja, H.K.</strong>, Zhu, T.Q., Hiniker, A., Yip, J.C., & Cobb, C. (2021). 
                                                            Would You Rather: A focus group method for eliciting and discussing formative 
                                                            design insights with children.
                            <em> Proceedings of the 2021 IDC Interaction Design and 
                                                            Children.</em>
                            Association for Computing Machinery. <strong>Received CHI Best Paper Award</strong>
                        </p>
                        <br/>
                        <p>
                            Lee, K.J., Roldan, W., Zhu, T.Q.,
                            <strong> Saluja, H.K.</strong>, Na, S., Chin, B., Zeng, Y., Lee, J.H., & Yip, 
                                                        J.C., (2021). The Show Must Go On: A conceptual model of conducting synchronous 
                                                        participatory design with children online.
                            <em> Proceedings of the 2021 CHI Conference 
                                                        on Human Factors in Computing Systems.</em>
                            Association for Computing Machinery.
                        </p>

                    </div> */}
                </div>
            </div>
        </div>
    );
}
