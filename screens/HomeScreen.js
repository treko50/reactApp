import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../Components/Navoptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";

const HomeScreen = () => {
    return (
        <SafeAreaView style= {tw `bg-white h-full`}>
            <View style= {tw `p-5`}>
                <Image
                 style= {{
                    width: 100,
                     height:100, 
                     resizeMode:'contain',
                }}
                source ={{
                    uri:"https://links.papareact.com/gzs",
                }}
              
                />

                <GooglePlacesAutocomplete
                placeholder = "Where From"
                styles = {{
                    container: {
                        flex: 2,
                    },
                    textInput: {
                        fontSize: 18,
                    },
                }}
                query = {{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en',
                }}
                nearbyPlacesAPI ="GooglePlacesSearch"
                //waits 400 ms after u typed a key before suggesting
                debounce = {400}
                />
                <NavOptions></NavOptions>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;