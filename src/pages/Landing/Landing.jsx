import { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import styles from './Landing.module.css';

import Navigation from '@/features/Navigation';
import PersonalInformation from '@/features/PersonalInformation';
import Projects from '@/features/Projects';
import Technologies from '@/features/Technologies';
import ContactInformation from '@/features/ContactInformation';
import verticalScrollToElement from '@/utils/verticalScrollToElement';

const Landing = () => {
    const personalInformationWrapperRef = useRef(null);
    const projectsWrapperRef = useRef(null);
    const technologiesWrapperRef = useRef(null);
    const contactInformationWrapperRef = useRef(null);

    const navButtonClicked = (sectionName) => {
        let ref;
        switch (sectionName) {
            case "PersonalInformation": ref = personalInformationWrapperRef.current; break;
            case "Projects": ref = projectsWrapperRef.current; break;
            case "Technologies": ref = technologiesWrapperRef.current; break;
            case "ContactInformation": ref = contactInformationWrapperRef.current; break;
        }
        verticalScrollToElement(ref, 14);
    };

    return (
        <BrowserRouter>
            <div className={styles["landing-page-content"]}>
                <div className={styles["navigation-content"]}>
                    <div className={styles["page-titles"]}>
                        <h1 className={styles["name"]}>Niall Cushing</h1>
                        <h2 className={styles["personal-portfolio-text"]}>Personal Portfolio</h2>
                    </div>
                    <div className={styles["navigation-buttons"]}>
                        <Navigation
                            personalInformationOnClickHandler={ () => navButtonClicked("PersonalInformation") }
                            projectsOnClickHandler={ () => navButtonClicked("Projects") }
                            technologiesOnClickHandler={ () => navButtonClicked("Technologies") }
                            contactInformationOnClickHandler={ () => navButtonClicked("ContactInformation") }
                        />
                    </div>
                </div>
                <PersonalInformation ref={personalInformationWrapperRef} />
                <Projects ref={projectsWrapperRef} />
                <Technologies ref={technologiesWrapperRef} />
                <ContactInformation ref={contactInformationWrapperRef} />
            </div>
        </BrowserRouter>
    );
};

export default Landing;