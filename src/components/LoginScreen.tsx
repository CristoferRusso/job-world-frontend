import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5098/api/user/login', { email, password });
            console.log('Login successful!', `Welcome, ${response.data.name}`);
            Alert.alert('Login successful!', `Welcome, ${response.data.name}`);
        } catch (error) {
            Alert.alert('Login failed', 'Invalid email or password');
        }
    };

    return (
        <View>
            <TextInput 
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ marginBottom: 10, borderWidth: 1, padding: 8, backgroundColor: "skyblue"}}
            />
            <TextInput 
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ marginBottom: 10, borderWidth: 1, padding: 8,  backgroundColor: "skyblue" }}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
