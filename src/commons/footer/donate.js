import { Dimensions, Pressable, Text, View } from "react-native"



const Donate = url => {
  const width = Dimensions.get("window").width;

  const onPressItem = url => {
    Linking.openUrl(url);
  };

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.donate}>
        <Pressable style={styles.donate} onPress={() => onPressItem(item.url)}>
          <Text style={styles.donateName}>{item.name}</Text>
        </Pressable>
      </View>
    );
  }
}