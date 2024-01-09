const Button = (props) => {

    const {btOp, btName, btFun } = props;

  return (
    <div>
      {btName && (
        <button
          onClick={() => btFun(btName)}
        >
          {btName}
        </button>
      )}
      {btOp && (
        <button
          onClick={() => btFun(btOp)}
        >
          {btOp}
        </button>
      )}
    </div>
  );
};

export default Button;
