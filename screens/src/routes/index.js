import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Mapa from  '../pages/Mapa'
import Ocorrencias from '../pages/Ocorrencias'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Mapa"
            component={Mapa}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Ocorrencias"
            component={Ocorrencias}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}