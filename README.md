# react-native-form-validation

https://github.com/Shivam12112/react-native-form-validation

## Installation

```sh
npm install react-native-form-validation

OR

npm install react-native-form-validation
```

## Usage

```js
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as validations from 'react-native-form-validation';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleValidation = (text: string) => {
    setPassword(text);
    let rules = [
      validations.required(),
      validations.minLength(6),
      validations.shouldHaveNumber(),
      validations.shouldHaveUpperCase(),
      validations.shouldHaveLowerCase(),
      validations.shouldHaveSpecialCHarachter(),
    ];
    let errorMessage = validations.validate(text, rules);
    setPasswordError(errorMessage);
  };

  const handleEmailValidation = (text: string) => {
    setEmail(text);
    let rules = [validations.required(), validations.validateEmail()];
    let errorMessage = validations.validate(text, rules);
    setEmailError(errorMessage);
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleEmailValidation}
        placeholder="Enter Email"
      />
      {emailError && <Text style={styles.error}>{emailError}</Text>}
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={handleValidation}
        placeholder="Enter password"
        secureTextEntry
      />
      {passwordError && <Text style={styles.error}>{passwordError}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 8,
    marginVertical: 5,
  },
  error: {
    color: 'red',
    marginVertical: 5,
  },
});

export default App;

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
