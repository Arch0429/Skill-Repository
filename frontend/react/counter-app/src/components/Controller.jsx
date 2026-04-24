const Controller = ({onButtonClick}) => {
    const ButtonClick = (e) => {
      {onButtonClick(Number(e.target.innerHTML))}
    }

    return (
      <div>
        <button onClick={ButtonClick}>-1</button>
        <button onClick={ButtonClick}>-10</button>
        <button onClick={ButtonClick}>-100</button>
        <button onClick={ButtonClick}>+100</button>
        <button onClick={ButtonClick}>+10</button>
        <button onClick={ButtonClick}>+1</button>
      </div>
    )
}

export default Controller;