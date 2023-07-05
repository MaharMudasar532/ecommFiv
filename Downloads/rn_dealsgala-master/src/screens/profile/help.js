import React from 'react';
import { Header, ListItem, ThemedView } from 'src/components';
import Rate, { AndroidMarket } from 'react-native-rate'
import options from 'src/config/config-rate';
import Container from 'src/containers/Container';
import {
  IconHeader,
  TextHeader,
  CartIcon,
} from 'src/containers/HeaderComponent';

import { profileStack } from 'src/config/navigator';
import { Linking } from 'react-native';

export default class HelpScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor (props) {
    super(props);
    this.state = {
      rated: false,
    };
  }

  openLink = (baseUrl) => {
    let url = '';
    if (baseUrl === 'return') {
      url = 'https://dealsgala.com/return-policy-phone/';
    } else if (baseUrl === 'term') {
      url = 'https://dealsgala.com/terms-and-conditions-phone/';
    } else {
      url = 'https://dealsgala.com/privacy-policy-phone/';
    }
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  };

  render () {
    const {
      navigation,
      screenProps: { t },
    } = this.props;
    const titleProps = {
      medium: true,
    };

    return (
      <ThemedView style={{ flex: 1 }}>
        <Header
          leftComponent={<IconHeader/>}
          centerComponent={<TextHeader title={t('common:text_help_info')}/>}
          rightComponent={<CartIcon/>}
        />
        <Container>
          <ListItem
            title={t('profile:text_contact')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => navigation.navigate(profileStack.contact)}
          />
          {/* <ListItem
            title={t('profile:text_privacy')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => this.openLink('privacy')}
          />
          <ListItem
            title={t('profile:text_term')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => this.openLink('term')}
          />
          <ListItem
            title={t('common:text_return_policy')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => this.openLink('return')}
          /> */}
          <ListItem
            title={t('profile:text_about')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => navigation.navigate(profileStack.about)}
          />
           <ListItem
            title={t('profile:text_returnpolicy')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => navigation.navigate(profileStack.returnpolicy)}
          />
           <ListItem
            title={t('profile:text_privacypolicy')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => navigation.navigate(profileStack.privacypolicy)}
          />
             <ListItem
            title={t('profile:text_termsandconditions')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => navigation.navigate(profileStack.termsandconditions)}
          />
         <ListItem
            title={t('profile:text_trackpackages')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => navigation.navigate(profileStack.trackpackages)}
          />
          <ListItem
            title={t('profile:text_deletemyaccount')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => navigation.navigate(profileStack.deletemyaccount)}
          />
           <ListItem
            title={t('profile:text_mylivechat')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => navigation.navigate(profileStack.mylivechat)}
          />
           <ListItem
            title={t('profile:text_tutorials')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => navigation.navigate(profileStack.tutorials)}
          />
          <ListItem
            title={t('profile:text_rate_app')}
            titleProps={titleProps}
            chevron
            type="underline"
            onPress={() => {


              Rate.rate(options, success=>{
                if (success) {
                  // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                  this.setState({rated:true})
                }
              })
            }}
          />
        </Container>
      </ThemedView>
    );
  }
}
