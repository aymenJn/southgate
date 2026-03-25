import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const DynamicListScreen = () => {
  const [dataList, setDataList] = useState([
    { id: '1', title: 'First Item' },
    { id: '2', title: 'Second Item' },
  ]);

  // Function to add a new item dynamically
  const addItem = () => {
    const newId = Math.random().toString();
    const newItem = { id: newId, title: `Item ${dataList.length + 1}` };
    // Create a new array by appending the new item to the existing list
    setDataList(prevData => [...prevData, newItem]);
  };

  // Function to remove an item (example of modifying the list)
  const removeItem = (id) => {
    // Create a new array by filtering out the item to be removed
    setDataList(prevData => prevData.filter(item => item.id !== id));
  };

  // Render function for each item
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => removeItem(item.id)} style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // extraData prop ensures FlatList re-renders if the list itself changes, 
        // but often not strictly necessary if data is handled immutably with useState
      />
      <TouchableOpacity onPress={addItem} style={{ padding: 20, backgroundColor: 'blue' }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Add Item</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DynamicListScreen;