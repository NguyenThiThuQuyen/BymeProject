import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CenterMode  from '../containers/HomeContent/HomeContent'
import Header from '../containers/Header/Header'
import Slide from '../containers/Slide/Slide'
import Footer from '../containers/Footer/Footer'
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        return (
            <div className='bg-color'>
                <Header />
                <Slide />
                <CenterMode />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
