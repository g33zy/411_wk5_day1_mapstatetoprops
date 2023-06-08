import { connect } from 'react-redux'
// import the visual React component "Home"
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

// wrap the visual React Component "Home" with the Redux Container Component Home
export default connect(mapStateToProps)(Home)