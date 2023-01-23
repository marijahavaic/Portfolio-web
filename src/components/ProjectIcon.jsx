import React from "react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectIcon({ icon }) {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {icon.tooltip}
        </Tooltip>
    );
    return (
        <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <a
                href={icon.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={icon.ariaLabel}
            >
                <FontAwesomeIcon
                    icon={icon.name}
                    style={{
                        fontSize: "2.25rem",
                    }}
                />
            </a>
        </OverlayTrigger>
    );
}

export default ProjectIcon;
