import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const HomeLayar = ({ navigation }) => {
const [keberangkatan, setKeberangkatan] = useState("");
const [tujuan, setTujuan] = useState("");
const [tanggal, setTanggal] = useState("");
  
    return(
        <View style={styles.container}>
            <View style={styles.top}>
              <Feather name="menu" size={24} color="white" />
              <Text style={styles.header}>Hiling.id</Text>
              <FontAwesome5 name="user" size={24} color="white" />
            </View>
            
            <View style={styles.card}>
              <Text style={styles.header2}>Bandara keberangkatan</Text>
              <View style={styles.maininputan}>
                <MaterialIcons name="flight-takeoff" size={24} color="#5CA454" />
                <TextInput
                  style={styles.input}
                  onChangeText={setKeberangkatan}
                  value={keberangkatan}
                  placeholder="Masukan Lokasi Keberangkatan"
                  selectTextOnFocus={false}
                />
              </View>
              <Text style={styles.header2}>Bandara Tujuan</Text>
              <View style={styles.maininputan}>
                <MaterialIcons name="flight-land" size={24} color="#5CA454" />
                <TextInput
                  style={styles.input}
                  onChangeText={setTujuan}
                  value={tujuan}
                  placeholder="Masukan Lokasi Tujuan"
                />
              </View>
              <Text style={styles.header2}>Tanggal Keberangkatan</Text>
                <View style={styles.maininputan}>
                    <Fontisto name="date" size={24} color="#5CA454" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Masukan Tanggal Keberangkatan"
                  />
                </View>
              <TouchableOpacity onPress={() => navigation.navigate('Penerbangan')}><Text style = {styles.search}
              >Cari</Text></TouchableOpacity>
            </View>
            
            <View style={styles.kotak}>
              <Text style={styles.copyright}>Copyright Hariando Muthi - 120140004</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  // Header style
    header: {
      color: '#ffff',
      fontSize: 30,
      fontWeight : "bold",
      top: 80
  },
      search: {
      color : '#ffff',
      width: '100%',
      height: 40,
      margin : 20,
      backgroundColor: "#E57D24",
      paddingTop: 5,
      fontSize: 20,
      borderRadius: 5,
      alignSelf: "center",
      textAlign: "center",
      fontweight : "Bold"
  },
      header2: {
      margin: 5,
      fontWeight : "bold",
  },
      // Container Style
  container: {
    flex: 1,
    width :"100%",
    backgroundColor: '#7AB749',
    overflow: "hidden",
    alignItems: "center",
  },
    top: {
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    borderColor: '#E5E5E5',
    marginBottom:10,
    marginTop:10,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
  },
  // Card style
card: {
    top : 100,
    backgroundColor: 'white',
    margin: "auto",
    width: '90%',
    padding:20,
    borderRadius:10,
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius:3,
    width: '100%',
  },
  kotak: {
    marginTop : 163,
    backgroundColor: '#E5E4E2',
    width: "100%",
    flex:1,
    borderRadius:10,
  },
  copyright: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 'auto',
    color : '#797979',
    textAlign: 'center',
  }
});
export default HomeLayar;