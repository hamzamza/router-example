import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

function Profile(prop) {
  let navigate = useNavigate();

  useEffect(() => {
    if (!prop.log) {
      return navigate('/');
    }
  }, []);
  return (
    <>
      <div className="code">
        {`
      import { useNavigate } from "react-router-dom";`}
        <br />
        {`let navigate = useNavigate();`} <br />
        {`useEffect(() => {`} <br />
        {`if (LoggedIn){`} <br />
        {`return navigate("/");`} <br />
        {` }`} <br />
        {`},[LoggedIn]);`} <br />
        {`}`} <br />
      </div>
    </>
  );
}
export default Profile;
