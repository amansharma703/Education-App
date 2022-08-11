import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../component/Menu";

const Home = (props) => {
    const description = "Be ready to crack amazing competition from UPSC to JEE, NEET, SSC, and Bank exams, among other thing";
    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
                <Image style={styles.headerImage} resizeMode='contain' source={require("../../assets/logo.jpeg")} />

                <Text style={styles.mainHeader}>Welcome to</Text>
                <Text
                    style={[
                        styles.mainHeader,
                        {
                            fontSize: 33,
                            color: "#4c5dab",
                            marginTop: 0,
                            fontWeight: "500",
                        },
                    ]}
                >
                    {props.channelName}
                </Text>

                <Text style={styles.paraStyle}>{description} </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        textAlign: "center",
    },

    homeTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },

    headerImage: {
        height: 250,
        width: "100%",
        display: "flex",
        marginTop: 100,
        marginBottom: 20,
        borderRadius: 20,
    },

    mainHeader: {
        fontSize: 28,
        color: "#344055",
        textTransform: "uppercase",
    },

    paraStyle: {
        textAlign: "center",
        fontSize: 19,
        color: "#7d7d7d",
        marginTop: 30,
        paddingBottom: 50,
        lineHeight: 26,
    },

    lineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: "grey",
    },
});

export default Home;
