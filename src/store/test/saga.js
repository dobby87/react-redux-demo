import { TEST_SAGA_ACTION, TEST_SAGA_ASYNC_ACTION } from "./types";
import {
  all,
  call,
  put,
  takeEvery,
  takeLatest,
  delay
} from "redux-saga/effects";
// import axios from "axios";

function* getTestSaga(action) {
  try {
    console.log("b");
    yield delay(3000);
    yield put({
      type: TEST_SAGA_ASYNC_ACTION,
      payload: "saga activated"
    });
  } catch (e) {
    console.error(e);
    // yield put({ type: GET_TODOS_FAILED });
  }
}

// function* createTodo(action) {
//   try {
//     yield axios.post(`http://localhost:3002/todos`, action.params);
//     yield getTodosSaga();
//   } catch (e) {}
// }

// watcher
function* actionWatcher() {
  yield takeEvery(TEST_SAGA_ACTION, getTestSaga);
  // yield takeEvery(CREATE_TODO, createTodo);
}

// combine sagas
export default function* testSaga() {
  yield all([actionWatcher()]);
}
