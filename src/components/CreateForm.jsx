import { useState } from "react";

function CreateForm() {
  const [content, setContent] = useState("");

  return (
    <>
      <form className="create-form">
        <input
          type="text"
          placeholder="輸入代辦事項"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit" >加入</button>
      </form>
    </>
  );
}

export default CreateForm;
