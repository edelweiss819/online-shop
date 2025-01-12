'use client'
import React from 'react';
import classnames from 'classnames';

export type CompanyLogoProps = {
    company: React.ReactNode;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({company}) => {
    const [isHovered, setHovered] = React.useState(false);
    const colorClass = classnames({
                                      'text-primary': isHovered,
                                      'text-gray-2': !isHovered
                                  });


    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
            setHovered(false)

        }
    ;


    return (
        <div className={colorClass}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            {company}
        </div>
    );
};

export default CompanyLogo;
