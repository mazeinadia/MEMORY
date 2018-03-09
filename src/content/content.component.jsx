import React from 'react'
import PropTypes from 'prop-types'

const Content = ({pageName, children, dataTid}) => {
    const className = 'content content__' + pageName;
    return (
        <div className={className} key='div-content' data-tid={dataTid}>
            {children}
        </div>
    )
};

Content.propTypes = {
    pageName: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(
        PropTypes.element.isRequired
    ).isRequired
};

export default Content