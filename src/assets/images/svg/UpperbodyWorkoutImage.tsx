import React from 'react';
import Svg, { ClipPath, Defs, G, GProps, LinearGradient, Path, Rect, Stop } from 'react-native-svg';
import { colors } from '../../colors';

export default function UpperbodyWorkoutImage({
  height = 90,
  width = 73,
  colorIcon = colors.gray1,
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 73 90" fill="none">
      <G clipPath="url(#clip0_326_5617)">
        <G opacity="0.3">
          <Path
            opacity="0.3"
            d="M18.3031 55.055H18.2588L16.5559 54.5601C16.4975 54.5419 16.4484 54.501 16.4191 54.4463C16.3899 54.3915 16.3828 54.3273 16.3994 54.2673C16.4161 54.2072 16.4551 54.1563 16.5081 54.1253C16.5611 54.0943 16.6239 54.0857 16.683 54.1014L18.3741 54.5903C18.4277 54.6082 18.4732 54.6454 18.502 54.6949C18.5309 54.7443 18.5413 54.8028 18.5312 54.8595C18.5211 54.9162 18.4912 54.9672 18.4471 55.0031C18.403 55.0391 18.3477 55.0575 18.2913 55.055H18.3031Z"
            fill="black"
          />
          <Path
            opacity="0.3"
            d="M16.5559 56.395C16.5077 56.3905 16.462 56.371 16.425 56.3392C16.388 56.3074 16.3615 56.2647 16.349 56.217C16.3396 56.1857 16.3367 56.1527 16.3404 56.1202C16.3441 56.0877 16.3543 56.0563 16.3704 56.028C16.3865 55.9997 16.4081 55.9751 16.4339 55.9557C16.4597 55.9363 16.4892 55.9225 16.5204 55.9152L18.2233 55.4746C18.2824 55.4616 18.3442 55.4725 18.3956 55.5049C18.447 55.5374 18.484 55.589 18.499 55.6488C18.5139 55.7085 18.5055 55.7719 18.4756 55.8255C18.4457 55.8792 18.3966 55.9189 18.3386 55.9363L16.6328 56.3769C16.6084 56.3874 16.5824 56.3935 16.5559 56.395Z"
            fill="black"
          />
          <Path
            opacity="0.3"
            d="M17.4251 58.0001C17.369 57.9945 17.3167 57.9688 17.2773 57.9277C17.2342 57.8831 17.21 57.8229 17.21 57.7602C17.21 57.6975 17.2342 57.6373 17.2773 57.5927L18.5367 56.3404C18.5582 56.3163 18.5842 56.2969 18.6133 56.2835C18.6423 56.27 18.6737 56.2628 18.7056 56.2622C18.7375 56.2617 18.7691 56.2678 18.7986 56.2802C18.8281 56.2926 18.8548 56.311 18.877 56.3343C18.8993 56.3576 18.9166 56.3854 18.9279 56.4158C18.9393 56.4462 18.9444 56.4787 18.943 56.5112C18.9416 56.5437 18.9337 56.5756 18.9197 56.6048C18.9058 56.6341 18.8861 56.6601 18.862 56.6814L17.6084 57.9397C17.5836 57.9622 17.5545 57.9792 17.523 57.9896C17.4914 58 17.4581 58.0035 17.4251 58.0001Z"
            fill="black"
          />
          <Path
            opacity="0.3"
            d="M18.9535 58.951H18.9091C18.8789 58.9424 18.8508 58.9276 18.8263 58.9077C18.8018 58.8877 18.7815 58.8629 18.7666 58.8347C18.7517 58.8065 18.7425 58.7756 18.7396 58.7437C18.7366 58.7119 18.74 58.6797 18.7495 58.6492L19.2166 56.9231C19.2345 56.8635 19.2745 56.8133 19.3281 56.7835C19.3818 56.7536 19.4448 56.7464 19.5035 56.7634C19.5623 56.7804 19.6123 56.8202 19.6426 56.8743C19.673 56.9284 19.6814 56.9925 19.666 57.0529L19.187 58.779C19.1725 58.8302 19.1417 58.8749 19.0993 58.9061C19.057 58.9373 19.0056 58.9531 18.9535 58.951Z"
            fill="black"
          />
        </G>
        <Path
          d="M65.139 32.1535L60.9025 34.6431L51.6252 36.0131C51.6252 36.0131 44.8521 25.6262 43.8143 23.9936C42.7766 22.361 41.5616 21.3139 38.75 21.3169L39.2822 29.6035C39.3708 29.8721 44.9792 36.9245 48.6777 40.769C49.9844 42.124 50.7856 42.471 52.8167 41.8916C58.0288 40.416 64.3467 36.0433 64.8552 34.9509C65.5381 33.5235 65.0888 32.1837 65.139 32.1535Z"
          fill="#FFEDE5"
        />
        <Path
          d="M63.3974 26.9C63.9532 25.0472 66.2238 23.5383 68.3317 24.1418C68.6656 24.236 68.9857 24.375 69.2837 24.5553C71.3532 25.7624 72.9999 28.7046 72.9999 31.1248C73.0067 31.5335 72.9508 31.9408 72.8343 32.3319C72.2815 34.1818 70.0169 35.7027 67.9001 35.0961C67.5667 35.0006 67.2467 34.8616 66.9481 34.6827C64.8963 33.4756 63.2319 30.5303 63.2319 28.1101C63.2259 27.7005 63.2817 27.2923 63.3974 26.9Z"
          fill="#455A64"
        />
        <Path
          d="M66.9511 34.6647C64.8993 33.4576 63.2349 30.5124 63.2349 28.0922C63.2349 25.672 64.8993 24.6942 66.9511 25.9013C69.0028 27.1084 70.6584 30.0507 70.6584 32.4709C70.6584 34.8911 69.0028 35.8718 66.9511 34.6647Z"
          fill="#37474F"
        />
        <Path
          d="M66.9512 28.5837C66.1618 28.119 65.5203 28.4962 65.5203 29.4257C65.5471 29.9323 65.6907 30.4254 65.9393 30.8648C66.188 31.3042 66.5346 31.6776 66.9512 31.9545C67.7405 32.4192 68.3791 32.042 68.3791 31.1126C68.3528 30.6061 68.2098 30.1131 67.9617 29.6737C67.7136 29.2343 67.3673 28.8608 66.9512 28.5837Z"
          fill="#455A64"
        />
        <Path
          d="M66.4605 29.9811C66.4699 30.1547 66.5193 30.3235 66.6046 30.4739C66.6898 30.6244 66.8086 30.7523 66.9512 30.8472C66.9981 30.8816 67.0525 30.9038 67.1098 30.9117C67.167 30.9196 67.2253 30.913 67.2794 30.8925L67.3149 30.8713C67.3571 30.8344 67.3904 30.7878 67.4119 30.7354C67.4335 30.6831 67.4428 30.6263 67.439 30.5696C67.4297 30.3963 67.3806 30.2278 67.2959 30.0774C67.2112 29.927 67.0932 29.7989 66.9512 29.7035C66.9044 29.669 66.8499 29.6469 66.7927 29.639C66.7355 29.6311 66.6772 29.6377 66.6231 29.6582L66.5876 29.6793C66.5446 29.7159 66.5107 29.7622 66.4886 29.8147C66.4665 29.8671 66.4568 29.9241 66.4605 29.9811Z"
          fill="#37474F"
        />
        <Path
          d="M58.611 34.6072C58.6202 34.7805 58.6691 34.9492 58.7538 35.0996C58.8385 35.2501 58.9567 35.3781 59.0988 35.4733C59.1624 35.5152 59.2361 35.5382 59.3117 35.5397C59.3691 35.5386 59.4252 35.5219 59.4743 35.4914L67.2792 30.8925L67.3147 30.8713C67.357 30.8344 67.3902 30.7878 67.4118 30.7354C67.4333 30.6831 67.4426 30.6263 67.4389 30.5696C67.4295 30.3963 67.3805 30.2278 67.2958 30.0774C67.2111 29.927 67.093 29.7989 66.9511 29.7035C66.9042 29.669 66.8498 29.6469 66.7925 29.639C66.7353 29.6311 66.677 29.6377 66.6229 29.6582L66.5874 29.6793L58.7825 34.2783C58.7265 34.3111 58.6806 34.3594 58.6503 34.4176C58.62 34.4758 58.6063 34.5415 58.611 34.6072Z"
          fill="#FAFAFA"
        />
        <Path
          d="M50.951 34.2363C51.5039 32.3864 53.7685 30.8564 55.8853 31.463C56.2195 31.559 56.5403 31.6979 56.8402 31.8764C58.892 33.0835 60.5564 36.0288 60.5564 38.449C60.5615 38.8576 60.5056 39.2646 60.3909 39.6561C59.8351 41.5059 57.5734 43.0269 55.4566 42.4233C55.1234 42.3273 54.8035 42.1883 54.5046 42.0099C52.4529 40.8028 50.7884 37.8575 50.7884 35.4403C50.7816 35.0328 50.8364 34.6267 50.951 34.2363Z"
          fill="#455A64"
        />
        <Path
          d="M54.5016 41.9976C52.4499 40.7905 50.7854 37.8452 50.7854 35.428C50.7854 33.0108 52.4499 32.0271 54.5016 33.2341C56.5534 34.4412 58.2178 37.3865 58.2178 39.8067C58.2178 42.2269 56.5563 43.2077 54.5016 41.9976Z"
          fill="#37474F"
        />
        <Path
          d="M54.5017 35.9108C53.7123 35.443 53.0737 35.8203 53.0737 36.7527C53.1005 37.2587 53.2437 37.7511 53.4918 38.1899C53.7399 38.6288 54.0859 39.0017 54.5017 39.2785C55.2911 39.7433 55.9326 39.3661 55.9326 38.4366C55.9053 37.9304 55.7615 37.438 55.5129 36.9991C55.2643 36.5603 54.9178 36.1874 54.5017 35.9108Z"
          fill="#455A64"
        />
        <Path
          d="M54.0137 37.3143C54.0228 37.4876 54.0717 37.6563 54.1565 37.8067C54.2412 37.9571 54.3594 38.0852 54.5015 38.1804C54.5484 38.2149 54.6028 38.237 54.66 38.2449C54.7173 38.2528 54.7755 38.2462 54.8297 38.2257C54.8428 38.2211 54.8548 38.2139 54.8651 38.2046C54.9079 38.1679 54.9417 38.1215 54.9638 38.0691C54.9859 38.0167 54.9956 37.9597 54.9923 37.9028C54.9825 37.7293 54.9331 37.5606 54.8479 37.4101C54.7626 37.2597 54.644 37.1318 54.5015 37.0367C54.4547 37.0032 54.4007 36.9819 54.344 36.9746C54.2873 36.9672 54.2298 36.974 54.1763 36.9945L54.1408 37.0156C54.0979 37.0515 54.0639 37.0973 54.0418 37.1492C54.0197 37.2012 54.0101 37.2578 54.0137 37.3143Z"
          fill="#37474F"
        />
        <Path
          d="M52.8312 38.0231C52.8397 38.1966 52.8883 38.3655 52.9731 38.5161C53.0579 38.6666 53.1764 38.7945 53.319 38.8892C53.3826 38.9311 53.4563 38.954 53.5319 38.9556C53.5893 38.9542 53.6453 38.9375 53.6945 38.9073L54.8298 38.2374C54.8429 38.2328 54.8549 38.2257 54.8652 38.2163C54.908 38.1796 54.9418 38.1332 54.9639 38.0808C54.986 38.0284 54.9957 37.9714 54.9924 37.9145C54.9826 37.741 54.9332 37.5723 54.848 37.4219C54.7627 37.2714 54.6441 37.1435 54.5016 37.0484C54.4548 37.015 54.4008 36.9936 54.3441 36.9863C54.2874 36.9789 54.2299 36.9857 54.1764 37.0062L54.1409 37.0273L53.0027 37.6942C52.9467 37.727 52.9009 37.7753 52.8705 37.8335C52.8402 37.8916 52.8266 37.9574 52.8312 38.0231Z"
          fill="#FAFAFA"
        />
        <Path
          d="M52.8312 38.0234C52.8399 38.1972 52.8886 38.3665 52.9734 38.5175C53.0581 38.6685 53.1765 38.797 53.319 38.8925C53.3664 38.926 53.4209 38.9473 53.478 38.9547C53.5352 38.962 53.5932 38.9552 53.6472 38.9348L53.6827 38.9136C53.7259 38.8773 53.7599 38.8309 53.782 38.7785C53.8041 38.726 53.8137 38.6689 53.8098 38.6119C53.7999 38.438 53.7503 38.2689 53.6651 38.1181C53.5799 37.9672 53.4614 37.8387 53.319 37.7428C53.2717 37.7093 53.2172 37.688 53.16 37.6806C53.1029 37.6732 53.0449 37.6801 52.9909 37.7005L52.9554 37.7216C52.9129 37.7585 52.8796 37.805 52.858 37.8574C52.8364 37.9098 52.8273 37.9667 52.8312 38.0234Z"
          fill="#E0E0E0"
        />
        <Path
          d="M62.4308 37.0753C64.2253 35.6781 65.946 35.6872 65.6355 32.2712C65.3724 30.7623 65.0058 30.6537 63.5661 30.0803C62.9334 29.8298 62.0878 29.6397 61.5823 30.2312C61.5268 30.3055 61.4655 30.3751 61.399 30.4394C61.2499 30.5364 61.0788 30.5925 60.9023 30.6024C60.5652 30.6192 60.2448 30.757 59.9977 30.9916C59.8291 31.1878 59.7641 31.4564 59.5985 31.6525C59.4395 31.8063 59.2684 31.9465 59.0871 32.072C58.9571 32.187 58.8523 32.3287 58.7795 32.4878C58.7067 32.6469 58.6674 32.8198 58.6643 32.9954C58.6762 33.1961 58.7311 33.3918 58.8251 33.5685C58.9191 33.7452 59.0499 33.8988 59.2083 34.0184L60.113 33.4873C60.4825 33.2278 61.2453 34.1542 60.9171 34.6431C60.3938 35.4216 62.4308 37.0753 62.4308 37.0753Z"
          fill="#FFEDE5"
        />
        <Path
          d="M41.5289 43.9436C42.1025 41.5777 42.268 35.666 42.268 35.666L25.4814 36.179L26.395 39.9119C26.5457 40.7534 26.6258 41.6065 26.6344 42.4619C26.6344 42.4619 28.2634 45.543 33.0942 46.0831C36.0625 46.3719 39.0384 45.6171 41.5289 43.9436Z"
          fill="#FFEDE5"
        />
        <Path
          d="M42.2768 35.6662C42.2975 35.8533 42.1792 37.6428 42.1792 37.6428C40.0328 39.4867 33.1473 40.4191 25.9189 37.9657L24.3875 31.9303C24.3875 31.9303 29.5848 29.6007 26.0726 21.7848L29.848 21.483L36.5502 21.311H38.7498C40.5583 23.1046 42.0868 25.1706 43.282 27.437C44.16 29.1088 45.2775 31.5592 42.2768 35.6662Z"
          fill="#455A64"
        />
        <Path
          d="M32.7778 35.7207C29.7534 34.9331 28.9966 33.0047 28.7808 31.5864C28.7808 31.5864 28.2102 35.7207 32.5325 36.6833C37.0913 37.6973 38.9656 34.0127 38.9656 34.0127C38.9656 34.0127 36.4261 36.6713 32.7778 35.7207Z"
          fill="#37474F"
        />
        <Path
          d="M7.03334 81.7256C6.14641 82.3865 4.10353 82.5464 2.30306 81.6833C0.502602 80.8203 -0.24833 78.3639 0.0887024 76.4657C0.496689 74.1512 1.61717 72.8867 1.90099 71.4926C2.18481 70.0984 1.90099 68.1731 2.33263 66.9298C2.51055 66.4519 2.78762 66.0189 3.14482 65.6606C3.50203 65.3022 3.93093 65.0269 4.40212 64.8536C4.70253 64.7351 5.02555 64.6885 5.34636 64.7172C5.66718 64.746 5.97728 64.8494 6.25285 65.0196L6.785 65.3395L7.03334 81.7256Z"
          fill="#263238"
        />
        <Path
          d="M9.14708 72.8985L7.74573 77.1897C7.74573 77.1897 8.63266 80.2496 8.13302 81.0644C7.39688 82.2715 6.09901 82.4827 3.91421 81.8007C1.41603 81.0252 0.827704 78.7166 0.957786 76.9241C1.13517 74.3681 3.45005 72.4458 3.18397 69.9834C3.05389 68.7763 3.21649 67.4274 3.86395 66.3893C4.58827 65.2305 5.77676 65.0132 7.00958 65.3904C8.06798 65.7163 8.9963 66.3953 9.8921 67.0321C10.1493 67.1992 10.3822 67.4023 10.5839 67.6356C10.7444 67.8541 10.8646 68.1005 10.9387 68.3629C11.1008 68.8903 11.1492 69.4472 11.0806 69.9955C11.0155 70.5085 10.6933 70.8072 10.3947 71.2025L9.14708 72.8985Z"
          fill="url(#paint0_linear_326_5617)"
        />
        <Path
          d="M15.1872 70.868C15.1015 70.8348 10.8206 68.0404 10.3594 67.8291C9.89817 67.6179 8.7629 67.3191 7.66607 69.9114C6.88262 71.7552 8.00901 72.4372 8.00901 72.4372L13.0349 75.4851L15.1872 70.868Z"
          fill="#FFEDE5"
        />
        <Path
          d="M7.74592 77.1899C6.84013 76.7278 5.83734 76.4988 4.82497 76.523C4.74981 76.5302 4.67406 76.5184 4.60439 76.4887C4.53471 76.459 4.47324 76.4124 4.42537 76.3528C4.3775 76.2932 4.34469 76.2225 4.32983 76.147C4.31496 76.0714 4.3185 75.9933 4.34012 75.9194C4.36857 75.8315 4.42198 75.7541 4.49356 75.6972C4.56514 75.6402 4.65168 75.6063 4.74219 75.5996C5.41922 75.5453 7.06299 75.5241 8.15391 76.4415C8.44364 77.039 7.74592 77.1899 7.74592 77.1899Z"
          fill="url(#paint1_linear_326_5617)"
        />
        <Path
          d="M8.26032 75.2282C7.37948 74.719 6.38972 74.4382 5.37781 74.4104C5.30161 74.4143 5.22566 74.3987 5.15677 74.3653C5.08788 74.3318 5.0282 74.2814 4.98309 74.2186C4.93797 74.1558 4.90882 74.0826 4.89825 74.0054C4.88768 73.9283 4.89602 73.8497 4.92252 73.7767C4.95512 73.69 5.01209 73.6152 5.08626 73.5615C5.16042 73.5078 5.24849 73.4777 5.33938 73.4749C6.01935 73.4568 7.66312 73.5262 8.70674 74.4979C8.96395 75.1165 8.26032 75.2282 8.26032 75.2282Z"
          fill="url(#paint2_linear_326_5617)"
        />
        <Path
          opacity="0.3"
          d="M7.74592 77.1899C6.84013 76.7278 5.83734 76.4988 4.82497 76.523C4.74981 76.5302 4.67406 76.5184 4.60439 76.4887C4.53471 76.459 4.47324 76.4124 4.42537 76.3528C4.3775 76.2932 4.34469 76.2225 4.32983 76.147C4.31496 76.0714 4.3185 75.9933 4.34012 75.9194C4.36857 75.8315 4.42198 75.7541 4.49356 75.6972C4.56514 75.6402 4.65168 75.6063 4.74219 75.5996C5.41922 75.5453 7.06299 75.5241 8.15391 76.4415C8.44364 77.039 7.74592 77.1899 7.74592 77.1899Z"
          fill="black"
        />
        <Path
          opacity="0.3"
          d="M8.26032 75.2282C7.37948 74.719 6.38972 74.4382 5.37781 74.4104C5.30161 74.4143 5.22566 74.3987 5.15677 74.3653C5.08788 74.3318 5.0282 74.2814 4.98309 74.2186C4.93797 74.1558 4.90882 74.0826 4.89825 74.0054C4.88768 73.9283 4.89602 73.8497 4.92252 73.7767C4.95512 73.69 5.01209 73.6152 5.08626 73.5615C5.16042 73.5078 5.24849 73.4777 5.33938 73.4749C6.01935 73.4568 7.66312 73.5262 8.70674 74.4979C8.96395 75.1165 8.26032 75.2282 8.26032 75.2282Z"
          fill="black"
        />
        <Path
          d="M51.8881 82.1901L57.4491 79.9389C57.3545 78.4753 56.9997 76.5258 57.3693 72.6964L51.0603 71.4712V77.917L51.8881 82.1901Z"
          fill="#FFEDE5"
        />
        <Path
          d="M67.7554 87.1756C67.9031 87.6326 67.8757 88.1297 67.6785 88.5668C67.4893 88.9742 65.405 90.1722 62.5934 89.9791C60.5085 89.83 58.5007 89.1141 56.7782 87.9059C55.7079 87.1817 54.5904 87.0459 53.2009 86.9644C51.8114 86.8829 49.9784 86.1737 49.6739 85.5098C49.3694 84.8459 49.7212 83.6992 49.7212 83.6992L67.7554 87.1756Z"
          fill="#263238"
        />
        <Path
          d="M56.4115 78.2189L56.6333 78.1706C56.7538 78.1376 56.8798 78.1314 57.0028 78.1525C57.1394 78.1955 57.2606 78.2784 57.3517 78.3909C57.6269 78.749 57.8666 79.1341 58.0671 79.5406C58.6584 80.5214 59.8942 81.3362 61.2453 82.0755C62.1647 82.5795 63.0635 82.9808 64.0125 83.4063C64.9615 83.8318 66.2623 84.1215 67.0192 84.6436C68.1219 85.401 68.2668 87.3082 67.0192 88.0596C65.9371 88.7114 63.0842 89.4146 60.0923 88.5485C58.4603 88.0777 56.651 86.3003 54.5135 86.1343C53.1536 86.0257 50.5785 85.6364 49.7034 84.5832C49.3812 84.1155 49.8128 82.6307 50.1676 81.3512C50.5549 79.954 50.6968 77.4916 51.1521 77.6153C51.1521 77.6153 51.0279 77.9624 51.2053 78.1495C51.3827 78.3366 52.0065 78.7108 52.1898 78.8677C52.4963 79.1868 52.7437 79.56 52.92 79.9691C52.9933 80.1539 53.1299 80.3051 53.3043 80.3946C53.5349 80.4821 53.7064 80.3343 53.8956 80.2407C54.1514 80.1239 54.4395 80.1036 54.7086 80.1834C54.6827 79.9062 54.6342 79.6316 54.5638 79.3626C54.5335 79.2776 54.5264 79.1858 54.5431 79.097C54.5803 79.0142 54.6411 78.9448 54.7175 78.8979C55.2295 78.5532 55.8066 78.3219 56.4115 78.2189Z"
          fill="url(#paint3_linear_326_5617)"
        />
        <Path
          d="M59.9741 81.3211C59.9741 81.3211 59.779 80.7869 58.9719 80.6361C58.351 80.5184 57.2572 80.9831 56.5772 81.5414C56.5132 81.5953 56.463 81.6643 56.431 81.7424C56.399 81.8205 56.3861 81.9054 56.3933 81.9897C56.4006 82.0741 56.4279 82.1553 56.4728 82.2265C56.5177 82.2977 56.5789 82.3567 56.6511 82.3984C56.7439 82.4525 56.8511 82.4753 56.9573 82.4634C57.0635 82.4514 57.1633 82.4054 57.2424 82.332C57.9909 81.6476 58.9698 81.2853 59.9741 81.3211Z"
          fill="url(#paint4_linear_326_5617)"
        />
        <Path
          d="M61.8928 82.4166C61.7588 82.2238 61.5816 82.0664 61.3758 81.9578C61.1701 81.8491 60.9419 81.7922 60.7102 81.792C60.7102 81.792 59.0931 81.8403 58.0908 82.7909C58.0298 82.8433 57.982 82.9099 57.9515 82.9851C57.921 83.0604 57.9088 83.142 57.9157 83.2231C57.9227 83.3042 57.9487 83.3824 57.9915 83.4511C58.0343 83.5198 58.0927 83.5769 58.1618 83.6177C58.2496 83.6675 58.3504 83.6879 58.4502 83.676C58.5499 83.6641 58.6435 83.6205 58.7176 83.5513C59.1303 83.1323 59.6297 82.8128 60.1792 82.6165C60.7286 82.4202 61.3141 82.3519 61.8928 82.4166Z"
          fill="url(#paint5_linear_326_5617)"
        />
        <Path
          d="M64.0124 83.4062C63.858 83.2272 63.6678 83.0841 63.4546 82.9868C63.2414 82.8894 63.0101 82.84 62.7766 82.8418C62.7766 82.8418 61.2688 82.8992 60.2695 83.8498C60.2077 83.9016 60.1592 83.9679 60.128 84.0431C60.0969 84.1183 60.0842 84.2001 60.0908 84.2814C60.0975 84.3628 60.1235 84.4412 60.1664 84.5101C60.2094 84.5789 60.2681 84.6361 60.3375 84.6766C60.4259 84.7262 60.5272 84.7465 60.6273 84.7346C60.7275 84.7227 60.8215 84.6792 60.8963 84.6102C61.2881 84.1758 61.7738 83.8408 62.3147 83.6318C62.8557 83.4227 63.437 83.3455 64.0124 83.4062Z"
          fill="url(#paint6_linear_326_5617)"
        />
        <Path
          opacity="0.3"
          d="M59.9741 81.3211C59.9741 81.3211 59.779 80.7869 58.9719 80.6361C58.351 80.5184 57.2572 80.9831 56.5772 81.5414C56.5132 81.5953 56.463 81.6643 56.431 81.7424C56.399 81.8205 56.3861 81.9054 56.3933 81.9897C56.4006 82.0741 56.4279 82.1553 56.4728 82.2265C56.5177 82.2977 56.5789 82.3567 56.6511 82.3984C56.7439 82.4525 56.8511 82.4753 56.9573 82.4634C57.0635 82.4514 57.1633 82.4054 57.2424 82.332C57.9909 81.6476 58.9698 81.2853 59.9741 81.3211Z"
          fill="black"
        />
        <Path
          opacity="0.3"
          d="M61.8928 82.4166C61.7588 82.2238 61.5816 82.0664 61.3758 81.9578C61.1701 81.8491 60.9419 81.7922 60.7102 81.792C60.7102 81.792 59.0931 81.8403 58.0908 82.7909C58.0298 82.8433 57.982 82.9099 57.9515 82.9851C57.921 83.0604 57.9088 83.142 57.9157 83.2231C57.9227 83.3042 57.9487 83.3824 57.9915 83.4511C58.0343 83.5198 58.0927 83.5769 58.1618 83.6177C58.2496 83.6675 58.3504 83.6879 58.4502 83.676C58.5499 83.6641 58.6435 83.6205 58.7176 83.5513C59.1303 83.1323 59.6297 82.8128 60.1792 82.6165C60.7286 82.4202 61.3141 82.3519 61.8928 82.4166Z"
          fill="black"
        />
        <Path
          opacity="0.3"
          d="M64.0124 83.4062C63.858 83.2272 63.6678 83.0841 63.4546 82.9868C63.2414 82.8894 63.0101 82.84 62.7766 82.8418C62.7766 82.8418 61.2688 82.8992 60.2695 83.8498C60.2077 83.9016 60.1592 83.9679 60.128 84.0431C60.0969 84.1183 60.0842 84.2001 60.0908 84.2814C60.0975 84.3628 60.1235 84.4412 60.1664 84.5101C60.2094 84.5789 60.2681 84.6361 60.3375 84.6766C60.4259 84.7262 60.5272 84.7465 60.6273 84.7346C60.7275 84.7227 60.8215 84.6792 60.8963 84.6102C61.2881 84.1758 61.7738 83.8408 62.3147 83.6318C62.8557 83.4227 63.437 83.3455 64.0124 83.4062Z"
          fill="black"
        />
        <Path
          d="M55.6901 49.8191C51.4625 48.8504 41.3663 46.6958 41.3663 46.6958L41.5289 43.9436C37.8777 45.8749 30.1821 45.3287 26.6344 42.4619L26.0757 45.38C24.7305 47.0238 23.5657 48.8129 22.6019 50.7153C21.7918 52.3539 20.4378 54.9099 21.7859 60.8639C22.5782 64.3614 23.6337 73.5684 23.6337 73.5684L13.2862 69.6756C13.2862 69.6756 12.3992 69.8295 11.6483 71.8091C11.2049 72.9799 11.057 74.1055 11.5064 74.688C15.2906 77.7389 21.4222 82.7211 27.6189 85.5155C31.7579 87.133 33.9575 83.5811 34.1585 82.2654C34.9361 77.2258 35.8319 61.0329 35.8319 61.0329L49.6679 60.5832C49.2097 63.2569 51.0722 73.7042 51.0722 73.7042C51.0722 73.7042 54.478 75.213 57.2984 73.668C57.2984 73.668 59.1846 61.6455 59.3679 57.6349C59.5542 53.1627 59.7789 50.7576 55.6901 49.8191Z"
          fill="url(#paint7_linear_326_5617)"
        />
        <Path
          opacity="0.15"
          d="M49.6679 60.5834C49.6679 59.8622 50.138 57.3424 51.7374 55.9995C51.7374 55.9995 49.5438 56.4009 48.5386 60.6196L49.6679 60.5834Z"
          fill="black"
        />
        <Path
          opacity="0.15"
          d="M23.6336 73.5686C23.6336 73.5686 23.9292 77.5429 24.6742 79.4803C24.6742 79.4803 22.8087 76.0401 22.6047 73.1763L23.6336 73.5686Z"
          fill="black"
        />
        <Path
          opacity="0.15"
          d="M41.3633 46.6961L41.5259 43.947C37.8747 45.8753 30.1821 45.3291 26.6374 42.4653L26.0786 45.3804C26.1082 45.4076 28.3846 47.8097 34.3034 48.1205C40.2221 48.4313 41.3633 46.6961 41.3633 46.6961Z"
          fill="black"
        />
        <Path
          opacity="0.15"
          d="M35.8438 61.0333C35.7948 59.5396 35.4487 58.0716 34.8266 56.7187C34.2045 55.3657 33.3194 54.156 32.2251 53.1631C32.2251 53.1631 35.4062 54.6719 36.4705 59.449C36.4705 59.449 38.8357 58.3234 40.0714 54.9496C40.0714 54.9496 39.693 58.3234 37.7891 60.2426L43.5275 60.7828L35.8438 61.0333Z"
          fill="black"
        />
        <Path
          d="M33.999 1.20688e-05C32.7844 -0.00197107 31.5812 0.240466 30.4585 0.713459C29.3357 1.18645 28.3153 1.88072 27.4556 2.75657C26.5958 3.63241 25.9137 4.67265 25.4482 5.81779C24.9826 6.96293 24.7428 8.19052 24.7424 9.43034C24.7424 10.6704 24.982 11.8983 25.4473 13.0438C25.9127 14.1893 26.5948 15.2299 27.4545 16.1061C28.3143 16.9822 29.3348 17.6768 30.4578 18.1499C31.5807 18.6231 32.7841 18.8657 33.999 18.8637C36.4472 18.8597 38.7938 17.864 40.5233 16.0952C42.2528 14.3265 43.2238 11.9293 43.223 9.43034C43.223 6.93187 42.2517 4.53551 40.5223 2.76742C38.7929 0.999323 36.4467 0.00400961 33.999 1.20688e-05Z"
          fill="#263238"
        />
        <Path
          d="M24.3461 5.73377C24.6802 5.71816 25.015 5.73737 25.3453 5.79111C25.4573 5.79862 25.5626 5.84805 25.641 5.92992C25.6865 5.99763 25.7121 6.0772 25.7149 6.15926C25.7912 6.68318 25.7435 7.21813 25.5759 7.71942C25.4459 8.06947 25.0408 8.24752 24.7836 8.501C23.7844 9.49081 23.7045 11.1294 24.0977 12.4904C24.4909 13.8514 25.2803 15.0645 25.7918 16.3802C26.3032 17.6959 26.5752 19.2802 25.8509 20.605C25.57 21.112 25.0586 21.5103 25.1207 22.1139C25.1916 22.8532 25.8243 23.5593 26.0963 24.2263C26.3948 25.0163 26.4964 25.8698 26.3919 26.7098C26.3171 27.7543 25.9371 28.7519 25.301 29.5736C24.8148 30.152 24.1871 30.5885 23.4819 30.8387C22.7766 31.0889 22.019 31.1439 21.2862 30.998C20.9772 30.9429 20.6848 30.8159 20.4318 30.6268C19.9972 30.2707 19.8227 29.6883 19.5862 29.1723C18.8264 27.5035 17.2211 26.2904 16.7333 24.519C16.2041 22.6329 17.0851 20.6714 18.1671 19.069C18.6727 18.3206 19.2374 17.5873 19.4857 16.7122C19.8198 15.5323 19.5271 14.2769 19.4502 13.0487C19.3769 11.849 19.512 10.6455 19.8494 9.49383C20.0918 8.66094 20.4672 7.70131 21.1029 7.10381C21.9949 6.27599 23.1418 5.7915 24.3461 5.73377Z"
          fill="#263238"
        />
        <Path
          d="M39.7758 4.31543C40.7868 4.93406 42.0315 7.54437 41.8866 13.0064C41.7625 17.6356 40.2872 18.7733 39.5481 19.1022C38.809 19.4311 37.384 19.2199 36.0004 18.9785V21.7578C36.0004 21.7578 37.9043 24.0331 37.7743 25.3096C37.6442 26.5861 35.007 26.8728 33.2214 25.6114C31.4357 24.35 29.9368 21.9268 29.9368 21.9268L29.9959 15.5353C29.9959 15.5353 29.1711 16.35 27.7904 15.1128C26.6581 14.0898 26.2797 12.3727 27.1725 11.4674C28.0654 10.5621 29.7062 10.8065 30.3329 12.1222C30.3329 12.1222 32.5384 12.2128 35.486 10.5772C36.6327 9.95078 37.6186 9.05742 38.3639 7.96951C39.1092 6.8816 39.5929 5.62975 39.7758 4.31543Z"
          fill="#FFEDE5"
        />
        <Path
          d="M36.8253 11.8235C36.8258 11.9379 36.7933 12.05 36.7318 12.1456C36.6703 12.2413 36.5826 12.3163 36.4796 12.3614C36.3766 12.4065 36.2628 12.4197 36.1526 12.3992C36.0423 12.3787 35.9404 12.3256 35.8595 12.2463C35.7787 12.1671 35.7225 12.0653 35.6979 11.9537C35.6734 11.8421 35.6816 11.7255 35.7215 11.6186C35.7615 11.5117 35.8314 11.4192 35.9225 11.3526C36.0136 11.286 36.122 11.2483 36.234 11.2441C36.3868 11.244 36.5337 11.3043 36.6439 11.4123C36.7542 11.5203 36.8191 11.6677 36.8253 11.8235Z"
          fill="#263238"
        />
        <G opacity="0.5">
          <G opacity="0.5">
            <Path
              d="M36.9552 15.7495L38.2767 16.1841C38.2527 16.2746 38.211 16.3593 38.1541 16.433C38.0972 16.5067 38.0264 16.5679 37.9457 16.613C37.8651 16.6581 37.7764 16.6861 37.685 16.6954C37.5935 16.7046 37.5012 16.6949 37.4134 16.6669C37.2352 16.6048 37.0877 16.4743 37.0021 16.303C36.9166 16.1318 36.8998 15.9332 36.9552 15.7495Z"
              fill="#F28F8F"
            />
          </G>
        </G>
        <Path
          d="M41.5111 10.0551L40.3611 9.23431C40.4093 9.15482 40.4729 9.08623 40.548 9.03277C40.6231 8.97931 40.7081 8.94211 40.7979 8.92345C40.8876 8.9048 40.9801 8.90508 41.0697 8.92429C41.1593 8.9435 41.2442 8.98122 41.319 9.03514C41.4717 9.1486 41.5765 9.31706 41.6122 9.50643C41.6479 9.6958 41.6118 9.89193 41.5111 10.0551Z"
          fill="#263238"
        />
        <Path
          d="M41.2391 11.4192C41.2401 11.5337 41.2081 11.646 41.147 11.742C41.0859 11.8381 40.9984 11.9136 40.8954 11.9592C40.7925 12.0047 40.6787 12.0183 40.5682 11.9982C40.4578 11.978 40.3556 11.9251 40.2744 11.846C40.1933 11.7669 40.1368 11.6651 40.112 11.5534C40.0872 11.4417 40.0952 11.3251 40.1351 11.218C40.1749 11.1109 40.2448 11.0182 40.336 10.9515C40.4272 10.8847 40.5356 10.8469 40.6478 10.8428C40.8001 10.8426 40.9466 10.9025 41.0567 11.0098C41.1669 11.1172 41.2322 11.2638 41.2391 11.4192Z"
          fill="#263238"
        />
        <G opacity="0.5">
          <G opacity="0.5">
            <Path
              d="M38.5488 11.0752L38.6257 14.5818L40.435 14.0175L38.5488 11.0752Z"
              fill="#F28F8F"
            />
          </G>
        </G>
        <G opacity="0.5">
          <G opacity="0.5">
            <Path
              d="M36.0032 18.9784C34.5428 18.7792 31.5449 17.886 31.0837 16.6729C31.2695 17.2859 31.6347 17.8261 32.1303 18.2209C33.0232 19.0116 35.9973 19.9169 35.9973 19.9169L36.0032 18.9784Z"
              fill="#F28F8F"
            />
          </G>
        </G>
        <Path
          d="M26.0726 21.7876C23.2108 21.9958 22.0311 22.367 20.4376 25.9762C19.0038 29.2202 15.5743 37.6155 14.717 39.4864C13.8596 41.3574 13.697 42.1088 14.4213 44.0673C15.0126 45.6637 19.8434 54.8345 20.3726 56.1713C20.9018 57.5082 21.1353 58.8601 22.0371 60.4172C22.9388 61.9744 24.3638 63.4953 25.4902 63.8544C27.1605 64.3885 29.3335 63.6462 29.3956 62.6171C29.4577 61.5881 26.9447 59.871 26.2618 57.5866C26.7163 57.8914 27.1949 58.1569 27.6927 58.3803C28.3697 58.6639 29.1266 58.6006 29.3512 58.2083C29.5759 57.816 28.8989 57.5776 28.2958 56.965C27.9351 56.5998 27.2965 55.779 26.4806 55.0548C25.9277 54.5659 25.023 54.4211 24.6151 53.8839C24.3963 53.5972 23.4029 51.1136 22.6549 48.9017C21.7325 46.1586 20.5175 42.5072 20.5175 42.5072L25.4902 31.9452C25.4902 31.9452 29.3897 27.9739 26.0726 21.7876Z"
          fill="#FFEDE5"
        />
        <Path
          d="M20.3639 56.1717C20.3639 56.1717 21.508 53.8089 24.6063 53.8843L23.7874 52.0254C23.7874 52.0254 20.763 52.2427 19.4888 54.3339L20.3639 56.1717Z"
          fill="#37474F"
        />
        <Path
          d="M20.0299 54.1648L20.6951 55.1274C20.7432 55.1974 20.8047 55.2568 20.8758 55.302C20.947 55.3472 21.0263 55.3773 21.109 55.3906C21.1918 55.4038 21.2764 55.3999 21.3576 55.3791C21.4389 55.3582 21.5152 55.3209 21.582 55.2693L22.7646 54.364C22.902 54.2565 22.9942 54.0996 23.0222 53.9252C23.0502 53.7508 23.012 53.5721 22.9154 53.4255L22.2975 52.496C22.251 52.4243 22.1907 52.363 22.1202 52.3158C22.0498 52.2686 21.9706 52.2365 21.8877 52.2216C21.8047 52.2066 21.7196 52.209 21.6376 52.2287C21.5555 52.2484 21.4783 52.2849 21.4105 52.3361L20.157 53.2414C20.0205 53.3469 19.9305 53.5032 19.9067 53.6763C19.8829 53.8494 19.9272 54.025 20.0299 54.1648Z"
          fill="#263238"
        />
        <Path
          d="M19.808 54.1406L20.4791 55.1032C20.5275 55.1729 20.5891 55.2319 20.6603 55.2769C20.7314 55.3219 20.8106 55.3518 20.8933 55.3651C20.9759 55.3783 21.0604 55.3745 21.1416 55.3539C21.2228 55.3332 21.2991 55.2962 21.3661 55.245L22.5486 54.3397C22.686 54.2323 22.7782 54.0756 22.8068 53.9014C22.8353 53.7272 22.798 53.5484 22.7024 53.4012L22.0845 52.4718C22.0377 52.4004 21.9773 52.3394 21.9068 52.2924C21.8363 52.2455 21.7573 52.2136 21.6744 52.1987C21.5916 52.1837 21.5066 52.1861 21.4247 52.2055C21.3427 52.225 21.2654 52.2611 21.1975 52.3118L19.944 53.2322C19.8097 53.3356 19.7203 53.4884 19.6949 53.6582C19.6695 53.8279 19.7101 54.001 19.808 54.1406Z"
          fill="#455A64"
        />
        <Path
          d="M22.5812 53.8238C22.5663 53.9432 22.5057 54.0516 22.4127 54.1256L21.2301 55.0309C21.189 55.0644 21.1414 55.0884 21.0904 55.1014C21.0394 55.1145 20.9862 55.1161 20.9345 55.1063C20.8838 55.0983 20.8352 55.0801 20.7915 55.0526C20.7479 55.0251 20.71 54.989 20.6802 54.9464L20.0062 53.9807C19.9493 53.9005 19.924 53.8014 19.9352 53.7031C19.9392 53.6434 19.9562 53.5854 19.9848 53.5332C20.0134 53.4811 20.053 53.436 20.1008 53.4013L21.3543 52.496C21.3962 52.4643 21.4441 52.4417 21.495 52.4297C21.5459 52.4178 21.5987 52.4167 21.65 52.4266C21.7006 52.4357 21.7489 52.4551 21.7921 52.4836C21.8352 52.5121 21.8724 52.5492 21.9013 52.5926L22.5191 53.522C22.5771 53.6108 22.6023 53.7178 22.5901 53.8238H22.5812Z"
          fill="url(#paint8_linear_326_5617)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_326_5617"
          x1="11.1108"
          y1="82.1857"
          x2="-2.49544"
          y2="81.5546"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#92A3FD" />
          <Stop offset="1" stopColor="#9DCEFF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_326_5617"
          x1="8.22434"
          y1="77.1899"
          x2="3.16816"
          y2="76.2423"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#92A3FD" />
          <Stop offset="1" stopColor="#9DCEFF" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_326_5617"
          x1="8.76329"
          y1="75.2282"
          x2="3.72184"
          y2="74.3683"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#92A3FD" />
          <Stop offset="1" stopColor="#9DCEFF" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_326_5617"
          x1="67.9014"
          y1="88.9515"
          x2="43.7275"
          y2="85.9311"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#92A3FD" />
          <Stop offset="1" stopColor="#9DCEFF" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_326_5617"
          x1="59.9741"
          y1="82.4665"
          x2="55.2761"
          y2="81.762"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#92A3FD" />
          <Stop offset="1" stopColor="#9DCEFF" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_326_5617"
          x1="61.8928"
          y1="83.6793"
          x2="56.6962"
          y2="82.8315"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#92A3FD" />
          <Stop offset="1" stopColor="#9DCEFF" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_326_5617"
          x1="64.0124"
          y1="84.7379"
          x2="58.8836"
          y2="83.9168"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#92A3FD" />
          <Stop offset="1" stopColor="#9DCEFF" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear_326_5617"
          x1="59.4502"
          y1="85.9297"
          x2="-4.72415"
          y2="80.4213"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#92A3FD" />
          <Stop offset="1" stopColor="#9DCEFF" />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear_326_5617"
          x1="22.5931"
          y1="55.1126"
          x2="19.0467"
          y2="54.8415"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#92A3FD" />
          <Stop offset="1" stopColor="#9DCEFF" />
        </LinearGradient>
        <ClipPath id="clip0_326_5617">
          <Rect width="73" height="90" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
