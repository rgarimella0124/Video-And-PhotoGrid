import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import VideoGrid from "./VideoGrid";
import Videos from './Videos';
export default class PhotoCollage extends Component {
  
  render() {
    return (
      <ScrollView>
        <VideoGrid PhotosList={Videos} borderRadius={10}/>
      </ScrollView>
    );
  }
}