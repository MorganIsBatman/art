// @flow
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {
  Surface,
  Shape,
  Group,
  RadialGradient,
} from '@react-native-community/art';

const SURFACE_DIMENSIONS = Dimensions.get('window').width;
const HEART_SHAPE =
  'M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z';

export default function Heart() {
  const gradient = new RadialGradient(
    {
      '.1': 'red',
      '0.4': '#8c0505',
      '1': '#d39494',
    },
    50,
    50,
    20,
    20,
    50,
    50,
  );

  return (
    <Surface
      width={SURFACE_DIMENSIONS}
      height={SURFACE_DIMENSIONS / 2}
      style={styles.surface}>
      <Group x={SURFACE_DIMENSIONS / 2 - 50} y={SURFACE_DIMENSIONS / 4 - 50}>
        <Shape d={HEART_SHAPE} fill={gradient} />
      </Group>
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    backgroundColor: 'black',
  },
});
