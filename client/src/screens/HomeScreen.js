import React from 'react';
import { View } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import LotList      from '../components/LotList';
import EmptyState    from '../components/EmptyState';
import avatar        from '../../assets/avatar.png';
import noRecordImg   from '../../assets/records.png';
import submittedImg  from '../../assets/records.png';

// Demo data
const demoLots = [
    { id: '1', name: 'Parking X', spotsLeft: 'X spots left' },
    { id: '2', name: 'Parking Y', spotsLeft: 'Y spots left' },
    { id: '3', name: 'Parking Z', spotsLeft: 'Z spots left' },
  ];

export default function HomeScreen({ navigation }) {
  const user = {
    role: 'visitor',        // toggle for testing
    hasSubmitted: false,    // toggle for testing
    lots: demoLots,
  };

  return (
    <ScreenLayout title="Get Your Secure Park" avatarSource={avatar}>
      {user.role !== 'visitor' ? (
        <LotsList
          lots={user.lots}
          onOpen={id => console.log('Open Maps', id)}
        />
      ) : user.hasSubmitted ? (
        <EmptyState
          imageSource={submittedImg}
          title="Request Submitted!"
          subtitle="Your parking role is being reviewed."
          buttonText="Track My Request"
          onPress={() => navigation.navigate('RequestDetails')}
        />
      ) : (
        <EmptyState
          imageSource={noRecordImg}
          title="No Record"
          subtitle="Fill out a short form to get access to designated parking areas"
          buttonText="Fill Out Form"
          onPress={() => navigation.navigate('FormStep1')}
        />
      )}
    </ScreenLayout>
  );
}
