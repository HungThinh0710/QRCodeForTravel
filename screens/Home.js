import React, { Component } from "react";
import {  Image, Text, View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Dimensions, TextInput } from 'react-native';

// StatusBar.setHidden(true);StatusBar,

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const imgs = 'https://reactnative.dev/img/tiny_logo.png';
const categories = [
    { id: 1, name:'Asia Park – Sunworld Đà Nẵng Wonders',add:'Khu du lịch Bà Nà Hills, thôn An Sơn, Xã Hoà Ninh, Huyện Hoà Vang, TP. Đà Nẵng',img:'http://divui.com/blog/wp-content/uploads/2018/05/kinh-nghiem-du-lich-da-nang-5-265x198.jpeg'},
    { id: 2, name:'Suối khoáng Thần Tài',add:'Khu du lịch Bà Nà Hills, thôn An Sơn, Xã Hoà Ninh, Huyện Hoà Vang, TP. Đà Nẵng',img:'http://divui.com/blog/wp-content/uploads/2016/11/dia-diem-du-lich-da-nang-a31-696x398.jpg'},
    { id: 3, name:'Biển An Bàng',add:'Khu du lịch Bà Nà Hills, thôn An Sơn, Xã Hoà Ninh, Huyện Hoà Vang, TP. Đà Nẵng',img:'http://divui.com/blog/wp-content/uploads/2018/08/ghe-tham-nhung-bai-bien-dep-cua-mien-trung-tour-du-lich-gia-re-1457609046-696x398.jpg'},
    { id: 4, name:'Vinpearl Nam Hội An',add:'Khu du lịch Bà Nà Hills, thôn An Sơn, Xã Hoà Ninh, Huyện Hoà Vang, TP. Đà Nẵng',img:'http://divui.com/blog/wp-content/uploads/2018/08/51-300x171.jpg'},
    { id: 5, name:'Công viên văn hóa Ấn Tượng Hội An',add:'Khu du lịch Bà Nà Hills, thôn An Sơn, Xã Hoà Ninh, Huyện Hoà Vang, TP. Đà Nẵng',img:'http://divui.com/blog/wp-content/uploads/2018/10/nhung-trai-nghiem-thu-vi-chi-co-o-cong-vien-an-tuong-hoi-an-2-300x198.png'},
    { id: 6, name:'Asia Park – Sunworld Đà Nẵng Wonders',add:'khu du lịch Bà Nà Hills, thôn An Sơn, Xã Hoà Ninh, Huyện Hoà Vang, TP. Đà Nẵng',img:'http://divui.com/blog/wp-content/uploads/2018/05/kinh-nghiem-du-lich-da-nang-5-265x198.jpeg'},
    { id: 7, name:'Suối khoáng Thần Tài',add:'khu du lịch Bà Nà Hills, thôn An Sơn, Xã Hoà Ninh, Huyện Hoà Vang, TP. Đà Nẵng',img:'http://divui.com/blog/wp-content/uploads/2016/11/dia-diem-du-lich-da-nang-a31-696x398.jpg'},
    { id: 8, name:'Biển An Bàng',add:'khu du lịch Bà Nà Hills, thôn An Sơn, Xã Hoà Ninh, Huyện Hoà Vang, TP. Đà Nẵng',img:'http://divui.com/blog/wp-content/uploads/2018/08/ghe-tham-nhung-bai-bien-dep-cua-mien-trung-tour-du-lich-gia-re-1457609046-696x398.jpg'},
    { id: 9, name:'Vinpearl Nam Hội An',add:'khu du lịch Bà Nà Hills, thôn An Sơn, Xã Hoà Ninh, Huyện Hoà Vang, TP. Đà Nẵng',img:'http://divui.com/blog/wp-content/uploads/2018/08/51-300x171.jpg'},
    { id: 10, name:'Công viên văn hóa Ấn Tượng Hội An',add:'khu du lịch Bà Nà Hills, thôn An Sơn, Xã Hoà Ninh, Huyện Hoà Vang, TP. Đà Nẵng',img:'http://divui.com/blog/wp-content/uploads/2018/10/nhung-trai-nghiem-thu-vi-chi-co-o-cong-vien-an-tuong-hoi-an-2-300x198.png'}
];

const Item = ({ name, img,add }) => (
    <TouchableOpacity style={styles.container}>
        <Image source={{uri: img}}
            style={styles.Catimg}
        />
        <View style={styles.cont}>
            <Text style={styles.nameqr}>{name}</Text>
            <Text style={styles.nameadd}>{add}</Text>
        </View>
    </TouchableOpacity>
);

export default function HomeScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <Item name={item.name} img={item.img} add={item.add}/>
    );

    return (
        <SafeAreaView >
            <View style={styles.header}> 
                <Text style={styles.qrtr}>QR Travel</Text>
                <Text style={styles.add} onPress={()=>navigation.navigate('Map')}>+</Text>
            </View>
            
            <View style={styles.searchContainer}>
                    {/* FIXME: Replace with another fonts */}
                    {/* <FontAwesome style={{margin: 12}} name="search" size={24} color="black" /> */}
                    <TextInput 
                        style={styles.search}
                        placeholder="Tìm kiếm địa điểm đến"
                    >
                    </TextInput>
                
            </View>
            <FlatList
                style={styles.listView}
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        padding:10,
        borderRadius:10,
        backgroundColor:'#FFF',
        shadowColor:'#f20',
        marginBottom:10,
        flexDirection: 'row',
        
    },
    qrtr:{
        marginLeft:18,
        color:'#0A7FD9',
        fontSize: 22,
    },
    add:{
        color:'#0A7FD9',
        fontSize: 22,
        marginRight:28,
        textAlign: 'right',
        flexGrow:2,
    },
    Catimg:{
        width:60,
        height:60,
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        paddingVertical:15,
        backgroundColor:"#FFFFFF",
        borderBottomWidth :1,
        borderBottomColor: '#000',
    },
    nameqr:{
        marginLeft:10,
        flexGrow:1,
        flex: 1,
        fontSize: 16,
        fontWeight: "bold"
    },
    nameadd:{
        marginLeft:10,
        flexGrow:2,
        flex: 2,
    },
    cont:{
        flexDirection: "column",
        flex: 5,
    },
    listView: {
        paddingHorizontal: 10,
    },
    search: {
        margin:10,
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 12,
        borderColor: '#0A7FD9',
    },
    searchContainer: {
        backgroundColor:"#FFFFFF",
    }
  });