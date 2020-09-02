import React, { Component } from "react";
import styled from "styled-components";
import CardImg from "./CardImg/CardImg";
import GlobalStyles, { theme } from "../../../../Styles/GlobalStyles";

class Slider extends Component {
  state = {
    currentCard: 1,
  };

  componentDidMount() {
    if (this.props.data.length > 0) {
      let firstCard = this.CardContainer.children[0].cloneNode(true);
      let lastCard = this.CardContainer.children[
        this.CardContainer.children.length - 1
      ].cloneNode(true);
      this.CardContainer.insertBefore(lastCard, this.CardContainer.children[0]);
      this.CardContainer.append(firstCard);

      const styles = {
        transitionDuration: "0.0s",
        transform: `translate(-${915}px)`,
        position: "relative",
        left: "-30%",
      };
      this.CardContainer.style = styles;
    }
  }

  handleNext = () => {
    if (this.state.currentCard < this.CardContainer.children.length - 1) {
      let newCurrentCard = this.state.currentCard + 1;

      this.setState({ currentCard: newCurrentCard }, () => {
        this.CardContainer.style.transitionDuration = "0.5s";
        this.CardContainer.style.transform = `translate(-${
          915 * this.state.currentCard
        }px)`;

        if (this.state.currentCard === this.CardContainer.children.length - 1) {
          setTimeout(() => {
            this.CardContainer.style.transitionDuration = "0.0s";
            this.CardContainer.style.transform = `translate(-${915}px)`;

            this.setState({ currentCard: 1 });
          }, 502);
        }
      });
    }
  };

  handlePre = () => {
    if (this.state.currentCard > 0) {
      let newCurrentCard = this.state.currentCard - 1;

      this.setState({ currentCard: newCurrentCard }, () => {
        this.CardContainer.style.transitionDuration = "0.5s";
        this.CardContainer.style.transform = `translate(-${
          915 * this.state.currentCard
        }px)`;

        if (this.state.currentCard === 0) {
          setTimeout(() => {
            this.CardContainer.style.transitionDuration = "0.0s";
            this.CardContainer.style.transform = `translate(-${
              915 * (this.CardContainer.children.length - 2)
            }px)`;

            this.setState({
              currentCard: this.CardContainer.children.length - 2,
            });
          }, 502);
        }
      });
    }
  };

  render() {
    const { data } = this.props;

    return (
      <Container>
        <LeftBtn onClick={this.handlePre} />
        <CardContainer ref={(id) => (this.CardContainer = id)}>
          {data.images?.map((v, idx) => {
            return <CardImg key={idx} url={v} />;
          })}
        </CardContainer>
        <RightBtn onClick={this.handleNext} />
        <Counter>
          01/0{data.images?.length}
          <ButtonContainer>
            <Arrow alt="왼쪽 화살표" onClick={this.handlePre} />
            <Arrow
              alt="오른쪽 화살표"
              img="/Images/Right_Arrow.png"
              onClick={this.handleNext}
            />
          </ButtonContainer>
        </Counter>
      </Container>
    );
  }
}

export default Slider;

const Container = styled.div`
  height: 651px;
  overflow: hidden;
  background-color: ${theme.lightBeige};
`;

const CardContainer = styled.div`
  display: flex;
  position: relative;
  left: -25%;
`;

const LeftBtn = styled.button`
  position: absolute;
  width: 302.59px;
  height: 617px;
  cursor: url("/Images/Mouse_Arrow_Left.png"), auto;
  z-index: 1;
`;

const RightBtn = styled.button`
  position: absolute;
  width: 302.59px;
  height: 617px;
  cursor: url("/Images/Mouse_Arrow_Right.png"), auto;
  top: 0;
  right: 0;
  z-index: 1;
`;

const Counter = styled.div`
  position: flex;
  align-items: center;
  width: 100%;
  height: 27px;
  line-height: 27px;
  margin-top: 7px;
  margin-left: 42px;
  right: 0;
`;

const ButtonContainer = styled.div`
  position: relative;
  top: -34px;
  right: -90%;
  width: 100px;
  height: 40px;
  line-height: 40px;
`;

const Arrow = styled.img.attrs((props) => ({
  src: props.img || "/Images/Left_Arrow.png",
}))`
  width: 43px;
  height: 15px;
  margin-left: 5px;
  cursor: pointer;
`;
