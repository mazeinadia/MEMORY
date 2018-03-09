import {connect} from 'react-redux'
import Content from './content.component.jsx'

const mapStateToProps = (state) => {
    return {
        pageName: state.pageName,
        children: state.children
    }
};

const ContentContainer = connect(
    mapStateToProps
) (Content);

export default ContentContainer