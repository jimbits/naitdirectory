import React, { Component } from 'react';
import styled from "styled-components";
import ReactSVG from 'react-svg'
import Logo from "./svg/nait-logo.svg";
import { TweenLite, Power4, CSSPlugin } from "gsap/all";

const C = CSSPlugin;
const Layout = styled.div`

`
const Slider = styled.div`
    position:relative;
    height:250px;
    width:150px;
    margin:1.5rem auto;
    h2{font-size: 1rem; color:mediumpurple;text-align:center;}
    overflow:hidden;
`
const Slides = styled.div`
position:relative;
`
const Slide = styled.div`
position:absolute;
 height:250px;
 width:150px;
 left:0;
 right:0;
 background: ${props => props.login && "palevioletred"};
 background: ${props => props.signup && "tomato"};
 opacity: ${props => props.login && 0};
 opacity: ${props => props.signup && 0};

`
const ControlButtons = styled.div`
    width: 200px;
    margin: 0 auto;
    `
const AccountButton = styled.button`
   width:200px;
        padding: 0.5rem 1rem;
        background:none;
        border:none;
        font-size:1.175rem; 
        border:1px solid  #333342;
        border-radius: 5px;
        color:#45495f;
        margin-bottom: 1rem;
    `


class SignIn extends Component {
    state = {
        currentSlide: null,
        requestedSlide: null
    }
    logoRef = React.createRef();
    loginRef = React.createRef();
    signUpRef = React.createRef();
    inTween = null;
    outTween = null;
    componentDidMount() {
        console.log("cdm", this.logoRef.current)
        this.setState({
            currentSlide: this.logoRef.current
        })
    }

    showLogin = (e) => {
        console.log("show me", this.state.currentSlide)
        this.setState({ requestedSlide: this.loginRef.current }, function () {
            this.outTween = TweenLite.to(this.state.requestedSlide, 0.40, { opacity: 1, ease: Power4.easeOut });
        });
        this.inTween = TweenLite.to(this.state.currentSlide, 0.80, { opacity: 0, ease: Power4.easeOut });
        this.setState({
            currentSlide: this.loginRef
        })
    }
    showSignUp = (e) => {
        this.setState({ requestedSlide: this.signUpRef.current }, function () {
            this.inTween = TweenLite.to(this.state.currentSlide, 0.50, { opacity: 0, ease: Power4.easeOut });
            this.outTween = TweenLite.to(this.state.requestedSlide, 0.50, { opacity: 1, ease: Power4.easeOut });
        });
        this.setState({
            currentSlide: this.signUpRef
        })
    }
    render() {

        return (
            <Layout>

                <Slider>
                    <Slides >
                        <Slide ref={this.logoRef}>
                            <ReactSVG src={Logo} />
                        </Slide>
                        <Slide ref={this.loginRef} login>
                            login
                        </Slide>
                        <Slide ref={this.signUpRef} signup>
                            <p> sign up</p>
                        </Slide>
                    </Slides>
                </Slider>

                <ControlButtons>
                    <AccountButton onClick={this.showLogin}>Login</AccountButton>
                    <AccountButton onClick={this.showSignUp}>SignUp</AccountButton>
                </ControlButtons>

            </Layout >



        );
    }
}

export default SignIn;