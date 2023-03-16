import { Dispatch, SetStateAction } from "react";

interface Props {
  setSignUpView: Dispatch<SetStateAction<boolean>>;
}

export const SignUp = ({ setSignUpView }: Props) => {
  return (
    <form className="rounded-md bg-white p-6" method="POST">
      <div className="mb-6">
        <h3 className="text-2xl font-bold">Регся давай</h3>
      </div>

      <div className="flex -mx-3">
        <div className="w-1/2 px-3">
          <div className="mb-6">
            <input
              className="input"
              name="name"
              type="text"
              required
              placeholder="Имя"
            />
          </div>
        </div>

        <div className="w-1/2 px-3">
          <div className="mb-6">
            <input
              className="input"
              name="surname"
              type="text"
              required
              placeholder="Фамилия"
            />
          </div>
        </div>
      </div>

      <div className="flex -mx-3">
        <div className="w-1/2 px-3">
          <div className="mb-6">
            <input
              className="input"
              name="email"
              type="email"
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
              required
              placeholder="Пароль"
            />
          </div>
        </div>
      </div>

      <div>
        <button className="btn btn--primary mr-4" type="submit">
          Поехали
        </button>
        <button
          className="btn"
          onClick={(event) => {
            event.preventDefault();
            setSignUpView(false);
          }}
        >
          Передумал
        </button>
      </div>
    </form>
  );
};
