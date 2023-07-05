import React from 'react';
import { connect } from 'react-redux';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, ScrollView } from 'react-native';
import { ThemedView, Text, ListItem } from 'src/components';
import ItemCategoryMenu from './ItemCategoryMenu';
import unescape from 'lodash/unescape';

import { categorySelector } from 'src/modules/category/selectors';

import { padding, margin } from 'src/components/config/spacing';

import { homeDrawer, profileStack } from 'src/config/navigator';
import {excludeCategory} from "../utils/category";
import {exclude_categories_sidebar} from "../config/category";

const dataHelpInfo = [
  {
    id: '1',
    name: 'common:text_home',
    router: homeDrawer.home_tab,
  },
  {
    id: '2',
    name: 'common:text_blogs',
    router: homeDrawer.blog,
  },
  {
    id: '3',
    name: 'common:text_about',
    router: profileStack.about,
  },
  {
    id: '4',
    name: 'common:text_contact',
    router: profileStack.contact,
  },
  {
    id: '5',
    name: 'common:text_trackpackages',
    router: profileStack.trackpackages,
  },
  {
    id: '6',
    name: 'common:text_mylivechat',
    router: profileStack.mylivechat,
  },
  {
    id: '7',
    name: 'common:text_tutorials',
    router: profileStack.tutorials,
  },
  {
    id: '8',
    name: 'common:text_returnpolicy',
    router: profileStack.returnpolicy,
  },
  {
    id: '9',
    name: 'common:text_privacypolicy',
    router: profileStack.privacypolicy,
  },
  {
    id: '10',
    name: 'common:text_termsandconditions',
    router: profileStack.termsandconditions,
  },
  {
    id: '11',
    name: 'common:text_deletemyaccount',
    router: profileStack.deletemyaccount,
  },
];

class Sidebar extends React.Component {

  handlePage = (router, params = {}) => {
    const { navigation } = this.props;
    if (!navigation) {
      return null;
    }
    navigation.navigate(router, params);
  };

  render() {
    const {
      category,
      navigation,
      screenProps: { t },
    } = this.props;

    const { data } = category;

    // Filter include category
    const _data = excludeCategory(data, exclude_categories_sidebar);

    return (
      <ThemedView isFullView>
        <ScrollView>
          <Text h3 medium style={[styles.title, styles.titleHead]}>
            {t('common:text_category')}
          </Text>
          {_data.map(c => (
            <ItemCategoryMenu
              key={c.id}
              category={c}
              isOpen={navigation.state && navigation.state.isDrawerOpen ? navigation.state.isDrawerOpen : false}
              goProducts={this.handlePage}
            />
          ))}
          <Text h3 medium style={styles.title}>
            {t('common:text_help')}
          </Text>
          {dataHelpInfo.map(value => (
            <ListItem
              key={value.id}
              title={t(value.name)}
              titleProps={{
                medium: true,
              }}
              type="underline"
              small
              containerStyle={styles.item}
              onPress={() => this.handlePage(value.router)}
            />
          ))}
        </ScrollView>
      </ThemedView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: margin.big + 4,
    marginBottom: margin.small + 1,
    paddingHorizontal: padding.large,
  },
  titleHead: {
    paddingTop: getStatusBarHeight()
  },
  item: {
    paddingHorizontal: padding.large,
  },
});

const mapStateToProps = state => ({
  category: categorySelector(state),
});
export default connect(mapStateToProps)(Sidebar);
