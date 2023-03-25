import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { Campsites } from '../shared/Campsites';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import campsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ title: 'Home' }}
            />
        </Stack.Navigator>

    );
};

const DirectoryNavigator = () => {
    return (
        <Stack.Navigator 
        intialRouteName='Directory'
        screenOptions={{
            headerStyle: {screenOptions}
        }}

        >
            <Stack.Screen 
            name='Directory'
            component={DirectoryScreen}
            options={{ title: 'Campsite Directory '}}
            />

            <Stack.Screen
            name='CampsiteInfo'
            component={CampsiteInfoScreen}
            options=({ route }) => ({
                title: route.params.campsite.name
            })

            />
        </Stack.Navigator>

    );

const Main = () => {

    return (
        <View 
        style={{ flex: 1 
        paddingTop: 
        Platform.OS === 'ios' ? 0 : Constants.statusBarHeight 
        }}
        >
         <Drawer.Navigator 
         intiialRouteName='Home'
         drawerStyle={{ backgroundColor: '#CEC8FF' }}  
         >

            <Drawer.Screen 
            name='Home'
            component={HomeNavigator}
            options={{title: 'Home'}}
            />
            <Drawer.Screen 
            name='Home'
            component={HomeNavigator}
            options={{title: 'Directory'}}
            />

         </Drawer.Navigator>
           
           
        </View>
    );
};

export default Main;
