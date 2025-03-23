import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout.jsx";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const QuizPage = lazy(() => import("../pages/QuizPage/QuizPage.jsx"));
const QuizElementPage = lazy(() =>
  import("../pages/QuizElementPage/QuizElementPage.jsx")
);
const CreateQuizPage = lazy(() =>
  import("../pages/CreateQuizPage/CreateQuizPage.jsx")
);

const EditQuizPage = lazy(() => import('../pages/EditQuizPage/EditQuizPage.jsx'))

function App() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="quiz/:id" element={<QuizElementPage />} />
            <Route path="quiz/editQuiz/:id" element={<EditQuizPage />} />
            <Route path="quiz-builder" element={<CreateQuizPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
