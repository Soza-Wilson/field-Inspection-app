import { View, Text } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import React, { useState, useEffect } from 'react';

type ConnectionProps = {
  connectionStatus: boolean | null;
};

const Connection: React.FC<ConnectionProps> = ({ connectionStatus }: ConnectionProps) => {
  const [isConnected, setIsConnected] = useState(connectionStatus);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View>
      <Text>Connection: {isConnected ? 'Connected' : 'Not Connected'}</Text>
    </View>
  );
};

export default Connection;