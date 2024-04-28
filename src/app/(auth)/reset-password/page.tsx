import { PlaneAnimation } from 'components/atoms/PlaneAnimation';
import { ResetPasswordForm } from 'components/organisms/ResetPasswordForm';

const ResetPassword = async ({
  searchParams,
}: {
  searchParams?: { email: string };
}) => (
  <div className="mt-8 flex size-full flex-col gap-10 sm:mt-0 sm:max-w-[400px]">
    <div className="flex w-full justify-center">
      <PlaneAnimation className="w-48" />
    </div>

    <div className="flex flex-col items-center gap-2">
      <h3 className="text-center text-[2rem] font-bold text-shark-950 transition-all dark:text-white-lilac-50">
        Solicitação Enviada!
      </h3>

      <p className="text-pretty text-sm text-comet-500 transition-all dark:text-dark-300">
        Enviamos um e-mail de confirmação de 6 dígitos para o seu e-mail. Por
        favor, insira o código na caixa abaixo para verificar seu e-mail.
      </p>
    </div>

    <ResetPasswordForm email={searchParams?.email} />
  </div>
);

export default ResetPassword;
