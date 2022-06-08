import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {userActions, RootStateType, useAppDispatch} from '@store';
import {useSelector} from 'react-redux';

const App = () => {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootStateType) => state.user);

  const login = async () => {
    const payload = {username: 'user', password: '123'};
    dispatch(userActions.login(payload));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Redux Toolkit</Text>
      {user.isLoading && <ActivityIndicator />}
      {!user.isLoading && (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={login} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
      {user.profile && <Text>User ID: {user.profile.id}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#218bff',
    margin: 10,
    borderRadius: 5,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
  },
});

export default App;
