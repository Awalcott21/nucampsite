import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { PARTNERS } from '../shared/partners';
import DirectoryScreen from './DirectoryScreen';
import HomeScreen from './HomeScreen';


const Drawer = createDrawerNavigator();
const [partners, setpartners] = useState(PARTNERS);

const AboutScreen = () => {
    return (
        <ScrollView>
            <Card>
                <Card.Title>Our Mission</Card.Title>
                <Card.Divider />
                <Text style={{ margin: 10 }}>
                    We present a curated database of the best campsites in the vast woods and
                    backcountry of the World Wide Web Wilderness. We increase access to adventure for
                    the public while promoting safe and respectful use of resources. The expert wilderness
                    trekkers on our staff personally verify each campsite to make sure that they are up to our standards.
                    We also present a platform for campers to share reviews on campsites they have visited with each other.
                </Text>
            </Card>
            <Card>
                <Card.Title>Community Partners</Card.Title>
                <Card.Divider />
                {partners.map((partner) => (
                    <ListItem key={partners.id}>
                        <Avatar rounded source={partner.image} />
                        <ListItem.Content>
                            <ListItem.Title>{partner.name}</ListItem.Title>
                            <ListItemSubtitle>{partner.description}</ListItemSubtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </Card>
        </ScrollView>

    );
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='About'
                component={HomeScreen}

            />
        </Stack.Navigator>

    );
};
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
};

export default AboutScreen;