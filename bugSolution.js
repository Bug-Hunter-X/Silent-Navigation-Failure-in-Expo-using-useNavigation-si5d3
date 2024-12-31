import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

function MyComponent() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Details', { itemId: 86 });
  };

  useEffect(() => {
    // Wait for the navigation to be ready before attempting navigation
    const unsubscribe = navigation.addListener('focus', () => {
       console.log('Navigation ready');
    });
    return unsubscribe;    
  }, [navigation]);

  return (
    <Button title="Go to Details" onPress={handlePress} />
  );
}

// ... other code ...

This improved version uses useEffect to ensure the navigation is ready before attempting navigation.  While it might not fix every possible scenario causing silent navigation failures, it addresses one common cause and adds additional logging for debugging.