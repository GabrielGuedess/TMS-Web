import { ForgotPasswordForm } from 'components/organisms/ForgotPasswordForm';

const ForgotPassword = () => (
  <div className="flex w-full flex-col gap-10 sm:w-[400px]">
    <svg
      fill="none"
      className="h-24"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-primary-400"
        d="M36.324 29.4v7.76a4.803 4.803 0 11-9.606 0V29.4c0-11.677 9.405-21.198 21.037-21.388l.353-.002c11.678 0 21.199 9.405 21.388 21.037l.003.353v7.76a4.803 4.803 0 11-9.606 0V29.4c0-6.433-5.181-11.678-11.59-11.783l-.194-.001c-6.499 0-11.785 5.286-11.785 11.784z"
      />
      <g filter="url(#filter)">
        <path
          fillOpacity="0.04"
          className="fill-white-lilac-50"
          d="M36.324 29.4v12.563h-9.606V29.4c0-11.677 9.405-21.198 21.037-21.388l.353-.002c11.678 0 21.199 9.405 21.388 21.037l.003.353v12.563h-9.606V29.4c0-6.433-5.181-11.678-11.59-11.783l-.194-.001c-6.499 0-11.785 5.286-11.785 11.784z"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="fill-primary-400"
        d="M79.217 68.137c0 10.978-8.9 19.877-19.877 19.877H36.877C25.9 88.014 17 79.115 17 68.138v-20.25a8.277 8.277 0 018.277-8.277H70.94a8.277 8.277 0 018.277 8.277v20.25zM44.51 66.872a3.598 3.598 0 003.598 3.598H49.5a2.206 2.206 0 002.206-2.206c0-.91.57-1.705 1.358-2.158a9.932 9.932 0 002.254-1.767 9.865 9.865 0 002.715-7.369c-.268-5.176-4.538-9.312-9.724-9.417h-.064l-.134.001h-.004c-4.643 0-9.152 3.578-9.848 8.557-.071.545.367 1.003.916 1.003h6.204a.01.01 0 00.009-.01c.026-.187.07-.367.132-.54l.02-.056.031-.079.028-.064a2.71 2.71 0 01.935-1.128l.07-.047.06-.038.044-.026.048-.028a2.81 2.81 0 01.215-.108l.087-.038c.045-.018.09-.035.136-.05l.06-.02a2.787 2.787 0 01.351-.089l.057-.01.058-.008.067-.009.128-.011.061-.004.063-.002h.068l.002.002.056-.002c1.406.029 2.61 1.19 2.682 2.595a2.735 2.735 0 01-.748 2.04l-.049.049-.06.057a2.723 2.723 0 01-1.806.746l-.076.001h-.676a2.922 2.922 0 00-2.922 2.922v3.713zm3.598 6.113a3.545 3.545 0 00-.001 7.088h.064a3.544 3.544 0 00-.063-7.088z"
      />
      <g filter="url(#filter2)">
        <path
          fill="#fff"
          fillOpacity="0.04"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.217 68.137c0 10.978-8.9 19.877-19.877 19.877H36.877C25.9 88.014 17 79.115 17 68.138v-20.25a8.277 8.277 0 018.277-8.277H70.94a8.277 8.277 0 018.277 8.277v20.25zM44.51 66.872a3.598 3.598 0 003.598 3.598H49.5a2.206 2.206 0 002.206-2.206c0-.91.57-1.705 1.358-2.158a9.932 9.932 0 002.254-1.767 9.865 9.865 0 002.715-7.369c-.268-5.176-4.538-9.312-9.724-9.417h-.064l-.134.001h-.004c-4.643 0-9.152 3.578-9.848 8.557-.071.545.367 1.003.916 1.003h6.204a.01.01 0 00.009-.01c.026-.187.07-.367.132-.54l.02-.056.031-.079.028-.064a2.71 2.71 0 01.935-1.128l.07-.047.06-.038.044-.026.048-.028a2.81 2.81 0 01.215-.108l.087-.038c.045-.018.09-.035.136-.05l.06-.02a2.787 2.787 0 01.351-.089l.057-.01.058-.008.067-.009.128-.011.061-.004.063-.002h.068l.002.002.056-.002c1.406.029 2.61 1.19 2.682 2.595a2.735 2.735 0 01-.748 2.04l-.049.049-.06.057a2.723 2.723 0 01-1.806.746l-.076.001h-.676a2.922 2.922 0 00-2.922 2.922v3.713zm3.598 6.113a3.545 3.545 0 00-.001 7.088h.064a3.544 3.544 0 00-.063-7.088z"
        />
      </g>
      <path
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.109 70.456a3.598 3.598 0 01-3.598-3.599v-3.712a2.922 2.922 0 012.922-2.922h.676l.075-.001a2.723 2.723 0 001.808-.746l.06-.058.048-.05a2.735 2.735 0 00.748-2.038c-.072-1.406-1.276-2.567-2.681-2.595l-.057.001h-.001l-.001-.002h-.069l-.062.003-.061.003a2.816 2.816 0 00-.128.012l-.067.008-.058.01-.057.009a2.79 2.79 0 00-.352.088l-.059.02a2.838 2.838 0 00-.136.051l-.087.037.02-.009a2.81 2.81 0 00-.235.117l-.048.028-.044.026-.06.038-.07.047a2.708 2.708 0 00-.935 1.13l-.028.063-.03.079-.021.056a2.764 2.764 0 00-.132.54.01.01 0 01-.01.01h-6.203c-.55 0-.987-.459-.916-1.003.696-4.98 5.205-8.558 9.848-8.558h.202c5.186.105 9.456 4.24 9.724 9.417a9.865 9.865 0 01-2.715 7.368 9.932 9.932 0 01-2.254 1.768c-.788.452-1.358 1.249-1.358 2.157a2.206 2.206 0 01-2.206 2.207h-1.392zm0 2.514a3.544 3.544 0 01.063 7.088h-.064a3.545 3.545 0 010-7.088z"
      />
      <defs>
        <filter
          y="6.01"
          x="24.718"
          id="filter"
          width="44.781"
          height="35.953"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite k3="1" k2="-1" in2="hardAlpha" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect" />
        </filter>
        <filter
          x="15"
          y="37.61"
          id="filter2"
          width="64.217"
          height="50.404"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite k3="1" k2="-1" in2="hardAlpha" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect" />
        </filter>
      </defs>
    </svg>

    <div className="flex flex-col items-center gap-2">
      <h3 className="text-center text-[2rem] font-bold text-shark-950 transition-all dark:text-white-lilac-50">
        Esqueceu sua senha?
      </h3>

      <p className="text-pretty text-center text-sm text-comet-500 transition-all dark:text-dark-300">
        Por favor, insira o endereço de e-mail associado à sua conta e nós
        envie-lhe por e-mail um link para redefinir sua senha.
      </p>
    </div>

    <ForgotPasswordForm />
  </div>
);

export default ForgotPassword;
