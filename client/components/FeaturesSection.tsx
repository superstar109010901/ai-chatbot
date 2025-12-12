import { MessageSquare, Workflow, MessageCircle, ShieldCheck, Upload, Smartphone } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  iconGradient: string;
  badge?: string;
}

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={{margin: '0 auto', display: 'block'}}>
          <g clipPath="url(#clip0_207_3219)">
            <mask id="mask0_207_3219" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
              <path d="M37.2578 0H10.9582C4.90615 0 0 4.90615 0 10.9582V37.2578C0 43.3099 4.90615 48.216 10.9582 48.216H37.2578C43.3099 48.216 48.216 43.3099 48.216 37.2578V10.9582C48.216 4.90615 43.3099 0 37.2578 0Z" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_207_3219)">
              <path d="M0 0H48.216V48.216H0V0Z" fill="url(#paint0_linear_207_3219)"/>
              <path d="M24.477 33.6139C25.4017 33.5506 26.3187 33.4029 27.2166 33.1726C28.3255 33.5059 29.4959 33.5814 30.6384 33.3932C30.684 33.3877 30.7299 33.3842 30.7758 33.383C31.1834 33.383 31.7182 33.6168 32.4984 34.1092V33.2997C32.4987 33.1587 32.5369 33.0203 32.6088 32.8991C32.6808 32.7778 32.7839 32.678 32.9075 32.6101C33.2475 32.4182 33.5616 32.2024 33.8499 31.9628C34.9866 31.0131 35.6281 29.7449 35.6281 28.4036C35.6281 27.9609 35.5579 27.5196 35.4191 27.0988C35.7639 26.4647 36.0386 25.8029 36.2432 25.1132C36.9007 26.0848 37.2543 27.2318 37.2586 28.4036C37.2586 30.227 36.3995 31.9277 34.9107 33.1711C34.6613 33.3786 34.4007 33.5695 34.129 33.7439V35.6404C34.129 36.292 33.3663 36.6675 32.8286 36.2789C32.3192 35.904 31.7926 35.553 31.2506 35.2269C31.0941 35.1366 30.9321 35.0561 30.7655 34.9858C30.3132 35.0528 29.8566 35.0865 29.3994 35.0866C27.5438 35.0866 25.8285 34.5358 24.477 33.6139ZM14.657 29.8223C12.3134 27.8601 10.959 25.1848 10.959 22.3182C10.959 16.4621 16.5579 11.7793 23.3943 11.7793C30.2322 11.7793 35.8326 16.4606 35.8326 22.3182C35.8326 28.1742 30.2322 32.8555 23.3943 32.8555C22.6258 32.8555 21.8685 32.7971 21.1223 32.6802C20.8009 32.7547 19.5122 33.5101 17.6566 34.847C16.9845 35.3321 16.0319 34.8645 16.0319 34.0478V30.8144C15.5506 30.5169 15.0916 30.1848 14.6585 29.8209M21.1676 30.6858C21.2241 30.6858 21.2811 30.6902 21.3386 30.699C22.0107 30.81 22.6959 30.866 23.3943 30.867C29.17 30.867 33.7915 27.0024 33.7915 22.3167C33.7915 17.6324 29.17 13.7678 23.3958 13.7678C17.6216 13.7678 12.9972 17.6354 12.9972 22.3182C12.9972 24.5828 14.0784 26.716 15.9866 28.313C16.4678 28.7143 16.9918 29.0747 17.5587 29.3942C17.7125 29.4796 17.8409 29.6042 17.9307 29.7554C18.0206 29.9066 18.0687 30.0789 18.0701 30.2548V32.1192C19.5385 31.1475 20.5043 30.6858 21.1676 30.6858Z" fill="white"/>
              <path d="M18.3547 24.108C18.7906 24.108 19.2087 23.9348 19.517 23.6266C19.8252 23.3183 19.9984 22.9002 19.9984 22.4643C19.9984 22.0283 19.8252 21.6103 19.517 21.302C19.2087 20.9937 18.7906 20.8206 18.3547 20.8206C17.9187 20.8206 17.5006 20.9937 17.1924 21.302C16.8841 21.6103 16.7109 22.0283 16.7109 22.4643C16.7109 22.9002 16.8841 23.3183 17.1924 23.6266C17.5006 23.9348 17.9187 24.108 18.3547 24.108ZM23.6979 24.108C24.1338 24.108 24.5519 23.9348 24.8602 23.6266C25.1684 23.3183 25.3416 22.9002 25.3416 22.4643C25.3416 22.0283 25.1684 21.6103 24.8602 21.302C24.5519 20.9937 24.1338 20.8206 23.6979 20.8206C23.2619 20.8206 22.8438 20.9937 22.5356 21.302C22.2273 21.6103 22.0542 22.0283 22.0542 22.4643C22.0542 22.9002 22.2273 23.3183 22.5356 23.6266C22.8438 23.9348 23.2619 24.108 23.6979 24.108ZM29.0396 24.108C29.4756 24.108 29.8937 23.9348 30.2019 23.6266C30.5102 23.3183 30.6834 22.9002 30.6834 22.4643C30.6834 22.0283 30.5102 21.6103 30.2019 21.302C29.8937 20.9937 29.4756 20.8206 29.0396 20.8206C28.6037 20.8206 28.1856 20.9937 27.8773 21.302C27.5691 21.6103 27.3959 22.0283 27.3959 22.4643C27.3959 22.9002 27.5691 23.3183 27.8773 23.6266C28.1856 23.9348 28.6037 24.108 29.0396 24.108Z" fill="white"/>
            </g>
          </g>
          <defs>
            <linearGradient id="paint0_linear_207_3219" x1="24.108" y1="0" x2="24.108" y2="48.216" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FE8550"/>
              <stop offset="1" stopColor="#E14601"/>
            </linearGradient>
            <clipPath id="clip0_207_3219">
              <rect width="48.216" height="48.216" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Chatbot Widget",
      subtitle: "Customisable Chatbot Widget",
      description: "Easy installation on your website to answer FAQs and engage visitors.",
      iconGradient: "from-[#FE8550] to-[#E14601]",
    },
    {
      id: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={{margin: '0 auto', display: 'block'}}>
          <g clipPath="url(#clip0_207_3251)">
            <mask id="mask0_207_3251" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
              <path d="M37.2578 0H10.9582C4.90615 0 0 4.90615 0 10.9582V37.2578C0 43.3099 4.90615 48.216 10.9582 48.216H37.2578C43.3099 48.216 48.216 43.3099 48.216 37.2578V10.9582C48.216 4.90615 43.3099 0 37.2578 0Z" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_207_3251)">
              <path d="M0 0H48.216V48.216H0V0Z" fill="url(#paint0_linear_207_3251)"/>
              <path d="M26.5927 20.8156C26.743 19.4974 27.2545 18.2464 28.0707 17.2006C28.2121 17.0185 28.3932 16.8712 28.6002 16.7698C28.8072 16.6685 29.0347 16.6158 29.2652 16.6158C29.4957 16.6158 29.7232 16.6685 29.9302 16.7698C30.1372 16.8712 30.3183 17.0185 30.4597 17.2006C31.2428 18.198 31.7703 19.4203 31.9377 20.8156C33.256 20.9664 34.507 21.4785 35.5527 22.2954C35.7344 22.4368 35.8814 22.6178 35.9826 22.8246C36.0838 23.0315 36.1363 23.2587 36.1363 23.489C36.1363 23.7192 36.0838 23.9464 35.9826 24.1533C35.8814 24.3601 35.7344 24.5412 35.5527 24.6826C34.5068 25.4988 33.2558 26.0103 31.9377 26.1606C31.7874 27.4787 31.2759 28.7297 30.4597 29.7755C30.3183 29.9576 30.1372 30.1049 29.9302 30.2063C29.7232 30.3077 29.4957 30.3604 29.2652 30.3604C29.0347 30.3604 28.8072 30.3077 28.6002 30.2063C28.3932 30.1049 28.2121 29.9576 28.0707 29.7755C27.2545 28.7297 26.743 27.4787 26.5927 26.1606C25.2746 26.0103 24.0236 25.4988 22.9777 24.6826C22.796 24.5412 22.6489 24.3601 22.5478 24.1533C22.4466 23.9464 22.3941 23.7192 22.3941 23.489C22.3941 23.2587 22.4466 23.0315 22.5478 22.8246C22.6489 22.6178 22.796 22.4368 22.9777 22.2954C24.0234 21.4785 25.2744 20.9664 26.5927 20.8156ZM16.5886 29.2732C16.7107 28.2012 17.1269 27.1837 17.7912 26.3334C17.9059 26.1854 18.053 26.0656 18.2212 25.9831C18.3894 25.9007 18.5742 25.8579 18.7615 25.8579C18.9488 25.8579 19.1336 25.9007 19.3018 25.9831C19.47 26.0656 19.6171 26.1854 19.7318 26.3334C20.3691 27.1435 20.7976 28.1373 20.9344 29.2732C22.0686 29.4083 23.0624 29.8385 23.8725 30.4758C24.0205 30.5906 24.1403 30.7377 24.2227 30.9059C24.3052 31.0741 24.348 31.2589 24.348 31.4462C24.348 31.6335 24.3052 31.8183 24.2227 31.9865C24.1403 32.1547 24.0205 32.3018 23.8725 32.4165C23.0227 33.0805 22.0059 33.4967 20.9344 33.6191C20.812 34.6906 20.3958 35.7074 19.7318 36.5572C19.6171 36.7052 19.47 36.825 19.3018 36.9074C19.1336 36.9898 18.9488 37.0327 18.7615 37.0327C18.5742 37.0327 18.3894 36.9898 18.2212 36.9074C18.053 36.825 17.9059 36.7052 17.7912 36.5572C17.1272 35.7074 16.711 34.6906 16.5886 33.6191C15.5171 33.4967 14.5003 33.0805 13.6505 32.4165C13.5022 32.3018 13.3821 32.1546 13.2994 31.9862C13.2168 31.8179 13.1738 31.6328 13.1738 31.4453C13.1738 31.2577 13.2168 31.0727 13.2994 30.9043C13.3821 30.736 13.5022 30.5888 13.6505 30.474C14.5005 29.8107 15.5173 29.3952 16.5886 29.2732ZM15.6452 16.9432C15.7331 16.1672 16.0341 15.4307 16.5148 14.8152C16.8748 14.3562 17.5589 14.3562 17.919 14.8152C18.3816 15.4021 18.6931 16.1222 18.7903 16.9432C19.5663 17.0311 20.3028 17.332 20.9182 17.8127C21.3773 18.1728 21.3773 18.8569 20.9182 19.2169C20.303 19.6982 19.5665 19.9998 18.7903 20.0883C18.7024 20.8642 18.4015 21.6007 17.9208 22.2162C17.8376 22.3231 17.7312 22.4097 17.6095 22.4692C17.4878 22.5287 17.3541 22.5597 17.2187 22.5597C17.0832 22.5597 16.9495 22.5287 16.8279 22.4692C16.7062 22.4097 16.5997 22.3231 16.5166 22.2162C16.0352 21.6009 15.7336 20.8644 15.6452 20.0883C14.8693 20.0004 14.1328 19.6994 13.5173 19.2187C13.4104 19.1356 13.3238 19.0291 13.2643 18.9074C13.2048 18.7857 13.1738 18.6521 13.1738 18.5166C13.1738 18.3812 13.2048 18.2475 13.2643 18.1258C13.3238 18.0041 13.4104 17.8976 13.5173 17.8145C14.1326 17.3332 14.8691 17.0316 15.6452 16.9432Z" stroke="black" strokeWidth="1.09582" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </g>
          <defs>
            <linearGradient id="paint0_linear_207_3251" x1="24.108" y1="0" x2="24.108" y2="48.216" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBFBFB"/>
              <stop offset="1" stopColor="#D0D0D0"/>
            </linearGradient>
            <clipPath id="clip0_207_3251">
              <rect width="48.216" height="48.216" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Advanced Automation",
      subtitle: "Automate Live Chat",
      description: "Customize flows to handle bookings, support, and lead capture effortlessly.",
      iconGradient: "from-[#FBFBFB] to-[#D0D0D0]",
    },
    {
      id: 3,
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={{margin: '0 auto', display: 'block'}}>
          <g clipPath="url(#clip0_207_3280)">
            <mask id="mask0_207_3280" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
              <path d="M37.2578 0H10.9582C4.90615 0 0 4.90615 0 10.9582V37.2578C0 43.3099 4.90615 48.216 10.9582 48.216H37.2578C43.3099 48.216 48.216 43.3099 48.216 37.2578V10.9582C48.216 4.90615 43.3099 0 37.2578 0Z" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_207_3280)">
              <path d="M0 0H48.216V48.216H0V0Z" fill="url(#paint0_linear_207_3280)"/>
              <path d="M19.4462 18.0504C19.3626 17.8335 19.1964 17.6586 18.984 17.5643C18.7716 17.4699 18.5305 17.4638 18.3135 17.5472L13.15 19.5337L7.98479 17.5472C7.76763 17.4637 7.52621 17.4699 7.31363 17.5644C7.10106 17.659 6.93474 17.8341 6.85127 18.0512C6.76781 18.2684 6.77402 18.5098 6.86855 18.7224C6.96309 18.935 7.13819 19.1013 7.35535 19.1847L12.2734 21.0748V25.4406C12.2734 25.6731 12.3657 25.896 12.5302 26.0604C12.6946 26.2248 12.9175 26.3172 13.15 26.3172C13.3825 26.3172 13.6055 26.2248 13.7699 26.0604C13.9343 25.896 14.0267 25.6731 14.0267 25.4406V21.0748L18.943 19.1847C19.0506 19.1434 19.149 19.0812 19.2325 19.0018C19.316 18.9224 19.3831 18.8273 19.4298 18.7219C19.4766 18.6165 19.5021 18.503 19.5049 18.3878C19.5077 18.2725 19.4877 18.1579 19.4462 18.0504ZM15.0384 12.9395C13.8229 12.4719 12.4772 12.4719 11.2617 12.9395L5.19352 15.2714C4.69721 15.4621 4.27035 15.7987 3.96924 16.2369C3.66813 16.6751 3.50691 17.1943 3.50684 17.726V26.1068C3.50691 26.6385 3.66813 27.1577 3.96924 27.5959C4.27035 28.0341 4.69721 28.3708 5.19352 28.5615L11.26 30.8969C12.476 31.3648 13.8224 31.3648 15.0384 30.8969L21.1066 28.5632C21.6025 28.3722 22.029 28.0354 22.3298 27.5973C22.6306 27.1591 22.7916 26.6401 22.7915 26.1086V17.7277C22.7916 17.1963 22.6306 16.6772 22.3298 16.239C22.029 15.8009 21.6025 15.4641 21.1066 15.2731L15.0384 12.9395ZM11.8912 14.5753C12.7015 14.2636 13.5986 14.2636 14.4089 14.5753L20.4771 16.9089C20.6424 16.9727 20.7845 17.0851 20.8847 17.2313C20.9849 17.3775 21.0384 17.5506 21.0382 17.7277V26.1086C21.038 26.2855 20.9843 26.4582 20.8842 26.604C20.7841 26.7498 20.6422 26.8619 20.4771 26.9256L14.4089 29.2628C13.5986 29.5745 12.7015 29.5745 11.8912 29.2628L5.82121 26.9256C5.65645 26.862 5.51474 26.7502 5.41462 26.6047C5.31451 26.4592 5.26067 26.2869 5.26015 26.1103V17.7295C5.25996 17.5523 5.31347 17.3792 5.41363 17.233C5.51379 17.0869 5.65589 16.9745 5.82121 16.9107L11.8912 14.5753Z" fill="white" transform="translate(11, 4)"/>
            </g>
          </g>
          <defs>
            <linearGradient id="paint0_linear_207_3280" x1="24.108" y1="0" x2="24.108" y2="48.216" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5494FE"/>
              <stop offset="1" stopColor="#0251D5"/>
            </linearGradient>
            <clipPath id="clip0_207_3280">
              <rect width="48.216" height="48.216" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Multi-Channel Support",
      subtitle: "Various Support",
      description: "Integrate with WhatsApp, SMS, Google Calendar, and more.",
      iconGradient: "from-[#5494FE] to-[#0251D5]",
    },
    {
      id: 4,
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={{margin: '0 auto', display: 'block'}}>
          <g clipPath="url(#clip0_207_3309)">
            <mask id="mask0_207_3309" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
              <path d="M37.2578 0H10.9582C4.90615 0 0 4.90615 0 10.9582V37.2578C0 43.3099 4.90615 48.216 10.9582 48.216H37.2578C43.3099 48.216 48.216 43.3099 48.216 37.2578V10.9582C48.216 4.90615 43.3099 0 37.2578 0Z" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_207_3309)">
              <path d="M0 0H48.216V48.216H0V0Z" fill="url(#paint0_linear_207_3309)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M33.2248 20.3319C33.7986 20.7799 34.2627 21.3529 34.5817 22.0072C34.9007 22.6616 35.0663 23.3801 35.0658 24.1081C35.0658 25.6422 34.3458 27.0076 33.2248 27.8854C33.3136 28.6078 33.2365 29.341 32.9994 30.0292C32.7622 30.7173 32.3712 31.3423 31.8561 31.8566C31.3419 32.3721 30.7167 32.7635 30.0283 33.0008C29.34 33.2382 28.6065 33.3153 27.8838 33.2264C27.4357 33.8 26.8627 34.2639 26.2083 34.5827C25.554 34.9015 24.8355 35.0669 24.1076 35.0663C22.5735 35.0663 21.2081 34.3463 20.3314 33.2253C19.6088 33.3144 18.8754 33.2374 18.187 33.0002C17.4986 32.7631 16.8734 32.3719 16.3591 31.8566C15.8436 31.3423 15.4522 30.7172 15.2149 30.0288C14.9775 29.3405 14.9004 28.607 14.9893 27.8843C14.4157 27.4362 13.9518 26.8632 13.633 26.2088C13.3142 25.5544 13.1488 24.836 13.1494 24.1081C13.1494 22.5739 13.8694 21.2086 14.9904 20.3319C14.9013 19.6093 14.9783 18.8759 15.2155 18.1875C15.4526 17.4991 15.8438 16.8739 16.3591 16.3596C16.8734 15.8441 17.4985 15.4528 18.1869 15.2155C18.8753 14.9781 19.6087 14.9009 20.3314 14.9898C20.7795 14.4162 21.3525 13.9523 22.0069 13.6335C22.6613 13.3147 23.3797 13.1493 24.1076 13.1499C25.6418 13.1499 27.0071 13.8699 27.8849 14.9909C28.6073 14.9021 29.3405 14.9792 30.0287 15.2163C30.7168 15.4535 31.3418 15.8445 31.8561 16.3596C32.3716 16.8738 32.763 17.499 33.0003 18.1873C33.2377 18.8757 33.3138 19.6092 33.2248 20.3319ZM29.8705 21.6524L27.932 19.7139L22.7367 24.9091L20.281 22.4545L18.3436 24.3908L22.7367 28.784L29.8694 21.6502L29.8705 21.6524Z" fill="white"/>
            </g>
          </g>
          <defs>
            <linearGradient id="paint0_linear_207_3309" x1="24.108" y1="0" x2="24.108" y2="48.216" gradientUnits="userSpaceOnUse">
              <stop stopColor="#938DFE"/>
              <stop offset="1" stopColor="#413BAC"/>
            </linearGradient>
            <clipPath id="clip0_207_3309">
              <rect width="48.216" height="48.216" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Secure and Verified",
      subtitle: "Security Conscious",
      description: "We prioritise the security of our users and ensure that there is no leak of info",
      iconGradient: "from-[#938DFE] to-[#413BAC]",
    },
    {
      id: 5,
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={{margin: '0 auto', display: 'block'}}>
          <g clipPath="url(#clip0_207_3338)">
            <mask id="mask0_207_3338" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
              <path d="M48.216 24.108C48.216 10.7935 37.4225 0 24.108 0C10.7935 0 0 10.7935 0 24.108C0 37.4225 10.7935 48.216 24.108 48.216C37.4225 48.216 48.216 37.4225 48.216 24.108Z" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_207_3338)">
              <path d="M0 0H48.216V48.216H0V0Z" fill="url(#paint0_linear_207_3338)"/>
            </g>
          </g>
          <path d="M9.86199 24.1078C-0.000374477 25.2036 1.09544 13.1496 9.86199 14.2454C6.57454 2.19141 25.2035 2.19141 24.1076 10.958C35.0658 7.67051 35.0658 25.2036 25.2035 24.1078M12.0536 19.7245L17.5327 15.3412M17.5327 15.3412L23.0118 19.7245M17.5327 15.3412V31.7785" stroke="white" strokeWidth="1.64373" strokeLinecap="round" strokeLinejoin="round" transform="translate(6, 6)"/>
          <defs>
            <linearGradient id="paint0_linear_207_3338" x1="24.108" y1="0" x2="24.108" y2="48.216" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEE863"/>
              <stop offset="1" stopColor="#9F8D22"/>
            </linearGradient>
            <clipPath id="clip0_207_3338">
              <rect width="48.216" height="48.216" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Document Upload",
      subtitle: "Upload and Ai Memory",
      description: "Upload documents so the bot understands and remembers your unique business info.",
      iconGradient: "from-[#FEE863] to-[#9F8D22]",
    },
    {
      id: 6,
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={{margin: '0 auto', display: 'block'}}>
          <g clipPath="url(#clip0_207_3367)">
            <mask id="mask0_207_3367" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
              <path d="M37.2578 0H10.9582C4.90615 0 0 4.90615 0 10.9582V37.2578C0 43.3099 4.90615 48.216 10.9582 48.216H37.2578C43.3099 48.216 48.216 43.3099 48.216 37.2578V10.9582C48.216 4.90615 43.3099 0 37.2578 0Z" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_207_3367)">
              <path d="M0 0H48.216V48.216H0V0Z" fill="url(#paint0_linear_207_3367)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M15.8896 15.3415C15.8896 14.7603 16.1206 14.2028 16.5316 13.7918C16.9426 13.3808 17.5 13.1499 18.0813 13.1499H30.1353C30.7166 13.1499 31.274 13.3808 31.685 13.7918C32.096 14.2028 32.3269 14.7603 32.3269 15.3415V32.8746C32.3269 33.4559 32.096 34.0133 31.685 34.4244C31.274 34.8354 30.7166 35.0663 30.1353 35.0663H18.0813C17.5 35.0663 16.9426 34.8354 16.5316 34.4244C16.1206 34.0133 15.8896 33.4559 15.8896 32.8746V15.3415ZM18.6292 16.9853C18.6292 16.6946 18.7446 16.4159 18.9502 16.2104C19.1557 16.0049 19.4344 15.8894 19.725 15.8894H28.4916C28.7822 15.8894 29.0609 16.0049 29.2664 16.2104C29.4719 16.4159 29.5874 16.6946 29.5874 16.9853V20.2727C29.5874 20.5634 29.4719 20.8421 29.2664 21.0476C29.0609 21.2531 28.7822 21.3685 28.4916 21.3685H19.725C19.4344 21.3685 19.1557 21.2531 18.9502 21.0476C18.7446 20.8421 18.6292 20.5634 18.6292 20.2727V16.9853ZM19.999 26.8476C20.3623 26.8476 20.7107 26.7033 20.9675 26.4464C21.2244 26.1896 21.3687 25.8412 21.3687 25.4779C21.3687 25.1146 21.2244 24.7662 20.9675 24.5093C20.7107 24.2524 20.3623 24.1081 19.999 24.1081C19.6357 24.1081 19.2873 24.2524 19.0304 24.5093C18.7735 24.7662 18.6292 25.1146 18.6292 25.4779C18.6292 25.8412 18.7735 26.1896 19.0304 26.4464C19.2873 26.7033 19.6357 26.8476 19.999 26.8476ZM21.3687 30.957C21.3687 31.3202 21.2244 31.6687 20.9675 31.9255C20.7107 32.1824 20.3623 32.3267 19.999 32.3267C19.6357 32.3267 19.2873 32.1824 19.0304 31.9255C18.7735 31.6687 18.6292 31.3202 18.6292 30.957C18.6292 30.5937 18.7735 30.2453 19.0304 29.9884C19.2873 29.7315 19.6357 29.5872 19.999 29.5872C20.3623 29.5872 20.7107 29.7315 20.9675 29.9884C21.2244 30.2453 21.3687 30.5937 21.3687 30.957ZM24.1083 26.8476C24.4716 26.8476 24.82 26.7033 25.0769 26.4464C25.3337 26.1896 25.4781 25.8412 25.4781 25.4779C25.4781 25.1146 25.3337 24.7662 25.0769 24.5093C24.82 24.2524 24.4716 24.1081 24.1083 24.1081C23.745 24.1081 23.3966 24.2524 23.1397 24.5093C22.8828 24.7662 22.7385 25.1146 22.7385 25.4779C22.7385 25.8412 22.8828 26.1896 23.1397 26.4464C23.3966 26.7033 23.745 26.8476 24.1083 26.8476ZM29.5874 25.4779C29.5874 25.8412 29.4431 26.1896 29.1862 26.4464C28.9293 26.7033 28.5809 26.8476 28.2176 26.8476C27.8543 26.8476 27.5059 26.7033 27.249 26.4464C26.9922 26.1896 26.8478 25.8412 26.8478 25.4779C26.8478 25.1146 26.9922 24.7662 27.249 24.5093C27.5059 24.2524 27.8543 24.1081 28.2176 24.1081C28.5809 24.1081 28.9293 24.2524 29.1862 24.5093C29.4431 24.7662 29.5874 25.1146 29.5874 25.4779ZM24.1083 29.5872C23.745 29.5872 23.3966 29.7315 23.1397 29.9884C22.8828 30.2453 22.7385 30.5937 22.7385 30.957C22.7385 31.3202 22.8828 31.6687 23.1397 31.9255C23.3966 32.1824 23.745 32.3267 24.1083 32.3267H28.2176C28.5809 32.3267 28.9293 32.1824 29.1862 31.9255C29.4431 31.6687 29.5874 31.3202 29.5874 30.957C29.5874 30.5937 29.4431 30.2453 29.1862 29.9884C28.9293 29.7315 28.5809 29.5872 28.2176 29.5872H24.1083Z" fill="white"/>
              <path d="M28.4913 15.8894H19.7247C19.1195 15.8894 18.6289 16.38 18.6289 16.9852V20.2727C18.6289 20.8779 19.1195 21.3685 19.7247 21.3685H28.4913C29.0965 21.3685 29.5871 20.8779 29.5871 20.2727V16.9852C29.5871 16.38 29.0965 15.8894 28.4913 15.8894Z" fill="white" fillOpacity="0.5"/>
            </g>
          </g>
          <defs>
            <linearGradient id="paint0_linear_207_3367" x1="24.108" y1="0" x2="24.108" y2="48.216" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00AC3C"/>
              <stop offset="1" stopColor="#138D3E"/>
            </linearGradient>
            <clipPath id="clip0_207_3367">
              <rect width="48.216" height="48.216" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Mobile Friendly",
      subtitle: "Responsive",
      description: "Our mobile-friendly design ensures your chatbot looks stunning across all devices.",
      iconGradient: "from-[#00AC3C] to-[#138D3E]",
      badge: "NEW",
    },
  ];

  const ArrowIcon = () => (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5463 6.57504V17.2593C20.5463 17.7129 20.1781 18.0811 19.7245 18.0811C19.2708 18.0811 18.9026 17.7129 18.9026 17.2593V8.55847L7.15652 20.3067C6.83544 20.6278 6.31383 20.6278 5.99276 20.3067C5.67168 19.9857 5.67168 19.4641 5.99276 19.143L17.741 7.3969H9.04023C8.58656 7.3969 8.21837 7.02871 8.21837 6.57504C8.21837 6.12137 8.58656 5.75317 9.04023 5.75317H19.7245C20.1781 5.75317 20.5463 6.12137 20.5463 6.57504Z" fill="url(#paint0_linear_arrow)"/>
      <defs>
        <linearGradient id="paint0_linear_arrow" x1="5.75195" y1="13.1136" x2="20.5463" y2="13.1872" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="#999999"/>
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <section id="features" className="relative bg-background py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image with overlay */}
     <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Background Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0f0b6dbb6b1f4f4c07b12c550fea9277a34e5633?width=3040"
            alt="Background"
            className="absolute top-0 left-0 w-full h-auto opacity-30 object-cover"
          />

          {/* Gradient Blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-black rounded-full blur-3xl" />
          <div className="absolute -top-32 right-1/4 w-96 h-80 bg-blue-900/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto">
        {/* Header Section */}
        <ScrollAnimation>
          <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
            <div className="px-4 py-2 rounded-full backdrop-blur-[34px] bg-black border-l-[2px] border-[#2934FF]">
              <span className="font-semibold text-sm sm:text-base tracking-tight bg-gradient-to-r from-white to-white/90 bg-clip-text"
               style={{
                background: "linear-gradient(135deg, #8AA5FF 0%, #435CED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                OUR FEATURES
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight mb-4 sm:mb-6 px-4">
            <span className="text-white font-poppins">Our Well Defined Feature</span>
            <br />
            <span className="text-white/60 font-poppins">That Boost Your Business</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[rgba(230,236,255,0.70)] mb-8 sm:mb-10 font-inter">
            All our amazing features that make us stand out
          </p>

          {/* CTA Button */}
          <button className="px-6 py-4 rounded-lg border-[3px] border-white/15 bg-[#0055FE] text-white font-medium text-sm sm:text-base hover:bg-[#0055FE]/70 transition-all shadow-[0_8px_40px_0_rgba(0,85,255,0.50),0_0_0_1px_rgba(0,85,255,0.12)] font-poppins">
            View About Pulse AI
          </button>
        </div>
        </ScrollAnimation>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.id} delay={index * 0.1}>
            <div
              className="group relative rounded-[21.916px] border border-white/[0.07] backdrop-blur-sm hover:border-white/10 transition-all duration-300 bg-gradient-to-b from-white/[0.02] to-transparent overflow-hidden"
            >
              {/* Blue highlight on top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[186px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="p-8 sm:p-9">
                {/* Top Section - Icon and Arrow */}
                <div className="flex items-start justify-between mb-6">
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-[54.791px] border border-white/[0.07] shadow-[2.192px_4.383px_26.3px_rgba(0,85,255,0.35)] overflow-hidden flex items-center justify-center bg-white/[0.02]" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="opacity-20 flex-shrink-0">
                    <ArrowIcon />
                  </div>
                </div>

                {/* Middle Section - Title and Subtitle */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white font-semibold text-lg font-poppins">
                      {feature.title}
                    </h3>
                    {feature.badge && (
                      <div className="px-3 py-1.5 rounded-[8.767px] border-[2px] border-white/15 bg-[#0055fe]" style={{ backdropFilter: 'blur(1.1px)' }}>
                        <span className="text-white font-bold text-[13px] leading-tight font-['Inter']">
                          {feature.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-white/60 text-lg font-normal font-poppins">
                    {feature.subtitle}
                  </p>
                </div>

                {/* Separator */}
                <div className="w-full max-w-[252px] h-px bg-white/10 mb-6" />

                {/* Bottom Section - Description */}
                <p className="text-white/50 text-[15px] leading-[28px] font-normal font-poppins">
                  {feature.description}
                </p>
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
