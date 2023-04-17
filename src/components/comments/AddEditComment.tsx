import { IAuthSession } from "@/types";
import { API_URL } from "@/utils/fetcher";
import axios from "axios";
import { useState } from "react";
import s from "./comments.module.scss";

interface IProps {
  postId: string;
  auth: IAuthSession;
  setRequesting: any;
}

const AddEditComment = ({ postId, auth, setRequesting }: IProps) => {
  const [body, setBody] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setRequesting(true);

    await axios
      .post(
        `${API_URL}/comments`,
        { postId: postId, userId: auth.user?.id, body: body },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.user?.token}`,
          },
        }
      )
      .then((response) => {
        setBody("");
      })
      .catch(({ error }) => {
        console.log(error);
      })
      .finally(() => {
        setRequesting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={s.addComment}>
      <input
        className="input"
        placeholder="Добавить коммент"
        required
        value={body}
        onChange={(e: any) => setBody(e.target.value)}
      />
      <button type="submit" className="btn btn--primary">
        Послать
      </button>
    </form>
  );
};

export default AddEditComment;
