 import { Alert, Linking } from 'react-native';

 export  const connectPrinter = async () => {
    try {
      // Open Rawbt app to ensure it's running
      await Linking.openURL('rawbt:');
      Alert.alert('Success', 'Rawbt app opened successfully! Make sure your printer is connected via USB.');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to open Rawbt app. Please make sure it is installed.');
    }
  };

  export const printSampleReceipt = async (ticketnumber : number , somme : number , productlist :string[]) => {
    try {
      // Create the raw text command
      const text = 
        '\x1B\x40' +          // Initialize printer
        '\x1B\x61\x01' +      // Center alignment
        '--------------------------------\n' +
        '\x1B\x21\x30' +      // Double height text
        'La Miche\n' +
        '\x1B\x21\x00' +      // Normal text
        '--------------------------------\n' +
        'Date: ' + new Date().toLocaleString() + '\n' +
         
         '\x1B\x21\x30' + 'NO '+  ticketnumber  +'\x1B\x23\x15' +    "\n"+
          
        '------------------------\n' +
        '\x1B\x61\x00' +      // Left alignment
        productlist.map((product)=> {return(
          product.name  + " " + product.quantity +" = " + product.quantity * product.price+ " \n" + '------------------------\n' 
        )}) +
    
        'Total:   ' +somme + "\n" +
        '\n ' + '\n' + '\n'  +   // Feed lines
        '\x1D\x56\x41\x03';  // Cut paper

      // Send raw text command to Rawbt
      await Linking.openURL('rawbt:' + encodeURIComponent(text));
      Alert.alert('Success', 'Print command sent successfully!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to send print command');
    }
  };
