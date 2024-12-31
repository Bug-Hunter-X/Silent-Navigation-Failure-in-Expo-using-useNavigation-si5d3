import { useNavigation } from '@react-navigation/native';

function MyComponent() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Details', { itemId: 86 });
  };

  return (
    <Button title="Go to Details" onPress={handlePress} />
  );
}

// ... other code ...

This code uses `useNavigation` hook to navigate to the 'Details' screen, passing an itemId.
This works most of the time, but sometimes the navigation fails silently. There is no error message, and no indication of what went wrong. This is particularly problematic during development where it is difficult to track down.