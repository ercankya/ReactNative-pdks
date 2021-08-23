import React, {useState} from 'react';
import {Text, View, Alert, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import strings from '../../utils/Strings';
import {readDates} from '../../utils/Api';
import DeviceInfo from 'react-native-device-info';

export default function Profile({navigation}) {
  const [startDate, setstartDate] = useState();
  const [endDate, setendDate] = useState();
  const [minDate] = useState(new Date(Date.now() - 30 * 80 * 1000000));
  const [maxDate] = useState(new Date());
  const [QueryResponse, SetQueryResponse] = useState(
    strings.ProfileScreenDateListMessage,
  );
  const onDateQuery = async () => {
    let userRequest = {
      s: startDate,
      e: endDate,
      d: DeviceInfo.getUniqueId(),
    };
    const response = await readDates(userRequest);
    SetQueryResponse(await response.text());
    if (!response.ok) {
      Alert.alert(strings.ApiFailure, strings.ApiFailureMessage);
      SetQueryResponse(strings.ApiFailureMessage);
    }
    return QueryResponse;
  };
  return (
    <View style={styles.container}>
      <DatePicker
        style={{width: 200, margin: 30}}
        r
        date={startDate}
        mode="date"
        placeholder={strings.ProfileScreenDatepickerStartplaceholder}
        format="YYYY-MM-DD"
        minDate={minDate}
        maxDate={maxDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 16,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          setstartDate(date);
        }}
      />
      <Text>
        {strings.ProfileScreenDatepickerStartlabel} {startDate}
      </Text>
      <DatePicker
        style={{width: 200, margin: 11}}
        date={endDate}
        mode="date"
        placeholder={strings.ProfileScreenDatepickerEndplaceholder}
        format="YYYY-MM-DD"
        minDate={minDate}
        maxDate={maxDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 16,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          setendDate(date);
        }}
      />
      <Text>
        {strings.ProfileScreenDatepickerEndlabel} {endDate}
      </Text>

      <TouchableOpacity onPress={onDateQuery}>
        <Text style={styles.ondate}>{strings.ProfileScreenGetDateButton}</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.text_resp}>{QueryResponse}</Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text_resp: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  ondate: {
    textAlign: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#9f4f4f',
  },
});
