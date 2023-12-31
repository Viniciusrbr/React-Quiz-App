function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Bem Vindo ao React Quiz!</h2>
      <h3>{numQuestions} Questões para testar seu conhecimento em react</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Vamos começar
      </button>
    </div>
  );
}

export default StartScreen;
