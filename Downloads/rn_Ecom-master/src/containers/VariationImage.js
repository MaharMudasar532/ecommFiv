import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';
import { withTheme } from 'src/components';
import { borderRadius } from 'src/components/config/spacing';

type Props = {
  theme: {},
  isSelect: boolean,
  image: string,
  size: number,
  disabled: boolean,
  title: string,

};

const VariationImage = (props: Props) => {
  const { theme, isSelect, image, size, disabled, title } = props;
  return (
    <View
      style={[
        {
          borderRadius: borderRadius.base,
          padding: 4,
          alignItems: "center",
          borderWidth: isSelect ? 1 : 0,
          borderColor: "#999",
          backgroundColor: '#efefef',

        }
      ]}
    >

      <Image
        source={{ uri: image }}
        style={[
          styles.image,
          {
            width: size,
            height: size,
            // borderWidth: isSelect ? 2 : 0

          },
          disabled && styles.disabled,

        ]}
      >


      </Image>
      <Text style={styles.text} adjustsFontSizeToFit={true} numberOfLines={1}>
        {title}
      </Text>
    </View>

  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: borderRadius.base,
    overflow: 'hidden',
  },
  text: {
    fontSize: 10,

  },
  disabled: {
    opacity: 0.4,
  },
  viewBorder: {
    borderRadius: borderRadius.base,
    width: '100%',
    height: '100%',
    borderWidth: 2,
  },
});
VariationImage.defaultProps = {
  isSelect: false,
  size: 38,
  image: require('src/assets/images/pDefault.png'),
  disabled: false,
};

export default withTheme(VariationImage);
