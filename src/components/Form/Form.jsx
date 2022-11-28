import React from "react";
import { useTelegram } from "../../hooks/UseTelegram";

export const Form = () => {
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");
  const [input3, setInput3] = React.useState("");
  const { tg } = useTelegram();

  const onSendData = React.useCallback(() => {
    const data = {
      input1,
      input2,
      input3,
    };
    tg.sendData(JSON.stringify(data));
  }, [input1, input2, input3]);

  React.useEffect(() => {
    tg.onEvent("MainButtonClicker", onSendData);
    return () => {
      tg.offEvent("MainButtonClicker", onSendData);
    };
  }, [onSendData]);

  React.useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить",
    });
  }, []);

  React.useEffect(() => {
    if (!input1) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [input1, tg.MainButton]);
  const onChangeInput1 = (e) => {
    setInput1(e.target.value);
  };
  const onChangeInput2 = (e) => {
    setInput2(e.target.value);
  };
  const onChangeInput3 = (e) => {
    setInput3(e.target.value);
  };
  return (
    <div>
      <h3>Введите содержимое</h3>
      <input
        type="text"
        placeholder="Содержимое 1"
        value={input1}
        onChange={onChangeInput1}
      ></input>
      <input
        type="text"
        placeholder="Содержимое 2"
        value={input2}
        onChange={onChangeInput2}
      ></input>
      <input
        type="text"
        placeholder="Содержимое 3"
        value={input3}
        onChange={onChangeInput3}
      ></input>
    </div>
  );
};
