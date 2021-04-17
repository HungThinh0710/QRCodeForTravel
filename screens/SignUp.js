import 'react-native-gesture-handler';
import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TextInput, TouchableHighlight, Button, Alert, Dimensions, CheckBox } from 'react-native';
import { LabelInputText, ButtonModel } from "../components";
import { db, auth } from "../firebase/firebase";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};
export default function SignUp({ navigation, props }) {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    const [isSelected, setSelection] = React.useState(false);
    const Login = () => {
        navigation.navigate('Log In');
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const storeNewAccount = () => {
        db.collection("users").doc(email.toString()).set({
            address: "",
            fullname: "",
            gender: "",
            moble_phone: phone,
            point: 2000,
        }).then(function () {
            Alert.alert('Thanh cong!!!');
            Login();
        });
    }
    const handleSubmit = (evt) => {
        if (email === "" || password === "" || confirmPass === "" || phone === "") {
            Alert.alert(`Vui lòng nhập đầy đủ thông tin!` + uid);
        } else {
            if (password === confirmPass) {
                auth
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => storeNewAccount())
                    .catch(error => Alert.alert("Message:" + error.message))
                // navigation.navigate('Log In')
            } else {
                Alert.alert(`Mật khẩu không trùng khớp!`);
            }
        }
    }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.firstPart}>
                <View style={styles.centerPart}>
                    <View style={styles.space}>
                        <Image
                            style={{
                                marginTop: 20,
                                width: 100,
                                height: 100,
                            }}
                            source={require("../assets/logo.png")}
                        />
                    </View>
                    <View style={{ flex: 1, }}>
                        <View style={styles.commonInput}>
                            <LabelInputText initText="email@gmail.com" label="Email"
                                onChangeText={email => setEmail(email)} defaultValue={email} secureTextEntry={false} />
                        </View>
                        <View style={styles.commonInput}>
                            <LabelInputText initText="099988889" label="Điện thoại" onChangeText={phone => setPhone(phone)} defaultValue={phone} secureTextEntry={false} />
                        </View>
                        <View style={styles.commonInput}>
                            <LabelInputText initText="*****" label="Mật Khẩu" onChangeText={password => setPassword(password)} defaultValue={password} secureTextEntry={true} />
                        </View>
                        <View style={styles.commonInput}>
                            <LabelInputText initText="*****" label="Xác nhận mật Khẩu" onChangeText={confirmPass => setConfirmPass(confirmPass)} defaultValue={confirmPass} secureTextEntry={true} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <ButtonModel label="ĐĂNG KÝ" onPress={() => handleSubmit()} />
                            <Text style={{ marginTop: 10 }} onPress={Login}>Đăng Nhập</Text>
                        </View>
                    </View>
                </View>
            </View >
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    firstPart: {
        flex: 1,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A7FD9',
        flexDirection: 'column'
    },
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
    space: {
        marginTop: 10
    },
    input: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    SubmitButtonStyle: {

        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#00BCD4',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    commonInput: {
        marginTop: 10,
        width: 250
    },
    centerPart: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: "80%",
        borderRadius: 20,
        backgroundColor: '#fff'
    }
});