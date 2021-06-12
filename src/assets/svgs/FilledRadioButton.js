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
      <G transform="translate(-316 -526)">
        <G transform="translate(316 526)" fill="none" stroke="#21c0ad">
          <Circle cx={7} cy={7} r={7} stroke="none" />
          <Circle cx={7} cy={7} r={6.5} />
        </G>
        <Circle
          cx={5}
          cy={5}
          r={5}
          transform="translate(318 528)"
          fill="#21c0ad"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
