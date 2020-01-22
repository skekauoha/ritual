import { put, takeLatest } from "redux-saga/effects";

function* getUserSuccess() {
  yield put({ type: "GET_USER_SUCCESS", username: "Spencer" });
}

export function* watchUser() {
  yield takeLatest("GET_USER", getUserSuccess);
}
