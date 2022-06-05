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
                    <a className="btn btn-outline-secondary button" href="https://drive.google.com/file/d/1MqqagyaZZHlzQO9kpCr4CSjnJSiatULL/view?usp=sharing">Download Resume</a>&emsp;
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
                                <strong>Graduate Research Assistant
                                </strong>/ Carnegie Mellon Social AI Group
                                <ul>
                                    <li>February 2022 - Present / Pittsburgh, PA</li>
                                    {/*<li>Driving inclusion and representation of queer voices in HCI by conducting a 
                                literature review of 500+ papers to better understand how underrepresented 
                                communities are described in HCI research.
                                    </li>
                                    <li>Publishing and presenting findings at the CHI 2023 conference
                                    </li> */} </ul>
                            </p>
                        </div>
                        <div className='row'>
                            <p>
                                <strong>User Researcher
                                </strong>/ Young Adult Survivors United
                                <ul>
                                    <li>January 2022 - Present / Pittsburgh, PA</li>
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
                                </strong>/ CTRL + F Lab
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
                                    <li>Carnegie Mellon University - August 2022</li>
                                </ul>
                            </p>
                        </div>
                        <div className='row'>
                            <p>
                                <strong>Bachelor of Science in Informatics</strong>
                                <i>, cum laude, Phi Beta Kappa</i>
                                <ul>
                                    <li>University of Washington - June 2021</li>
                                </ul>
                            </p>
                        </div>
                        <hr/>
                        <div className='row'>
                            <h4>
                                <strong className='bolded-words'>Awards</strong>
                            </h4>
                        </div>
                        <div className='row'>
                            <p>Faculty Award for Student Excellence in Informatics</p>
                        </div>
                        <div className='row'>
                            <p>CHI 2021 Best Paper Award
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
                            <strong>UX Methods</strong>
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
                            Affinity Mapping
                            <br/>
                            Persona Creation
                            <br/>
                            Customer Journey Maps
                            <br/>
                            Empathy Maps
                            <br/>
                            "Speed Dating"
                        </p>
                    </div>
                    <div className='row'>
                        <h5>
                            <strong>Tools</strong>
                        </h5>
                        <p>
                            Figma
                            <br/>
                            Adobe Creative Suite
                            <br/>
                            InVision
                            <br/>
                            Miro
                        </p>

                    </div>

                    <hr/>
                    <div className='row'>
                        <h4>
                            <strong className='bolded-words'>Publications</strong>
                        </h4>
                    </div>
                    <div className='row'>
                        <p>
                            Simko, L., Chin, B., Na, S.,
                            <strong>Saluja, H.K.</strong>, Zhu, T.Q., Hiniker, A., Yip, J.C., & Cobb, C. (2021). 
                                                            Would You Rather: A focus group method for eliciting and discussing formative 
                                                            design insights with children.
                            <em>Proceedings of the 2021 IDC Interaction Design and 
                                                            Children.</em>
                            Association for Computing Machinery.
                        </p>
                        <br/>
                        <p>
                            Lee, K.J., Roldan, W., Zhu, T.Q.,
                            <strong>Saluja, H.K.</strong>, Na, S., Chin, B., Zeng, Y., Lee, J.H., & Yip, 
                                                        J.C., (2021). The Show Must Go On: A conceptual model of conducting synchronous 
                                                        participatory design with children online.
                            <em>Proceedings of the 2021 CHI Conference 
                                                        on Human Factors in Computing Systems.</em>
                            Association for Computing Machinery.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
