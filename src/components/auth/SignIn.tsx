// interface Props {
//   setSignUpView: Dispatch<SetStateAction<boolean>>;
// }

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken, signIn } from "next-auth/react";

// export default function SignIn({
//   csrfToken,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <form method="post" action="/api/auth/callback/credentials">
//       <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//       <label>
//         Username
//         <input name="username" type="text" />
//       </label>
//       <label>
//         Password
//         <input name="password" type="password" />
//       </label>
//       <button type="submit">Sign in</button>
//     </form>
//   );
// }

import s from "./auth.module.scss";

export const SignIn = ({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <form
      method="post"
      action="/api/auth/callback/credentials"
      className={s.form}
    >
      <div className={s.title}>
        <h3 className="text-2xl font-bold">Логинься давай</h3>
        <div className={s.signUp}></div>
      </div>

      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

      <div className="flex -mx-3">
        <div className="w-1/2 px-3">
          <div className="mb-6">
            <input
              className="input"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Почта"
            />
          </div>
        </div>

        <div className="w-1/2 px-3">
          <div className="mb-6">
            <input
              className="input"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Пароль"
            />
          </div>
        </div>
      </div>

      <div>
        <button
          className="btn btn--primary"
          onClick={() => {
            signIn("credentials", {
              username: "adam.serghei@gmail.com",
              password: "Password1!",
            });
          }}
        >
          Войти
        </button>
      </div>
    </form>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
