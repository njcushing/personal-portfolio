import { useState, useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './Landing.module.css';

import Navigation from '@/features/Navigation';
import PersonalInformation from '@/features/PersonalInformation';
import Projects from '@/features/Projects';
import ContactInformation from '@/features/ContactInformation';

const Landing = () => {
    const personalInformationWrapperRef = useRef(null);
    const projectsWrapperRef = useRef(null);
    const contactInformationWrapperRef = useRef(null);

    const navButtonClicked = (sectionName) => {
        const scrollBorderBuffer = 14; /* Given value translates to pixels */
        let ref;
        switch (sectionName) {
            case "PersonalInformation": ref = personalInformationWrapperRef.current; break;
            case "Projects": ref = projectsWrapperRef.current; break;
            case "ContactInformation": ref = contactInformationWrapperRef.current; break;
        }
        const viewportHeight = window.innerHeight;
        const elementHeight = ref.getBoundingClientRect().height + (2 * scrollBorderBuffer);
        const elementYPos = ref.offsetTop;
        if (elementHeight > viewportHeight) {
            window.scrollTo({ top: Math.max(0, (elementYPos - scrollBorderBuffer)), behavior: "smooth" })
        } else {
            ref.scrollIntoView({ behavior: "smooth", block: "center" });
        }
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
                            contactInformationOnClickHandler={ () => navButtonClicked("ContactInformation") }
                        />
                    </div>
                </div>
                <PersonalInformation ref={personalInformationWrapperRef} />
                <Projects ref={projectsWrapperRef} />
                <ContactInformation ref={contactInformationWrapperRef} />
            </div>
        </BrowserRouter>
    );
};

export default Landing;