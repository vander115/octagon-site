import { Theme } from '@/styles/theme';
import { SVGAttributes } from 'react';

interface IIconProps extends SVGAttributes<HTMLOrSVGElement> {}

export function WhatsAppIcon({ ...rest }: IIconProps) {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <g id="Frame" clip-path="url(#clip0_106_40)">
                <path
                    id="Vector"
                    d="M23.2961 19.1761C22.9001 18.9774 20.9521 18.0201 20.5894 17.8867C20.2254 17.7547 19.9614 17.6894 19.6961 18.0867C19.4334 18.4827 18.6734 19.3747 18.4427 19.6387C18.212 19.9041 17.98 19.9361 17.584 19.7387C17.188 19.5387 15.9107 19.1214 14.3974 17.7721C13.2201 16.7214 12.4241 15.4241 12.1934 15.0267C11.9627 14.6307 12.1694 14.4161 12.3667 14.2187C12.5454 14.0414 12.764 13.7561 12.9614 13.5254C13.16 13.2934 13.2254 13.1281 13.3587 12.8627C13.4907 12.5987 13.4254 12.3681 13.3254 12.1694C13.2254 11.9707 12.4334 10.0201 12.104 9.22672C11.7814 8.45472 11.4547 8.56005 11.2121 8.54672C10.9814 8.53605 10.7174 8.53339 10.4521 8.53339C10.1881 8.53339 9.75872 8.63205 9.39605 9.02939C9.03338 9.42539 8.00938 10.3841 8.00938 12.3347C8.00938 14.2841 9.42938 16.1681 9.62672 16.4334C9.82538 16.6974 12.4214 20.7001 16.396 22.4161C17.3414 22.8241 18.0787 23.0681 18.6547 23.2494C19.604 23.5521 20.4681 23.5094 21.1494 23.4067C21.9107 23.2934 23.4934 22.4481 23.8241 21.5227C24.1547 20.5974 24.1547 19.8041 24.0547 19.6387C23.9561 19.4734 23.6934 19.3747 23.2961 19.1761ZM16.0667 29.0467H16.0614C13.7011 29.0469 11.3842 28.4123 9.35338 27.2094L8.87205 26.9241L3.88405 28.2334L5.21472 23.3694L4.90138 22.8707C3.58197 20.7697 2.88397 18.3383 2.88805 15.8574C2.88938 8.59072 8.80272 2.67872 16.0721 2.67872C19.5921 2.67872 22.9014 4.05205 25.3894 6.54272C26.617 7.76488 27.5899 9.21836 28.2521 10.819C28.9142 12.4197 29.2522 14.1358 29.2467 15.8681C29.2427 23.1347 23.3307 29.0467 16.0667 29.0467ZM27.284 4.65072C25.815 3.17195 24.067 1.99944 22.1415 1.20112C20.216 0.402806 18.1512 -0.005435 16.0667 5.46367e-05C7.32672 5.46367e-05 0.213383 7.11339 0.209383 15.8561C0.209383 18.6507 0.938716 21.3787 2.32672 23.7827L0.0760498 32.0001L8.48272 29.7947C10.8075 31.0613 13.4126 31.7251 16.0601 31.7254H16.0667C24.8054 31.7254 31.9201 24.6121 31.9241 15.8681C31.9305 13.7844 31.5237 11.7202 30.7273 9.79477C29.9308 7.86934 28.7605 6.12095 27.284 4.65072Z"
                    fill={Theme.socialmedia.phone}
                />
            </g>
            <defs>
                <clipPath id="clip0_106_40">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
