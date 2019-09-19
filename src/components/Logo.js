import React, { useState, useEffect } from 'react';

const Logo = ({ width, animate }) => {

  return (  
    <svg viewBox="0 0 128 34.240002" width={width} id="logo" className={animate ? 'animate' : ''}>
      <path 
        id="f-outer"
        d="m 1.2585354,32.929027 c 0,0 15.8016546,-15.691021 24.6987566,-24.3841223 1.273107,-1.243916 2.676858,-2.3746696 4.195118,-3.3036553 1.641184,-1.0042 3.394692,-1.8808305 5.243897,-2.4121928 3.049103,-0.8761488 6.26653,-1.2194148 9.439015,-1.2194148 22.280654,0 59.623108,0 59.623108,0 L 92.397471,13.474168 c 0,0 -30.249634,-0.115529 -46.356052,0 -1.490762,0.01069 -3.004951,0.03072 -4.457313,0.367073 -1.261753,0.292209 -2.48404,0.790645 -3.618289,1.415852 -1.368602,0.754385 -2.646069,1.699306 -3.775606,2.779266 C 28.832596,23.15882 18.87803,32.929027 18.87803,32.929027 Z"
      />
      <path 
        id="f-inner"
        d="m 22.322132,32.929027 c 0,0 8.882746,-8.872844 14.385149,-14.315839 0.758447,-0.750259 1.671236,-1.351344 2.621949,-1.835364 1.05419,-0.536702 2.198934,-0.908001 3.356094,-1.153658 1.373115,-0.291502 2.791408,-0.370986 4.195118,-0.367073 15.315715,0.04269 43.94386,0 43.94386,0 L 79.812117,26.216839 c 0,0 -20.261345,-0.11802 -30.781677,0 -0.804773,0.009 -1.626613,-0.07007 -2.412193,0.104878 -0.665406,0.148184 -1.301271,0.439159 -1.887803,0.786584 -0.674089,0.399288 -1.293464,0.902455 -1.835364,1.468292 -1.554682,1.623355 -4.247557,4.352434 -4.247557,4.352434 z"
      />
      <path 
        id="one"
        d="m 106.87063,1.6096418 h 19.71705 L 95.176737,32.929027 h -19.40242 z"
      />
    </svg>
  );
}
 
export default Logo;