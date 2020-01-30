import { TEST_SAGA_ACTION, TEST_SAGA_ASYNC_ACTION } from "./types";
import {
  all,
  // call,
  put,
  takeEvery,
  // takeLatest,
  delay
} from "redux-saga/effects";
// import axios from "axios";

function* getTestSaga(action) {
  try {
    console.log("b");
    // call api
    yield delay(3000);
    // put action
    yield put({
      type: TEST_SAGA_ASYNC_ACTION,
      payload: "saga activated"
    });
  } catch (e) {
    // error log
    console.error(e);
    // error action
    // yield put({ type: GET_TODOS_FAILED });
  }
}

// watcher
function* actionWatcher() {
  yield takeEvery(TEST_SAGA_ACTION, getTestSaga);
  // yield takeEvery(CREATE_TODO, createTodo);
}

// combine sagas
export default function* testSaga() {
  yield all([actionWatcher()]);
}
