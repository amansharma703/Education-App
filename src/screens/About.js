import { Linking, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const About = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}> Aman Sharma </Text>
            <Text style={styles.paraStyle}> I am a full stack developer 😀 </Text>

            <View>
                <Image
                    style={styles.imgStyle}
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/72183900?s=400&u=a299ce73cc5becb8b656b5724f630ae315dea828&v=4",
                    }}
                />
            </View>

            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}> About me </Text>
                <Text style={[styles.paraStyle, styles.aboutPara]}>
                    Enthusiastic computer science student with a passion for computer science and keen interest in programming languages
                </Text>
            </View>

            <Text style={styles.mainHeader}> Connect me </Text>

            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL("https://www.instagram.com/amansharma703_/")}>
                    <Image style={styles.iconStyle} source={require("../../assets/Icon/instagram.png")} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL("https://github.com/amansharma703")}>
                    <Image style={styles.iconStyle} source={require("../../assets/Icon/github.png")} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL("https://www.linkedin.com/in/amansharma703")}>
                    <Image style={styles.iconStyle} source={require("../../assets/Icon/linkedin.png")} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",
    },

    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 40,
        marginBottom: 10,
    },
    paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 30,
    },
    aboutLayout: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        marginTop: 20,
    },
    aboutSubHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        alignSelf: "center",
    },
    aboutPara: {
        color: "#fff",
        fontSize: 18,
        lineHeight: 26,
    },
    menuContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
});

export default About;
