import * as React from 'react';
import Svg, {G, Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      {...props}>
      <G fill="none" stroke="#afafaf" strokeWidth={0.5}>
        <Circle cx={7} cy={7} r={7} stroke="none" />
        <Circle cx={7} cy={7} r={6.75} />
      </G>
    </Svg>
  );
}

export default SvgComponent;
