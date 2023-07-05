import React from 'react';
import { fromJS } from 'immutable';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'src/components';
import Option from './OptionVariable';
import { checkOption } from 'src/modules/product/helper';
import { margin } from 'src/components/config/spacing';

class AttributeVariable extends React.Component {
  onSelectOption = (option) => {
    const { onSelectAttribute, attribute } = this.props;

    onSelectAttribute(attribute.get('id'), attribute.get('name'), option.get('option'));
  };

  getIndividualVariation = (name) => {
    const { variations } = this.props;

    var selectedAttribute = new Map();
    variations.map((p) => {
      const _attribute = p.get('attributes');
      var _seleected = new Map();
      _attribute.map((a) => {

        if (name == a.get('option').toString()) {
          selectedAttribute = fromJS({
            'image': p.get('image').get('woocommerce_gallery_thumbnail'),
            'attr': a
          });
        }
      });
    })
    return selectedAttribute;


  };

  render() {
    const { attribute, meta_data, variations, sku, key } = this.props;
    // const showButtonsOnly = (attribute.get('type') == 'button') ? true : false;
    // console.log("key", key);

    const attributeSelected = meta_data.find(attr => attr.get('id') === attribute.get('id') && attr.get('name') === attribute.get('name'));

    // console.log(attribute.toString());

    return (
      <>
        <Text>
          {attribute.get('name')}: <Text colorSecondary>{attributeSelected ? attributeSelected.get('option') : ''}</Text>
        </Text>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',

          justifyContent: 'flex-start',

        }}>
          {attribute.get('options').map((option, index) => {
            // console.log("indeex", index);
            const individualVariation = this.getIndividualVariation(option.get('option'));
            const buttonAttributes = [5, 32, 19, 15, 3, 11, 95, 16, 168, 14, 7];
            const showButtonsOnly = buttonAttributes.includes(attribute.get('id'));


            const disabled = !checkOption(variations, meta_data, fromJS({
              id: clearTimeout,
              name: attribute.get('name'),
              option: option.get('option'),
            }));


            const newOption = fromJS({
              "name": individualVariation.get("attr").get("option"),
              "option": individualVariation.get("attr").get("option"),
              "value": individualVariation.get("image")
            });


            return (
              <View
                style={{


                  marginBottom: 10,
                  marginTop: 10
                }}
                key={index}

              >
                <TouchableOpacity
                  activeOpacity={disabled ? 1 : 0}
                  key={option}
                  onPress={() => disabled ? {} : this.onSelectOption(option)}

                >
                  {showButtonsOnly == true ?

                    <Option
                      type={attribute.get('type')}
                      selected={attributeSelected && option.get('option') === attributeSelected.get('option')}
                      disabled={disabled}
                      option={option}
                    />

                    :

                    <Option
                      style={{

                        flex: 1,
                      }}
                      type={'image'}
                      selected={attributeSelected && newOption.get('option') === attributeSelected.get('option')}
                      disabled={disabled}
                      option={newOption}
                    />
                  }


                </TouchableOpacity>
              </View>
            )
          })}
        </View>

      </>
    );
  }
}
const styles = StyleSheet.create({
  attribute: {
    marginTop: margin.small,
  },
});

export default AttributeVariable;
