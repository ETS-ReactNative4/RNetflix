import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types'
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { apiImage } from '../../api';
import Poster from '../Poster';

const {width:WIDTH, height:HEIGHT} = Dimensions.get("screen");

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Votes = styled.Text`
  color: rgb(220, 220, 220);
  opacity: 0.7;
  margin-bottom: 7px;
  font-size: 12px;
`;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  opacity: 0.7;
  font-size: 13px;
  font-weight: 500;
`;

const Button = styled.View`
  background-color: #e74c3c;
  padding: 5px 10px;
  margin-top: 5px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({title, backgroundImage, votes, overview, poster}) => (
  <Container>
    <BG resizeMode='cover' source={{uri: apiImage(backgroundImage)}}/>
    <Content>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title.slice(0, 20)}</Title>
        <Votes>⭐ {votes} / 10</Votes>
        <Overview>{overview.slice(0, 80)}</Overview>
        <TouchableOpacity>
          <Button>
            <ButtonText>View Details</ButtonText>
          </Button>
        </TouchableOpacity>
      </Data>
    </Content>
  </Container>
)

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
}

export default Slide;