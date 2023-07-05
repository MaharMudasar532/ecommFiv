import React, { useState } from 'react';
import merge from 'lodash/merge';
import { StyleSheet, View, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import { withTheme, Avatar, Text, Image, Icon } from 'src/components';
import { Row, Col } from 'src/containers/Gird';
import TextHtml from 'src/containers/TextHtml';
import Rating from 'src/containers/Rating';
import Container from 'src/containers/Container';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { timeAgo } from 'src/utils/time';
import ImageViewer from 'react-native-image-zoom-viewer';
import { margin, padding } from 'src/components/config/spacing';
import { changeColor, changeSize } from 'src/utils/text-html';



class CommentItem extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
      isVisible: false,
      images: []
    };
  }

  componentDidMount() {
    const { data, theme, tz } = this.props;
    if (!data) {
      return null;
    }

  }


  displayPicture = (image) => {

    const url = { url: image };
    var _images = [];
    _images.push(url);

    this.setState({
      isVisible: true,
      images: _images
    })


  };
  closeModal = () => {

    this.setState({
      isVisible: false,
    })

  };
  render() {

    const { data, theme, tz } = this.props;

    const contentimages = data['commentImages'];
    const id = data['id'];
    const review = "" + data['review'];


    return (
      <Container
        style={[
          styles.container,
          {
            // borderColor: theme.colors.border,
          },
        ]}>
        <Row style={styles.row}>
          <Avatar
            source={
              data.reviewer_avatar_urls && data.reviewer_avatar_urls['96']
                ? { uri: data.reviewer_avatar_urls['96'] }
                : require('src/assets/images/pDefault.png')
            }
            size={40}
            rounded
          />
          <Col style={styles.center}>
            <Text medium>{data.reviewer}</Text>
            <Rating size={12} startingValue={data.rating} readonly />
          </Col>

        </Row>
        <TextHtml value={review}
        />





        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          marginTop: 20
        }}>

          {
            contentimages.map((image, index) => {
              const key = id + "-" + index;
              const key_image = id + "-img-" + index;
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  key={key}
                  onPress={() => {
                    this.displayPicture(image);
                  }}>
                  <Image
                    key={key_image}
                    source={{ uri: image, cache: 'reload' }}
                    resizeMode="cover"
                    style={{ height: 60, width: 60, margin: 5 }}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                </TouchableOpacity>
              );



            })
          }




        </View>
        <Modal visible={this.state.isVisible} transparent={true} >
          <ImageViewer imageUrls={this.state.images}
            renderHeader={() => (
              <Container style={styles.viewHeaderImages}>
                <Icon
                  name="x"
                  size={24}
                  color={'white'}
                  iconStyle={styles.iconClose}
                  onPress={this.closeModal}
                />
              </Container>
            )} />
        </Modal>
      </Container>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: padding.large,
    borderBottomWidth: 1,
  },
  textCreateAt: {
    fontSize: 9,
    lineHeight: 12,
  },
  reviewText: {
    fontSize: 10,
    lineHeight: 12,
    marginBottom: 20
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: margin.large,
  },
  center: {
    paddingLeft: padding.small,
    paddingRight: padding.small,
  },
  iconClose: {
    paddingVertical: padding.base,
  },
  viewHeaderImages: {
    position: 'absolute',
    top: 0,
    left: 0,
    // alignItems: 'flex-start',
    paddingTop: getStatusBarHeight(),
    zIndex: 9999,
  },
});

export default CommentItem;
