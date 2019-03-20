import React, { Component } from "react";
import { View, Image, Dimensions, Modal, TouchableOpacity } from "react-native";
import * as _ from "lodash";
import { Video } from "expo";

export default class VideoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      photoUrl: ""
    };
  }

  photoPopupToggle(photoUrl) {
    this.setState({ modalVisible: !this.state.modalVisible, photoUrl });
  }

  renderChunk() {
    let chunk = _.chunk(this.props.PhotosList, 9);

    return chunk.map((chunkItem, index) => {
      let row = _.chunk(chunkItem, 3);

      return row.map((rowItem, rowIndex) => {
        return this.renderPhotoRow(rowItem, rowIndex);
      });
    });
  }
  renderPhotoRow(rowItem, rowIndex) {
    if (rowIndex == 0) {
      return this.renderPhotoRow1(rowItem);
    } else if (rowIndex == 1) {
      return this.renderPhotoRow2(rowItem);
    } else if (rowIndex == 2) {
      return this.renderPhotoRow3(rowItem);
    }
  }
  renderPhotoRow1(row) {
    console.log("row", row);
    return (
      <View key={1} style={styles.alignCenter}>
        {row.map((item, index) => {
          return (
            <View key={index} style={[styles.photoView, { borderRadius: 0 }]}>
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(item.url);
                }}
              >
                <Video
                  source={{ uri: item.url }}
                  resizeMode={"cover"}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  style={[styles.VideoStyle, { borderRadius: 0 }]}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
  renderPhotoRow2(row) {
    if (row.length == 1) {
      return (
        <View key={row[0].url} style={styles.alignCenter}>
          <View
            key={row[0].url}
            style={[styles.expandedView, { borderRadius: 0 }]}
          >
            <TouchableOpacity
              onPress={() => {
                this.photoPopupToggle(row[0].url);
              }}
            >
              <Video
                source={{ uri: row[0].url }}
                resizeMode={"cover"}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                style={[
                  styles.VideoStyle,
                  styles.expandedImage,
                  { borderRadius: 0 }
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (row.length == 2) {
      return (
        <View key={row[0].url} style={styles.alignCenter}>
          <View
            key={row[0].url}
            style={[styles.expandedView, { borderRadius: 0 }]}
          >
            <TouchableOpacity
              onPress={() => {
                this.photoPopupToggle(row[0].url);
              }}
            >
              <Video
                source={{ uri: row[0].url }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode={"cover"}
                style={[
                  styles.VideoStyle,
                  styles.expandedImage,
                  { borderRadius: 0 }
                ]}
              />
            </TouchableOpacity>
          </View>
          <View key={row[1].url} style={styles.flexCol}>
            <View style={[styles.photoView, { borderRadius: 0 }]}>
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[1].url);
                }}
              >
                <Video
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode={"cover"}
                  source={{ uri: row[1].url }}
                  style={[styles.VideoStyle, { borderRadius: 0 }]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (row.length == 3) {
      return (
        <View key={row[0].url} style={styles.alignCenter}>
          <View
            key={row[0].url}
            style={[styles.expandedView, { borderRadius: 0 }]}
          >
            <TouchableOpacity
              onPress={() => {
                this.photoPopupToggle(row[0].url);
              }}
            >
              <Video
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode={"cover"}
                source={{ uri: row[0].url }}
                style={[
                  styles.VideoStyle,
                  styles.expandedImage,
                  { borderRadius: 0 }
                ]}
              />
            </TouchableOpacity>
          </View>
          <View key={row[1].url} style={styles.flexCol}>
            <View style={[styles.photoView, { borderRadius: 0 }]}>
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[1].url);
                }}
              >
                <Video
                  rate={1.0}
                  volume={1.0}
                  resizeMode={"cover"}
                  isMuted={false}
                  source={{ uri: row[1].url }}
                  style={[styles.VideoStyle, { borderRadius: 0 }]}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.photoView, { borderRadius: 0 }]}>
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[2].url);
                }}
              >
                <Video
                  rate={1.0}
                  volume={1.0}
                  resizeMode={"cover"}
                  isMuted={false}
                  source={{ uri: row[2].url }}
                  style={[
                    styles.VideoStyle,
                    { borderRadius: this.props.borderRadius }
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }
  renderPhotoRow3(row) {
    if (row.length == 1) {
      return (
        <View key={row[0].url} style={styles.alignCenter}>
          <View key={row[0].url} style={styles.flexCol}>
            <View style={[styles.photoView, { borderRadius: 0 }]}>
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[0].url);
                }}
              >
                <Video
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode={"cover"}
                  source={{ uri: row[0].url }}
                  style={[styles.VideoStyle, { borderRadius: 0 }]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (row.length == 2) {
      return (
        <View key={row[0].url} style={styles.alignCenter}>
          <View key={row[0].url} style={styles.flexCol}>
            <View style={[styles.photoView, { borderRadius: 0 }]}>
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[0].url);
                }}
              >
                <Video
                  rate={1.0}
                  volume={1.0}
                  resizeMode={"cover"}
                  isMuted={false}
                  source={{ uri: row[0].url }}
                  style={[styles.VideoStyle, { borderRadius: 0 }]}
                />
              </TouchableOpacity>
            </View>
            <View
              key={row[1].url}
              style={[styles.photoView, { borderRadius: 0 }]}
            >
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[1].url);
                }}
              >
                <Video
                  rate={1.0}
                  volume={1.0}
                  resizeMode={"cover"}
                  isMuted={false}
                  source={{ uri: row[1].url }}
                  style={[styles.VideoStyle, { borderRadius: 0 }]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (row.length == 3) {
      return (
        <View key={row[0].url} style={styles.alignCenter}>
          <View style={styles.flexCol}>
            <View style={[styles.photoView, { borderRadius: 0 }]}>
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[0].url);
                }}
              >
                <Video
                  rate={1.0}
                  resizeMode={"cover"}
                  volume={1.0}
                  isMuted={false}
                  source={{ uri: row[0].url }}
                  style={[styles.VideoStyle, { borderRadius: 0 }]}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.photoView, { borderRadius: 0 }]}>
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[1].url);
                }}
              >
                <Video
                  rate={1.0}
                  volume={1.0}
                  resizeMode={"cover"}
                  isMuted={false}
                  source={{ uri: row[1].url }}
                  style={[styles.VideoStyle, { borderRadius: 0 }]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.expandedView, { borderRadius: 0 }]}>
            <TouchableOpacity
              onPress={() => {
                this.photoPopupToggle(row[2].url);
              }}
            >
              <Video
                rate={1.0}
                volume={1.0}
                resizeMode={"cover"}
                isMuted={false}
                source={{ uri: row[2].url }}
                style={[
                  styles.VideoStyle,
                  styles.expandedImage,
                  { borderRadius: 0 }
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  renderGrid() {
    return <View>{this.renderChunk()}</View>;
  }

  render() {
    return (
      <View style={[styles.container]}>
        {this.renderGrid()}

        <View>
          <Modal
            animationType={"fade"}
            transparent={false}
            onRequestClose={() => {}}
            visible={this.state.modalVisible}
          >
            <TouchableOpacity
              onPress={() => {
                this.photoPopupToggle();
              }}
            >
              <Video
                source={{ uri: this.state.photoUrl }}
                onPress={() => {
                  this.photoPopupToggle();
                }}
                resizeMode={"contain"}
                style={{
                  width: Dimensions.get("window").width,
                  height: Dimensions.get("window").height,
                  alignSelf: "center"
                }}
              />
            </TouchableOpacity>
          </Modal>
        </View>
      </View>
    );
  }
}

/*Styles*/

const styles = {
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  VideoStyle: {
    width: View.width,
    height: 120
  },

  flexCol: {
    flexDirection: "column",
    flex: 1
  },
  alignCenter: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width - 20,
    paddingRight: 5
  },

  photoView: {
    height: 120,
    flex: 2,
    backgroundColor: "gray",
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: "center"
  },
  expandedView: {
    height: 249,
    backgroundColor: "gray",
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 2
  },
  expandedImage: {
    height: 249
  }
};
