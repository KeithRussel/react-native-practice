import React, {useState} from 'react';
// import type {Node} from 'react';
import {FlatList, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [Sections, setSections] = useState([
    {title: 'Title 1', data: ['Item 1-1', 'Item 1-2']},
  ]);

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2', 'Item 4-3'],
    },
  ];
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    const adding_index = Sections.length + 1;
    setSections([
      ...Sections,
      {
        title: 'Title ' + adding_index,
        data: ['Item ' + adding_index + '-1', 'Item ' + adding_index + '-2'],
      },
    ]);
    // setItems([...items, {name: 'Item 10'}]);
    setRefreshing(false);
  };

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Sections}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={items}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }>
    //   {items.map(object => {
    //     return (
    //       <View style={styles.item} key={object.key}>
    //         <Text style={styles.text}>{object.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 46,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
