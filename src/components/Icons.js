export const ExpandMore = ({...props}) => (
    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M0.294983 1.70498L4.87498 6.29498L0.294983 10.885L1.70498 12.295L7.70498 6.29498L1.70498 0.294983L0.294983 1.70498Z" fill="url(#paint0_linear_3:12)"/>
        <defs>
            <linearGradient id="paint0_linear_3:12" x1="0.294983" y1="12.295" x2="11.024" y2="5.66984" gradientUnits="userSpaceOnUse">
                <stop stopColor="#237FFA"/>
                <stop offset="1" stopColor="#E32283"/>
            </linearGradient>
        </defs>
    </svg>
);

export const ExpandMoreSelected = ({...props}) => (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z" />
    </svg>
);

export const Refresh = ({...props}) => (
    <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9 3.375V0L4.5 4.5L9 9V5.625C12.7238 5.625 15.75 8.65125 15.75 12.375C15.75 13.5112 15.4687 14.5913 14.9625 15.525L16.605 17.1675C17.4825 15.7838 18 14.1412 18 12.375C18 7.4025 13.9725 3.375 9 3.375ZM9 19.125C5.27625 19.125 2.25 16.0987 2.25 12.375C2.25 11.2388 2.53125 10.1587 3.0375 9.225L1.395 7.5825C0.5175 8.96625 0 10.6088 0 12.375C0 17.3475 4.0275 21.375 9 21.375V24.75L13.5 20.25L9 15.75V19.125Z" fill="black"/>
    </svg>
);

export const Copy = ({...props}) => (
    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM17 20H6V6H17V20Z" fill="black"/>
    </svg>
)