"use client";

import styling from "@/app/Projects.module.css";
import React, {ReactNode, useState} from "react";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import InformationSection from "@/app/components/informationSection";

interface OverlaySectionProps {
    title: string;
    projectName: string;
    projectDescription: string[];
}

function Modal(props: { isOpen: boolean; onClose: () => void; children: ReactNode }) {
    if (!props.isOpen) return null;

    return (
        <div className={styling.modalOverlay} onClick={props.onClose}>
            <div className={styling.modalContent}
                 onClick={(e) => e.stopPropagation()}>
                    {props.children}
                <button className={styling.modalClose}
                        onClick={props.onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export function OverlaySection(props: OverlaySectionProps) {
    const [isModalShowing, setIsModalShowing] = useState(false);

    const handleOpenModal = () => {
        setIsModalShowing(true);
    };

    const handleCloseModal = () => {
        setIsModalShowing(false);
    };

    return (
        <div className={styling.projectCardOverlaySection}>
            <div className={styling.projectCardOverlay}/>
            <div className={styling.projectCardTextSection}>
                <h2 className={styling.projectCardText}>{props.title}</h2>
                <h1 className={styling.projectCardText}>{props.projectName}</h1>
                <button onClick={handleOpenModal} className={styling.openModalButton}>
                    <h3>Details</h3>
                </button>
            </div>
            <Modal isOpen={isModalShowing} onClose={handleCloseModal}>
                <InformationSection title={props.projectName} content={props.projectDescription}/>
            </Modal>
        </div>
    );
}