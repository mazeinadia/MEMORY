import {connect} from 'react-redux';
import Image from './image-component.jsx'

const mapStateToProps = state => {
    return {
        pageName: state.pageName
    }
};

const ImageContainer = connect(
    mapStateToProps
) (Image);

export default ImageContainer;
