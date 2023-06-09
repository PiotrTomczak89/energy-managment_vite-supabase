//error that comes from supabase

const LogInError = ({ authError }) => {
  return (
    <div>
      {!authError ? null : <p className="signInUp-error">{authError}</p>}
    </div>
  );
};

export default LogInError;
