import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {responsiveWidth} from '../../../utils/responsiveUI';

export default function VibratePhone({
  width = 20,
  height = 20,
  color = '#7B6F72',
}) {
  return (
    <Svg
      width={responsiveWidth(width)}
      height={responsiveWidth(height)}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M19.6001 11.7627L8.23731 0.399929C7.98043 0.142159 7.62674 0.000127927 7.27313 8.62261e-08C6.91918 -0.000127755 6.56527 0.141904 6.30857 0.399503L0.399929 6.30814C0.142031 6.56515 0 6.90785 0 7.27275C0 7.63765 0.142031 7.9803 0.399503 8.23688L11.7627 19.6001C12.0197 19.858 12.3624 20 12.7273 20C13.0921 20 13.4348 19.858 13.6914 19.6005L19.6 13.6919C19.8579 13.4349 20 13.0922 20 12.7273C20 12.3624 19.858 12.0197 19.6001 11.7627ZM1.04182 7.59367C0.956165 7.50844 0.909077 7.39437 0.909077 7.27275C0.909077 7.15113 0.956123 7.03705 1.04225 6.95135L6.95178 1.04182C7.03701 0.956166 7.15108 0.909077 7.2727 0.909077C7.39432 0.909077 7.5084 0.956123 7.5941 1.04225L17.5 10.9481L10.9481 17.5L1.04182 7.59367ZM18.9578 13.0486L13.0482 18.9582C12.8778 19.1295 12.5773 19.13 12.4059 18.9578L11.5909 18.1428L18.1428 11.5909L18.9578 12.4059L18.9582 12.4063C19.0438 12.4916 19.0909 12.6056 19.0909 12.7273C19.0909 12.8489 19.0439 12.963 18.9578 13.0486Z"
        fill={color}
      />
      <Path
        d="M15.5874 14.679L14.6783 15.5881C14.5008 15.7657 14.5008 16.0534 14.6783 16.2309C14.7671 16.3196 14.8834 16.364 14.9997 16.364C15.116 16.364 15.2323 16.3196 15.3211 16.2309L16.2302 15.3218C16.4078 15.1442 16.4078 14.8566 16.2302 14.679C16.0526 14.5015 15.765 14.5015 15.5874 14.679Z"
        fill={color}
      />
      <Path
        d="M4.67848 3.76986L3.76941 4.67893C3.59184 4.8565 3.59184 5.14414 3.76941 5.32167C3.85817 5.41048 3.97447 5.45488 4.09076 5.45488C4.20705 5.45488 4.32334 5.41048 4.41215 5.32171L5.32122 4.41264C5.4988 4.23507 5.4988 3.94743 5.32122 3.7699C5.14365 3.59233 4.85601 3.59233 4.67848 3.76986Z"
        fill={color}
      />
      <Path
        d="M7.27268 2.2724C7.52372 2.2724 7.72723 2.06889 7.72723 1.81784C7.72723 1.56679 7.52372 1.36328 7.27268 1.36328C7.02163 1.36328 6.81812 1.56679 6.81812 1.81784C6.81812 2.06889 7.02163 2.2724 7.27268 2.2724Z"
        fill={color}
      />
      <Path
        d="M6.2244 17.2288C5.47244 16.8529 4.79642 16.3672 4.21444 15.7849C3.63204 15.203 3.14642 14.5269 2.77048 13.7749C2.65819 13.5499 2.38474 13.4593 2.16059 13.5716C1.93598 13.6839 1.845 13.9569 1.95728 14.1815C2.3772 15.0209 2.9201 15.7764 3.5717 16.4276C4.22288 17.0793 4.97838 17.6221 5.81778 18.042C5.88302 18.0744 5.95227 18.09 6.02062 18.09C6.18754 18.09 6.34777 17.9981 6.42767 17.8387C6.54 17.6141 6.44902 17.3411 6.2244 17.2288Z"
        fill={color}
      />
      <Path
        d="M5.41228 18.8545C4.48411 18.3907 3.64871 17.7905 2.92914 17.0714C2.21003 16.3519 1.6099 15.5164 1.14601 14.5882C1.03326 14.3641 0.759803 14.2726 0.536082 14.3849C0.311465 14.4972 0.220485 14.7702 0.332772 14.9949C0.840599 16.0105 1.498 16.9253 2.28635 17.7142C3.07513 18.5025 3.99 19.1599 5.00562 19.6677C5.07086 19.7001 5.1401 19.7157 5.20846 19.7157C5.37537 19.7157 5.5356 19.6238 5.6155 19.4644C5.72787 19.2398 5.63689 18.9668 5.41228 18.8545Z"
        fill={color}
      />
      <Path
        d="M14.5883 1.14613C15.5165 1.60998 16.3519 2.21015 17.0715 2.92925C17.7906 3.64878 18.3907 4.48422 18.8546 5.41239C18.9345 5.57177 19.0947 5.66364 19.2617 5.66364C19.33 5.66364 19.3993 5.64809 19.4645 5.6157C19.6891 5.50342 19.7801 5.23039 19.6678 5.00577C19.16 3.99016 18.5026 3.07529 17.7142 2.28647C16.9254 1.49811 16.0106 0.840713 14.9949 0.332886C14.7703 0.221451 14.4973 0.311579 14.385 0.536196C14.2727 0.760855 14.3638 1.03384 14.5883 1.14613Z"
        fill={color}
      />
      <Path
        d="M13.7753 2.77088C14.5273 3.14686 15.2033 3.63248 15.7853 4.21484C16.3677 4.79677 16.8533 5.47283 17.2292 6.22479C17.3091 6.38417 17.4694 6.47604 17.6363 6.47604C17.7046 6.47604 17.7739 6.46049 17.8391 6.4281C18.0637 6.31582 18.1547 6.04279 18.0424 5.81817C17.6225 4.97877 17.0796 4.22328 16.428 3.5721C15.7768 2.92045 15.0213 2.37759 14.1819 1.95768C13.9573 1.84671 13.6844 1.93637 13.572 2.16099C13.4597 2.38556 13.5508 2.65855 13.7753 2.77088Z"
        fill={color}
      />
    </Svg>
  );
}
