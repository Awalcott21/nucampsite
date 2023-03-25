import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DirectoryScreen from './DirectoryScreen';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text> 1 Nucamp Way</Text>
                <Text>Seattle, WA 98001</Text>
                <Text>U.S.A</Text>
                <Text style={{ marginBottom: 10 }}>Phone: 1-206-555-1234</Text>
                <Text>Email: campsites@nucamp.co</Text>

            </Card>
        </ScrollView>

    );
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={HomeScreen}
                options={{ title: 'Contact Us' }}
            />
        </Stack.Navigator>

    );
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Directory" component={DirectoryScreen} />
            <Drawer.Screen name="About" component={AboutNavigator} />
            <Drawer.Screen
                name="Contact"
                component={ContactNavigator}
                options={{ title: 'Contact Us' }}
            />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}


export default ContactScreen;