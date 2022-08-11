import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Course from "../screens/Course";
import CourseDetails from "../screens/CourseDetails";

// Screen Name
const homeName = "Home";
const courseName = "Course";
const aboutName = "About";
const contactName = "Contact";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CourseStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Course'
                component={Course}
                options={{
                    headerTitleStyle: {
                        fontSize: 25,
                    },
                    headerTitle: "Courses",
                    headerTitleAlign: "center",
                }}
            />

            <Stack.Screen
                name='CourseDetails'
                component={CourseDetails}
                options={{
                    headerTitleStyle: {
                        fontSize: 25,
                    },
                    headerTitleAlign: "center",
                }}
            />
        </Stack.Navigator>
    );
};

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    headerTitleStyle: {
                        fontSize: 25,
                    },
                    headerTitleAlign: "center",
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === homeName) {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === courseName) {
                            iconName = focused ? "book" : "book-outline";
                        } else if (route.name === aboutName) {
                            iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
                        } else if (route.name === contactName) {
                            iconName = focused ? "ios-people" : "ios-people-outline";
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarInactiveTintColor: "gray",
                    tabBarStyle: {
                        paddingVertical: 5,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        backgroundColor: "white",
                        position: "absolute",
                        height: 50,
                    },
                    tabBarLabelStyle: { paddingBottom: 3 },
                })}
            >
                <Tab.Screen name={homeName}>{(props) => <Home {...props} channelName={"Edu Mania"} />}</Tab.Screen>
                <Tab.Screen
                    name={courseName}
                    component={CourseStack}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen name={aboutName} component={About} />
                <Tab.Screen name={contactName} component={Contact} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainContainer;
