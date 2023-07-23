import { Theme } from '@/styles/theme';

export function Loading() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
                left: '0',
                top: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: Theme.background.bold,
                gap: '2rem',
                flexDirection: 'column',
            }}
        >
            <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="loading-logo"
            >
                <path
                    d="M21.0055 0.0247227C25.4109 0.0053119 29.779 0.00343122 34.2051 0.0017017C34.2707 3.04783 34.271 6.09387 34.295 9.13971C34.2979 9.50934 34.1116 9.61929 33.8347 9.7567C30.6771 11.3239 29.9637 15.3699 32.4453 17.8498C33.9527 19.3561 35.8042 19.7544 37.79 19.0018C39.7503 18.2587 40.8811 16.7458 41.027 14.6547C41.1788 12.4781 40.1965 10.8284 38.263 9.8202C37.8115 9.58479 37.7066 9.34753 37.7094 8.89297C37.727 5.97019 37.7203 3.04727 37.7287 0.067406C42.1034 0.00796755 46.4709 0.00551497 50.8969 0C54.0032 3.03367 57.0511 6.07026 60.0974 9.10846C60.1383 9.14925 60.1591 9.21027 60.239 9.34707C59.1235 10.4445 57.994 11.5501 56.8711 12.6622C55.876 13.6477 54.8737 14.6265 53.9055 15.6379C53.5916 15.9657 53.3368 16.0311 52.8964 15.88C50.1544 14.9387 47.233 16.4487 46.462 19.2427C45.896 21.2937 46.4232 23.1085 48.0608 24.4777C49.6686 25.8222 51.5233 26.0942 53.4293 25.177C55.2676 24.2922 56.2902 22.7903 56.2809 20.7069C56.2781 20.0802 56.0836 19.4562 56.0093 18.8271C55.9865 18.6341 55.9999 18.3578 56.1175 18.2391C58.2716 16.0629 60.4442 13.905 62.6572 11.6991C62.8343 11.8593 63.004 11.9997 63.1591 12.1547C65.9693 14.9649 68.7842 17.7704 71.5742 20.6005C71.8012 20.8308 71.9697 21.2311 71.9719 21.5536C71.9981 25.5498 71.9783 29.5462 72 33.5425C72.0029 34.0821 71.8664 34.241 71.3128 34.235C68.5734 34.2055 65.8334 34.2115 63.0938 34.2314C62.6059 34.235 62.3369 34.111 62.1009 33.6393C61.013 31.4647 58.6512 30.4429 56.2681 31.0535C54.1123 31.6059 52.5113 33.766 52.5771 36.0335C52.6423 38.2853 54.2597 40.305 56.3884 40.7928C58.7723 41.3391 61.0809 40.2903 62.1395 38.1331C62.3456 37.713 62.5791 37.5827 63.0293 37.5859C65.7895 37.6054 68.55 37.5949 71.3103 37.5969C71.5109 37.597 71.7114 37.6161 71.9571 37.6287C71.9687 37.8714 71.9866 38.0714 71.9867 38.2715C71.9883 42.2885 71.9929 46.3054 71.9766 50.3223C71.9756 50.5814 71.8845 50.9128 71.7112 51.0876C68.7829 54.0432 65.8349 56.9793 62.8903 59.9188C62.8343 59.9748 62.7667 60.0192 62.6444 60.117C62.0122 59.4924 61.3858 58.8777 60.7639 58.2584C59.262 56.7626 57.7693 55.2574 56.2558 53.7735C55.9469 53.4706 55.9055 53.217 56.0491 52.8019C56.9998 50.0535 55.4373 47.1369 52.6148 46.3311C49.935 45.5662 47.0252 47.2686 46.398 49.9685C45.7369 52.8145 47.482 55.5628 50.2997 56.1318C51.2348 56.3206 52.133 56.2304 53.0319 55.924C53.2295 55.8566 53.5757 55.8932 53.7115 56.0266C55.8278 58.1046 57.921 60.2062 60.0178 62.3039C60.0881 62.3742 60.1411 62.4617 60.2667 62.6254C59.2448 63.6246 58.226 64.6074 57.2219 65.6051C55.235 67.5794 53.2621 69.5678 51.265 71.5318C51.0684 71.7252 50.7452 71.896 50.4797 71.8974C46.3599 71.9203 42.2399 71.9135 38.12 71.9124C38.0194 71.9123 37.9187 71.8975 37.7552 71.8845C37.7422 71.678 37.7191 71.4818 37.719 71.2855C37.7165 68.4633 37.726 65.6411 37.7073 62.8191C37.7046 62.4103 37.8313 62.2175 38.2021 62.0325C40.1327 61.0687 41.2352 59.0922 41.0391 57.0376C40.8438 54.9917 39.347 53.2315 37.3111 52.6536C34.7969 51.9398 32.1805 53.3415 31.2299 55.9113C30.371 58.2334 31.5745 61.0289 33.866 62.085C34.0442 62.1671 34.2653 62.4128 34.2666 62.5839C34.2891 65.6118 34.2808 68.64 34.2764 71.668C34.2763 71.7251 34.242 71.782 34.2084 71.8866C34.0181 71.8953 33.8178 71.9124 33.6175 71.9125C29.6418 71.9144 25.666 71.9236 21.6904 71.8976C21.3627 71.8955 20.9535 71.7364 20.7222 71.5082C17.7751 68.6009 14.8536 65.6676 11.9265 62.74C11.8835 62.6971 11.8524 62.6424 11.6479 62.4209C12.1009 62.0403 12.5817 61.6881 13.002 61.2743C14.7039 59.5986 16.3934 57.9102 18.0716 56.2107C18.38 55.8984 18.6416 55.7903 19.0931 55.9409C21.1013 56.6107 22.8985 56.1671 24.3549 54.6617C25.8262 53.141 26.1422 51.2806 25.3922 49.3361C24.6442 47.3969 23.1011 46.2908 21.0514 46.1601C17.6236 45.9416 14.8911 49.1161 15.9089 52.6163C16.0745 53.1858 16.0282 53.5252 15.5941 53.9474C13.6749 55.814 11.7949 57.7209 9.90914 59.6214C9.75142 59.7804 9.65583 60.001 9.48806 60.2597C9.13259 59.9283 8.92305 59.7444 8.72629 59.5478C5.92947 56.7522 3.12961 53.9596 0.349403 51.1476C0.159999 50.9561 0.0277442 50.616 0.0263976 50.3443C0.00625934 46.2862 0.0206757 42.228 0.00218938 38.17C1.68686e-06 37.6899 0.162063 37.5844 0.60723 37.5871C3.40869 37.604 6.2104 37.6071 9.01177 37.5841C9.47446 37.5803 9.69143 37.739 9.89317 38.1443C10.9424 40.2525 13.2859 41.3605 15.4669 40.8194C17.924 40.2099 19.4736 38.2277 19.4251 35.7565C19.3808 33.4954 17.7834 31.5497 15.5301 31.0124C13.2612 30.4713 10.9845 31.5215 9.8944 33.6694C9.67053 34.1105 9.43045 34.2368 8.95604 34.2326C6.19588 34.2086 3.43533 34.2107 0.675121 34.2311C0.185973 34.2347 -0.00298576 34.1328 3.561e-05 33.5925C0.0226068 29.5551 0.00482978 25.5174 0.0279856 21.48C0.0296264 21.1935 0.185788 20.8384 0.389091 20.6328C3.1992 17.7918 6.03909 14.9802 8.84619 12.1363C9.2569 11.7202 9.48022 11.754 9.86767 12.1489C11.815 14.1337 13.7817 16.0999 15.7648 18.0491C16.091 18.3697 16.0832 18.6372 15.9595 19.0287C14.9233 22.3081 17.1417 25.5044 20.5623 25.6837C22.9259 25.8076 25.115 24.0699 25.6386 21.6541C26.1494 19.2976 24.8501 16.8385 22.6391 15.9703C21.4217 15.4922 20.2055 15.4381 18.9658 15.9053C18.7821 15.9746 18.448 15.9463 18.3219 15.8223C16.1349 13.6725 13.9696 11.5006 11.7275 9.26152C14.8273 6.16895 17.8977 3.1056 21.0055 0.0247227ZM27.9565 44.6874C30.4744 45.7572 32.989 46.8349 35.5158 47.8832C35.7447 47.9782 36.0819 47.9595 36.3185 47.8661C38.9204 46.839 41.5148 45.7928 44.1022 44.7299C44.3215 44.6399 44.556 44.4268 44.6486 44.2125C45.7827 41.5891 46.8961 38.9566 47.997 36.319C48.0737 36.1353 48.0744 35.8667 48.0007 35.6812C46.9596 33.0627 45.9093 30.4477 44.8288 27.8454C44.7188 27.5806 44.4372 27.3148 44.1703 27.1986C41.6619 26.1067 39.1358 25.0557 36.6248 23.9695C36.2507 23.8077 35.9448 23.8174 35.5776 23.9682C33.0476 25.0073 30.506 26.0181 27.9808 27.0684C27.7157 27.1787 27.4407 27.446 27.3259 27.7085C26.2222 30.2342 25.141 32.7701 24.0871 35.3171C23.9705 35.5989 23.9652 36.007 24.0765 36.2904C25.0768 38.8361 26.1027 41.3721 27.1578 43.8956C27.2826 44.194 27.6278 44.4002 27.9565 44.6874Z"
                    fill="#F4B148"
                />
            </svg>
        </div>
    );
}