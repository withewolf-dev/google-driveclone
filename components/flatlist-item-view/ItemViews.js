import React, { useContext,useRef,useEffect } from 'react'
import {Text, View,Platform,PermissionsAndroid, FlatList, Image, StyleSheet,TouchableOpacity} from 'react-native';
import Pdf from 'react-native-pdf';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon  from 'react-native-vector-icons/Entypo';
import RNFetchBlob from 'rn-fetch-blob';
import { GlobalContext } from '../../Global/Global-state';

export  function ItemViews({item}) {

  const {detailRef,setdetailRef,download} = useContext(GlobalContext)

  const REMOTE_IMAGE_PATH = `${item.link}`

  const firstRender = useRef(true)    

  useEffect(() => {

      if (firstRender.current) {
          firstRender.current = false;
        } else {
          downloadImage()
        }
      
  }, [download])


  
  const checkPermission = async () => {
    
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission

    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'App needs access to your storage to ImdownloadImage Photos',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };

  const downloadImage = () => {
    // Main function to download the image
    
    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = REMOTE_IMAGE_PATH;    
    // Getting the extention of the filecd
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          `/${item.name}` + 
          Math.floor(date.getTime() + date.getSeconds() / 2),
          
        description: `${item.metaData}`,
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      }).catch((err)=> console.log(err))
  };





    return (
        <>
        {item && item.metaData === 'image/jpeg' && (
          <View style={styles.card}>
            <View style={styles.header}>
              <Icon style={{color:"#bc6c6c"}} name="image"size={30}/>
               <Text style={{fontSize:20,color:"white"}} >name item</Text>
              <TouchableOpacity>
              <EntypoIcon onPress={()=>setdetailRef(!detailRef)} style={styles.icon} name="dots-three-vertical" size={20}/>
              </TouchableOpacity>
            </View>
              <View style={styles.content}>
                  <Image style={{height:140}} source={{uri:item.link}} />
              </View>
          </View>
        )}
        {item && item.metaData === 'application/pdf' && (
          <View>
            {!item.link && <Text>loading</Text>}
            <Pdf
              singlePage={true}
              singlePage={true}
              style={{height: 150}}
              source={{uri: item.link}}
            />
          </View>
        )}
      </>
    )
}


const styles = StyleSheet.create({
    card: {
      backgroundColor: '#2c2c2c',
      height:210,
    },
    content: {
      marginHorizontal:15,
      marginTop:5,
      height: 140,
      borderTopRightRadius:5,
      borderTopLeftRadius:5,
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
  
    },
    title: {
      flex:1,
      height:30,
      backgroundColor:"grey"
    },
    icon: {
      color:"white",
      padding:5
    },
    header: {
      marginHorizontal:15,
      marginTop:10,
      height:30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      
    },
    prototype:{
      height:30,
      width:40,
      paddingHorizontal:20,
      backgroundColor:"gray"
    }
  });
  