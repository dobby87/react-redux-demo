import { TEST_SAGA_ACTION } from "./types";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import axios from "axios";

const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    return "test promise";
  }, 3000);
});

function* getTodosSaga(action) {
  try {
    const ret = yield testPromise();
    yield put({
      type: TEST_SAGA_ACTION,
      payload: ret
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
  yield takeEvery(TEST_SAGA_ACTION, getTodosSaga);
  // yield takeEvery(CREATE_TODO, createTodo);
}

// combine sagas
export default function* todosSaga() {
  yield all([actionWatcher()]);
}
