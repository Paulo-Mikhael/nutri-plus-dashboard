export default function Logo({ color = "#fff", size = 56 }: { color?: string, size?: number }) {
  return (
    <svg width={size} height={size + 4} viewBox="0 0 98 106" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4411 0.664015C15.7436 2.14678 14.6288 4.75557 14.6288 7.24465C14.6288 8.42545 14.4487 8.67065 13.9877 8.11772C13.8502 7.95299 13.0215 7.48963 12.1462 7.08835C9.02113 5.65525 6.05922 5.97783 3.84335 7.99246C1.74982 9.89623 0.912412 12.3436 1.08511 16.0521C1.20789 18.6857 2.00519 21.259 3.44604 23.6723C6.46968 28.7358 11.8636 31.6171 15.7594 30.2496C16.6233 29.9463 16.8266 29.9463 17.7212 30.2496C22.6971 31.9365 29.3262 27.0989 31.6887 20.057C32.4167 17.8871 32.6679 14.4461 32.2324 12.6079C31.0802 7.74348 27.1418 5.27148 22.6887 6.61722C21.8256 6.87795 20.4641 7.52887 19.6626 8.0634L18.2055 9.03558L18.0633 8.28156C17.8839 7.33089 18.133 5.6333 18.5798 4.76222C18.7681 4.39486 19.3098 3.67255 19.7838 3.15686C20.795 2.05676 20.8837 1.31827 20.0982 0.536979C19.3375 -0.220142 18.4022 -0.175579 17.4411 0.664015ZM47.4968 23.7301C46.5163 23.8452 44.7114 24.1631 43.4858 24.4369L41.2574 24.9344L41.1418 38.9018C41.0783 46.5839 41.003 52.8821 40.9747 52.8978C39.9528 53.4636 39.1586 53.4909 27.6666 53.3527L15.7908 53.2102L15.6409 54.0066C14.9802 57.5097 15.135 63.4137 15.9905 67.3419C18.7093 79.8274 27.8874 89.9958 40.1433 94.1009C46.6342 96.275 54.2654 96.5197 61.034 94.7707L61.6468 94.6124V99.861C61.6468 103.055 61.737 105.278 61.8774 105.539C62.4396 106.584 68.6014 105.767 73.8256 103.956C86.0788 99.7083 95.3442 88.829 97.5269 76.1267C98.1221 72.6617 98.1571 70.5149 97.6241 70.1271C97.309 69.8979 95.9927 69.8296 91.8854 69.8296H86.5559L86.715 69.2199C88.1436 63.7471 88.2913 57.9119 87.1415 52.3604C83.7609 36.0354 69.3078 23.9935 52.622 23.5998C50.7836 23.5563 48.4773 23.6151 47.4968 23.7301ZM0.624287 37.1836C-0.086331 37.782 -0.183933 38.5974 0.370925 39.2993L0.845339 39.8995H5.91994C10.5529 39.8995 11.0264 39.8642 11.3631 39.494C11.8705 38.9362 11.8311 37.7811 11.2862 37.239C10.8678 36.8227 10.5435 36.7956 5.96295 36.7956C1.64153 36.7956 1.03274 36.84 0.624287 37.1836ZM14.6709 37.2477C14.0039 37.8658 14.0079 39.0872 14.6784 39.5543C15.1061 39.8525 16.3613 39.8995 23.8871 39.8995H32.6006L33.0852 39.3865C33.7199 38.714 33.6985 38.0121 33.0226 37.3399L32.4758 36.7956H23.8171C15.4113 36.7956 15.1442 36.8089 14.6709 37.2477ZM0.370925 44.2686C0.0393472 44.6879 -0.0618195 45.0384 0.0351134 45.4326C0.353544 46.7273 -0.562529 46.6562 16.6479 46.7213L32.4671 46.781L33.0184 46.2325C33.6849 45.5694 33.7274 44.7123 33.124 44.1119C32.6866 43.6767 32.3813 43.6685 16.7619 43.6685H0.845339L0.370925 44.2686ZM25.6891 61.8644C25.2361 62.2187 25.102 62.5193 25.102 63.1785C25.102 63.8376 25.2361 64.1382 25.6891 64.4925C26.2589 64.9386 26.5181 64.9521 34.461 64.9521C42.4039 64.9521 42.6631 64.9386 43.2329 64.4925C44.0623 63.8436 44.0623 62.5134 43.2329 61.8644C42.6631 61.4184 42.4039 61.4048 34.461 61.4048C26.5181 61.4048 26.2589 61.4184 25.6891 61.8644ZM25.5476 68.056C25.2718 68.3304 25.102 68.7949 25.102 69.2753C25.102 69.7558 25.2718 70.2202 25.5476 70.4947C25.9777 70.9226 26.2903 70.9381 34.461 70.9381C42.6317 70.9381 42.9443 70.9226 43.3744 70.4947C43.6502 70.2202 43.82 69.7558 43.82 69.2753C43.82 68.7949 43.6502 68.3304 43.3744 68.056C42.9443 67.6281 42.6317 67.6126 34.461 67.6126C26.2903 67.6126 25.9777 67.6281 25.5476 68.056ZM32.7797 74.1429C32.1801 74.7392 32.0992 75.2818 32.4845 76.1227C32.9154 77.064 33.6029 77.1776 38.4161 77.1037C42.4391 77.0419 42.9296 76.9931 43.3516 76.6127C44.0547 75.9788 43.9932 74.653 43.2329 74.0582C42.6814 73.6265 42.3627 73.5986 37.9862 73.5986C33.3361 73.5986 33.3254 73.5997 32.7797 74.1429Z" fill={color} />
    </svg>

  );
}