import React from 'react';

interface IconProps {
  color?: string; // 색상을 동적으로 설정할 수 있는 prop
  width?: number; // 아이콘의 너비
  height?: number; // 아이콘의 높이
  className?: string; // 추가적인 클래스 이름
}

const Download: React.FC<IconProps> = ({
  color = 'var(--third-color)', // 기본 색상 설정
  width = 40, // 기본 너비 설정
  height = 50, // 기본 높이 설정
  className = '', // 기본 빈 클래스
}) => (
  <svg
    className={className} // 전달된 className을 여기서 사용
    width={width}
    height={height}
    viewBox="0 0 40 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 17.35C39.9741 17.1203 39.9239 16.894 39.85 16.675V16.45C39.7326 16.1914 39.5719 15.9547 39.375 15.75L24.375 0.75C24.1703 0.553052 23.9336 0.392419 23.675 0.275H23.425C23.1819 0.145008 22.9207 0.052305 22.65 0H7.5C5.51088 0 3.60322 0.790177 2.1967 2.1967C0.790177 3.60322 0 5.51088 0 7.5V42.5C0 44.4891 0.790177 46.3968 2.1967 47.8033C3.60322 49.2098 5.51088 50 7.5 50H32.5C34.4891 50 36.3968 49.2098 37.8033 47.8033C39.2098 46.3968 40 44.4891 40 42.5V17.35ZM25 8.525L31.475 15H27.5C26.837 15 26.2011 14.7366 25.7322 14.2678C25.2634 13.7989 25 13.163 25 12.5V8.525ZM35 42.5C35 43.163 34.7366 43.7989 34.2678 44.2678C33.7989 44.7366 33.163 45 32.5 45H7.5C6.83696 45 6.20107 44.7366 5.73223 44.2678C5.26339 43.7989 5 43.163 5 42.5V7.5C5 6.83696 5.26339 6.20107 5.73223 5.73223C6.20107 5.26339 6.83696 5 7.5 5H20V12.5C20 14.4891 20.7902 16.3968 22.1967 17.8033C23.6032 19.2098 25.5109 20 27.5 20H35V42.5ZM23.225 30.725L22.5 31.475V25C22.5 24.337 22.2366 23.7011 21.7678 23.2322C21.2989 22.7634 20.663 22.5 20 22.5C19.337 22.5 18.7011 22.7634 18.2322 23.2322C17.7634 23.7011 17.5 24.337 17.5 25V31.475L16.775 30.725C16.3042 30.2542 15.6658 29.9898 15 29.9898C14.3342 29.9898 13.6958 30.2542 13.225 30.725C12.7542 31.1958 12.4898 31.8342 12.4898 32.5C12.4898 33.1658 12.7542 33.8042 13.225 34.275L18.225 39.275C18.4628 39.5026 18.7431 39.681 19.05 39.8C19.3493 39.9323 19.6728 40.0006 20 40.0006C20.3272 40.0006 20.6507 39.9323 20.95 39.8C21.2569 39.681 21.5372 39.5026 21.775 39.275L26.775 34.275C27.2458 33.8042 27.5102 33.1658 27.5102 32.5C27.5102 31.8342 27.2458 31.1958 26.775 30.725C26.3042 30.2542 25.6658 29.9898 25 29.9898C24.3342 29.9898 23.6958 30.2542 23.225 30.725Z"
      fill={color}
    />
  </svg>
);

export default Download;
