import dayjs from 'dayjs';

import { Logo } from 'components/atoms/Logo';
import { Stars } from 'components/molecules/Stars';
import { SignForm } from 'components/organisms/SignForm';
import { DarkModeSwitcher } from 'components/molecules/DarkModeSwitcher';

const SignIn = async () => (
  <div
    data-cy="sign-in"
    className="flex h-screen w-full bg-white-lilac-50 transition-all dark:bg-smoke-950"
  >
    <div className="flex size-full grid-cols-12 sm:grid">
      <div className="flex w-full flex-col p-6 sm:col-span-6 sm:p-9">
        <header className="hidden items-center justify-between gap-2 sm:flex">
          <Logo />
          <DarkModeSwitcher />
        </header>

        <div className="flex w-full flex-1 items-center justify-center">
          <main className="flex w-full flex-col gap-10 sm:w-auto">
            <div className="flex flex-col gap-4 sm:gap-3">
              <div className="mb-5 flex w-full justify-center sm:hidden">
                <Logo size={70} />
              </div>

              <h3 className="text-center text-3xl font-medium text-shark-950 transition-all dark:text-white-lilac-50 sm:text-left sm:text-[2.625rem]">
                Bem Vindo <span className="hidden sm:inline">de volta</span>
              </h3>

              <span className="text-center text-sm text-comet-500 transition-all dark:text-dark-300 sm:text-left sm:text-base">
                Bem vindo de volta! Por favor, insira seus dados.
              </span>
            </div>

            <SignForm />
          </main>
        </div>

        <footer className="flex items-center justify-between text-comet-500 transition-all dark:text-dark-300">
          <span>
            <span className="text-primary-400">©</span> Wolves{' '}
            {dayjs().get('year')}
          </span>

          <DarkModeSwitcher className="sm:hidden" />
        </footer>
      </div>

      <div className="relative col-span-6 hidden flex-col items-center justify-center bg-[#F8F2F0] transition-all dark:bg-shark-950/20 sm:flex">
        <div className="absolute inset-0 overflow-hidden">
          <Stars className="z-20" />
        </div>

        <div className="z-10 size-64 rounded-full bg-primary-400" />
        <div className="absolute z-10 h-[217px] w-[469px] translate-y-1/2 bg-[#F8F2F0]/40 backdrop-blur-xl transition-all dark:bg-shark-950/20" />
      </div>
    </div>
  </div>
);

export default SignIn;
