import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id:"123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id:"456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
    

]

const NavOptions = () => {
    const navigation = useNavigation();
    return (
      <FlatList
      data = {data}
      keyExtractor= {(item)=> item.id}
      horizontal //typically its a vertical list by default
      renderItem = {({item}) => (
          //padding, padding left, padding bottom, padding top, background, margin, width
          <TouchableOpacity style = {tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          onPress = {() => navigation.navigate(item.screen)}>
              
              <View>
                  <Image
                      style = {{
                          width:120,
                          height:120,
                          resizeMode: "contain"
                      }}
                      source = {{uri: item.image}}/>
                 <Text style = {tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                 <Icon style = {tw `p-2 bg-black rounded-full w-10 mt-4`}
                     type=  "antdesign"
                     name ="arrowright"
                     color = "white"
                 />
              </View>
          </TouchableOpacity>

      )}
      />
    )
}

export default NavOptions;
