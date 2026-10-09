import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const handleAddPress = () => {
    Alert.alert('My Profile', 'Add button pressed!');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#000000"
        barStyle="light-content"
      />

      {/* Black Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Picture */}
        <View style={styles.imageContainer}>
          <View style={styles.imageBorder}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
              }}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>

          {/* Green Check Mark */}
          <View style={styles.checkCircle}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        </View>

        {/* Horizontal Divider */}
        <View style={styles.divider} />

        {/* Name */}
        <View style={styles.detail}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Miranga</Text>
        </View>

        {/* Email */}
        <View style={styles.detail}>
          <Text style={styles.label}>Email</Text>

          <View style={styles.row}>
            <Text style={styles.emailIcon}>✉</Text>
            <Text style={styles.value}>
              miranga.w@nsbm.ac.lk
            </Text>
          </View>
        </View>

        {/* Points */}
        <View style={styles.detail}>
          <Text style={styles.label}>Points</Text>

          <View style={styles.row}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.value}>0</Text>
          </View>
        </View>
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddPress}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel="Add"
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  header: {
    height: 55,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 100,
  },

  imageContainer: {
    height: 112,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    position: 'relative',
  },

  imageBorder: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  profileImage: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#FFFFFF',
  },

  checkCircle: {
    position: 'absolute',
    right: '31%',
    bottom: 9,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkMark: {
    color: '#00E600',
    fontSize: 31,
    fontWeight: 'bold',
    lineHeight: 34,
  },

  divider: {
    height: 1.5,
    backgroundColor: '#222222',
    marginTop: 5,
    marginBottom: 13,
  },

  detail: {
    marginBottom: 17,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 5,
  },

  value: {
    fontSize: 14,
    color: '#333333',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  emailIcon: {
    fontSize: 15,
    color: '#000000',
    marginRight: 8,
  },

  star: {
    fontSize: 17,
    color: '#000000',
    marginRight: 8,
  },

  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  plus: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 32,
  },
});

