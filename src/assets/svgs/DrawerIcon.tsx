import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {View} from 'react-native';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12.563}
      height={9.674}
      viewBox="0 0 12.563 9.674"
      {...props}>
      <Path
        d="M.562 4.531h11.439a.5.5 0 110 1H.562a.5.5 0 110-1zM.562 0h11.439a.5.5 0 110 1H.562a.5.5 0 110-1zM.562 8.674h11.439a.5.5 0 110 1H.562a.5.5 0 110-1z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
