import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../store/actions/userActions";
import css from "./User.module.scss";

const User = ({ username }) => {
  return (
    <div className={css.user}>
      <h1>username</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.userReducer.username
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
