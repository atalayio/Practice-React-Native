/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import {
  Alert,
  Button,
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {



function alertdegisken(deger: string) {
  
  Alert.alert( "Başlık", deger, [
    {
      
      text:  "Cancel",
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
  


}





const [refreshed, SetRefresh] = useState(false)

const _onRefresh = () => {
  SetRefresh(true)
  setTimeout(() => {
    SetRefresh(false)
    
  }, 3000);


}

const card = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://via.placeholder.com/600/810b14",
    "thumbnailUrl": "https://via.placeholder.com/150/810b14"
  },




]
const image = {uri: 'https://cdn.pixabay.com/photo/2020/07/18/16/29/coffee-5417663_1280.png'};








  return (
    <ImageBackground source={image}  
    style={styles.Background}> 
    <SafeAreaView>
      
      
      
    <FlatList
      data= {card}
      renderItem={({item})=> 
        <TouchableHighlight onPress={()=> alertdegisken(item.id.toString())}> 
        <Image style={{borderColor: "red", marginVertical: 10, borderRadius: 21, width: 300, height: 300, resizeMode: "stretch"}} source={{uri: item.url}}  />
        </TouchableHighlight>

         }
      keyExtractor={item => item.url}


      refreshControl={<RefreshControl refreshing = {refreshed} onRefresh = {_onRefresh} />}
      
      
      
      />
        


      
      
      
      
      

      

    </SafeAreaView>
    </ImageBackground>
  );
}


const windowWidth  = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  Background: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    resizeMode: "cover",




  },
  
  Image: {
    width: 150,
    height: 150,



    },

  Imagebg: {

  
    },

  InnerText: {
    fontWeight: 'bold',
    color: "brown",
    fontSize: 30,
    alignContent: "center",
    justifyContent: "center"

  
    },  

  BaseText: {
    fontWeight: 'bold',
    color: "black",
    fontSize: 30,
    alignContent: "center",
    justifyContent: "center",
    left: -10,
    


  
    },  


  

      


    
    
  }

);

export default App;
